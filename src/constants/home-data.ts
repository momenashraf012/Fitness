export const STATS = [
  { number: '+2000', label: 'عضو نشط' },
  { number: '+50', label: 'مدرب محترف' },
  { number: '+30', label: 'برنامج تدريبي' },
  { number: '24/7', label: 'ساعات العمل' }
];

export const FEATURES = [
  {
    id: 'equipment',
    icon: 'Dumbbell',
    title: 'معدات حديثة',
    desc: 'صالتنا مجهزة بأحدث الأجهزة الرياضية من أفضل الماركات العالمية لضمان تجربة تمرين مثالية وآمنة.'
  },
  {
    id: 'trainers',
    icon: 'Users',
    title: 'مدربون معتمدون',
    desc: 'فريق من المدربين المحترفين لمساعدتك في بناء خطة تدريبية مخصصة تناسب قدراتك وأهدافك.'
  },
  {
    id: 'nutrition',
    icon: 'HeartPulse',
    title: 'متابعة شاملة',
    desc: 'نقدم لك خططاً غذائية متكاملة ومتابعة دورية لقياس نسبة الدهون والعضلات في جسمك.'
  }
];

export const PROGRAMS = [
  {
    id: 'crossfit',
    imageKey: 'crossfit' as const,
    title: 'الكروس فيت',
    tags: ['قوة', 'لياقة', 'تحمل'],
    difficulty: 'متقدم' as const,
    price: '299',
    description: 'برنامج تدريب شامل يجمع بين رفع الأثقال والحركات الوظيفية',
    longDescription: 'الكروس فيت هو نظام تدريب عالي الكثافة يركز على القوة والقدرة والتحمل. يتم تصميم كل جلسة لتطوير جميع جوانب لياقتك البدنية من خلال حركات متنوعة وتحديات جديدة كل يوم.',
    benefits: [
      'زيادة قوة العضلات بشكل ملحوظ',
      'تحسين المرونة والحركة الوظيفية',
      'حرق السعرات الحرارية بكفاءة عالية',
      'بناء مجتمع داعم ومحفز',
      'نتائج سريعة وقابلة للقياس'
    ],
    schedule: [
      { day: 'السبت والأربعاء', time: '6:00 ص - 7:30 ص', trainer: 'أحمد علي', duration: '90 دقيقة', level: 'متقدم' },
      { day: 'الاثنين والخميس', time: '5:00 م - 6:30 م', trainer: 'محمود سعيد', duration: '90 دقيقة', level: 'مبتدئ' }
    ],
    participants: 15
  },
  {
    id: 'boxing',
    imageKey: 'boxing' as const,
    title: 'الملاكمة',
    tags: ['كارديو', 'مرونة', 'دفاع عن النفس'],
    difficulty: 'متوسط' as const,
    price: '249',
    description: 'تدريب ملاكمة احترافي يجمع بين الكارديو والفن القتالي',
    longDescription: 'اكتشف فن وعلم الملاكمة مع مدربينا المحترفين. لا تحتاج إلى خبرة سابقة، سنعلمك من الصفر حتى الاحترافية. تدريب شامل للياقة البدنية مع تعلم تقنيات القتال الفعالة.',
    benefits: [
      'تحسين صحة القلب والأوعية الدموية',
      'تطوير مهارات الدفاع عن النفس',
      'تخفيف التوتر والضغط النفسي',
      'زيادة الثقة بالنفس',
      'تدريب متوازن للجسم كله'
    ],
    schedule: [
      { day: 'السبت والثلاثاء', time: '7:00 م - 8:30 م', trainer: 'أحمد فرج', duration: '90 دقيقة', level: 'متوسط' },
      { day: 'الأحد والخميس', time: '4:00 م - 5:30 م', trainer: 'علي محمد', duration: '90 دقيقة', level: 'مبتدئ' }
    ],
    participants: 20
  },
  {
    id: 'yoga',
    imageKey: 'yoga' as const,
    title: 'اليوجا',
    tags: ['استرخاء', 'مرونة', 'توازن'],
    difficulty: 'مبتدئ' as const,
    price: '199',
    description: 'برنامج اليوجا لتحسين المرونة والتوازن والصحة النفسية',
    longDescription: 'اليوجا هي فن وعلم تطوير الجسم والعقل معاً. من خلال تمارين التنفس والوضعيات المختلفة، ستشعر بالاسترخاء والسلام الداخلي مع تحسين مرونتك وقوتك الأساسية.',
    benefits: [
      'تحسين المرونة والحركة',
      'تقوية العضلات الأساسية',
      'تحسين التوازن والثبات',
      'تقليل التوتر والقلق',
      'زيادة الوعي والتركيز الذهني'
    ],
    schedule: [
      { day: 'السبت والأربعاء', time: '8:00 ص - 9:30 ص', trainer: 'فاطمة حسين', duration: '90 دقيقة', level: 'مبتدئ' },
      { day: 'الثلاثاء والجمعة', time: '6:00 م - 7:30 م', trainer: 'نور علي', duration: '90 دقيقة', level: 'متقدم' }
    ],
    participants: 25
  }
];

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'الأساسية',
    price: '299',
    period: 'شهرياً',
    features: ['وصول للصالة الرياضية', 'غرفة تبديل الملابس والخزائن', 'تطبيق التمارين الأساسي', 'واي فاي مجاني'],
    isPopular: false
  },
  {
    id: 'pro',
    name: 'المحترفين',
    price: '499',
    period: 'شهرياً',
    features: ['كل ما في الباقة الأساسية', 'الدخول لجميع الفصول الجماعية', 'خطة غذائية مخصصة', 'استشارة شهرية مع مدرب'],
    isPopular: true
  },
  {
    id: 'vip',
    name: 'كبار الشخصيات',
    price: '899',
    period: 'شهرياً',
    features: ['كل ما في باقة المحترفين', 'مدرب شخصي 3 مرات أسبوعياً', 'مساج وجلسات استشفاء', 'دخول صالة الـ VIP'],
    isPopular: false
  }
];

