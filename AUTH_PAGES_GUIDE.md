# 🔐 دليل صفحات المصادقة (Authentication Pages)

## 📄 الصفحات المُنشأة

### 1️⃣ صفحة تسجيل الدخول (Login)
**المسار:** `/login`  
**الملف:** `src/app/pages/Login.tsx`

#### المميزات:
- 🎨 تصميم احترافي بنفس هوية أيرون فيت
- ✉️ حقل البريد الإلكتروني
- 🔒 حقل كلمة المرور مع زر إظهار/إخفاء
- ☑️ خيار "تذكرني"
- 🔗 رابط "هل نسيت كلمة المرور؟"
- 📱 خيارات تسجيل اجتماعي (Google, Facebook)
- 🎬 حركات ناعمة
- 📱 مستجيب على جميع الأجهزة

---

### 2️⃣ صفحة التسجيل (Register)
**المسار:** `/register`  
**الملف:** `src/app/pages/Register.tsx`

#### المميزات:
- 🎨 نفس هوية التصميم
- 👤 حقل الاسم الكامل
- ✉️ حقل البريد الإلكتروني
- 📞 حقل رقم الهاتف
- 🔒 حقل كلمة المرور مع مؤشر قوة
- ✓ تأكيد كلمة المرور
- ✅ خيارات الموافقة على الشروط
- 🎬 حركات متقدمة
- 📱 مستجيب تماماً

---

## 🎨 عناصر التصميم

### الألوان المستخدمة
```
الأساسي:     Yellow 500 (#eab308)
الخلفية:     Zinc 950 (#09090b)
البطاقات:    Zinc 900/50
الحدود:      White 5%
النصوص:      White / Zinc 400
```

### الحركات والانتقالات
```
العنوان:      opacity + y (delay: 0.1s)
الحقول:       opacity + x (delay: 0.2-0.4s)
الأزرار:      opacity + y (delay: 0.5s)
الفاصل:       opacity (delay: 0.6s)
الخيارات:     opacity + y (delay: 0.7-0.9s)
```

### الأيقونات المستخدمة
```
Mail        - البريد الإلكتروني
Lock        - كلمة المرور
Eye         - إظهار كلمة المرور
EyeOff      - إخفاء كلمة المرور
User        - الاسم
Phone       - رقم الهاتف
ArrowLeft   - الأسهم في الأزرار
Check       - التحقق من المطابقة
Dumbbell    - الشعار
```

---

## 🔧 الوظائف المتقدمة

### صفحة Login

#### إدارة الحالة
```typescript
const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({ 
  email: '', 
  password: '' 
});
const [isLoading, setIsLoading] = useState(false);
```

#### معالجة النموذج
```typescript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  // محاكاة طلب API
  setTimeout(() => {
    setIsLoading(false);
    alert('تم تسجيل الدخول بنجاح!');
  }, 1500);
};
```

---

### صفحة Register

#### مؤشر قوة كلمة المرور
```typescript
const passwordStrength = formData.password.length > 0
  ? formData.password.length < 6
    ? 'ضعيفة'
    : formData.password.length < 10
    ? 'متوسطة'
    : 'قوية'
  : '';

const getStrengthColor = () => {
  switch (passwordStrength) {
    case 'ضعيفة': return 'bg-red-500';
    case 'متوسطة': return 'bg-yellow-500';
    case 'قوية': return 'bg-green-500';
  }
};
```

#### التحقق من كلمات المرور
```typescript
{formData.confirmPassword && 
 formData.password === formData.confirmPassword && (
  <div className="text-green-500 text-sm">
    <Check className="w-4 h-4" />
    كلمات المرور متطابقة
  </div>
)}
```

#### الموافقة على الشروط
```typescript
const [agreedToTerms, setAgreedToTerms] = useState(false);

<button 
  disabled={isLoading || !agreedToTerms}
>
  // الزر معطّل حتى يتم الموافقة
</button>
```

---

## 🎯 الاستخدام

### الوصول للصفحات

#### من خلال الروابط المباشرة
```
http://localhost:5173/login
http://localhost:5173/register
```

