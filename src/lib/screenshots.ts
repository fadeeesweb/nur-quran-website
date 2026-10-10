import { existsSync } from "node:fs";
import path from "node:path";
import type { AppScreenshot } from "@/config/site";

/**
 * Checks (at build time) whether a screenshot file has been dropped into
 * public/. Until a real file exists the UI renders an honest placeholder
 * instead of a fake screenshot.
 */
export function screenshotExists(file: string): boolean {
  return existsSync(path.join(process.cwd(), "public", file));
}

export function resolveScreenshots(shots: AppScreenshot[]): {
  shot: AppScreenshot;
  exists: boolean;
}[] {
  return shots.map((shot) => ({ shot, exists: screenshotExists(shot.file) }));
}
