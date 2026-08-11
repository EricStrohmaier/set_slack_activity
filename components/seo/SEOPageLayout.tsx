import Link from "next/link";
import { ReactNode } from "react";

interface SEOPageLayoutProps {
  children: ReactNode;
}

export function SEOPageLayout({ children }: SEOPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-text">
      {children}
    </div>
  );
}

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function CTAButton({ href, variant = "primary", children, className = "" }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-colors";

  const variantClasses = variant === "primary"
    ? "text-white bg-text-800 hover:bg-text-900 border border-transparent"
    : "text-text-700 bg-white hover:bg-background-50 border border-text-200";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
}

interface SectionProps {
  children: ReactNode;
  variant?: "default" | "subtle" | "highlight";
  className?: string;
}

export function Section({ children, variant = "default", className = "" }: SectionProps) {
  const variantClasses = {
    default: "",
    subtle: "bg-background-50 rounded-lg p-8",
    highlight: "bg-background-100 border-l-4 border-accent-400 rounded-lg p-8"
  };

  return (
    <section className={`mb-12 ${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-text-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      {/*
        Icon sits inline with the heading. Callers pass their own sizing
        (w-10 h-10, w-8 h-8, ...) across hundreds of usages, so the size is
        normalized here with a child selector — `.parent > svg` outranks the
        `.h-10` utility on specificity, giving one consistent icon size
        everywhere without touching every page.
      */}
      {/*
        items-start + mt-0.5 optically centres the icon on the FIRST line of the
        heading. With items-center, a title that wraps to two lines floats the
        icon in the gap between them, which reads as a misalignment.
      */}
      <div className="flex items-start gap-3 mb-3">
        <span
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-text-800 [&>svg]:h-6 [&>svg]:w-6"
        >
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-text-900">{title}</h3>
      </div>
      <p className="text-text-600">{description}</p>
    </div>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <Section variant="highlight" className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-text-900">{title}</h2>
      <p className="text-xl mb-6 text-text-700">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryCTA && (
          <CTAButton href={primaryCTA.href} variant="primary">
            {primaryCTA.text}
          </CTAButton>
        )}
        {secondaryCTA && (
          <CTAButton href={secondaryCTA.href} variant="secondary">
            {secondaryCTA.text}
          </CTAButton>
        )}
      </div>
    </Section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white border border-text-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3 text-text-900">{question}</h3>
      <p className="text-text-700">{answer}</p>
    </div>
  );
}
