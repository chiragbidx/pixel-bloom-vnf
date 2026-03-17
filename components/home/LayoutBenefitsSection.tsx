import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const { benefits } = getHomeContent();

export const LayoutBenefitsSection = () => (
  <section id="benefits" className="container py-16 sm:py-24">
    <div className="text-center mb-10">
      <Badge variant="secondary" className="text-base font-bold mb-2">{benefits.eyebrow}</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{benefits.heading}</h2>
      <h3 className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
        {benefits.description}
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.items.map(({ icon, title, description }) => (
        <Card key={title} className="border-secondary shadow-none bg-background/80">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 text-primary p-2">
                {/* Use lucide-react icon name string for real icons in full app, fallback to emoji for demo */}
                <span className="text-xl">{icon === "Users" ? "👥" : icon === "Pipeline" ? "🔗" : icon === "Key" ? "🔑" : "📋"}</span>
              </div>
              <CardTitle className="ml-1 text-xl">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);