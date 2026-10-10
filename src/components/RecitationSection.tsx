"use client";

import { useEffect, useRef, useState } from "react";
import { ListMusic, Pause, Play, SkipBack, SkipForward, Repeat } from "lucide-react";
import { FEATURED_RECITERS, RECITATION_COUNT } from "@/config/site";
import { SAMPLE_SURAH } from "@/data/sample";
import { surahPlayer, type SurahPlayerState } from "@/lib/surahPlayer";
import { Logo } from "./Logo";
import { revealDelay } from "@/lib/style";
import styles from "./RecitationSection.module.css";

const CAPABILITIES = [
  "Repeat a single ayah or a full surah",
  "Playback speed control",
  "Continuous play with a background mini-player",
  "Download recitations for offline listening",
];

const SKIP_SECONDS = 10;

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function RecitationSection() {
  const [player, setPlayer] = useState<SurahPlayerState>(surahPlayer.getState());
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => surahPlayer.subscribe(setPlayer), []);

  const seekFromClientX = (clientX: number) => {
    const el = progressRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    surahPlayer.seek((clientX - rect.left) / rect.width);
  };

  return (
    <section
      id="recitations"
      className={`section bg-green ${styles.section}`}
      aria-labelledby="recitations-title"
    >
      <div className={`container ${styles.grid}`}>
        <figure className={styles.figure} data-reveal>
          <div className={styles.player} role="group" aria-label="Al-Fatihah audio player">
            <div className={styles.head}>
              <Logo size={64} />
              <div className={styles.meta}>
                <p className={styles.eyebrowSmall}>
                  {player.failed ? "Audio unavailable" : player.playing ? "Now playing" : "Ready to play"}
                </p>
                <p className={styles.track}>Al-Fatihah</p>
                <p className={styles.trackArabic} lang="ar" dir="rtl">
                  {SAMPLE_SURAH.nameAr}
                </p>
              </div>
            </div>

            <div
              ref={progressRef}
              className={styles.progress}
              role="slider"
              tabIndex={0}
              aria-label="Seek within Al-Fatihah"
              aria-valuemin={0}
              aria-valuemax={Math.round(player.duration)}
              aria-valuenow={Math.round(player.currentTime)}
              aria-valuetext={`${formatTime(player.currentTime)} of ${formatTime(player.duration)}`}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                seekFromClientX(event.clientX);
              }}
              onPointerMove={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  seekFromClientX(event.clientX);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  surahPlayer.skip(-SKIP_SECONDS);
                } else if (event.key === "ArrowRight") {
                  event.preventDefault();
                  surahPlayer.skip(SKIP_SECONDS);
                }
              }}
            >
              <span
                className={styles.progressFill}
                style={{ width: `${Math.round(player.progress * 100)}%` }}
              />
            </div>

            <div className={styles.timeRow}>
              <span>
                {formatTime(player.currentTime)} / {formatTime(player.duration)}
              </span>
              <span>Mishary Rashid Alafasy</span>
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={`${styles.ctrlButton} ${player.repeat ? styles.ctrlActive : ""}`}
                aria-pressed={player.repeat}
                aria-label="Repeat Al-Fatihah"
                onClick={() => surahPlayer.toggleRepeat()}
              >
                <Repeat size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={styles.ctrlButton}
                aria-label={`Rewind ${SKIP_SECONDS} seconds`}
                onClick={() => surahPlayer.skip(-SKIP_SECONDS)}
              >
                <SkipBack size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={styles.ctrlPlay}
                aria-label={player.playing ? "Pause Al-Fatihah" : "Play Al-Fatihah"}
                onClick={() => surahPlayer.toggle()}
              >
                {player.playing ? (
                  <Pause size={24} fill="currentColor" aria-hidden="true" />
                ) : (
                  <Play size={24} fill="currentColor" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                className={styles.ctrlButton}
                aria-label={`Forward ${SKIP_SECONDS} seconds`}
                onClick={() => surahPlayer.skip(SKIP_SECONDS)}
              >
                <SkipForward size={19} aria-hidden="true" />
              </button>
              <span className={styles.ctrlSmall} aria-hidden="true">
                <ListMusic size={17} />
              </span>
            </div>

            <div className={styles.stateRow}>
              <span className={styles.stateChip}>
                <Play size={12} fill="currentColor" /> Surah
              </span>
              <span className={styles.stateChip}>Full</span>
              <span className={styles.stateChip}>1.0×</span>
            </div>
          </div>

          <figcaption className={styles.caption}>
            Live preview of the in-app player — this one plays Al-Fatihah on the site.
          </figcaption>
        </figure>

        <div className={styles.copy} data-reveal style={revealDelay(120)}>
          <p className="eyebrow">Recitations</p>
          <h2 id="recitations-title" className="section-title">
            Hear the Quran, clearly.
          </h2>
          <p className="section-lede">
            Follow along ayah by ayah, repeat a single ayah until it settles, or let a
            whole surah play. Choose from {RECITATION_COUNT} recitation editions, adjust
            the speed, and keep your favourites available offline.
          </p>

          <ul className={styles.capabilities}>
            {CAPABILITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.reciterBlock}>
            <h3 className={styles.reciterTitle}>Featured reciters</h3>
            <ul className={styles.reciters}>
              {FEATURED_RECITERS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
