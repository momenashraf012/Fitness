import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, X } from 'lucide-react';
import { NAV_LINKS } from '../../../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-50 bg-zinc-950 flex flex-col p-6"
        >
          <Header onClose={onClose} />
          <MenuLinks onClose={onClose} />
          <Footer onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface HeaderProps {
  onClose: () => void;
}

function Header({ onClose }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500 p-2 rounded-lg text-zinc-950">
          <Dumbbell className="w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">
          أيرون<span className="text-yellow-500">فيت</span>
        </span>
      </div>
      <button
        className="text-zinc-300 hover:text-white bg-white/5 p-2 rounded-full"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}

interface MenuLinksProps {
  onClose: () => void;
}

function MenuLinks({ onClose }: MenuLinksProps) {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  return (
    <div className="flex flex-col gap-6 text-lg font-medium">
      {NAV_LINKS.map((link) => {
        if (link.href.startsWith('/')) {
          return (
            <Link
              key={link.name}
              to={link.href}
              className="border-b border-white/10 pb-4 text-zinc-300 hover:text-yellow-500"
              onClick={onClose}
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
            className="border-b border-white/10 pb-4 text-zinc-300 hover:text-yellow-500"
          >
            {link.name}
          </a>
        );
      })}
      <Link
        to="/design-system"
        className="border-b border-white/10 pb-4 text-yellow-500"
        onClick={onClose}
      >
        نظام التصميم (UI Kit)
      </Link>
    </div>
  );
}

interface FooterProps {
  onClose?: () => void;
}

function Footer({ onClose }: FooterProps = {}) {
  return (
    <div className="mt-auto flex flex-col gap-4">
      <Link
        to="/register"
        onClick={onClose}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 rounded-xl text-center transition-all hover:scale-105"
      >
        انضم الآن
      </Link>
    </div>
  );
}
