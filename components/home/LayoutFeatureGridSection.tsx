import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GroupIcon, Users2, Briefcase, PenLine, ActivitySquare, MessageCircleMore, FileText, CheckCircle, Lock, KeyIcon } from "lucide-react";

const featuresCopy = [
  {
    icon: GroupIcon,
    title: "Secure Multi-Tenant CRM",
    description: "Each startup’s data is isolated, with role-based access for internal teams."
  },
  {
    icon: Users2,
    title: "Client & Contact Management",
    description: "Track clients, assign contacts, and manage company details—all in a central, intuitive workspace."
  },
  {
    icon: Briefcase,
    title: "Deal Pipeline & Opportunities",
    description: "Move deals through lead-to-win stages, assign owners, and project sales with customizable pipelines."
  },
  {
    icon: ActivitySquare,
    title: "Activity Timeline & Notes",
    description: "Log calls, meetings, and add notes to clients or deals. See everything in an actionable timeline."
  },
  {
    icon: FileText,
    title: "Built-In Reports & Dashboards",
    description: "Stay on top of your active pipeline and team performance with real-time overviews and reporting."
  },
  {
    icon: KeyIcon,
    title: "Role-Based Permissions",
    description: "Admins have full control, members see only their records—data is safe, private, and compliant."
  }
];

export const LayoutFeatureGridSection = () => (
  <section id="features" className="container py-16 sm:py-24">
    <div className="text-center mb-10">
      <Badge variant="secondary" className="text-base font-bold mb-2">Everything Startup Teams Need</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Features for Growth & Collaboration</h2>
      <h3 className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
        StartwiseCRM brings together client records, collaborative deal pipelines, team activity tracking, and secure startup data isolation.
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresCopy.map(({ icon: Icon, title, description }) => (
        <Card key={title} className="border-secondary shadow-none bg-background/80">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 text-primary p-2">
                <Icon className="size-6" />
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