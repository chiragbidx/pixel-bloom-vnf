import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";

const { faq } = getHomeContent();

export const LayoutFaqSection = () => (
  <section id="faq" className="container py-24 sm:py-32">
    <div className="text-center mb-8">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">{faq.eyebrow}</h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">{faq.heading}</h2>
    </div>
    <div className="max-w-2xl mx-auto space-y-6">
      {faq.items.map((item, i) => (
        <div key={item.question}>
          <div className="font-semibold mb-2">{item.question}</div>
          <div className="text-muted-foreground">{item.answer}</div>
          {i < faq.items.length - 1 && <div className="my-4 border-t border-muted-foreground/30" />}
        </div>
      ))}
    </div>
  </section>
);