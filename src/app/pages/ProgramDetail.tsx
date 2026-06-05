import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { PROGRAMS } from '../../constants/home-data';
import { IMAGES } from '../../constants/images';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/layout/Footer';

export default function ProgramDetail() {
  const { programId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  const program = PROGRAMS.find(p => p.id === programId);

  if (!program) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">البرنامج غير موجود</h1>
          <button
            onClick={() => navigate('/')}
            className="text-yellow-500 font-medium hover:gap-2 transition-all flex items-center justify-center gap-1 mx-auto"
          >
            العودة للرئيسية
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen">
      <Header program={program} onBack={() => navigate('/')} />
      <div className="bg-zinc-950">
        <BenefitsSection program={program} />
        <ScheduleSection program={program} />
        <CTASection program={program} />
      </div>
      <Footer />
    </div>
  );
}

interface ProgramDetailHeaderProps {
  program: (typeof PROGRAMS)[0];
  onBack: () => void;
}

function Header({ program, onBack }: ProgramDetailHeaderProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Professional Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <ImageWithFallback
          src={IMAGES[program.imageKey]}
          alt={program.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlays - Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

        {/* Enhanced Accent Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white hover:text-yellow-500 transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/15 border border-white/10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>العودة</span>
      </motion.button>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-sm font-medium text-zinc-300">برنامج متخصص</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            ابدأ مع <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">{program.title}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
          >
            {program.longDescription}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-10 max-w-xl"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">{program.difficulty}</p>
              <p className="text-xs text-zinc-400">مستوى التدريب</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">90م</p>
              <p className="text-xs text-zinc-400">مدة الفصل</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">{program.price}﷼</p>
              <p className="text-xs text-zinc-400">السعر</p>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group">
              ابدأ رحلتك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              استكشف المزيد
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ComponentType<{ className: string }>;
  label: string;
  value: string;
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-4"
    >
      <Icon className="w-5 h-5 text-yellow-500 mb-3" />
      <p className="text-xs text-zinc-400 mb-1">{label}</p>
      <p className="text-sm font-bold text-white">{value}</p>
    </motion.div>
  );
}

interface BenefitsSectionProps {
  program: (typeof PROGRAMS)[0];
}

function BenefitsSection({ program }: BenefitsSectionProps) {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">فوائد البرنامج</h2>
            <p className="text-zinc-400 text-lg">
              اكتشف كيف سيغير هذا البرنامج حياتك البدنية والذهنية
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {program.benefits?.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                    <CheckCircle className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ScheduleSectionProps {
  program: (typeof PROGRAMS)[0];
}

function ScheduleSection({ program }: ScheduleSectionProps) {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">جدول الفصول</h2>
            <p className="text-zinc-400 text-lg">
              اختر الموعد المناسب لك من جدولنا المرن
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <div className="space-y-4">
            {program.schedule?.map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all"
              >
                <div className="grid md:grid-cols-5 gap-6">
                  <div>
                    <p className="text-xs text-zinc-400 mb-2">اليوم</p>
                    <p className="text-lg font-bold text-white">{session.day}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-2">الوقت</p>
                    <p className="text-lg font-bold text-white">{session.time}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-2">المدرب</p>
                    <p className="text-lg font-bold text-white">{session.trainer}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-2">المدة</p>
                    <p className="text-lg font-bold text-yellow-400">{session.duration}</p>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 hover:text-zinc-950 font-bold py-3 px-4 rounded-lg transition-all">
                      احجز الآن
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CTASectionProps {
  program: (typeof PROGRAMS)[0];
}

function CTASection({ program }: CTASectionProps) {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/20 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت مستعد للتغيير؟
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              انضم إلى مئات الأعضاء الذين غيّروا حياتهم من خلال برنامج {program.title}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 group">
                ابدأ الآن - {program.price} ريال فقط
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-10 rounded-full backdrop-blur-sm transition-all">
                اطلب استشارة مجانية
              </button>
            </div>

            <p className="text-sm text-zinc-500 mt-8">
              لا توجد عقود طويلة الأجل - ألغ اشتراكك في أي وقت
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
