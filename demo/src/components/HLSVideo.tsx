import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  desaturated?: boolean;
  crossOrigin?: "" | "anonymous" | "use-credentials";
}

export default function HLSVideo({
  src,
  className = "",
  poster = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  desaturated = false,
  crossOrigin = "anonymous",
}: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        xhrSetup: (xhr) => {
          xhr.withCredentials = crossOrigin === "use-credentials";
        }
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch((e) => console.error("Error playing video:", e));
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // For Safari
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        if (autoPlay) {
          video.play().catch((e) => console.error("Error playing video:", e));
        }
      });
    }
  }, [src, autoPlay, crossOrigin]);

  return (
    <video
      ref={videoRef}
      className={`${className} ${desaturated ? "saturate-0" : ""}`}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      crossOrigin={crossOrigin}
    />
  );
}
