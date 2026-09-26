const tg=window.Telegram?.WebApp;
if(tg){tg.ready();tg.expand();tg.setHeaderColor('#080808');tg.setBackgroundColor('#050505');}
function openPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id)?.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});if(tg?.HapticFeedback)tg.HapticFeedback.impactOccurred('light')}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.style.display='block';clearTimeout(window.__toast);window.__toast=setTimeout(()=>e.style.display='none',2200)}
async function copyLink(){const link=document.getElementById('link')?.textContent?.trim();try{await navigator.clipboard.writeText(link);toast('لینک کپی شد ✅')}catch{toast('کپی لینک در این دستگاه در دسترس نیست')}}
function shareLink(){const link=document.getElementById('link')?.textContent?.trim();if(tg?.openTelegramLink){tg.openTelegramLink('https://t.me/share/url?url='+encodeURIComponent(link)+'&text='+encodeURIComponent('برای من پیام ناشناس بفرست 👻'))}else if(navigator.share){navigator.share({text:'برای من پیام ناشناس بفرست 👻',url:link}).catch(()=>{})}else toast('گزینه اشتراک‌گذاری در دسترس نیست')}
