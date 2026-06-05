import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import AuthHeader from '../components/layout/AuthHeader';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // مسح الأخطاء
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من البيانات
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة!');
      return;
    }

    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      return;
    }

    if (!agreedToTerms) {
      setError('يجب الموافقة على الشروط والأحكام');
      return;
    }

    setIsLoading(true);
    setError('');

    // محاكاة طلب API
    setTimeout(() => {
      setIsLoading(false);
      alert('تم التسجيل بنجاح! سيتم إعادة توجيهك قريباً');
    }, 1500);
  };

  const passwordStrength = formData.password.length > 0
    ? formData.password.length < 6
      ? 'ضعيفة'
      : formData.password.length < 10
      ? 'متوسطة'
      : 'قوية'
    : '';

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'ضعيفة': return 'bg-red-500';
      case 'متوسطة': return 'bg-yellow-500';
      case 'قوية': return 'bg-green-500';
      default: return 'bg-zinc-500';
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500 selection:text-zinc-950 flex flex-col">
      {/* Header محسّن */}
      <AuthHeader isLogin={false} />

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
              <h1 className="text-3xl font-bold text-white mb-2">انضم إلينا</h1>
              <p className="text-zinc-400">ابدأ رحلتك نحو اللياقة البدنية</p>
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* حقل الاسم */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أحمد محمد"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </motion.div>

              {/* حقل البريد الإلكتروني */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
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

              {/* حقل الهاتف */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  رقم الهاتف
                </label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 50 1234567"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </motion.div>

              {/* حقل كلمة المرور */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
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
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwordStrength && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className={`h-1 flex-1 rounded-full ${getStrengthColor()}`}></div>
                    <span className="text-xs text-zinc-400">{passwordStrength}</span>
                  </div>
                )}
              </motion.div>

              {/* تأكيد كلمة المرور */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-yellow-500 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="mt-2 flex items-center gap-2 text-green-500 text-sm">
                    <Check className="w-4 h-4" />
                    كلمات المرور متطابقة
                  </div>
                )}
              </motion.div>

              {/* الموافقة على الشروط */}
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 mt-1 bg-white/5 border border-white/10 rounded checked:bg-yellow-500 checked:border-yellow-500 cursor-pointer"
                />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  أوافق على{' '}
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    الشروط والأحكام
                  </a>{' '}
                  و{' '}
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    سياسة الخصوصية
                  </a>
                </span>
              </motion.label>

              {/* زر التسجيل */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 disabled:cursor-not-allowed text-zinc-950 text-lg font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin"></div>
                    جاري التسجيل...
                  </>
                ) : (
                  <>
                    اشترك الآن
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            {/* رابط تسجيل الدخول */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 text-center text-zinc-400"
            >
              لديك حساب بالفعل؟{' '}
              <Link
                to="/login"
                className="text-yellow-500 hover:text-yellow-400 font-bold transition-colors"
              >
                تسجيل الدخول
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          © 2024 أيرون فيت. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
