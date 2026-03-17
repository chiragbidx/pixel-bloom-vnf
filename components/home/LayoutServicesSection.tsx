import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const { services } = getHomeContent();

export const LayoutServicesSection = () => (
  <section id="services" className="container py-24 sm:py-32">
    <div className="text-center mb-8">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">{services.eyebrow}</h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">{services.heading}</h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">{services.subtitle}</h3>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      {services.items.map(
        ({ title, description, pro }) => (
          <Card
            key={title}
            className={
              pro
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>
              <CardDescription className="pb-4">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant={pro ? "default" : "secondary"} className="mb-2">{pro ? "Pro" : "Included"}</Badge>
            </CardContent>
          </Card>
        )
      )}
    </div>
  </section>
);