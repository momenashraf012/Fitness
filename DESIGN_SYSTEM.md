# 🎨 نظام التصميم - أيرون فيت (Design System)

## 📋 جدول المحتويات
1. [الألوان](#الألوان)
2. [الخطوط](#الخطوط)
3. [المكونات](#المكونات)
4. [التباعد والحجم](#التباعد-والحجم)
5. [الظلال والحدود](#الظلال-والحدود)
6. [الحركات والانتقالات](#الحركات-والانتقالات)
7. [القيم واللغة](#القيم-واللغة)

---

## 🎭 الألوان

### 🟨 الألوان الأساسية (Primary)

| اللون | Hex Code | استخدام |
|------|----------|---------|
| Yellow 400 | `#facc15` | أزرار Hover، نصوص ثانوية نشطة |
| Yellow 500 | `#eab308` | الأزرار الأساسية، التركيز |
| Yellow 600 | `#ca8a04` | Hover على الأزرار الأساسية |

**الكود:**
```typescript
className="bg-yellow-500" // الزر الأساسي
className="text-yellow-500" // النص الذهبي
className="border-yellow-500/20" // الحدود الفاتحة
className="bg-yellow-500/10" // الخلفيات الفاتحة جداً
```

### ⬛ الألوان المحايدة (Neutrals)

| اللون | Hex Code | الاستخدام |
|------|----------|-----------|
| Zinc 950 | `#09090b` | الخلفية الرئيسية |
| Zinc 900 | `#18181b` | خلفية البطاقات |
| Zinc 800 | `#27272a` | الحدود والفواصل |
| Zinc 400 | `#a1a1aa` | النصوص الثانوية |
| White | `#ffffff` | النصوص الأساسية |

**الكود:**
```typescript
className="bg-zinc-950" // الخلفية الرئيسية
className="bg-zinc-900" // البطاقات
className="text-zinc-400" // نصوص ثانوية
className="border-white/5" // حدود فاتحة جداً
className="bg-white/10" // خلفيات شفافة
```

### 🎨 نظام الألوان

```
الخلفية (Dark Mode):
┌─────────────────────────────────┐
│ Zinc 950 (الرئيسية)            │
├─────────────────────────────────┤
│ ┌──────────────────────────────┐│
│ │ Zinc 900 (البطاقات)         ││
│ │ Border: Zinc 800/White 5-10% ││
│ └──────────────────────────────┘│
└─────────────────────────────────┘

النصوص:
┌──────────────────────────────────┐
│ White (الأساسية - 100%)         │
├──────────────────────────────────┤
│ Zinc 300 (ثانوية - 90%)        │
├──────────────────────────────────┤
│ Zinc 400 (ثالثية - 80%)        │
├──────────────────────────────────┤
│ Zinc 500 (خافتة - 70%)         │
└──────────────────────────────────┘
```

---

## 🔤 الخطوط (Typography)

### عائلة الخطوط
- **الخط الأساسي:** `Sans` (نظام النظام)
- **في العربية:** يتم دعمها تلقائياً

### أحجام العناوين

| المستوى | حجم | الوزن | الاستخدام | مثال CSS |
|---------|-----|-------|-----------|----------|
| H1 (Hero) | 48px / 72px | 800 (Extrabold) | العنوان الرئيسي | `text-5xl md:text-7xl font-extrabold` |
| H2 (Section) | 32px / 48px | 700 (Bold) | عناوين الأقسام | `text-3xl md:text-5xl font-bold` |
| H3 (Card) | 24px | 700 (Bold) | عناوين البطاقات | `text-2xl font-bold` |
| Body | 16px / 18px | 400 (Normal) | النصوص الأساسية | `text-base md:text-lg` |
| Small | 14px | 500 (Medium) | النصوص الصغيرة | `text-sm font-medium` |
| Tiny | 12px | 400 (Normal) | الملصقات | `text-xs` |

### أمثلة

```typescript
// العنوان الرئيسي (H1)
<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
  اكتشف قوتك الحقيقية
</h1>

// عنوان القسم (H2)
<h2 className="text-3xl md:text-5xl font-bold mb-6">
  لماذا تختار أيرون فيت؟
</h2>

// عنوان البطاقة (H3)
<h3 className="text-2xl font-bold mb-4 text-white">
  معدات حديثة
</h3>

// النص الأساسي
<p className="text-lg text-zinc-400 leading-relaxed">
  نقدم لك خططاً غذائية متكاملة...
</p>

// نص صغير
<span className="text-sm font-medium text-zinc-300">
  الأكثر طلباً
</span>
```

---

## 🧩 المكونات (Components)

### 🔘 الأزرار

#### الزر الأساسي (Primary Button)
```typescript
<button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-all hover:scale-105">
  احجز تجربتك المجانية
</button>
```

| الحالة | الخلفية | النص | التأثير |
|-------|--------|-----|--------|
| Default | `bg-yellow-500` | `text-zinc-950` | - |
| Hover | `bg-yellow-400` | - | `scale-105` |
| Active | `bg-yellow-600` | - | - |

#### الزر الثانوي (Secondary Button)
```typescript
<button className="bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all">
  شاهد الجيم
</button>
```

#### الزر النصي (Text Button)
```typescript
<button className="flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all">
  عرض كل البرامج
  <ArrowLeft className="w-5 h-5" />
</button>
```

### 💳 البطاقات

#### بطاقة المميزات (Feature Card)
```typescript
<div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-colors group">
  <div className="bg-yellow-500/10 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
    <Dumbbell className="w-8 h-8" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-white">معدات حديثة</h3>
  <p className="text-zinc-400 leading-relaxed">
    صالتنا مجهزة بأحدث الأجهزة...
  </p>
</div>
```

#### بطاقة السعر (Pricing Card)
```typescript
<div className="relative rounded-3xl p-8 bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-yellow-500 transform md:-translate-y-4">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-zinc-950 text-sm font-bold px-4 py-1 rounded-full">
    الأكثر طلباً
  </div>
  <h3 className="text-2xl font-bold text-white mb-2">المحترفين</h3>
  <div className="mb-6 flex items-baseline gap-2">
    <span className="text-5xl font-extrabold">499</span>
    <span className="text-zinc-400">ريال / شهرياً</span>
  </div>
  {/* القائمة والزر */}
</div>
```

### 📝 المدخلات (Inputs)

```typescript
<input 
  type="email" 
  placeholder="البريد الإلكتروني" 
  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-yellow-500 text-white transition-colors placeholder:text-zinc-500"
/>
```

---

## 📐 التباعد والحجم

### نظام التباعد (Spacing Scale)

```typescript
// Padding و Margin
className="p-4"   // 16px
className="p-6"   // 24px
className="p-8"   // 32px
className="px-6"  // 24px (horizontal)
className="py-4"  // 16px (vertical)

// Gap (الفجوات)
className="gap-2" // 8px
className="gap-4" // 16px
className="gap-6" // 24px
className="gap-8" // 32px
```

### أحجام الحاويات

```typescript
// العرض
className="w-16"    // 64px
className="w-full"  // 100%
className="max-w-3xl" // 768px

// الارتفاع
className="h-16"    // 64px
className="h-24"    // 96px
className="h-full"  // 100%
className="aspect-[4/5]" // نسبة 4:5
```

---

## 🌫️ الظلال والحدود

### الحدود (Borders)

```typescript
// الحدود الرئيسية
className="border border-white/10"      // حد فاتح
className="border-2 border-yellow-500"  // حد أصفر سميك
className="border-b border-white/5"     // حد سفلي فاتح جداً

// التقريب
className="rounded-lg"    // 8px
className="rounded-xl"    // 12px
className="rounded-2xl"   // 16px
className="rounded-3xl"   // 24px
className="rounded-full"  // 9999px
```

### الظلال (Shadows)

```typescript
className="shadow-lg"     // ظل كبير
className="drop-shadow"   // ظل الفلتر
```

### الخلفيات الشفافة (Transparency)

```typescript
className="bg-white/5"    // 5% opacity
className="bg-white/10"   // 10% opacity
className="bg-white/20"   // 20% opacity
className="bg-yellow-500/10" // أصفر شفاف
className="bg-black/50"   // أسود شفاف 50%
```

### Backdrop Blur

```typescript
className="backdrop-blur-sm"   // تمويه خفيف
className="backdrop-blur-md"   // تمويه متوسط
```

---

## 🎬 الحركات والانتقالات

### Transitions (الانتقالات السلسة)

```typescript
className="transition-all"      // جميع الخصائص
className="transition-colors"   // الألوان فقط
className="transition-transform" // التحويلات فقط
className="transition-opacity"  // الشفافية فقط
className="duration-300"        // مدة 300ms
className="duration-700"        // مدة 700ms
```

### Hover States

```typescript
className="hover:bg-yellow-400"      // تغيير اللون
className="hover:text-yellow-500"    // تغيير لون النص
className="hover:scale-105"          // تكبير
className="hover:gap-4"              // تغيير الفجوة
className="group-hover:bg-yellow-500" // في hover المجموعة
```

### Motion Animations

```typescript
import { motion } from 'motion/react';

// الظهور من الأسفل
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  محتوى
</motion.div>

// الظهور عند الرؤية
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
  محتوى
</motion.div>
```

---

## 📏 Grid و Layout

### Container

```typescript
<div className="container mx-auto px-6">
  {/* المحتوى - عرض أقصى 1280px */}
</div>
```

### Grid System

```typescript
// عمود واحد على الموبايل، 3 أعمدة على الويب
className="grid md:grid-cols-3 gap-8"

// عمودين على الموبايل، 4 على الويب
className="grid grid-cols-2 md:grid-cols-4 gap-4"

// Responsive
className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
```

### Flexbox

```typescript
// توزيع الفضاء
className="flex items-center justify-between"
className="flex flex-col gap-6"
className="flex items-start gap-4"
```

---

## 📱 Responsive Design

### Breakpoints

| البادئة | الحجم | جهاز |
|---------|------|------|
| (بلا) | 0px | Mobile |
| `sm:` | 640px | Small |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large |

### أمثلة

```typescript
// مخفي على الموبايل
className="hidden md:flex"

// حجم مختلف حسب الشاشة
className="text-lg md:text-2xl lg:text-3xl"

// عدد أعمدة مختلف
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding مختلف
className="px-4 md:px-6 lg:px-8"
```

---

## 🌍 Direction (RTL/LTR)

```typescript
// للصفحات العربية
<div dir="rtl" className="...">
  محتوى عربي
</div>

// للصفحات الإنجليزية
<div dir="ltr" className="...">
  English content
</div>
```

---

## ✨ قائمة تدقيق التصميم

عند إنشاء مكون جديد:

- [ ] استخدمت الألوان من نظام التصميم
- [ ] استخدمت أحجام الخطوط الموصى بها
- [ ] أضفت hover states للعناصر التفاعلية
- [ ] استخدمت transitions سلسة
- [ ] تصميم responsive على الموبايل والويب
- [ ] استخدمت spacing من نظام التباعد
- [ ] اتبعت نمط البطاقات الموجود
- [ ] استخدمت rounded corners مناسبة
- [ ] أضفت animations حيث مناسبة

---

## 🔗 الروابط المفيدة

- **Tailwind CSS:** https://tailwindcss.com/
- **Motion/Framer Motion:** https://motion.dev/
- **React Router:** https://reactrouter.com/
- **Lucide Icons:** https://lucide.dev/

---

**آخر تحديث:** 2026-06-05  
**الإصدار:** 1.0
