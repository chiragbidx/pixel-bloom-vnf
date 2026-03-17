"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Users,
  Briefcase,
  NotebookPen,
  ActivitySquare,
  DollarSign,
  Search,
  BadgeDollarSign,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type Metric = {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
};

type OnboardingStep = {
  title: string;
  description: string;
  href: string;
  done: boolean;
};

type ActivityItem = {
  title: string;
  detail: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
};

const metrics: Metric[] = [
  { label: "Active Clients", value: "27", trend: "+2", icon: Users, description: "this month" },
  { label: "Deals in Pipeline", value: "15", trend: "+4", icon: Briefcase, description: "this month" },
  { label: "Total Pipeline Value", value: "$82,000", trend: "+$5k", icon: DollarSign, description: "this month" },
  { label: "Team Activities", value: "58", trend: "+9", icon: ActivitySquare, description: "this month" }
];

const onboardingSteps: OnboardingStep[] = [
  { title: "Add your first client", description: "Create a new client record to kick-off your CRM workspace.", href: "/dashboard/clients", done: false },
  { title: "Create your first deal", description: "Start tracking an opportunity in your pipeline.", href: "/dashboard/deals", done: false },
  { title: "Invite your team", description: "Add team members to collaborate on CRM records.", href: "/dashboard/team", done: false },
  { title: "Log an activity or note", description: "Attach a call, meeting, or note to a client or deal.", href: "/dashboard/activities", done: false },
];

const recentActivity: ActivityItem[] = [
  { title: "Client added", detail: "BetaPlus joined CRM", time: "5 min ago", icon: Users },
  { title: "Deal created", detail: "Q2 SaaS Expansion - stage: Proposal", time: "10 min ago", icon: Briefcase },
  { title: "Note saved", detail: "Intro call outcome for BetaPlus", time: "22 min ago", icon: NotebookPen },
  { title: "Team member invited", detail: "jay@boostbridge.io invited to workspace", time: "45 min ago", icon: Users },
];

const quickActions = [
  { label: "Add Client", href: "/dashboard/clients", icon: Users },
  { label: "Add Deal", href: "/dashboard/deals", icon: Briefcase },
  { label: "Add Note", href: "/dashboard/notes", icon: NotebookPen },
  { label: "Invite Team", href: "/dashboard/team", icon: Users },
];

export function DashboardContent({ greeting, firstName }: { greeting: string; firstName: string }) {
  const [query, setQuery] = useState("");
  const noResults = false; // In real flow: implement search/filter logic

  return (
    <>
      {/* Updated CRM dashboard header */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {greeting} {firstName && `, ${firstName}`} <span aria-hidden>👋</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Your secure workspace for startup client management, deals, and collaboration.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-1.5"
                  disabled={action.href === "#"}
                >
                  <Link href={action.href}>
                    <Icon className="size-3.5" />
                    <span className="hidden sm:inline">{action.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search clients, deals, or activities…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-10 bg-muted/50 border-muted-foreground/15 focus-visible:border-border focus-visible:bg-background"
            aria-label="Search CRM records"
          />
        </div>
      </div>
      {noResults && (
        <Card className="mb-8">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="size-10 text-muted-foreground/30 mb-3" />
            <p className="text-sm font-medium">No results found</p>
            <p className="text-xs text-muted-foreground mt-1">
              Try a different search term or clear the filter.
            </p>
          </CardContent>
        </Card>
      )}
      {/* Metric cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription className="text-sm font-medium">{metric.label}</CardDescription>
                <div className="rounded-md bg-muted p-2">
                  <Icon className="size-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight">{metric.value}</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <Badge
                    variant="secondary"
                    className="rounded-md px-1.5 py-0 text-xs font-medium text-emerald-700 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/15 border-0"
                  >
                    {metric.trend}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* Onboarding steps and quick start */}
      <div className="mb-8 grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Getting Started</CardTitle>
              <Badge variant="outline" className="text-xs">
                0 / {onboardingSteps.length}
              </Badge>
            </div>
            <CardDescription>
              Set up your CRM workspace in just a few steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {onboardingSteps.map((step) => (
              <Link
                key={step.title}
                href={step.href}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
              >
                {step.done ? (
                  <CheckCircle2 className="size-[18px] shrink-0 text-emerald-500" />
                ) : (
                  <Circle className="size-[18px] shrink-0 text-muted-foreground/40" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-none">{step.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">CRM Reporting (coming soon)</CardTitle>
                <CardDescription>
                  See CRM pipeline, activity, and deal insights for your startup.
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-xs font-medium">
                Internal only
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="p-6 text-center text-muted-foreground text-sm">
              <strong>Reports are coming soon.</strong> You’ll be able to analyze deal flow, activities, and pipeline velocity for your team.
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Activity feed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Latest CRM Activity</CardTitle>
              <CardDescription>Track team actions and key events in your startup's CRM.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs" disabled>
              View all
              <ArrowUpRight className="size-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-0">
            {recentActivity.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={`${item.title}-${item.time}`}>
                  <div className="flex items-center gap-4 py-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  {i < recentActivity.length - 1 ? <Separator /> : null}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}