import { motion } from 'motion/react';
import { BadgeCheck, Clock3, ShieldCheck } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'مدربون معتمدون',
    description: 'فريق محترف يساعدك بخطة واضحة تناسب مستواك وهدفك.',
  },
  {
    icon: Clock3,
    title: 'جداول مرنة',
    description: 'حصص صباحية ومسائية حتى تقدر تلتزم بسهولة داخل يومك.',
  },
  {
    icon: BadgeCheck,
    title: 'متابعة حقيقية',
    description: 'نقيس التقدم ونعدل الخطة باستمرار بدل التمرين العشوائي.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-10 bg-zinc-900/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-2xl bg-yellow-500/10 p-3 text-yellow-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
