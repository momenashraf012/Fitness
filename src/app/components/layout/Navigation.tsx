import { Link } from 'react-router';
import { Dumbbell, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../../constants/navigation';
import { useMobileMenu } from '../../../hooks/useMobileMenu';
import MobileMenu from './MobileMenu';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const { isOpen, open, close } = useMobileMenu();

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <NavActions />
          <MobileMenuButton onClick={open} />
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-yellow-500 p-2 rounded-lg text-zinc-950">
        <Dumbbell className="w-6 h-6" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-white">
        أيرون<span className="text-yellow-500">فيت</span>
      </span>
    </div>
  );
}

function NavLinks() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        if (link.href.startsWith('/')) {
          return (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </Link>
          );
        }
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleAnchorClick(e, link.href)}
            className="text-sm font-medium text-zinc-300 hover:text-yellow-500 transition-colors"
          >
            {link.name}
          </a>
        );
      })}
      <Link
        to="/design-system"
        className="text-sm font-bold text-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20 px-3 py-1.5 rounded-full transition-colors border border-yellow-500/20"
      >
        نظام التصميم (UI)
      </Link>
    </div>
  );
}

function NavActions() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link
        to="/login"
        className="text-sm font-medium hover:text-yellow-500 transition-colors"
      >
        تسجيل الدخول
      </Link>
      <Link
        to="/register"
        className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-sm font-bold py-2.5 px-6 rounded-full transition-transform hover:scale-105"
      >
        انضم الآن
      </Link>
    </div>
  );
}

interface MobileMenuButtonProps {
  onClick: () => void;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="md:hidden text-zinc-300 hover:text-white"
      onClick={onClick}
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}
