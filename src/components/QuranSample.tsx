"use client";

import { useEffect, useState } from "react";
import { Languages, Minus, Pause, Play, Plus } from "lucide-react";
import {
  SAMPLE_AUDIO,
  SAMPLE_AYAHS,
  SAMPLE_SOURCES,
  SAMPLE_SURAH,
} from "@/data/sample";
import { surahPlayer, type SurahPlayerState } from "@/lib/surahPlayer";
import styles from "./QuranSample.module.css";

const SIZES = [25, 29, 34, 40];

/**
 * A real reading preview: the controls below actually adjust the sample, and
 * the play button streams the Al-Fatihah recitation (Alafasy) from the same
 * AlQuran Cloud CDN that serves the text — via the shared surah player, so it
 * stays in sync with the recitation-section player.
 * Content is verified (Tanzil Uthmani text + Saheeh International), never
 * generated.
 */
export function QuranSample() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const [showTranslation, setShowTranslation] = useState(true);
  const [player, setPlayer] = useState<SurahPlayerState>(surahPlayer.getState());

  useEffect(() => surahPlayer.subscribe(setPlayer), []);

  const decrease = () => setSizeIndex((value) => Math.max(0, value - 1));
  const increase = () => setSizeIndex((value) => Math.min(SIZES.length - 1, value + 1));

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar} role="group" aria-label="Reading preview controls">
        <div className={styles.sizeGroup}>
          <button
            type="button"
            className={styles.toolButton}
            onClick={decrease}
            disabled={sizeIndex === 0}
            aria-label="Decrease text size"
          >
            <Minus size={15} aria-hidden="true" />
          </button>
          <span className={styles.toolLabel}>Text size</span>
          <button
            type="button"
            className={styles.toolButton}
            onClick={increase}
            disabled={sizeIndex === SIZES.length - 1}
            aria-label="Increase text size"
          >
            <Plus size={15} aria-hidden="true" />
          </button>
        </div>

        <span className={styles.toolDivider} aria-hidden="true" />

        <button
          type="button"
          className={`${styles.toggle} ${showTranslation ? styles.toggleOn : ""}`}
          aria-pressed={showTranslation}
          onClick={() => setShowTranslation((value) => !value)}
        >
          <Languages size={15} aria-hidden="true" />
          Translation · {showTranslation ? "On" : "Off"}
        </button>
      </div>

      <div className={styles.sheet}>
        <header className={styles.surahHeader}>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.surahArabic} lang="ar" dir="rtl">
            {SAMPLE_SURAH.nameAr}
          </p>
          <p className={styles.surahMeta}>
            {SAMPLE_SURAH.englishName} · {SAMPLE_SURAH.englishTranslation} ·{" "}
            {SAMPLE_SURAH.revelationType}
          </p>

          <div className={styles.playRow}>
            <button
              type="button"
              className={styles.playButton}
              onClick={() => surahPlayer.toggle()}
              disabled={player.failed}
              aria-label={
                player.failed
                  ? "Al-Fatihah audio is unavailable"
                  : player.playing
                    ? "Pause Al-Fatihah recitation"
                    : player.progress > 0
                      ? "Resume Al-Fatihah recitation"
                      : "Play Al-Fatihah recitation"
              }
            >
              {player.playing ? (
                <Pause size={18} fill="currentColor" aria-hidden="true" />
              ) : (
                <Play size={18} fill="currentColor" aria-hidden="true" />
              )}
            </button>
            <p className={styles.playHint} aria-live="polite">
              {player.failed
                ? "Audio unavailable"
                : player.playing
                  ? "Playing · tap to pause"
                  : player.progress > 0
                    ? "Paused · tap to resume"
                    : `Listen · ${SAMPLE_AUDIO.reciter}`}
            </p>
          </div>

          <span className={styles.rule} aria-hidden="true" />
        </header>

        <ol className={styles.ayahs}>
          {SAMPLE_AYAHS.map((ayah) => (
            <li key={ayah.n} className={styles.ayah}>
              <p
                className={styles.arabic}
                lang="ar"
                dir="rtl"
                style={{ fontSize: `${SIZES[sizeIndex]}px` }}
              >
                <span className={styles.arabicText}>{ayah.ar}</span>
                <span className={styles.ayahNumber} aria-hidden="true">
                  {ayah.n}
                </span>
              </p>
              {showTranslation ? <p className={styles.translation}>{ayah.en}</p> : null}
            </li>
          ))}
        </ol>

        <p className={styles.attribution}>
          {SAMPLE_SOURCES.quranText} {SAMPLE_SOURCES.translation}{" "}
          {SAMPLE_SOURCES.audio}
        </p>
      </div>
    </div>
  );
}
