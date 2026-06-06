import { Link } from 'react-router';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed inset-x-4 bottom-4 z-50">
      <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            تواصل معنا
          </Link>
          <Link
            to="/register"
            className="flex-1 rounded-xl bg-yellow-500 px-4 py-3 text-center text-sm font-bold text-zinc-950 transition-colors hover:bg-yellow-400 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            احجز الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
