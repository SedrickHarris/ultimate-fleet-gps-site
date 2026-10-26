"use client";

import { useEffect, useId, useRef, useState } from "react";

import { NavLink } from "@/components/layout/NavLink";
import { PhoneButton } from "@/components/layout/PhoneButton";
import type { NavItem } from "@/types/navigation";

interface HeaderMobileMenuProps {
  readonly items: readonly NavItem[];
  readonly phone: { readonly href: string; readonly label: string };
}

/**
 * Header disclosure menu, below lg (1024px), so phones and tablets.
 *
 * A small client component responsible only for menu state and focus
 * behavior, per section 18 of 20-component-inventory.md.
 *
 * A disclosure pattern rather than a modal: the panel pushes content instead
 * of overlaying it, so there is no inert background to manage and no scroll
 * lock to break page position. That also keeps the menu usable at 200% zoom,
 * where a fixed-height overlay would clip.
 *
 * Focus moves to the first link on open and returns to the trigger on close.
 * Escape closes. The trigger announces its state with aria-expanded.
 *
 * This is distinct from MobileNavigation, which is the persistent bottom
 * click-to-call / "Request Service" bar, not a full-nav disclosure.
 */
export function HeaderMobileMenu({ items, phone }: HeaderMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      panelRef.current?.querySelector("a")?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    // `contents` lets the button join the header row while the open panel
    // wraps to its own full-width line below it.
    <div className="contents lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="ms-auto inline-flex min-h-11 min-w-11 items-center md:ms-0 justify-center gap-2 rounded-md border border-border px-3 font-semibold text-ink transition-[box-shadow,background-color] hover:bg-surface-subtle hover:shadow-card"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {open ? "×" : "≡"}
        </span>
        {open ? "Close menu" : "Menu"}
      </button>

      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          className="order-last mt-2 w-full basis-full border-t border-border pt-4"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  className="w-full py-2"
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>

          <PhoneButton
            href={phone.href}
            label={phone.label}
            location="header-menu"
            className="mt-4 w-full border-transparent bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-strong)]"
          />
        </div>
      ) : null}
    </div>
  );
}
