import Link from "next/link";

import { inlineLinkClass, LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { JobWork } from "@/types/jobs";

interface JobWorkSectionProps {
  readonly id: string;
  readonly content: JobWork;
  readonly tone?: "default" | "subtle";
}

const h3Class = "mt-8 text-[length:var(--text-h4)] font-bold text-ink";
const pClass =
  "mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted";

/**
 * "What the technician does" section of an active opening page. Two columns
 * from lg (about 3/5 content, 2/5 media), single column below with the media
 * after the content. The media column is static (CLAUDE.md section 8).
 */
export function JobWorkSection({
  id,
  content,
  tone = "default",
}: JobWorkSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>

          <h3 className={h3Class}>{content.vehiclesHeading}</h3>
          <p className={pClass}>{content.vehicles}</p>

          <h3 className={h3Class}>{content.equipmentHeading}</h3>
          <dl className="mt-3 flex flex-col gap-3 text-[length:var(--text-body)] leading-relaxed">
            {content.equipment.map((item) => (
              <div key={item.term}>
                <dt className="inline font-bold text-ink">
                  {item.href && item.linkText ? (
                    <>
                      <Link href={item.href} className={inlineLinkClass}>
                        {item.linkText}
                      </Link>
                      {item.term.slice(item.linkText.length)}
                    </>
                  ) : (
                    item.term
                  )}
                  :
                </dt>{" "}
                <dd className="inline text-ink-muted">{item.definition}</dd>
              </div>
            ))}
          </dl>

          <h3 className={h3Class}>{content.whereHeading}</h3>
          <p className={pClass}>
            <LinkedText text={content.where} />
          </p>

          <h3 className={h3Class}>{content.stepsHeading}</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:font-bold">
            {content.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h3 className={h3Class}>{content.photoHeading}</h3>
          <p className={pClass}>{content.photo}</p>

          <h3 className={h3Class}>{content.expectHeading}</h3>
          <p className={pClass}>
            <LinkedText text={content.expect} />
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Technician installing a GPS tracking
          device on a commercial truck at a customer yard". See ImagePlaceholder
          for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-the-work" />
      </div>
    </Section>
  );
}
