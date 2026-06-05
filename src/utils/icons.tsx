import {
  Dumbbell,
  Users,
  HeartPulse,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

type IconName = 'Dumbbell' | 'Users' | 'HeartPulse';

export const getIcon = (name: IconName, className = 'w-8 h-8') => {
  const icons: Record<IconName, React.ReactNode> = {
    Dumbbell: <Dumbbell className={className} />,
    Users: <Users className={className} />,
    HeartPulse: <HeartPulse className={className} />
  };
  return icons[name];
};

export const socialIcons = {
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />
};
