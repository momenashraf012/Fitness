import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../../../constants/home-data';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <Header />
        <PricingGrid />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">اختر الباقة المناسبة لك</h2>
      <p className="text-zinc-400 text-lg">
        باقات مرنة تناسب احتياجاتك وميزانيتك، بدون رسوم خفية.
      </p>
    </div>
  );
}

function PricingGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {PRICING_PLANS.map((plan, i) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className={`relative rounded-3xl p-8 ${
            plan.isPopular
              ? 'bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-yellow-500 transform md:-translate-y-4'
              : 'bg-zinc-900 border border-white/10'
          }`}
        >
          {plan.isPopular && <PopularBadge />}
          <PlanHeader plan={plan} />
          <PlanFeatures features={plan.features} />
          <PlanButton isPopular={plan.isPopular} />
        </motion.div>
      ))}
    </div>
  );
}

function PopularBadge() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-zinc-950 text-sm font-bold px-4 py-1 rounded-full">
      الأكثر طلباً
    </div>
  );
}

interface PlanHeaderProps {
  plan: (typeof PRICING_PLANS)[0];
}

function PlanHeader({ plan }: PlanHeaderProps) {
  return (
    <>
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold">{plan.price}</span>
        <span className="text-zinc-400">ريال / {plan.period}</span>
      </div>
    </>
  );
}

interface PlanFeaturesProps {
  features: string[];
}

function PlanFeatures({ features }: PlanFeaturesProps) {
  return (
    <ul className="space-y-4 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="bg-yellow-500/20 text-yellow-500 p-1 rounded-full shrink-0 mt-0.5">
            <Check className="w-3 h-3" />
          </div>
          <span className="text-zinc-300">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

interface PlanButtonProps {
  isPopular: boolean;
}

function PlanButton({ isPopular }: PlanButtonProps) {
  return (
    <button
      className={`w-full py-4 rounded-xl font-bold transition-all ${
        isPopular
          ? 'bg-yellow-500 hover:bg-yellow-400 text-zinc-950'
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
    >
      اشترك الآن
    </button>
  );
}
