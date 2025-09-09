import React from "react";
import { useI18n } from "@/i18n/useI18n";

/** Inline icons to match existing style */
function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconDollar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2v20M16.5 7.5c0-1.933-2.015-3.5-4.5-3.5S7.5 5.567 7.5 7.5 9.515 11 12 11s4.5 1.567 4.5 3.5S14.985 18 12 18 7.5 16.433 7.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
/** NEW Icon — "Custom web design": monitor with vector pen nib */
function IconCustomDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {/* Monitor */}
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 20h6M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Pen nib */}
      <path d="M14.5 8.5 18 12l-2.5 2.5L12 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12.9" cy="10.9" r="0.9" fill="currentColor"/>
    </svg>
  );
}

function Card({
  icon,
  title,
  blurb
}: {
  icon: React.ReactNode;
  title: string;
  blurb: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Gradient accent bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl"
           style={{background: "linear-gradient(90deg, #2B6CB0 0%, #D4A72C 100%)"}} />
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 text-slate-700">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-1 text-slate-700 leading-relaxed">
            {blurb}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ValueGrid() {
  const { t } = useI18n();

  return (
    <section aria-label={t("benefits.aria")} className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Card
          icon={<IconBolt className="h-6 w-6" />}
          title={t("benefits.fast.title")}
          blurb={t("benefits.fast.blurb")}
        />
        <Card
          icon={<IconGlobe className="h-6 w-6" />}
          title={t("benefits.bilingual.title")}
          blurb={t("benefits.bilingual.blurb")}
        />
        <Card
          icon={<IconDollar className="h-6 w-6" />}
          title={t("benefits.flat.title")}
          blurb={t("benefits.flat.blurb")}
        />
        <Card
          icon={<IconCustomDesign className="h-6 w-6" />}
          title={t("benefits.custom.title")}
          blurb={t("benefits.custom.blurb")}
        />
      </div>
    </section>
  );
}