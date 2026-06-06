import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { PROGRAMS } from '../../../constants/home-data';
import { IMAGES } from '../../../constants/images';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-zinc-900 relative overflow-hidden">
      <Backdrop />
      <div className="container mx-auto px-6 relative z-10">
        <Header />
        <ProgramsGrid />
        <ViewAllButton />
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
  );
}

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">برامجنا التدريبية</h2>
        <p className="text-zinc-400 text-lg">
          مهما كان هدفك، لدينا البرنامج المناسب لك. انضم إلى فصولنا الجماعية المليئة بالحماس
          والطاقة.
        </p>
      </div>
      <Link
        to="/classes"
        className="hidden md:flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all"
      >
        عرض كل البرامج
        <ArrowLeft className="w-5 h-5" />
      </Link>
    </div>
  );
}

function ProgramsGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {PROGRAMS.map((program, i) => (
        <motion.div
          key={program.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          onClick={() => navigate(`/programs/${program.id}`)}
          className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
        >
          <ProgramImage image={IMAGES[program.imageKey]} title={program.title} />
          <ProgramContent program={program} />
        </motion.div>
      ))}
    </div>
  );
}

interface ProgramImageProps {
  image: string;
  title: string;
}

function ProgramImage({ image, title }: ProgramImageProps) {
  return (
    <>
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    </>
  );
}

interface ProgramContentProps {
  program: (typeof PROGRAMS)[0];
}

function ProgramContent({ program }: ProgramContentProps) {
  return (
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="flex flex-wrap gap-2 mb-4">
        {program.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">
        {program.title}
      </h3>
      <div className="flex items-center gap-2 text-yellow-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 delay-75">
        <span>انضم للكلاس</span>
        <ArrowLeft className="w-4 h-4" />
      </div>
    </div>
  );
}

function ViewAllButton() {
  return (
    <Link
      to="/classes"
      className="w-full mt-10 md:hidden flex items-center justify-center gap-2 text-yellow-500 font-bold border border-yellow-500/30 rounded-xl py-4 bg-yellow-500/5"
    >
      عرض كل البرامج
      <ArrowLeft className="w-5 h-5" />
    </Link>
  );
}