export const WORK_HOURS = [
  { days: 'السبت - الخميس', hours: '24 ساعة' },
  { days: 'الجمعة', hours: '4 م - 12 ص' }
];

export const CONTACT_INFO = {
  phone: '+966 50 123 4567',
  email: 'info@ironfit.sa',
  address: 'الرياض - حي الياسمين - شارع الملك فهد',
  addressFull: 'المملكة العربية السعودية، الرياض 12345، حي الياسمين، شارع الملك فهد',
  mapLink: 'https://maps.google.com',
  socialMedia: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/966501234567'
  }
};

export const CONTACT_REASONS = [
  {
    id: 'general',
    title: 'استفسار عام',
    description: 'أسئلة عن الجيم والخدمات'
  },
  {
    id: 'membership',
    title: 'الاشتراكات',
    description: 'استفسارات عن الباقات والأسعار'
  },
  {
    id: 'training',
    title: 'التدريب',
    description: 'استفسارات عن البرامج والفصول'
  },
  {
    id: 'feedback',
    title: 'الملاحظات',
    description: 'اقتراحات وملاحظات'
  }
];

export const CLASSES = [
  {
    id: 'cf-morning-saturday',
    day: 'السبت',
    dayEnglish: 'Saturday',
    program: 'الكروس فيت',
    trainer: 'أحمد علي',
    time: '06:00',
    endTime: '07:30',
    duration: '90',
    level: 'متقدم',
    capacity: 20,
    enrolled: 15,
    description: 'برنامج كروس فيت متقدم يركز على تطوير القوة والتحمل'
  },
  {
    id: 'yoga-morning-saturday',
    day: 'السبت',
    dayEnglish: 'Saturday',
    program: 'اليوجا',
    trainer: 'فاطمة حسين',
    time: '08:00',
    endTime: '09:30',
    duration: '90',
    level: 'مبتدئ',
    capacity: 25,
    enrolled: 18,
    description: 'جلسة يوجا هادئة لتحسين المرونة والاسترخاء'
  },
  {
    id: 'boxing-evening-saturday',
    day: 'السبت',
    dayEnglish: 'Saturday',
    program: 'الملاكمة',
    trainer: 'أحمد فرج',
    time: '17:00',
    endTime: '18:30',
    duration: '90',
    level: 'متوسط',
    capacity: 15,
    enrolled: 12,
    description: 'تدريب ملاكمة متوازن للياقة والدفاع عن النفس'
  },
  {
    id: 'cf-morning-sunday',
    day: 'الأحد',
    dayEnglish: 'Sunday',
    program: 'الكروس فيت',
    trainer: 'محمود سعيد',
    time: '05:00',
    endTime: '06:30',
    duration: '90',
    level: 'مبتدئ',
    capacity: 20,
    enrolled: 16,
    description: 'كروس فيت للمبتدئين - تعلم التقنيات الأساسية'
  },
  {
    id: 'boxing-evening-sunday',
    day: 'الأحد',
    dayEnglish: 'Sunday',
    program: 'الملاكمة',
    trainer: 'علي محمد',
    time: '16:00',
    endTime: '17:30',
    duration: '90',
    level: 'مبتدئ',
    capacity: 18,
    enrolled: 14,
    description: 'فصل ملاكمة أساسي - لا تحتاج خبرة سابقة'
  },
  {
    id: 'yoga-evening-sunday',
    day: 'الأحد',
    dayEnglish: 'Sunday',
    program: 'اليوجا',
    trainer: 'نور علي',
    time: '18:00',
    endTime: '19:30',
    duration: '90',
    level: 'متقدم',
    capacity: 22,
    enrolled: 19,
    description: 'يوجا متقدمة مع تركيز على التأمل والاسترخاء'
  },
  {
    id: 'cf-morning-monday',
    day: 'الاثنين',
    dayEnglish: 'Monday',
    program: 'الكروس فيت',
    trainer: 'أحمد علي',
    time: '06:00',
    endTime: '07:30',
    duration: '90',
    level: 'متقدم',
    capacity: 20,
    enrolled: 17,
    description: 'برنامج قوة متقدم'
  },
  {
    id: 'yoga-morning-monday',
    day: 'الاثنين',
    dayEnglish: 'Monday',
    program: 'اليوجا',
    trainer: 'فاطمة حسين',
    time: '08:00',
    endTime: '09:30',
    duration: '90',
    level: 'متوسط',
    capacity: 25,
    enrolled: 20,
    description: 'يوجا متوسطة للمرونة والقوة'
  },
  {
    id: 'boxing-evening-monday',
    day: 'الاثنين',
    dayEnglish: 'Monday',
    program: 'الملاكمة',
    trainer: 'أحمد فرج',
    time: '17:00',
    endTime: '18:30',
    duration: '90',
    level: 'متوسط',
    capacity: 16,
    enrolled: 13,
    description: 'ملاكمة متوسطة مع تركيز على التقنيات'
  },
  {
    id: 'cf-morning-tuesday',
    day: 'الثلاثاء',
    dayEnglish: 'Tuesday',
    program: 'الكروس فيت',
    trainer: 'محمود سعيد',
    time: '05:00',
    endTime: '06:30',
    duration: '90',
    level: 'مبتدئ',
    capacity: 20,
    enrolled: 15,
    description: 'كروس فيت للمبتدئين'
  },
  {
    id: 'yoga-evening-tuesday',
    day: 'الثلاثاء',
    dayEnglish: 'Tuesday',
    program: 'اليوجا',
    trainer: 'نور علي',
    time: '18:00',
    endTime: '19:30',
    duration: '90',
    level: 'متقدم',
    capacity: 22,
    enrolled: 21,
    description: 'يوجا متقدمة'
  },
  {
    id: 'boxing-morning-wednesday',
    day: 'الأربعاء',
    dayEnglish: 'Wednesday',
    program: 'الملاكمة',
    trainer: 'علي محمد',
    time: '07:00',
    endTime: '08:30',
    duration: '90',
    level: 'متوسط',
    capacity: 18,
    enrolled: 16,
    description: 'ملاكمة الصباح'
  },
  {
    id: 'cf-evening-wednesday',
    day: 'الأربعاء',
    dayEnglish: 'Wednesday',
    program: 'الكروس فيت',
    trainer: 'أحمد علي',
    time: '17:00',
    endTime: '18:30',
    duration: '90',
    level: 'متقدم',
    capacity: 20,
    enrolled: 18,
    description: 'كروس فيت المساء'
  },
  {
    id: 'yoga-morning-thursday',
    day: 'الخميس',
    dayEnglish: 'Thursday',
    program: 'اليوجا',
    trainer: 'فاطمة حسين',
    time: '06:00',
    endTime: '07:30',
    duration: '90',
    level: 'مبتدئ',
    capacity: 25,
    enrolled: 22,
    description: 'يوجا الصباح للمبتدئين'
  },
  {
    id: 'boxing-evening-thursday',
    day: 'الخميس',
    dayEnglish: 'Thursday',
    program: 'الملاكمة',
    trainer: 'أحمد فرج',
    time: '17:00',
    endTime: '18:30',
    duration: '90',
    level: 'متقدم',
    capacity: 15,
    enrolled: 14,
    description: 'ملاكمة متقدمة'
  }
];

