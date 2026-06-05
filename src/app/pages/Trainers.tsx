import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Briefcase, Award, Users, Facebook, Twitter, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router';
import { TRAINERS } from '../../constants/home-data';
import { IMAGES } from '../../constants/images';
import Footer from '../components/layout/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Trainers() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dir="rtl" className="bg-zinc-950 min-h-screen">
      <Header onBack={() => navigate('/')} />
      <TrainersGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6 pt-20 overflow-hidden">
      {/* Premium Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <ImageWithFallback
          src={IMAGES.trainer}
          alt="Professional trainers"
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
            <span className="text-sm font-medium text-zinc-300">فريقنا المحترف</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            تعرف على <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">مدربينا المحترفين</span><br />
            وابدأ رحلتك معهم
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
          >
            فريق من المدربين المعتمدين والمحترفين الذين سيساعدونك على تحقيق أهدافك البدنية وبناء أفضل نسخة من نفسك.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-10 max-w-xl"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">{TRAINERS.length}</p>
              <p className="text-xs text-zinc-400">مدرب محترف</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">100+</p>
              <p className="text-xs text-zinc-400">سنة خبرة</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">4.8★</p>
              <p className="text-xs text-zinc-400">التقييم</p>
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
              استكشف الفريق
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrainersGrid() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-zinc-800 group">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-zinc-950 rounded-full px-3 py-1 flex items-center gap-1 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  {trainer.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name and Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-yellow-400 font-medium mb-6">{trainer.title}</p>

                {/* Experience and Reviews */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/5">
                  <div>
                    <p className="text-xs text-zinc-500 mb-1">الخبرة</p>
                    <p className="font-semibold text-white text-sm">{trainer.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-1">التقييمات</p>
                    <p className="font-semibold text-white text-sm">{trainer.reviews}+</p>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{trainer.specialty}</p>

                {/* Programs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.programs.map((program) => (
                    <span
                      key={program}
                      className="text-xs bg-yellow-500/20 text-yellow-400 rounded-full px-3 py-1 border border-yellow-500/30"
                    >
                      {program}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-6">
                  <a
                    href={trainer.socialMedia.instagram}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-zinc-950 transition-all text-white"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.socialMedia.twitter}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-zinc-950 transition-all text-white"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.socialMedia.facebook}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-zinc-950 transition-all text-white"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold py-4 rounded-xl transition-all"
                >
                  احجز جلسة
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
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
              جاهز للبدء مع أحد مدربينا؟
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              احجز جلسة استشارة مجانية مع المدرب المناسب لك وابدأ رحلتك نحو اللياقة البدنية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 group">
                احجز استشارة الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-10 rounded-full backdrop-blur-sm transition-all">
                تعرف على أكثر
              </button>
            </div>

            <p className="text-sm text-zinc-500 mt-8">
              أول جلسة استشارة مجانية - بدون التزام
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
