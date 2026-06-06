import { motion } from 'motion/react';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router';
import { IMAGES } from '../../../constants/images';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <Background />
      <Content />
    </section>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <ImageWithFallback
        src={IMAGES.hero}
        alt="Dark gym with weights"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
    </div>
  );
}

function Content() {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <Badge />
        <Title />
        <Description />
        <Actions />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
    >
      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
      <span className="text-sm font-medium text-zinc-300">أفضل نادي رياضي لعام 2024</span>
    </motion.div>
  );
}

function Title() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
    >
      اكتشف{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">
        قوتك الحقيقية
      </span>
      <br />
      وتجاوز كل الحدود
    </motion.h1>
  );
}

function Description() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
    >
      انضم إلى أقوى مجتمع رياضي في المنطقة. احصل على أفضل المعدات والمدربين المحترفين
      لتحقيق أهدافك وبناء جسم مثالي.
    </motion.p>
  );
}

function Actions() {
  const scrollToPrograms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center gap-4"
    >
      <Link
        to="/register"
        className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group"
      >
        ابدأ رحلتك الآن
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </Link>
      <a
        href="#programs"
        onClick={scrollToPrograms}
        className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
      >
        <PlayCircle className="w-5 h-5" />
        شاهد البرامج
      </a>
    </motion.div>
  );
}
