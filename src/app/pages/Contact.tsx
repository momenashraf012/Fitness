import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock, MessageSquare, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CONTACT_INFO, CONTACT_REASONS, WORK_HOURS } from '../../constants/home-data';
import { IMAGES } from '../../constants/images';
import Footer from '../components/layout/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div dir="rtl" className="bg-zinc-950 min-h-screen">
      <Header onBack={() => navigate('/')} />
      <ContactContent formData={formData} onChange={handleChange} onSubmit={handleSubmit} submitted={submitted} />
      <ContactInfo />
      <WorkHours />
      <SocialMedia />
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
          alt="Contact us"
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
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-sm font-medium text-zinc-300">تواصل معنا</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">نحن هنا</span> لمساعدتك
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
          >
            لديك أسئلة أو استفسارات؟ فريقنا جاهز للرد عليك بسرعة وتقديم أفضل الخدمات والحلول المناسبة.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

interface ContactContentProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}

function ContactContent({ formData, onChange, onSubmit, submitted }: ContactContentProps) {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Premium Background Layer 1 - Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large blur circles */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/15 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, #fbbf24 25%, #fbbf24 26%, transparent 27%, transparent 74%, #fbbf24 75%, #fbbf24 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            كيف يمكننا <span className="text-yellow-500">مساعدتك؟</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            نحن هنا للإجابة على جميع أسئلتك والمساعدة في حل أي استفسارات قد تكون لديك
          </motion.p>
        </div>

        {/* Contact Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {CONTACT_REASONS.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900 transition-colors group"
            >
              <div className="bg-yellow-500/10 text-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{reason.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form & Info */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">أرسل لنا رسالة</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="+966 50 123 4567"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">الموضوع *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={onChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  {CONTACT_REASONS.map(reason => (
                    <option key={reason.id} value={reason.id} className="bg-zinc-900 text-white">
                      {reason.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">الرسالة *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="أخبرنا برسالتك..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                {submitted ? 'تم الإرسال بنجاح! ✓' : 'إرسال الرسالة'}
                {!submitted && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </motion.button>

              <p className="text-xs text-zinc-500 text-center">
                سنرد على رسالتك في أسرع وقت ممكن
              </p>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <motion.a
              href={`tel:${CONTACT_INFO.phone}`}
              whileHover={{ y: -5 }}
              className="block relative group overflow-hidden rounded-2xl p-6 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 z-0"></div>
              <div className="absolute inset-0 border border-yellow-500/30 rounded-2xl group-hover:border-yellow-400/60 transition-all z-0"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all z-0"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-400/40 to-yellow-500/20 rounded-xl p-3 border border-yellow-500/50">
                  <Phone className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">رقم الهاتف</h3>
                  <p className="text-yellow-300 font-semibold">{CONTACT_INFO.phone}</p>
                  <p className="text-zinc-300 text-sm mt-1">متوفر 24/7</p>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              whileHover={{ y: -5 }}
              className="block relative group overflow-hidden rounded-2xl p-6 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 z-0"></div>
              <div className="absolute inset-0 border border-yellow-500/30 rounded-2xl group-hover:border-yellow-400/60 transition-all z-0"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all z-0"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-400/40 to-yellow-500/20 rounded-xl p-3 border border-yellow-500/50">
                  <Mail className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">البريد الإلكتروني</h3>
                  <p className="text-yellow-300 font-semibold break-all">{CONTACT_INFO.email}</p>
                  <p className="text-zinc-300 text-sm mt-1">رد سريع</p>
                </div>
              </div>
            </motion.a>

            {/* Address */}
            <motion.a
              href={CONTACT_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="block relative group overflow-hidden rounded-2xl p-6 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 z-0"></div>
              <div className="absolute inset-0 border border-yellow-500/30 rounded-2xl group-hover:border-yellow-400/60 transition-all z-0"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all z-0"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-400/40 to-yellow-500/20 rounded-xl p-3 border border-yellow-500/50">
                  <MapPin className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">الموقع</h3>
                  <p className="text-yellow-300 font-semibold">{CONTACT_INFO.address}</p>
                  <p className="text-zinc-300 text-sm mt-1">افتح في الخريطة</p>
                </div>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={CONTACT_INFO.socialMedia.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="block relative group overflow-hidden rounded-2xl p-6 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/10 z-0"></div>
              <div className="absolute inset-0 border border-green-500/30 rounded-2xl group-hover:border-green-400/60 transition-all z-0"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all z-0"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-400/40 to-green-500/20 rounded-xl p-3 border border-green-500/50">
                  <MessageCircle className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">واتس آب</h3>
                  <p className="text-green-300 font-semibold">راسلنا مباشرة</p>
                  <p className="text-zinc-300 text-sm mt-1">رد فوري</p>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        {/* Large decorative circles */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/12 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-yellow-400/8 blur-[120px] rounded-full mix-blend-screen transform translate-x-1/2"></div>

        {/* Animated gradient lines */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
            <p className="text-zinc-400">هل تبحث عن إجابة سريعة؟</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {CONTACT_REASONS.map((reason, i) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-yellow-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-zinc-400">{reason.description}</p>
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

function WorkHours() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-yellow-400/8 blur-[120px] rounded-full mix-blend-screen transform -translate-x-1/3"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Accent line */}
        <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-yellow-500/30 via-yellow-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">مواعيد التواصل</h2>
            <p className="text-zinc-400">نحن متاحون لخدمتك طوال الوقت</p>
          </motion.div>

          <div className="space-y-4">
            {WORK_HOURS.map((hour, i) => (
              <motion.div
                key={hour.days}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex items-center justify-between hover:border-yellow-500/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold">{hour.days}</span>
                </div>
                <span className="text-yellow-400 font-bold">{hour.hours}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialMedia() {
  const socials = [
    { icon: Facebook, name: 'فيسبوك', link: CONTACT_INFO.socialMedia.facebook, color: 'bg-blue-600' },
    { icon: Twitter, name: 'تويتر', link: CONTACT_INFO.socialMedia.twitter, color: 'bg-blue-400' },
    { icon: Instagram, name: 'انستقرام', link: CONTACT_INFO.socialMedia.instagram, color: 'bg-pink-600' },
    { icon: MessageCircle, name: 'واتس آب', link: CONTACT_INFO.socialMedia.whatsapp, color: 'bg-green-600' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large decorative circles with gradient */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/15 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/8 blur-[120px] rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 24%, #fbbf24 25%, #fbbf24 26%, transparent 27%, transparent 74%, #fbbf24 75%, #fbbf24 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Horizontal accent lines */}
        <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">تابعنا على وسائل التواصل</h2>
            <p className="text-zinc-400">ابقَ على تواصل معنا للحصول على آخر الأخبار والعروض</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`${social.color} rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-white hover:shadow-lg transition-all`}
                >
                  <Icon className="w-10 h-10" />
                  <span className="font-bold text-sm">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
