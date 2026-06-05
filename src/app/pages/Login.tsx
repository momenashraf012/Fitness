import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react';
import AuthHeader from '../components/layout/AuthHeader';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // مسح الأخطاء عند الكتابة
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من البيانات
    if (!formData.email || !formData.password) {
      setError('يرجى ملء جميع الحقول');
      return;
    }

    setIsLoading(true);
    setError('');

    // محاكاة طلب API
    setTimeout(() => {
      setIsLoading(false);
      // يمكن إضافة معالجة الأخطاء هنا
      alert('تم تسجيل الدخول بنجاح!');
    }, 1500);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500 selection:text-zinc-950 flex flex-col">
      {/* Header محسّن */}
      <AuthHeader isLogin={true} />

      {/* محتوى الصفحة */}
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* البطاقة الرئيسية */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            {/* العنوان */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-center"
            >
              <h1 className="text-3xl font-bold text-white mb-2">مرحباً بعودتك</h1>
              <p className="text-zinc-400">قم بتسجيل الدخول للوصول إلى حسابك</p>
            </motion.div>

            {/* رسالة الخطأ */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{error}</p>
              </motion.div>
            )}

            {/* النموذج */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* حقل البريد الإلكتروني */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </motion.div>

              {/* حقل كلمة المرور */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  كلمة المرور
                </label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-yellow-500 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* خيارات إضافية */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-between text-sm"
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-white/5 border border-white/10 rounded checked:bg-yellow-500 checked:border-yellow-500 cursor-pointer"
                  />
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    تذكرني
                  </span>
                </label>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
                >
                  هل نسيت كلمة المرور؟
                </a>
              </motion.div>

              {/* زر تسجيل الدخول */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 disabled:cursor-not-allowed text-zinc-950 text-lg font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin"></div>
                    جاري التحقق...
                  </>
                ) : (
                  <>
                    تسجيل الدخول
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            {/* فاصل */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-zinc-900/50 text-zinc-500">أو</span>
              </div>
            </motion.div>

            {/* خيارات التسجيل الاجتماعي */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl transition-all">
                Google
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl transition-all">
                Facebook
              </button>
            </motion.div>

            {/* رابط التسجيل */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-center text-zinc-400"
            >
              ليس لديك حساب؟{' '}
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-400 font-bold transition-colors"
              >
                اشترك الآن
              </a>
            </motion.div>
          </div>

          {/* نص معلومات */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center text-zinc-500 text-sm mt-6"
          >
            من خلال تسجيل الدخول، أنت توافق على{' '}
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              الشروط والأحكام
            </a>
          </motion.p>
        </motion.div>
      </div>

      {/* Footer بسيط */}
      <footer className="border-t border-white/10 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          © 2024 أيرون فيت. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
