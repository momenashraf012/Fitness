# 📘 دليل التطوير - أيرون فيت

## البدء السريع

### تشغيل المشروع
```bash
npm run dev
```
الموقع سيكون متاحاً على: http://localhost:5173/

### البناء للإنتاج
```bash
npm run build
```

## 📚 الإرشادات العملية

### إضافة قسم جديد إلى الصفحة الرئيسية

#### 1️⃣ أنشئ ملف البيانات
في `src/constants/home-data.ts`:
```typescript
export const MY_DATA = [
  { id: 'item1', name: 'العنصر الأول' },
  // ...
];
```

#### 2️⃣ أنشئ المكون
في `src/app/components/home/MySection.tsx`:
```typescript
import { MY_DATA } from '../../../constants/home-data';

export default function MySection() {
  return (
    <section id="my-section" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        {/* محتوى القسم */}
      </div>
    </section>
  );
}
```

#### 3️⃣ أضفه للصفحة الرئيسية
في `src/app/pages/Home.tsx`:
```typescript
import MySection from '../components/home/MySection';

export default function Home() {
  return (
    <div>
      {/* أقسام أخرى... */}
      <MySection />
      {/* أقسام أخرى... */}
    </div>
  );
}
```

### تعديل بيانات موجودة

**التحديث يكون من ملف البيانات الواحد فقط!**

مثال: تغيير أسعار الاشتراكات
```typescript
// في src/constants/home-data.ts
export const PRICING_PLANS = [
  {
    id: 'pro',
    price: '599', // ✏️ عدّل من هنا فقط
    // ...
  }
];
// سيتحدث تلقائياً في الموقع!
```

### إضافة صفحة جديدة

#### 1️⃣ أنشئ الصفحة
في `src/app/pages/MyPage.tsx`:
```typescript
export default function MyPage() {
  return <div>محتوى صفحتي</div>;
}
```

#### 2️⃣ أضفها للمسارات
في `src/app/routes.tsx`:
```typescript
import MyPage from './pages/MyPage';

export const router = createBrowserRouter([
  { path: '/my-page', Component: MyPage },
  // ...
]);
```

## 🎨 نظام الألوان

- **اللون الأساسي:** `bg-yellow-500` (الأصفر)
- **الخلفية:** `bg-zinc-950` (الأسود العميق)
- **البطاقات:** `bg-zinc-900`
- **النصوص الثانوية:** `text-zinc-400`

## 📐 Tailwind Responsive

```typescript
// شامل على جميع الأجهزة
className="text-4xl md:text-6xl" // صغير 4xl، كبير 6xl
className="hidden md:flex" // مخفي على الموبايل
className="grid md:grid-cols-3 gap-8" // عمود واحد، 3 أعمدة على الشاشات الكبيرة
```

## 🎬 Animations (Motion)

```typescript
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  محتوى متحرك
</motion.div>
```

## 🪝 الـ Hooks المتاحة

### `useScroll`
```typescript
import { useScroll } from '@/hooks/useScroll';

const isScrolled = useScroll(50); // كشف التمرير بعد 50px
```

### `useMobileMenu`
```typescript
import { useMobileMenu } from '@/hooks/useMobileMenu';

const { isOpen, open, close } = useMobileMenu();
```

## 📁 قواعد التنظيم

| المجلد | الاستخدام |
|------|-----------|
| `pages/` | الصفحات الكاملة فقط |
| `components/home/` | مكونات الصفحة الرئيسية |
| `components/layout/` | رؤوس التذييل والتنقل |
| `components/ui/` | مكونات واجهة المستخدم المستخدمة |
| `constants/` | البيانات والثوابت |
| `hooks/` | React Custom Hooks |
| `types/` | TypeScript Types |
| `utils/` | دوال مساعدة |

## ✅ قائمة تدقيق ما قبل الـ Commit

- [ ] الكود يعمل بدون أخطاء
- [ ] اختبرت على الموبايل والويب
- [ ] اتبعت تنظيم المشروع
- [ ] استخدمت الثوابت من `constants/`
- [ ] لم تضع بيانات مباشرة في المكونات

## 🚀 نصائح للأداء الأفضل

1. **استخدم `whileInView`** للحركات عند التمرير
2. **استخدم `motion.div`** بدلاً من `<div>` فقط للعناصر المتحركة
3. **لا تضع بيانات كبيرة في الكود** - استخدم `constants/`
4. **استخدم الصور المحسّنة** - `ImageWithFallback`

---

**للمساعدة أو الأسئلة:** تحقق من `PROJECT_STRUCTURE.md`
