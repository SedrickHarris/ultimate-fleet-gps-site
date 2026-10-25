import Link from "next/link";

import { LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { iconCircle, StepCard } from "@/components/ui/StepCard";
import type { JobWork } from "@/types/jobs";

interface JobWorkSectionProps {
  readonly id: string;
  readonly content: JobWork;
  readonly tone?: "default" | "subtle";
}

const h3Class = "mt-10 text-[length:var(--text-h3)] leading-tight font-bold text-ink";
const pClass =
  "mt-2 max-w-[820px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted";

/**
 * "What the technician does" section of an active opening page. The top row is
 * the H2 and answer paragraph beside the image placeholder (two columns from
 * lg). Everything below spans the full container: vehicles, equipment as
 * service-style cards, where the work happens, the installation steps, photo
 * documentation, and what to expect. The media is static (CLAUDE.md section 8).
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
        </div>

        {/*
          Image slot. Intended alt text: "Technician installing a GPS tracking
          device on a commercial truck at a customer yard". See ImagePlaceholder
          for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-the-work" />
      </div>

      <h3 className={h3Class}>{content.vehiclesHeading}</h3>
      <p className={pClass}>{content.vehicles}</p>

      <h3 className={h3Class}>{content.equipmentHeading}</h3>
      {/*
        Cards use the same Card primitive and stretched-link pattern as the
        services hub cards (ServiceNavGrid). A card without an href renders no
        link, no arrow, and no hover lift, so it does not look clickable.
      */}
      <ul
        data-reveal-group
        className="mt-5 grid list-none grid-cols-1 gap-6 p-0 lg:grid-cols-3"
      >
        {content.equipment.map((item) => (
          <li key={item.term}>
            <Card
              as="div"
              hover={Boolean(item.href)}
              className="relative flex h-full flex-col gap-3"
            >
              <span className={iconCircle}>
                <Icon name={item.icon} size={22} />
              </span>
              <h4 className="text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {item.term}
                    <span className="sr-only"> - {item.linkLabel}</span>
                  </Link>
                ) : (
                  item.term
                )}
              </h4>
              <p className="text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.definition}
              </p>
              {item.href ? (
                <span
                  aria-hidden="true"
                  className="mt-auto pt-2 text-[var(--color-accent-blue-strong)]"
                >
                  <Icon name="arrow-right" size={20} />
                </span>
              ) : null}
            </Card>
          </li>
        ))}
      </ul>

      <h3 className={h3Class}>{content.whereHeading}</h3>
      <p className={pClass}>
        <LinkedText text={content.where} />
      </p>

      <h3 className={h3Class}>{content.stepsHeading}</h3>
      <ol className="mt-5 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {content.steps.map((step, index) => (
          <li
            key={step.text}
            className="relative sm:max-lg:last:col-span-2"
          >
            <StepCard icon={step.icon}>
              {step.text}
            </StepCard>
            {index < content.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-[42px] left-full hidden w-6 -translate-y-1/2 place-items-center text-[var(--color-accent-blue-strong)]/60 lg:grid"
              >
                <Icon name="chevron-right" size={18} />
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <h3 className={h3Class}>{content.photoHeading}</h3>
      <p className={pClass}>{content.photo}</p>

      <h3 className={h3Class}>{content.expectHeading}</h3>
      <p className={pClass}>
        <LinkedText text={content.expect} />
      </p>
    </Section>
  );
}
