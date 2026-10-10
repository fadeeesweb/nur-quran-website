import { SAMPLE_AUDIO } from "@/data/sample";

export type SurahPlayerState = {
  playing: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  repeat: boolean;
  failed: boolean;
};

/**
 * Shared engine behind every Al-Fatihah play control on the site.
 * One <audio> at a time — the sample card and the recitation-section player
 * subscribe to the same state, so they can never play over each other.
 * Streams the full-surah MP3 (Mishary Rashid Alafasy) from the AlQuran Cloud
 * CDN as a single seekable track.
 */
class SurahPlayer {
  private audio: HTMLAudioElement | null = null;
  private listeners = new Set<(state: SurahPlayerState) => void>();
  private state: SurahPlayerState = {
    playing: false,
    progress: 0,
    currentTime: 0,
    duration: 0,
    repeat: false,
    failed: false,
  };

  subscribe = (listener: (state: SurahPlayerState) => void) => {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getState = () => this.state;

  private emit() {
    for (const listener of [...this.listeners]) listener(this.state);
  }

  private set(patch: Partial<SurahPlayerState>) {
    this.state = { ...this.state, ...patch };
    this.emit();
  }

  private ensure(): HTMLAudioElement {
    if (this.audio) return this.audio;
    const audio = new Audio();
    audio.preload = "auto";
    const syncTime = () => {
      const duration = isFinite(audio.duration) ? audio.duration : 0;
      this.set({
        duration,
        currentTime: audio.currentTime,
        progress: duration ? audio.currentTime / duration : 0,
      });
    };
    audio.addEventListener("timeupdate", syncTime);
    audio.addEventListener("durationchange", syncTime);
    audio.addEventListener("loadedmetadata", syncTime);
    audio.addEventListener("ended", () => {
      if (this.state.repeat) {
        audio.currentTime = 0;
        audio.play().catch(() => this.set({ playing: false }));
        return;
      }
      audio.currentTime = 0;
      this.set({ playing: false, progress: 0, currentTime: 0 });
    });
    audio.addEventListener("error", () => this.set({ playing: false, failed: true }));
    this.audio = audio;
    return audio;
  }

  private load() {
    const audio = this.ensure();
    if (!audio.src) {
      audio.src = SAMPLE_AUDIO.url;
      audio.load();
    }
  }

  play() {
    const audio = this.ensure();
    this.load();
    this.set({ failed: false });
    audio
      .play()
      .then(() => this.set({ playing: true }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "NotAllowedError") {
          this.set({ playing: false });
          return;
        }
        this.set({ playing: false, failed: true });
      });
  }

  pause() {
    this.ensure().pause();
    this.set({ playing: false });
  }

  toggle() {
    if (this.state.playing) {
      this.pause();
      return;
    }
    this.play();
  }

  /** Seek to a fraction (0..1) of the full track. */
  seek(fraction: number) {
    const audio = this.ensure();
    const duration = isFinite(audio.duration) ? audio.duration : 0;
    if (!duration) return;
    const clamped = Math.min(1, Math.max(0, fraction));
    audio.currentTime = clamped * duration;
    this.set({
      currentTime: audio.currentTime,
      progress: clamped,
    });
  }

  /** Skip forward/backward by seconds. */
  skip(deltaSeconds: number) {
    const audio = this.ensure();
    const duration = isFinite(audio.duration) ? audio.duration : 0;
    if (!duration) return;
    const next = Math.min(duration, Math.max(0, audio.currentTime + deltaSeconds));
    audio.currentTime = next;
    this.set({ currentTime: next, progress: next / duration });
  }

  stop() {
    const audio = this.audio;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    this.set({ playing: false, progress: 0, currentTime: 0 });
  }

  toggleRepeat() {
    this.set({ repeat: !this.state.repeat });
  }
}

export const surahPlayer = new SurahPlayer();
