# 🧩 أمثلة المكونات - نسخة سريعة

## 📋 فهرس سريع

Copy & Paste من هنا للمكونات الشائعة.

---

## 🔘 الأزرار

### الزر الأساسي الكامل
```typescript
<button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-lg font-bold py-4 px-8 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 group">
  ابدأ رحلتك الآن
  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
</button>
```

### الزر الثانوي
```typescript
<button className="bg-white/10 hover:bg-white/15 text-white text-lg font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2">
  <PlayCircle className="w-5 h-5" />
  شاهد الجيم
</button>
```

### الزر الصغير
```typescript
<button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 text-sm font-bold py-2.5 px-6 rounded-full transition-transform hover:scale-105">
  انضم الآن
</button>
```

### زر نصي
```typescript
<button className="flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all">
  عرض كل البرامج
  <ArrowLeft className="w-5 h-5" />
</button>
```

---

## 💳 البطاقات

### بطاقة المميزات (Feature Card)
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0 }}
  className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-colors group"
>
  <div className="bg-yellow-500/10 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-zinc-950 transition-colors">
    <Dumbbell className="w-8 h-8" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-white">معدات حديثة</h3>
  <p className="text-zinc-400 leading-relaxed">
    صالتنا مجهزة بأحدث الأجهزة الرياضية...
  </p>
</motion.div>
```

### بطاقة السعر (Pricing Card)
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="relative rounded-3xl p-8 bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-yellow-500 transform md:-translate-y-4"
>
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
      <span className="text-zinc-300">كل ما في الباقة الأساسية</span>
    </li>
  </ul>
  
  <button className="w-full py-4 rounded-xl font-bold bg-yellow-500 hover:bg-yellow-400 text-zinc-950 transition-all">
    اشترك الآن
  </button>
</motion.div>
```

### بطاقة البرنامج (Program Card)
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0 }}
  className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
>
  <ImageWithFallback
    src={IMAGES.crossfit}
    alt="الكروس فيت"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
  
  <div className="absolute inset-0 p-8 flex flex-col justify-end">
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
        قوة
      </span>
      <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
        لياقة
      </span>
    </div>
    <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">
      الكروس فيت
    </h3>
    <div className="flex items-center gap-2 text-yellow-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 delay-75">
      <span>انضم للكلاس</span>
      <ArrowLeft className="w-4 h-4" />
    </div>
  </div>
</motion.div>
```

---

## 📝 نماذج الإدخال

### حقل البريد الإلكتروني
```typescript
<div className="flex gap-2">
  <input 
    type="email" 
    placeholder="البريد الإلكتروني" 
    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-yellow-500 text-white transition-colors placeholder:text-zinc-500"
  />
  <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-4 py-3 rounded-xl font-bold transition-colors">
    <ArrowLeft className="w-5 h-5" />
  </button>
</div>
```

---

## 📊 الإحصائيات

### بطاقة الإحصائية
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0 }}
  className="text-center"
>
  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
    +2000
  </div>
  <div className="text-zinc-400 font-medium">
    عضو نشط
  </div>
</motion.div>
```

---

## 🎯 الأقسام (Sections)

### القسم الكامل
```typescript
<section id="features" className="py-24 bg-zinc-950">
  <div className="container mx-auto px-6">
    {/* الرأس */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        لماذا تختار <span className="text-yellow-500">أيرون فيت؟</span>
      </h2>
      <p className="text-zinc-400 text-lg">
        نوفر لك بيئة متكاملة تجمع بين أحدث التقنيات الرياضية والخبرات الاحترافية...
      </p>
    </div>

    {/* الشبكة */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* البطاقات هنا */}
    </div>
  </div>
</section>
```

---

## 🔤 النصوص

### العنوان الرئيسي (Hero)
```typescript
<h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
  اكتشف <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-yellow-600">قوتك الحقيقية</span><br />
  وتجاوز كل الحدود
</h1>
```

### عنوان القسم
```typescript
<h2 className="text-3xl md:text-5xl font-bold mb-6">
  لماذا تختار <span className="text-yellow-500">أيرون فيت؟</span>
</h2>
```

### النص الوصفي
```typescript
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
  انضم إلى أقوى مجتمع رياضي في المنطقة...
</p>
```

### النص الصغير
```typescript
<span className="text-sm font-medium text-zinc-300">
  أفضل نادي رياضي لعام 2024
</span>
```

---

## 🎬 الحركات

### ظهور بسيط
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  محتوى
</motion.div>
```

### ظهور عند التمرير
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
  محتوى
</motion.div>
```

### ظهور البطاقات مع تأخير
```typescript
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
  >
    {/* محتوى */}
  </motion.div>
))}
```

---

## 🔗 العناصر المشتركة

### شريط التنقل
```typescript
<nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/5 bg-zinc-950/90 backdrop-blur-md py-4">
  <div className="container mx-auto px-6 flex items-center justify-between">
    {/* الشعار والروابط */}
  </div>
</nav>
```

### الشارة (Badge)
```typescript
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
  <span className="text-sm font-medium text-zinc-300">
    أفضل نادي رياضي لعام 2024
  </span>
</div>
```

### الفاصل (Divider)
```typescript
<div className="border-b border-white/10 my-8"></div>
```

---

## 🎨 الألوان الشائعة

```typescript
// النصوص
className="text-white"           // أساسي
className="text-zinc-300"        // ثانوي
className="text-zinc-400"        // ثالثي
className="text-yellow-500"      // مميز

// الخلفيات
className="bg-zinc-950"          // الرئيسية
className="bg-zinc-900"          // البطاقات
className="bg-white/5"           // خافتة جداً
className="bg-white/10"          // خافتة
className="bg-yellow-500"        // الأساسية

// الحدود
className="border-white/5"       // خافتة
className="border-white/10"      // متوسطة
className="border-yellow-500"    // مميزة
```

---

## ✅ Checklist نسخ المكون

1. انسخ الكود من هنا
2. استبدل النصوص والبيانات بنصوصك
3. اجعل أي icons مخصصة
4. أضف الـ className المناسبة للتكامل
5. اختبر على الموبايل والويب
6. تأكد من accessibility

---

**نصيحة:** احتفظ بهذا الملف في متصفحك للوصول السريع! 📌

آخر تحديث: 2026-06-05
