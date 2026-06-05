import { Link } from 'react-router';
import { 
  ArrowRight, 
  Palette, 
  Type, 
  MousePointerClick, 
  Layout,
  Check,
  Dumbbell
} from 'lucide-react';

export default function DesignSystem() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500 selection:text-zinc-950 pb-24">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-white/10 py-8 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">نظام التصميم (Design System)</h1>
            <p className="text-zinc-400">الدليل الإرشادي للألوان، الخطوط، والمكونات المستخدمة في الموقع.</p>
          </div>
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors text-white text-sm font-medium"
          >
            العودة للرئيسية
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 mt-12 space-y-24">
        
        {/* Colors Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Palette className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">الألوان (Colors)</h2>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium text-zinc-400 mb-4">اللون الأساسي (Primary)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Yellow 400', class: 'bg-yellow-400', hex: '#facc15' },
                  { name: 'Yellow 500', class: 'bg-yellow-500', hex: '#eab308' },
                  { name: 'Yellow 600', class: 'bg-yellow-600', hex: '#ca8a04' },
                ].map(color => (
                  <div key={color.name} className="space-y-2">
                    <div className={`h-24 rounded-2xl ${color.class} shadow-lg border border-white/10`}></div>
                    <div className="text-sm font-bold">{color.name}</div>
                    <div className="text-xs text-zinc-500 font-mono">{color.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-zinc-400 mb-4">الخلفيات والنصوص (Neutrals)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'Zinc 950', class: 'bg-zinc-950', hex: '#09090b', desc: 'Main BG' },
                  { name: 'Zinc 900', class: 'bg-zinc-900', hex: '#18181b', desc: 'Card BG' },
                  { name: 'Zinc 800', class: 'bg-zinc-800', hex: '#27272a', desc: 'Borders' },
                  { name: 'Zinc 400', class: 'bg-zinc-400', hex: '#a1a1aa', desc: 'Secondary Text' },
                  { name: 'White', class: 'bg-white', hex: '#ffffff', desc: 'Primary Text' },
                ].map(color => (
                  <div key={color.name} className="space-y-2">
                    <div className={`h-24 rounded-2xl ${color.class} shadow-lg border border-white/10`}></div>
                    <div className="text-sm font-bold">{color.name}</div>
                    <div className="text-xs text-zinc-500">{color.desc}</div>
                    <div className="text-xs text-zinc-600 font-mono">{color.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Type className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">الخطوط (Typography)</h2>
          </div>
          
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 space-y-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <div className="text-xs text-yellow-500 font-bold tracking-wider mb-2">FONT FAMILY</div>
                <div className="text-3xl">Cairo (كايرو)</div>
              </div>
              <div className="text-right text-zinc-400 text-sm">
                وزن الخط: 300, 400, 600, 700, 800
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-4 items-baseline">
                <div className="text-zinc-500 text-sm">Hero Heading (H1)</div>
                <div className="md:col-span-3">
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">اكتشف قوتك الحقيقية</h1>
                  <div className="text-xs text-zinc-500 font-mono mt-2">text-5xl md:text-7xl font-extrabold</div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 items-baseline">
                <div className="text-zinc-500 text-sm">Section Title (H2)</div>
                <div className="md:col-span-3">
                  <h2 className="text-3xl md:text-5xl font-bold">لماذا تختار أيرون فيت؟</h2>
                  <div className="text-xs text-zinc-500 font-mono mt-2">text-3xl md:text-5xl font-bold</div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 items-baseline">
                <div className="text-zinc-500 text-sm">Card Title (H3)</div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold">معدات حديثة</h3>
                  <div className="text-xs text-zinc-500 font-mono mt-2">text-2xl font-bold</div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 items-baseline">
                <div className="text-zinc-500 text-sm">Body Text (p)</div>
                <div className="md:col-span-3">
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    نقدم لك خططاً غذائية متكاملة ومتابعة دورية لقياس نسبة الدهون والعضلات في جسمك. فريقنا متواجد دائماً لدعمك.
                  </p>
                  <div className="text-xs text-zinc-500 font-mono mt-2">text-lg text-zinc-400 leading-relaxed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <MousePointerClick className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">الأزرار والتفاعلات (Buttons & Interactions)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col gap-8 items-start">
              <div>
                <div className="text-sm text-zinc-500 mb-4">الزر الأساسي (Primary Button)</div>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2">
                  احجز تجربتك المجانية
                </button>
              </div>

              <div>
                <div className="text-sm text-zinc-500 mb-4">زر ثانوي (Secondary Button)</div>
                <button className="bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all">
                  شاهد الجيم
                </button>
              </div>

              <div>
                <div className="text-sm text-zinc-500 mb-4">زر نصي (Text Button)</div>
                <button className="flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all">
                  عرض كل البرامج
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col gap-8 items-start">
              <div>
                <div className="text-sm text-zinc-500 mb-4">مدخل البريد الإلكتروني (Input)</div>
                <div className="flex gap-2 max-w-sm w-full">
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-yellow-500 text-white transition-colors"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-4 py-3 rounded-xl font-bold transition-colors">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              </div>

              <div>
                <div className="text-sm text-zinc-500 mb-4">شريط التصفح (Nav Links)</div>
                <div className="flex gap-6 p-4 bg-zinc-950 rounded-xl border border-white/5">
                  <a href="#" className="text-sm font-medium text-yellow-500">الرئيسية (نشط)</a>
                  <a href="#" className="text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors">عن الجيم</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Elements & Cards */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Layout className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">البطاقات والمكونات (Cards & Components)</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature Card */}
            <div>
              <div className="text-sm text-zinc-500 mb-4">بطاقة المميزات (Feature Card)</div>
              <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-colors group max-w-sm">
                <div className="bg-yellow-500/10 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">معدات حديثة</h3>
                <p className="text-zinc-400 leading-relaxed">
                  صالتنا مجهزة بأحدث الأجهزة الرياضية من أفضل الماركات العالمية لضمان تجربة تمرين مثالية وآمنة.
                </p>
              </div>
            </div>

            {/* Pricing Card */}
            <div>
              <div className="text-sm text-zinc-500 mb-4">بطاقة الأسعار (Pricing Card)</div>
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-yellow-500 rounded-3xl p-8 max-w-sm relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-zinc-950 text-sm font-bold px-4 py-1 rounded-full">
                  الأكثر طلباً
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">المحترفين</h3>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold">499</span>
                  <span className="text-zinc-400">ريال / شهرياً</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-yellow-500/20 text-yellow-500 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-zinc-300">الدخول لجميع الفصول الجماعية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-yellow-500/20 text-yellow-500 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-zinc-300">خطة غذائية مخصصة</span>
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl font-bold bg-yellow-500 hover:bg-yellow-400 text-zinc-950 transition-all">
                  اشترك الآن
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}