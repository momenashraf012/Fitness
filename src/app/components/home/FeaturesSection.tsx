import { motion } from 'motion/react';
import { FEATURES } from '../../../constants/home-data';
import { getIcon } from '../../../utils/icons';

export default function FeaturesSection() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <Header />
        <FeaturesGrid />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        لماذا تختار <span className="text-yellow-500">أيرون فيت؟</span>
      </h2>
      <p className="text-zinc-400 text-lg">
        نوفر لك بيئة متكاملة تجمع بين أحدث التقنيات الرياضية والخبرات الاحترافية لتصل إلى هدفك بأسرع وقت.
      </p>
    </div>
  );
}

function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {FEATURES.map((feature, i) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-colors group"
        >
          <IconBox icon={feature.icon} />
          <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
          <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

interface IconBoxProps {
  icon: string;
}

function IconBox({ icon }: IconBoxProps) {
  return (
    <div className="bg-yellow-500/10 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
      {getIcon(icon as any)}
    </div>
  );
}