export const TRAINERS = [
  {
    id: 'ahmed-ali',
    name: 'أحمد علي',
    title: 'مدرب كروس فيت',
    specialty: 'تدريب القوة والتحمل',
    experience: '8 سنوات',
    certifications: ['CrossFit Level 2', 'Certified Personal Trainer'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    bio: 'متخصص في تدريب الكروس فيت بأسلوب متقدم. لديه خبرة طويلة في تحويل الأجسام وتطوير القدرات البدنية.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['الكروس فيت'],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'fatima-hussein',
    name: 'فاطمة حسين',
    title: 'مدربة يوجا',
    specialty: 'اليوجا والاسترخاء',
    experience: '10 سنوات',
    certifications: ['Yoga Alliance RYT 200', 'Meditation Specialist'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    bio: 'مختصة في اليوجا التقليدية والحديثة. تساعد الأعضاء على تحقيق التوازن بين الجسد والعقل.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['اليوجا'],
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'ahmed-faraj',
    name: 'أحمد فرج',
    title: 'مدرب ملاكمة',
    specialty: 'تدريب الملاكمة والكارديو',
    experience: '12 سنوات',
    certifications: ['Professional Boxing Trainer', 'Fitness Nutritionist'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    bio: 'بطل في الملاكمة وحاصل على عدة ألقاب. يدرب الأعضاء بأسلوب احترافي وفعال.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['الملاكمة'],
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'mahmoud-saeed',
    name: 'محمود سعيد',
    title: 'مدرب كروس فيت ومتخصص تغذية',
    specialty: 'القوة والبرامج الغذائية',
    experience: '7 سنوات',
    certifications: ['CrossFit Level 1', 'Nutrition Specialist', 'Personal Training'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    bio: 'يجمع بين تدريب القوة والبرامج الغذائية المتكاملة لضمان نتائج سريعة وفعالة.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['الكروس فيت'],
    rating: 4.9,
    reviews: 167
  },
  {
    id: 'ali-muhammad',
    name: 'علي محمد',
    title: 'مدرب ملاكمة متقدم',
    specialty: 'الدفاع عن النفس والملاكمة',
    experience: '9 سنوات',
    certifications: ['International Boxing Trainer', 'Self Defense Expert'],
    image: 'https://images.unsplash.com/photo-1507539332150-fe5dbb659231?w=400&h=500&fit=crop',
    bio: 'خبير في الملاكمة والدفاع عن النفس. يدرب جميع المستويات من المبتدئين للمحترفين.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['الملاكمة'],
    rating: 4.8,
    reviews: 121
  },
  {
    id: 'noor-ali',
    name: 'نور علي',
    title: 'مدربة يوجا متقدمة',
    specialty: 'اليوجا المتقدمة والتأمل',
    experience: '6 سنوات',
    certifications: ['Yoga Alliance RYT 500', 'Advanced Meditation'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70570ec0?w=400&h=500&fit=crop',
    bio: 'متخصصة في اليوجا المتقدمة والممارسات الروحية. تساعد الأعضاء على الوصول لأعلى مستويات الوعي.',
    socialMedia: {
      instagram: '#',
      twitter: '#',
      facebook: '#'
    },
    programs: ['اليوجا'],
    rating: 4.9,
    reviews: 134
  }
];
