import { Button } from "@/components/ui/button";

const applyBrand = (name: "emerald" | "teal") => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-brand", name);
  }
};

const resetBrand = () => {
  if (typeof document !== "undefined") {
    document.documentElement.removeAttribute("data-brand");
  }
};

export default function ColorPreview() {
  return (
    <section aria-labelledby="brand-preview-heading" className="container py-12">
      <header className="mb-6">
        <h2 id="brand-preview-heading" className="text-2xl font-bold tracking-tight">
          Preview Brand Colors
        </h2>
        <p className="text-sm text-muted-foreground">
          Compare Emerald and Teal palettes and apply your favorite instantly.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article data-brand="emerald" className="glass rounded-lg border p-6">
          <h3 className="mb-2 font-semibold">Emerald</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Vibrant, fresh green suitable for energetic, modern portfolios.
          </p>
          <div className="mb-4 h-24 w-full rounded-md bg-gradient-brand shadow-[var(--shadow-elevated)]" aria-hidden />
          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" onClick={() => applyBrand("emerald")} aria-label="Apply Emerald brand colors">
              Apply Emerald
            </Button>
            <Button variant="outline" onClick={resetBrand} aria-label="Reset to current brand">
              Reset
            </Button>
          </div>
        </article>

        <article data-brand="teal" className="glass rounded-lg border p-6">
          <h3 className="mb-2 font-semibold">Teal</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Calm, professional green-blue ideal for refined aesthetics.
          </p>
          <div className="mb-4 h-24 w-full rounded-md bg-gradient-brand shadow-[var(--shadow-elevated)]" aria-hidden />
          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" onClick={() => applyBrand("teal")} aria-label="Apply Teal brand colors">
              Apply Teal
            </Button>
            <Button variant="outline" onClick={resetBrand} aria-label="Reset to current brand">
              Reset
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
