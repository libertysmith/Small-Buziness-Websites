import React from "react";

export default function FormEmbed({ src, title }: { src?: string; title: string }) {
  const [h, setH] = React.useState(1400);
  const [loaded, setLoaded] = React.useState(false);

  // Compute a reasonable iframe height from viewport
  React.useEffect(() => {
    const getH = () => {
      const vh = Math.max(window.innerHeight, 600);
      // Allow more space for mobile/laptops; cap to avoid giant iframes
      return Math.round(Math.max(900, Math.min(2200, vh * 1.35)));
    };
    const onResize = () => setH(getH());
    setH(getH());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!src) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-sm text-neutral-600">
          The form is not configured yet. Use the button below to open it in a new tab.
        </p>
        <div className="mt-3">
          <a className="inline-flex items-center rounded-md border px-3 py-2 text-sm opacity-60" aria-disabled="true" href="#">
            Open form
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
      {!loaded && (
        <div className="p-4 text-sm text-neutral-600">Loading form…</div>
      )}
      <iframe
        title={title}
        src={src}
        className="block w-full"
        style={{ height: `${h}px`, border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      />
      <div className="flex items-center justify-between px-3 py-2 border-t bg-neutral-50">
        <span className="text-xs text-neutral-500">Having trouble? Open the form in a new tab.</span>
        <a className="text-sm underline" href={src} target="_blank" rel="noopener">Open in new tab</a>
      </div>
    </div>
  );
}