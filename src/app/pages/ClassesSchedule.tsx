import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, Calendar, Clock, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CLASSES, PROGRAMS } from '../../constants/home-data';
import { IMAGES } from '../../constants/images';
import Footer from '../components/layout/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type FilterType = 'all' | 'الكروس فيت' | 'الملاكمة' | 'اليوجا';

const DAYS_ORDER = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

export default function ClassesSchedule() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredClasses = useMemo(() => {
    if (selectedFilter === 'all') {
      return CLASSES;
    }
    return CLASSES.filter(c => c.program === selectedFilter);
  }, [selectedFilter]);

  const sortedClasses = useMemo(() => {
    return [...filteredClasses].sort((a, b) => {
      const dayIndexA = DAYS_ORDER.indexOf(a.day);
      const dayIndexB = DAYS_ORDER.indexOf(b.day);
      if (dayIndexA !== dayIndexB) return dayIndexA - dayIndexB;
      return a.time.localeCompare(b.time);
    });
  }, [filteredClasses]);

  const groupedByDay = useMemo(() => {
    const groups: Record<string, typeof CLASSES> = {};
    sortedClasses.forEach(cls => {
      if (!groups[cls.day]) {
        groups[cls.day] = [];
      }
      groups[cls.day].push(cls);
    });
    return groups;
  }, [sortedClasses]);

  return (
    <div dir="rtl" className="bg-zinc-950 min-h-screen">
      <Header onBack={() => navigate('/')} />
      <FiltersSection selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      <ScheduleSection groupedByDay={groupedByDay} />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Professional Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <ImageWithFallback
          src={IMAGES.hero}
          alt="Classes schedule"
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
            <span className="text-sm font-medium text-zinc-300">جدول الفصول</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            اختر <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">فصلك المفضل</span><br />
            وابدأ الآن
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
          >
            انضم إلى مئات الأعضاء الذين يحققون أهدافهم في فصولنا المختلفة بأوقات مناسبة لك
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-10 max-w-xl"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">{CLASSES.length}</p>
              <p className="text-xs text-zinc-400">فصل أسبوعي</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">6</p>
              <p className="text-xs text-zinc-400">أيام بالأسبوع</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4">
              <p className="text-2xl font-bold text-yellow-400">3</p>
              <p className="text-xs text-zinc-400">برامج</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group">
              احجز فصلك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FiltersSectionProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function FiltersSection({ selectedFilter, onFilterChange }: FiltersSectionProps) {
  const filters: Array<{ label: string; value: FilterType }> = [
    { label: 'جميع الفصول', value: 'all' },
    { label: 'الكروس فيت', value: 'الكروس فيت' },
    { label: 'الملاكمة', value: 'الملاكمة' },
    { label: 'اليوجا', value: 'اليوجا' }
  ];

  return (
    <section className="py-8 px-6 bg-zinc-950 border-b border-white/5 sticky top-20 z-40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 overflow-x-auto pb-2"
        >
          <Filter className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <div className="flex gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onFilterChange(filter.value)}
                className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedFilter === filter.value
                    ? 'bg-yellow-500 text-zinc-950'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ScheduleSectionProps {
  groupedByDay: Record<string, typeof CLASSES>;
}

function ScheduleSection({ groupedByDay }: ScheduleSectionProps) {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Backdrop */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-16">
          {DAYS_ORDER.map((day) => {
            const dayClasses = groupedByDay[day];
            if (!dayClasses || dayClasses.length === 0) return null;

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-6">
                  <Calendar className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-3xl font-bold text-white">{day}</h2>
                  <span className="text-zinc-400 text-sm">({dayClasses.length} فصول)</span>
                </div>

                {/* Classes Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {dayClasses.map((cls, i) => (
                    <motion.div
                      key={cls.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative rounded-3xl p-8 bg-zinc-900 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
                    >
                      {/* Program Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                          {cls.program}
                        </span>
                      </div>

                      {/* Level Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                          cls.level === 'مبتدئ' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          cls.level === 'متوسط' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          'bg-red-500/20 text-red-400 border-red-500/30'
                        }`}>
                          {cls.level}
                        </span>
                      </div>

                      {/* Time Header */}
                      <div className="mb-4 pt-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-yellow-400" />
                          <span className="text-xl font-bold text-white">{cls.time} - {cls.endTime}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{cls.description}</p>

                      {/* Trainer Info */}
                      <div className="mb-6 pb-6 border-b border-white/5">
                        <p className="text-xs text-zinc-500 mb-2">المدرب</p>
                        <p className="font-semibold text-white text-sm">{cls.trainer}</p>
                      </div>

                      {/* Capacity and Level */}
                      <div className="space-y-4 mb-8">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-xs text-zinc-500">الحضور</p>
                            <p className="font-semibold text-white text-sm">{cls.enrolled}/{cls.capacity}</p>
                          </div>
                          <div className="w-full bg-zinc-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full"
                              style={{
                                width: `${(cls.enrolled / cls.capacity) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 rounded-xl font-bold transition-all ${
                          cls.enrolled >= cls.capacity
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            : 'bg-yellow-500 hover:bg-yellow-400 text-zinc-950'
                        }`}
                        disabled={cls.enrolled >= cls.capacity}
                      >
                        {cls.enrolled >= cls.capacity ? 'الفصل ممتلئ' : 'احجز الآن'}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
              لم تجد الفصل المناسب؟
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              تواصل مع فريقنا وسنساعدك في اختيار أفضل برنامج يناسب احتياجاتك وأهدافك
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 group">
                احجز استشارة مجانية
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-10 rounded-full backdrop-blur-sm transition-all">
                تواصل معنا
              </button>
            </div>

            <p className="text-sm text-zinc-500 mt-8">
              متوفر على مدار الأسبوع - رد سريع وخدمة عملاء متميزة
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
