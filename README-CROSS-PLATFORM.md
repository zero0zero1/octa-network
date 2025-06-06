
# Octa Network Haven - تشغيل متعدد المنصات

هذا الدليل يشرح كيفية تشغيل تطبيق Octa Network Haven على أنظمة التشغيل المختلفة.

## متطلبات النظام
- Node.js (الإصدار 14 أو أحدث)
- npm (يأتي مع Node.js)
- متصفح حديث متوافق مع WebGL و WebGPU (للميزات المتقدمة)

## الطريقة السريعة (جميع أنظمة التشغيل)

الطريقة الأبسط للتشغيل على أي نظام تشغيل هي استخدام:

```
node dev.js
```

هذا السكربت سيكتشف نظام التشغيل الخاص بك تلقائياً ويقوم بالإعداد المناسب.

## تشغيل التطبيق على ويندوز

### في وضع التطوير
1. استخدم ملف الباتش المرفق بنقرة مزدوجة:
```
run-electron-dev.bat
```

2. أو قم بتنفيذ الأمر التالي من سطر الأوامر:
```
node dev.js
```

### بناء التطبيق
1. استخدم ملف الباتش المرفق بنقرة مزدوجة:
```
run-electron-build.bat
```

## تشغيل التطبيق على لينكس وماك

### في وضع التطوير
1. قم بتنفيذ السكربت:
```bash
chmod +x run-electron-dev.sh
./run-electron-dev.sh
```

2. أو قم بتنفيذ الأمر مباشرة:
```bash
node dev.js
```

### بناء التطبيق
1. قم بتنفيذ السكربت:
```bash
chmod +x run-electron-build.sh
./run-electron-build.sh
```

## ملاحظات إضافية

### تثبيت التبعيات
إذا واجهت مشاكل في تثبيت التبعيات، قم بتنفيذ:
```
npm install --no-save
```

### تثبيت Vite
إذا واجهت مشكلة في العثور على Vite، قم بتنفيذ:
```
npm install vite@latest --save-dev
```

### صلاحيات التنفيذ على لينكس وماك
إذا لم تتمكن من تنفيذ السكربتات، تأكد من ضبط صلاحيات التنفيذ:
```bash
chmod +x run-electron-dev.sh
chmod +x run-electron-build.sh
```

### مشاكل WebGPU
إذا واجهت مشاكل في تشغيل الميزات المتقدمة التي تعتمد على WebGPU، تأكد من استخدام متصفح يدعم WebGPU أو قم بتعطيل الميزات المتقدمة في إعدادات التطبيق.

### مشكلة Too many open files على لينكس
إذا واجهت خطأ ENOSPC على لينكس، قم بزيادة حد الملفات المفتوحة:
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## نصائح للاستخدام

1. استخدم `node dev.js` للتشغيل السريع على جميع الأنظمة.
2. استخدم ملفات `.bat` على ويندوز و `.sh` على لينكس وماك للتشغيل المباشر.
3. تحقق من وجود مجلد `node_modules` قبل تشغيل التطبيق.
4. تأكد من تثبيت Vite قبل تشغيل التطبيق.

## دعم فني

إذا واجهت أي مشاكل، يرجى التواصل مع فريق الدعم الفني أو إنشاء تذكرة جديدة على منصة الدعم.
