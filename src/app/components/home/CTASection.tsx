import { Link } from 'react-router';
import { IMAGES } from '../../../constants/images';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Background />
      <Content />
    </section>
  );
}

function Background() {
  return (
    <div className="absolute inset-0">
      <ImageWithFallback
        src={IMAGES.trainer}
        alt="Trainer showing exercises"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/90"></div>
    </div>
  );
}

function Content() {
  return (
    <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        جاهز لتغيير حياتك وبناء{' '}
        <span className="text-yellow-500">أفضل نسخة منك؟</span>
      </h2>
      <p className="text-xl text-zinc-300 mb-10">
        انضم إلينا اليوم واحصل على تقييم مجاني للياقتك البدنية وتجربة ليوم كامل.
      </p>
      <Link
        to="/register"
        className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-xl font-bold py-5 px-10 rounded-full transition-transform hover:scale-105"
      >
        احجز تجربتك المجانية
      </Link>
    </div>
  );
}
