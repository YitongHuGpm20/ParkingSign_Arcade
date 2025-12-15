import { useEffect, useMemo, useState } from "react";

type DebugFrameProps = {
    defaultOn?: boolean;
    /** Safe Margin Percentage（0.05 = each side 5%） */
    safeMarginPct?: number;
};

export default function DebugFrame({ defaultOn, safeMarginPct = 0.05 }: DebugFrameProps) {
    const isDev = import.meta.env.DEV;
    const [on, setOn] = useState<boolean>(defaultOn ?? isDev);
    const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

    useEffect(() => {
        const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "F1") {
                e.preventDefault();
                setOn((v) => !v);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const safeStyle = useMemo(() => {
        const m = Math.max(0, Math.min(0.25, safeMarginPct)); // 限制一下，避免太夸张
        return {
            top: `${m * 100}%`,
            left: `${m * 100}%`,
            right: `${m * 100}%`,
            bottom: `${m * 100}%`,
        } as const;
    }, [safeMarginPct]);

    if (!on) return null;

    return (
        <div style={styles.root} aria-hidden>
            {/* Fullscreen frame */}
            <div style={styles.fullFrame} />

            {/* Safezone */}
            <div style={{ ...styles.safeFrame, ...safeStyle }} />

            {/* Info Bar */}
            <div style={styles.badge}>
                {size.w}×{size.h} px&nbsp;|&nbsp;F1 toggle
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    root: {
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999999,
    },
    fullFrame: {
        position: "absolute",
        inset: 0,
        border: "3px solid rgba(255, 0, 0, 0.85)",
        boxSizing: "border-box",
    },
    safeFrame: {
        position: "absolute",
        border: "2px dashed rgba(0, 160, 255, 0.85)",
        boxSizing: "border-box",
    },
    badge: {
        position: "absolute",
        top: 8,
        left: 8,
        padding: "6px 10px",
        borderRadius: 8,
        background: "rgba(0,0,0,0.65)",
        color: "white",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: 12,
        lineHeight: 1.2,
    },
};