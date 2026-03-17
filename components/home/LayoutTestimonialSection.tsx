"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

export const LayoutTestimonialSection = () => {
  const testimonials = [
    {
      name: "Michelle V.",
      role: "Founder, GrowthSpark",
      image: "/demo-img.jpg",
      comment: "With StartwiseCRM, our team got organized, closed more deals, and finally had a place where every client touchpoint was visible.",
    },
    {
      name: "Jay Y.",
      role: "COO, BoostBridge",
      image: "/demo-img.jpg",
      comment: "The pipeline and activity feed helped us prioritize work, and the simple onboarding had our team up and running in a single afternoon!",
    },
    {
      name: "Sana R.",
      role: "Head of Ops, QuickFund",
      image: "/demo-img.jpg",
      comment: "All of our startup’s client data is safely together, secure and accessible only to our team. Exactly what we needed to scale sales.",
    },
    {
      name: "Luca K.",
      role: "Revenue Lead, ScaleMVP",
      image: "/demo-img.jpg",
      comment: "As a founder wearing many hats, having deals, notes, and team timelines together in StartwiseCRM made following up with leads so much easier.",
    }
  ];
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Trusted by fast-moving teams
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Startup teams love StartwiseCRM
        </h2>
      </div>
      <Carousel opts={{ align: "start" }} className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <CarouselContent>
          {testimonials.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>
                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}