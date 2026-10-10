"use client";

import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { DOWNLOAD_APP_URL, isDownloadConfigured, withBasePath } from "@/config/site";
import { announceDownloads, incrementDownloads } from "@/lib/downloadCounter";

type Variant = "primary" | "onDark" | "secondary" | "ghostOnDark";
type Size = "sm" | "md" | "lg";

type Props = {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  showIcon?: boolean;
  block?: boolean;
  className?: string;
  /** Extra attributes such as aria-label or id. */
  id?: string;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn--primary",
  onDark: "btn--onDark",
  secondary: "btn--secondary",
  ghostOnDark: "btn--ghostOnDark",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "btn--sm",
  md: "",
  lg: "btn--lg",
};

/**
 * The single download button used across the whole website.
 * Its href always comes from DOWNLOAD_APP_URL in src/config/site.ts —
 * change that one value and every button updates.
 * Each click also bumps the live download counter shown in the hero.
 */
export function DownloadAppButton({
  children = "Download App",
  variant = "primary",
  size = "md",
  showIcon = true,
  block = false,
  className,
  id,
}: Props) {
  const classes = [
    "btn",
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    block ? "btn--block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    void incrementDownloads().then((value) => {
      if (value !== null) announceDownloads(value);
    });
  };

  const href = withBasePath(DOWNLOAD_APP_URL);
  const isLocalFile = href.startsWith("/");

  return (
    <a
      id={id}
      href={href}
      className={classes}
      data-download-button=""
      data-configured={isDownloadConfigured() ? "true" : "false"}
      onClick={handleClick}
      {...(isLocalFile ? { download: "Nur-1.0.2.apk" } : {})}
    >
      {children}
      {showIcon ? <Download size={size === "sm" ? 15 : 17} aria-hidden="true" /> : null}
    </a>
  );
}
