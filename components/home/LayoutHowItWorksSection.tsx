import { Badge } from "@/components/ui/badge";

export const LayoutHowItWorksSection = () => (
  <section id="how-it-works" className="container py-16 sm:py-24">
    <div className="text-center mb-10">
      <Badge variant="secondary" className="text-base font-bold mb-2">How It Works</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Your Team’s CRM, Ready in Minutes</h2>
      <h3 className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
        Onboard, invite your startup team, and instantly manage your clients and deals—StartwiseCRM makes setup seamless and secure.
      </h3>
    </div>
    <ul className="max-w-3xl mx-auto space-y-6">
      <li>
        <span className="font-bold text-primary">1. </span>
        <span>Authenticate or accept your team invite—StartwiseCRM is private by design, for startup teams only.</span>
      </li>
      <li>
        <span className="font-bold text-primary">2. </span>
        <span>Add clients, contacts, and deals in minutes. Assign owners and log activities or notes to keep your workflow on track.</span>
      </li>
      <li>
        <span className="font-bold text-primary">3. </span>
        <span>See all your startup’s CRM data in one place—with dashboards, deal pipeline views, filters, and secure access controls.</span>
      </li>
    </ul>
    <div className="pt-8 text-center">
      <span className="text-muted-foreground">No setup fees. Zero bloat. Built for internal collaboration.</span>
    </div>
  </section>
);