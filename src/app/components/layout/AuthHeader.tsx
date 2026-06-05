import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Dumbbell, ArrowRight } from 'lucide-react';

interface AuthHeaderProps {
  isLogin?: boolean;
}

export default function AuthHeader({ isLogin = true }: AuthHeaderProps) {
  return (
    <header className="border-b border-white/5 py-6 sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* الشعار والعلامة التجارية */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-yellow-500 p-2.5 rounded-lg text-zinc-950 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white hidden sm:inline">
                  أيرون<span className="text-yellow-500">فيت</span>
                </span>
                <span className="text-sm text-zinc-400">النادي الرياضي الأول</span>
              </div>
            </Link>
          </motion.div>

          {/* الملاح الوسطي */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <a
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-500 transition-colors"
            >
              عن الجيم
            </a>
            <a
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-500 transition-colors"
            >
              البرامج
            </a>
            <a
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-500 transition-colors"
            >
              الأسعار
            </a>
          </motion.nav>

          {/* الزر البديل */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {isLogin ? (
              <>
                {/* إذا كنت في صفحة الدخول، أظهر زر التسجيل */}
                <Link
                  to="/register"
                  className="hidden sm:inline-flex text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors items-center gap-2 group"
                >
                  اشترك الآن
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            ) : (
              <>
                {/* إذا كنت في صفحة التسجيل، أظهر زر الدخول */}
                <Link
                  to="/login"
                  className="hidden sm:inline-flex text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors items-center gap-2 group"
                >
                  تسجيل الدخول
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            )}

            {/* الزر الأساسي للعودة للرئيسية */}
            <Link
              to="/"
              className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-sm font-bold py-2.5 px-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              الرئيسية
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* شريط معلومات في الأسفل */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent border-t border-yellow-500/20 py-3"
      >
        <div className="container mx-auto px-6">
          <p className="text-sm text-zinc-300">
            💪 انضم لأكثر من{' '}
            <span className="text-yellow-500 font-bold">2000 عضو</span> يثقون بنا
          </p>
        </div>
      </motion.div>
    </header>
  );
}
