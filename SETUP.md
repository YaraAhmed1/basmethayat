# بصمة حياة — دليل الإعداد على Vercel + Firebase (مجاني 100%)

## الخطوات

### 1. إنشاء مشروع Firebase (مجاني)
1. اذهب إلى https://console.firebase.google.com
2. اضغط "Add project" → اختر اسماً (مثل: basmat-hayat)
3. فعّل **Firestore Database** من القائمة الجانبية → اختر "Start in test mode"
4. فعّل **Storage** من القائمة الجانبية → اختر "Start in test mode"
5. اضغط على ⚙️ Project Settings → Web App → انسخ الـ config object

### 2. تعديل ملف firebase-config.js
افتح الملف `/public/firebase-config.js` والصق بيانات Firebase هكذا:
```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. تغيير كلمة مرور الأدمن
في ملف `/public/admin.html` ابحث عن:
```js
const ADMIN_PASSWORD = 'basmat2025admin';
```
وغيّرها لكلمة مرور قوية.

### 4. نشر على Vercel (مجاني)
1. اذهب إلى https://vercel.com → سجّل دخول بـ GitHub
2. اضغط "Add New Project" → "Import" → ارفع مجلد المشروع أو اربطه بـ GitHub repo
3. اضغط Deploy ✅

### 5. قواعد Firestore (الأمان)
في Firebase Console → Firestore → Rules، ضع:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### لوحة الإدارة
- الرابط: `your-domain.vercel.app/admin.html`
- من لوحة الإدارة يمكنك إضافة/تعديل/حذف:
  - الحقائب والأنشطة (مع رفع صور)
  - الأبحاث
  - أعضاء الفريق والمشرفين
  - معلومات التواصل
  - محتوى الصفحة الرئيسية

### ملاحظة هامة
الموقع يعمل أيضاً بدون Firebase (يعرض البيانات الثابتة).
بمجرد إعداد Firebase، كل البيانات تُحفظ في السحابة.
