Golden Chat Mini App v2 — Railway Ready

این نسخه برای Deploy روی Railway آماده شده است.

Deploy:
1) کل محتوای این پوشه را در GitHub یک repository قرار بده یا با Railway CLI deploy کن.
2) Railway سرویس Node را اجرا می‌کند؛ Dockerfile هم در ریشه قرار دارد.
3) بعد از Deploy از Service > Settings > Networking > Generate Domain یک دامنه عمومی HTTPS بساز.
4) آدرس HTTPS را در BotFather به عنوان Mini App/Main App URL ثبت کن.

Health check: /health

نکته: این نسخه UI واقعی و قابل اجرا دارد، اما هنوز به PostgreSQL و API ربات Golden Chat متصل نیست. داده‌های داخل صفحه نمونه هستند.
برای اتصال به دیتابیس باید API امن با اعتبارسنجی Telegram WebApp initData اضافه شود.
