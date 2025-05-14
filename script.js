// فتح القائمة الجانبية
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transform = "translateX(0)"; // انزلاق إلى الداخل
  sidenav.style.opacity = "1"; // جعل القائمة مرئية
  sidenav.style.visibility = "visible"; // التأكد من أن القائمة قابلة للتفاعل
}

// إغلاق القائمة الجانبية
function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  sidenav.style.transform = "translateX(-100%)"; // انزلاق إلى الخارج
  sidenav.style.opacity = "0"; // التلاشي
  setTimeout(() => {
    sidenav.style.visibility = "hidden"; // إخفاء القائمة بعد انتهاء الرسوم المتحركة
  }, 500); // يتطابق مع وقت الانتقال
  document.body.style.backgroundColor = "white"; // تغيير لون خلفية الصفحة إلى الأبيض
}

// عندما يتم تحميل المحتوى
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a"); // تحديد جميع الروابط في القائمة
  const currentPage = window.location.pathname.split("/").pop(); // الحصول على اسم ملف الصفحة الحالية

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // إضافة فئة نشطة للرابط الذي يتطابق مع الصفحة الحالية
    }
  });
});

// التعامل مع عناصر الأسئلة الشائعة (FAQ)
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item"); // تحديد جميع عناصر الأسئلة الشائعة

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question"); // تحديد السؤال داخل العنصر
    question.addEventListener("click", () => {
      // التبديل بين الفئة النشطة لهذا العنصر
      item.classList.toggle("active");
      
      // اختيارياً: إغلاق الأسئلة الأخرى إذا كنت ترغب في أن يكون هناك سؤال واحد مفتوح فقط
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});

// التعامل مع زر الوصول (Accessibility)
document.getElementById("accessibility-btn").addEventListener("click", function () {
  let menu = document.getElementById("accessibility-options");
  menu.style.display = (menu.style.display === "block") ? "none" : "block"; // التبديل بين إظهار وإخفاء خيارات الوصول
});

// تخزين أحجام الخطوط الافتراضية
const defaultSizes = new Map();
document.querySelectorAll("body, body *").forEach(el => {
  defaultSizes.set(el, window.getComputedStyle(el).fontSize); // تخزين الحجم الافتراضي لكل عنصر
});

// تغيير حجم النص
function changeTextSize(amount) {
  document.querySelectorAll("body, body *").forEach(el => {
      let currentSize = parseFloat(window.getComputedStyle(el).fontSize); // الحصول على حجم الخط الحالي
      el.style.fontSize = (currentSize + amount) + "px"; // تغيير حجم الخط
  });
}

// زيادة حجم النص عند النقر على الزر
document.getElementById("increase-text").addEventListener("click", function () {
  changeTextSize(2); // زيادة حجم النص
});

// تقليص حجم النص عند النقر على الزر
document.getElementById("decrease-text").addEventListener("click", function () {
  changeTextSize(-2); // تقليص حجم النص
});

// إعادة تعيين حجم النص إلى الحجم الافتراضي عند النقر على الزر
document.getElementById("reset-text").addEventListener("click", function () {
  defaultSizes.forEach((size, el) => {
      el.style.fontSize = size; // إعادة تعيين حجم النص إلى الحجم الافتراضي
  });
});

// تعديل حجم النص ولكن باستثناء القائمة الخاصة بالوصول
function changeTextSize(amount) {
  document.querySelectorAll("body *:not(#accessibility-menu *):not(#accessibility-btn)").forEach(el => {
      let currentSize = parseFloat(window.getComputedStyle(el).fontSize); // الحصول على حجم الخط الحالي
      el.style.fontSize = (currentSize + amount) + "px"; // تغيير حجم الخط
  });
}