#### من خلال الكود
```typescript
import { Link } from 'react-router';

// رابط تسجيل الدخول
<Link to="/login">تسجيل الدخول</Link>

// رابط التسجيل
<Link to="/register">اشترك الآن</Link>
```

### التعديلات المطلوبة

#### 1. الربط مع Backend
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch('https://api.example.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // حفظ التوكن وإعادة التوجيه
    }
  } catch (error) {
    console.error('Login failed:', error);
  } finally {
    setIsLoading(false);
  }
};
```

#### 2. إضافة Validation
```typescript
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};
```

#### 3. رسائل الخطأ
```typescript
const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};
  
  if (!validateEmail(formData.email)) {
    newErrors.email = 'البريد غير صحيح';
  }
  
  if (!validatePassword(formData.password)) {
    newErrors.password = 'كلمة المرور قصيرة جداً';
  }
  
  setErrors(newErrors);
};
```

---

## 📱 التصميم المستجيب

```typescript
// Desktop (محسّن للشاشات الكبيرة)
<div className="w-full max-w-md">
  <div className="bg-zinc-900/50 p-8 rounded-3xl">
    {/* محتوى */}
  </div>
</div>

// Tablet & Mobile
// نفس التصميم بفضل Tailwind
```

---

## 🔐 نصائح الأمان

### ❌ ما لا تفعله
```typescript
// ❌ لا تخزن كلمات المرور في localStorage
localStorage.setItem('password', password);

// ❌ لا ترسل كلمات المرور في URL
window.location = `/login?password=${password}`;

// ❌ لا تظهر رسائل خطأ محددة جداً
'المستخدم غير موجود' // قد يساعد المهاجمين
```

### ✅ ما تفعله
```typescript
// ✅ استخدم HTTPS فقط
fetch('https://api.example.com/login', { ... })

// ✅ استخدم HTTP-only cookies للتوكنات
// (يتم التعامل معها من قبل الخادم)

// ✅ استخدم رسائل خطأ عامة
'بيانات الدخول غير صحيحة'

// ✅ التحقق من الجانب السيرفر أيضاً
// (لا تثق بالتحقق من الجانب الكلاينت فقط)
```

---

## 🧪 الاختبار

### اختبر على أجهزة مختلفة
```bash
# Desktop (1920x1080)
# Tablet (768x1024)
# Mobile (375x667)
```

### اختبر الحركات
- ✅ تحقق من سلاسة الحركات
- ✅ تأكد من عدم الإزعاج
- ✅ تأكد من وضوح التأخيرات

### اختبر الوظائف
- ✅ إظهار/إخفاء كلمة المرور
- ✅ تعطيل الزر عند التحميل
- ✅ رسائل الخطأ
- ✅ الملء التلقائي للحقول

---

## 📋 قائمة التدقيق

قبل الإطلاق:

- [ ] تم الربط مع Backend
- [ ] تم إضافة Validation
- [ ] تم إضافة معالجة الأخطاء
- [ ] تم اختبار على أجهزة مختلفة
- [ ] تم اختبار التسجيل والدخول
- [ ] تم اختبار الأمان الأساسي
- [ ] تم تحسين الأداء
- [ ] تم اختبار على متصفحات مختلفة

---

## 🎨 تخصيص الألوان

إذا أردت تغيير الألوان:

```typescript
// تغيير اللون الأساسي من أصفر لأحمر مثلاً
className="bg-yellow-500"  →  className="bg-red-500"
className="text-yellow-500" → className="text-red-500"
className="border-yellow-500" → className="border-red-500"
```

---

## 🚀 التطوير المستقبلي

### ميزات يمكن إضافتها:
- [ ] تسجيل دخول بـ OAuth (Google, GitHub)
- [ ] التحقق من البريد الإلكتروني
- [ ] إعادة تعيين كلمة المرور
- [ ] المصادقة الثنائية (2FA)
- [ ] Social login integration
- [ ] Dark/Light mode toggle
- [ ] اللغات المتعددة

---

## 📚 الملفات ذات الصلة

- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) - نظام التصميم
- [COMPONENT_EXAMPLES.md](COMPONENT_EXAMPLES.md) - أمثلة المكونات
- [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - دليل التطوير

---

**آخر تحديث:** 2026-06-05  
**الإصدار:** 1.0
