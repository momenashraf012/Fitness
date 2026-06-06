import { Link } from 'react-router';
import { Dumbbell, Facebook, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import { FOOTER_LINKS } from '../../../constants/navigation';
import { CONTACT_INFO, WORK_HOURS } from '../../../constants/home-data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <BrandSection />
          <QuickLinksSection />
          <WorkHoursSection />
          <NewsletterSection />
        </div>
        <BottomSection />
      </div>
    </footer>
  );
}

function BrandSection() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-yellow-500 p-2 rounded-lg text-zinc-950">
          <Dumbbell className="w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">
          إيرون<span className="text-yellow-500">فيت</span>
        </span>
      </div>
      <p className="text-zinc-400 leading-relaxed mb-6">
        نحن لسنا مجرد صالة رياضية، نحن مجتمع يسعى دائمًا للوصول إلى أعلى مستويات اللياقة
        البدنية والصحة.
      </p>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  const socials = [
    { icon: Facebook, label: 'Facebook', href: CONTACT_INFO.socialMedia.facebook },
    { icon: Twitter, label: 'Twitter', href: CONTACT_INFO.socialMedia.twitter },
    { icon: Instagram, label: 'Instagram', href: CONTACT_INFO.socialMedia.instagram },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-zinc-950 transition-colors text-white"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

function QuickLinksSection() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
      <ul className="space-y-4">
        {FOOTER_LINKS.quick.map((link) => (
          <li key={link.name}>
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="text-zinc-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                {link.name}
              </Link>
            ) : (
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-zinc-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkHoursSection() {
  return (
    <div>
      <h4 className="text-lg font-bold text-white mb-6">مواعيد العمل</h4>
      <ul className="space-y-4 text-zinc-400">
        {WORK_HOURS.map((item) => (
          <li key={item.days} className="flex justify-between items-center border-b border-white/5 pb-2">
            <span>{item.days}</span>
            <span className="text-white font-medium">{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div>
      <h4 className="text-lg font-bold text-white mb-6">النشرة البريدية</h4>
      <p className="text-zinc-400 mb-4">
        اشترك ليصلك أحدث العروض والنصائح الرياضية.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-yellow-500 text-white transition-colors"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-4 py-3 rounded-xl font-bold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-zinc-500 text-sm">© 2026 إيرون فيت. جميع الحقوق محفوظة.</p>
      <div className="flex gap-6 text-sm text-zinc-500">
        {FOOTER_LINKS.bottom.map((link) => (
          <Link key={link.name} to={link.href} className="hover:text-white transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
