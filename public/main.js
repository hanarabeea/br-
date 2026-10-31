
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var clamp=function(v,a,b){return Math.min(b,Math.max(a,v))};
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= content (EN / AR) ================= */
var D={en:{
 'n.top':'Top','n.work':'Work','n.services':'Services','n.about':'About','n.process':'Process','n.contact':'Contact','n.cta':'Start a project',
 'draft':'Draft preview. Pick the hero style:','hide':'Hide',
 'h.eyebrow':'BR Marketing Agency','h.l1':'Attention becomes','h.l2':'action',
 'h.sub':'BR frames what people notice, feel and do, then turns that response into a measurable result.','h.c1':'See the work',
 'h.cap1':'The Living Lens','h.cap2':'Built for Results.',
 'h.f1':'Founded. A full-service marketing and creative agency.','h.f2':'Capabilities, connected into one system.','h.f3n':'Remote','h.f3':'Your marketing and creative partner, wherever you are.',
 'w.eyebrow':'Selected work','w.title':'Three brands. Full marketing, end to end.','w.sub':'Identity, social, content and paid media, run as one system. Scroll through each partner.',
 'l.problem':'The problem','l.decision':'The decision','l.result':'The result','l.sample':'Sample figure','l.ph':'Placeholder visuals, replace with client work',
'r.id':'Brand Identity','r.id.d':'Logo, visual language and brand guidelines.','r.sm':'Social Media','r.sm.d':'Strategy, content calendar and daily management.','r.ct':'Content & Creative','r.ct.d':'Posts, reels and campaign visuals made to stop the scroll.','r.mb':'Media Buying','r.mb.d':'Paid campaigns and offers, planned, launched and optimized.','sv.sp':'Sponsored','sv.cta':'Learn more','r.of':'Offers & Campaigns','r.of.d':'Promotions and seasonal offers that bring people in.','c1.intro':'A café with history since 1975. We run its marketing end to end, and we still do.','c2.intro':'A digital studio building e-commerce, ERP and digital invitations. We handle its brand, social, content and paid media.','c3.intro':'A perfume brand. We shaped its identity, its social presence and the content that carries it.','s.identity':'Brand Identity','s.ads':'Ads & Offers','cl.live':'Active partner','cl.s1':'Café · Full marketing','cl.s2':'Digital studio · E-commerce, ERP & invitations','cl.s3':'Perfume brand','hv.est':'Since','c1.m':'Growing','c1.note':'Platform numbers to be added','d.k1':'Services delivered','d.k2':'Brand colors','d.k3':'Languages','d.f1':'Reach','d.f2':'Engage','d.f3':'Act','w.all':'All','w.post':'Social post','w.camp':'Campaign visual','w.mood':'Moodboard','w.poster':'Brand poster','w.ground':'On the ground','w.ig':'Instagram post','w.slide':'Carousel slide','w.prod':'Product shot','w.offer':'Offer post','w.reel':'Reel','hg.eyebrow':'By client','hg.ph':'placeholder','hg.d1':'Instagram post','hg.d2':'Brand banner','hg.d3':'Brand mark','hg.d4':'Wordmark','hg.d5':'Brand gradient','hg.s1':'Campaign shot','hg.s2':'Story','hg.s3':'Reel cover','hg.s4':'Content still','hg.title':'Inside the work.','hg.hint':'Drag to explore','hg.c1':'Moodboard','hg.c2':'Brand poster','hg.c3':'Arabic wordmark','hg.c4':'Stories icons','hg.c5':'Signature drink','hg.c6':'On the ground', 's.social':'Social Media','s.content':'Content & Creative','s.video':'Video & Reels','s.brand':'Branding & Design','s.paid':'Media Buying','s.auto':'Automation & Funnels','s.strategy':'Marketing Strategy','s.seo':'Social SEO',
 'c1.cat':'Café · Full marketing partner','c1.p':'A café with history since 1975, and an online presence that didn’t yet match it.','c1.d':'Take marketing end to end: a fresh identity, social, ads, and offers built to bring people in.','c1.r':'Followers up on every page, with sales and offers driving visits. Still our partner today.','c1.hook':'',
 'c2.cat':'Digital studio','c2.p':'Traffic arrived, conversations didn’t. The offer was clear to the team, not to the customer.','c2.d':'Rewrite the offer, test three creatives, and move the first reply into a DM flow.','c2.r':'more qualified conversations per month','c2.hook':'Stop explaining. Start the conversation.',
 'c3.cat':'Perfume brand','c3.p':'A good brand nobody could find. Search and discovery were an afterthought.','c3.d':'Position first, then rebuild profiles and captions around how people actually search.','c3.r':'profile discovery in four months','c3.hook':'Found you.',
 'm.reel':'Reel · 0:15','m.c1':'GUIDE','m.c2':'Here it is. One quick question first.','m.c3':'Pricing','m.c4':'Sent. Want a call?','m.ad':'Book your first session','m.adbtn':'Book now',
 'sv.eyebrow':'What we do','sv.title':'One system, not eight separate services.','sys.title':'The BR Marketing System','sys.sub':'Our advantage is how the services connect.',
 'a.eyebrow':'Who we are','a.founded':'Founded','a.title':'Strategy, creative and results in one team.',
 'a.p1':'BR is a full-service marketing and creative agency. We connect strategy, creative direction, content, social media, performance and automation into one coordinated system, so attention turns into measurable growth.',
 'a.p2':'Strong marketing is not about producing more content. It is the right strategy, message, creative and customer journey, improved continuously by results.',
 'a.human':'Human','a.results':'Results','a.h1':'Expressions','a.h2':'Culture','a.h3':'Movement','a.h4':'Reaction','a.r1':'Grid','a.r2':'Numbers','a.r3':'Clarity','a.r4':'Geometry','a.note':'The system needs both.',
 'p.eyebrow':'How we work','p.title':'A remote workflow built for clarity.','p.sub':'Clear briefs, organized feedback, shared files, defined timelines and structured approvals.',
 'mo.eyebrow':'Ways to partner',
 'ct.eyebrow':'Contact','ct.title':'Let’s frame what matters','ct.sub':'Tell us what you want people to do. We will build the system that gets them there.','ct.copy':'Copy','ct.copied':'Copied','ct.trail':'Attention → Result','ct.live':'Cairo','ct.p1':'Roshdi','ct.p2':'Abdelrahman','ct.wa':'WhatsApp','ct.call':'Call','ct.ig':'Instagram','ct.follow':'Follow us','ct.mail':'Email','mb.story':'Story','mb.feed':'Feed','mb.reel':'Reel','ct.note':'or say hi the old-school way','ct.copied2':'Email copied','ct.fast':'Takes 10 seconds','ct.st1':'What do you need?','ct.st2':'Your name','ct.st3':'Check it, then send','ct.opt':'optional','ct.bt':'Tell us what you need. We’ll reply fast.','ct.bs':'Tap what you need, add your name, press send. The message is already written for you.','ct.s0':'Brand Identity','ct.s1':'Social Media & Reels','ct.s2':'Content & Creative','ct.s3':'Paid Ads','ct.s4':'Automation & Funnels','ct.s5':'Full Marketing','ct.s6':'Not sure yet','fc.1':'Start a project','fc.2':'Got an idea? Tell us','fc.3':'10 seconds. One message','fc.4':'Let’s talk','ct.name':'Your name','ct.msg':'Anything we should know?','ct.to':'Send to','ct.send':'Send on WhatsApp','ct.mailalt':'Prefer email? Send it there instead',
 'wd.eye':'What we do','wd.remote':'Remote-first · brands anywhere','wd.go':'Start a project','wd.n1':'Brand Identity','wd.h1':'We build the look people remember.','wd.t1':'Logo|Visual language|Brand guide','wd.n2':'Social & Reels','wd.h2':'We make them stop scrolling.','wd.t2':'Content plans|Posts & Reels|Daily management','wd.n3':'Content & Creative','wd.h3':'We turn ideas into content.','wd.t3':'Campaign ideas|Designs|Photo & video','wd.n4':'Paid Ads','wd.h4':'We put it in front of the right people.','wd.t4':'Plan|Launch|Optimize','wd.n5':'Automation & Funnels','wd.h5':'We turn interest into customers.','wd.t5':'Auto-replies|Lead capture|Follow-up','wd.end':'One team. All of it.','a.p3':'We work remotely, so distance never limits who we can partner with.','f.tag':'Creative Thinking. Strategic Marketing. Powerful Execution.'
},ar:{
 'n.top':'الرئيسية','n.work':'الأعمال','n.services':'الخدمات','n.about':'من نحن','n.process':'آلية العمل','n.contact':'تواصل','n.cta':'ابدأ مشروعك',
 'draft':'نسخة تجريبية. اختر شكل الهيرو:','hide':'إخفاء',
 'h.eyebrow':'BR للتسويق','h.l1':'فكرة تشدّهم.','h.l2':'استراتيجية تحرّكهم',
 'h.sub':'نحدّد ما يلفت الناس وما يشعرون به وما يفعلونه، ثم نحوّل ردّ فعلهم إلى نتيجة قابلة للقياس.','h.c1':'شاهد الأعمال',
 'h.cap1':'العدسة الحيّة','h.cap2':'مصمَّمة للنتائج.',
 'h.f1':'سنة التأسيس. وكالة تسويق وإبداع متكاملة.','h.f2':'قدرات متصلة في منظومة واحدة.','h.f3n':'عن بُعد','h.f3':'شريكك التسويقي والإبداعي، أينما كنت.',
 'w.eyebrow':'أعمال مختارة','w.title':'ثلاث علامات. تسويق متكامل من الألف إلى الياء.','w.sub':'هوية وسوشيال ومحتوى وإعلانات مدفوعة، تعمل كمنظومة واحدة. تابع كل شريك بالتمرير.',
 'l.problem':'المشكلة','l.decision':'القرار','l.result':'النتيجة','l.sample':'رقم تجريبي','l.ph':'صور مؤقتة، تُستبدل بأعمال العميل',
'r.id':'الهوية البصرية','r.id.d':'الشعار واللغة البصرية ودليل العلامة.','r.sm':'السوشيال ميديا','r.sm.d':'الاستراتيجية وخطة المحتوى والإدارة اليومية.','r.ct':'المحتوى والإبداع','r.ct.d':'منشورات وريلز وتصاميم حملات تُوقف التمرير.','r.mb':'الميديا باينج','r.mb.d':'حملات وعروض مدفوعة نخطط لها ونطلقها ونحسّنها.','sv.sp':'مموَّل','sv.cta':'اعرف المزيد','r.of':'العروض والحملات','r.of.d':'عروض وخصومات موسمية تجلب الناس.','c1.intro':'مقهى له تاريخ منذ 1975. ندير تسويقه من الألف إلى الياء، ولا نزال.','c2.intro':'استوديو رقمي يبني المتاجر الإلكترونية وأنظمة ERP والدعوات الرقمية. نتولّى هويته وسوشياله ومحتواه وإعلاناته المدفوعة.','c3.intro':'علامة عطور. صغنا هويتها وحضورها على السوشيال والمحتوى الذي يحملها.','s.identity':'الهوية البصرية','s.ads':'إعلانات وعروض','cl.live':'شريك حالي','cl.s1':'مقهى · تسويق متكامل','cl.s2':'استوديو رقمي · متاجر وERP ودعوات','cl.s3':'علامة عطور','hv.est':'منذ','c1.m':'نمو مستمر','c1.note':'أرقام المنصات تُضاف قريبًا','d.k1':'خدمات منفّذة','d.k2':'ألوان الهوية','d.k3':'لغات','d.f1':'الوصول','d.f2':'التفاعل','d.f3':'الفعل','w.all':'الكل','w.post':'بوست سوشيال','w.camp':'تصميم حملة','w.mood':'لوحة الإلهام','w.poster':'بوستر الهوية','w.ground':'على أرض الواقع','w.ig':'بوست انستجرام','w.slide':'شريحة كاروسيل','w.prod':'صورة منتج','w.offer':'بوست عرض','w.reel':'ريل','hg.eyebrow':'حسب العميل','hg.ph':'مؤقت','hg.d1':'بوست انستجرام','hg.d2':'بانر الهوية','hg.d3':'أيقونة العلامة','hg.d4':'الشعار النصي','hg.d5':'تدرج الهوية','hg.s1':'صورة حملة','hg.s2':'ستوري','hg.s3':'غلاف ريل','hg.s4':'لقطة محتوى','hg.title':'داخل العمل.','hg.hint':'اسحب للاستكشاف','hg.c1':'لوحة الإلهام','hg.c2':'بوستر الهوية','hg.c3':'الشعار العربي','hg.c4':'أيقونات الستوريز','hg.c5':'المشروب المميز','hg.c6':'على أرض الواقع', 's.social':'السوشيال ميديا','s.content':'المحتوى والإبداع','s.video':'الفيديو والريلز','s.brand':'الهوية والتصميم','s.paid':'الميديا باينج','s.auto':'الأتمتة ومسارات التحويل','s.strategy':'الاستراتيجية التسويقية','s.seo':'سيو السوشيال',
 'c1.cat':'مقهى · شريك تسويق متكامل','c1.p':'مقهى له تاريخ منذ 1975، وحضور رقمي لم يكن بعد بمستوى هذا التاريخ.','c1.d':'نتولّى التسويق من أوله لآخره: هوية جديدة، سوشيال، إعلانات، وعروض تجلب الناس.','c1.r':'زيادة المتابعين على كل الصفحات، ومبيعات وعروض تدفع الزيارات. ولا يزال شريكنا حتى اليوم.','c1.hook':'',
 'c2.cat':'استوديو رقمي','c2.p':'الزيارات تصل لكن المحادثات لا تبدأ. العرض واضح للفريق وغير واضح للعميل.','c2.d':'نعيد كتابة العرض، ونختبر ثلاثة تصاميم، وننقل أول ردّ إلى مسار رسائل خاصة.','c2.r':'محادثات مؤهلة أكثر شهريًا','c2.hook':'كفى شرحًا. ابدأ المحادثة.',
 'c3.cat':'علامة عطور','c3.p':'علامة جيدة لا يجدها أحد. كان البحث والاكتشاف آخر ما يُفكَّر فيه.','c3.d':'نحدّد التموضع أولًا، ثم نعيد بناء الحسابات والتعليقات حول طريقة بحث الناس الفعلية.','c3.r':'اكتشاف الحساب خلال أربعة أشهر','c3.hook':'وجدناك.',
 'm.reel':'ريل · 0:15','m.c1':'الدليل','m.c2':'تفضّل. سؤال سريع أولًا.','m.c3':'الأسعار','m.c4':'تم الإرسال. نحدد مكالمة؟','m.ad':'احجز جلستك الأولى','m.adbtn':'احجز الآن',
 'sv.eyebrow':'ما نقدّمه','sv.title':'منظومة واحدة، لا ثماني خدمات منفصلة.','sys.title':'منظومة BR التسويقية','sys.sub':'ميزتنا في طريقة اتصال الخدمات ببعضها.',
 'a.eyebrow':'من نحن','a.founded':'سنة التأسيس','a.title':'الاستراتيجية والإبداع والنتائج في فريق واحد.',
 'a.p1':'BR وكالة تسويق وإبداع متكاملة. نربط الاستراتيجية والتوجيه الإبداعي والمحتوى والسوشيال ميديا والأداء والأتمتة في منظومة منسّقة واحدة، فيتحوّل الانتباه إلى نمو قابل للقياس.',
 'a.p2':'التسويق القوي ليس إنتاج محتوى أكثر. هو الاستراتيجية والرسالة والإبداع ورحلة العميل الصحيحة، تتحسّن باستمرار بالنتائج.',
 'a.human':'الإنسان','a.results':'النتائج','a.h1':'تعبيرات','a.h2':'ثقافة','a.h3':'حركة','a.h4':'ردّ فعل','a.r1':'شبكة','a.r2':'أرقام','a.r3':'وضوح','a.r4':'هندسة','a.note':'المنظومة تحتاج الاثنين.',
 'p.eyebrow':'كيف نعمل','p.title':'آلية عمل عن بُعد مبنية على الوضوح.','p.sub':'موجزات واضحة، وملاحظات منظّمة، وملفات مشتركة، وجداول زمنية محددة، وموافقات مرتّبة.',
 'mo.eyebrow':'طرق الشراكة',
 'ct.eyebrow':'تواصل','ct.title':'لنُبرز ما يهمّ','ct.sub':'أخبرنا ماذا تريد من الناس أن يفعلوا، وسنبني المنظومة التي توصلهم إلى ذلك.','ct.copy':'نسخ','ct.copied':'تم النسخ','ct.trail':'الانتباه ← النتيجة','ct.live':'القاهرة','ct.p1':'رشدي','ct.p2':'عبدالرحمن','ct.wa':'واتساب','ct.call':'اتصال','ct.ig':'انستجرام','ct.follow':'تابعنا','ct.mail':'البريد','mb.story':'ستوري','mb.feed':'فيد','mb.reel':'ريل','ct.note':'أو كلمنا بالطريقة التقليدية','ct.copied2':'اتنسخ الإيميل','ct.fast':'بياخد 10 ثواني','ct.st1':'محتاج إيه؟','ct.st2':'اسمك','ct.st3':'راجعها وابعت','ct.opt':'اختياري','ct.bt':'جهّز طلبك. وإحنا نكمّل.','ct.bs':'اختار اللي محتاجه وابعته لنا على واتساب مكتوب وجاهز.','ct.s0':'الهوية البصرية','ct.s1':'السوشيال ميديا والريلز','ct.s2':'المحتوى والإبداع','ct.s3':'إعلانات ممولة','ct.s4':'الأتمتة والفانلز','ct.s5':'تسويق متكامل','ct.s6':'لسه مش متأكد','fc.1':'ابدأ مشروعك','fc.2':'عندك فكرة؟ قول لنا','fc.3':'10 ثواني. رسالة واحدة','fc.4':'يلا نتكلم','ct.name':'اسمك','ct.msg':'في حاجة نعرفها؟','ct.to':'ابعت إلى','ct.send':'ابعت على واتساب','ct.mailalt':'تفضّل البريد؟ ابعته هناك',
 'wd.eye':'ماذا نفعل','wd.remote':'نعمل عن بُعد مع علامات من أي مكان','wd.go':'ابدأ مشروعك','wd.n1':'الهوية البصرية','wd.h1':'نبني هوية لا تُنسى.','wd.t1':'الشعار|اللغة البصرية|دليل الهوية','wd.n2':'السوشيال والريلز','wd.h2':'نجعلهم يتوقفون عن التمرير.','wd.t2':'خطة محتوى|منشورات وريلز|إدارة يومية','wd.n3':'المحتوى والإبداع','wd.h3':'نحوّل الفكرة إلى محتوى.','wd.t3':'أفكار حملات|تصاميم|تصوير وفيديو','wd.n4':'الإعلانات','wd.h4':'نوصلك لمن يهمّهم.','wd.t4':'تخطيط|إطلاق|تحسين','wd.n5':'الأتمتة والفانلز','wd.h5':'نحوّل الاهتمام إلى عملاء.','wd.t5':'ردود تلقائية|جمع العملاء|متابعة','wd.end':'فريق واحد. كل شيء.','a.p3':'نعمل عن بُعد، فلا تحدّ المسافة من نتشارك معه.','f.tag':'تفكير إبداعي. تسويق استراتيجي. تنفيذ قوي.'
}};
var SVC=[
 {k:'strategy',en:['Marketing Strategy','Strategy, positioning, planning, campaigns, audience and competitor insights.'],ar:['الاستراتيجية التسويقية','الاستراتيجية والتموضع والتخطيط والحملات، وفهم الجمهور والمنافسين.']},
 {k:'social',en:['Social Media','Platform management, content planning, publishing, community and optimization.'],ar:['السوشيال ميديا','إدارة المنصات وتخطيط المحتوى والنشر والمجتمع والتحسين المستمر.']},
 {k:'content',en:['Content & Creative','Creative concepts, copy, storytelling, campaigns and branded content.'],ar:['المحتوى والإبداع','أفكار إبداعية وكتابة وسرد قصصي وحملات ومحتوى للعلامة.']},
 {k:'video',en:['Video & Reels','Short-form video, cinematic content, scripting, editing and creative direction.'],ar:['الفيديو والريلز','فيديو قصير ومحتوى سينمائي وكتابة سيناريو ومونتاج وتوجيه إبداعي.']},
 {k:'brand',en:['Branding & Design','Brand identity, visual systems, campaign creatives and marketing design.'],ar:['الهوية والتصميم','هوية العلامة والأنظمة البصرية وتصاميم الحملات والتصميم التسويقي.']},
 {k:'paid',en:['Paid Advertising','Campaign strategy, creative testing, targeting, optimization and performance.'],ar:['الإعلانات المدفوعة','استراتيجية الحملات واختبار الإبداعات والاستهداف والتحسين والأداء.']},
 {k:'auto',en:['Automation & Funnels','DM automation, chatbots, lead journeys and conversion-focused systems.'],ar:['الأتمتة ومسارات التحويل','أتمتة الرسائل الخاصة والشات بوت ومسارات العملاء وأنظمة موجّهة للتحويل.']},
 {k:'seo',en:['Social SEO','Profile, content and discoverability optimization across social platforms.'],ar:['سيو السوشيال','تحسين الحساب والمحتوى وقابلية الاكتشاف عبر المنصات الاجتماعية.']}
];
var SYS=[
 {en:['Strategy','Define the market, audience, positioning, message and growth direction.'],ar:['الاستراتيجية','نحدّد السوق والجمهور والتموضع والرسالة واتجاه النمو.']},
 {en:['Creative','Turn strategy into concepts, stories, visual direction and content.'],ar:['الإبداع','نحوّل الاستراتيجية إلى أفكار وقصص واتجاه بصري ومحتوى.']},
 {en:['Content','Produce consistent branded content across the relevant channels.'],ar:['المحتوى','ننتج محتوى متّسقًا للعلامة عبر القنوات المناسبة.']},
 {en:['Distribution','Publish, promote and distribute through organic and paid channels.'],ar:['التوزيع','ننشر ونروّج ونوزّع عبر القنوات العضوية والمدفوعة.']},
 {en:['Engagement','Build conversations and meaningful audience interactions.'],ar:['التفاعل','نبني محادثات وتفاعلًا حقيقيًا مع الجمهور.']},
 {en:['Conversion','Create journeys, funnels and touchpoints that move prospects toward action.'],ar:['التحويل','نصمّم مسارات ونقاط تواصل تدفع العميل المحتمل نحو الفعل.']},
 {en:['Measurement','Track performance, identify insights and understand what is working.'],ar:['القياس','نتتبّع الأداء ونستخرج الرؤى ونفهم ما ينجح.']},
 {en:['Optimization','Use insights to improve strategy, creative and execution continuously.'],ar:['التحسين','نستخدم الرؤى لتطوير الاستراتيجية والإبداع والتنفيذ باستمرار.']}
];
var PROC=[
 {en:['Discovery','Understand the business, goals, audience, offer, existing channels and requirements.'],ar:['الاكتشاف','نفهم النشاط والأهداف والجمهور والعرض والقنوات الحالية والمتطلبات.']},
 {en:['Strategy','Define priorities, messaging, creative direction and the execution roadmap.'],ar:['الاستراتيجية','نحدّد الأولويات والرسائل والاتجاه الإبداعي وخارطة التنفيذ.']},
 {en:['Creative Development','Develop concepts, scripts, designs, content structures and production plans.'],ar:['التطوير الإبداعي','نطوّر الأفكار والسيناريوهات والتصاميم وهياكل المحتوى وخطط الإنتاج.']},
 {en:['Execution','Produce, edit, publish, launch or implement the agreed work.'],ar:['التنفيذ','ننتج ونحرّر وننشر ونطلق وننفّذ ما اتُّفق عليه.']},
 {en:['Measurement','Review content, campaign, social and conversion performance.'],ar:['القياس','نراجع أداء المحتوى والحملات والسوشيال والتحويل.']},
 {en:['Optimization','Turn insights into improvements, new ideas and stronger future execution.'],ar:['التحسين','نحوّل الرؤى إلى تحسينات وأفكار جديدة وتنفيذ أقوى.']}
];
var MODELS=[
 {en:['Project-Based','A focused engagement for a defined campaign, branding project or creative production scope.'],ar:['قائم على المشروع','ارتباط مركّز لحملة أو مشروع هوية أو نطاق إنتاج إبداعي محدد.']},
 {en:['Ongoing Monthly Support','Continuous marketing and creative support based on an agreed scope and business priorities.'],ar:['دعم شهري مستمر','دعم تسويقي وإبداعي مستمر وفق نطاق متفق عليه وأولويات النشاط.']},
 {en:['Retainer Partnership','BR operates as your external marketing and creative partner through an ongoing strategic and production relationship.'],ar:['شراكة بعقد دوري','تعمل BR كشريك تسويقي وإبداعي خارجي ضمن علاقة استراتيجية وإنتاجية مستمرة.']},
 {en:['Remote Team Extension','BR works alongside your internal team or agency and takes ownership of agreed areas such as content, design, video or paid media.'],ar:['امتداد لفريقك عن بُعد','تعمل BR بجانب فريقك أو وكالتك وتتولّى مجالات متفق عليها مثل المحتوى والتصميم والفيديو والإعلانات.']}
];
var lang='en';
try{var sv=localStorage.getItem('br-lang'); if(sv==='ar'||sv==='en') lang=sv;}catch(e){}

/* ================= build dynamic lists ================= */
var svcList=$('#svcList');
SVC.forEach(function(s,i){
  var li=document.createElement('li'); li.className='svc'+(i===0?' open':'');
  li.innerHTML='<button type="button" aria-expanded="'+(i===0)+'" aria-controls="sv'+i+'"><span class="n"></span><i class="dt"></i></button><div class="bd" id="sv'+i+'"><div><p></p></div></div>';
  svcList.appendChild(li);
  $('button',li).addEventListener('click',function(){
    var open=!li.classList.contains('open');
    $$('.svc',svcList).forEach(function(x){x.classList.remove('open');$('button',x).setAttribute('aria-expanded','false')});
    if(open){li.classList.add('open');$('button',li).setAttribute('aria-expanded','true')}
  });
});
var sysList=$('#sysList');
SYS.forEach(function(){var li=document.createElement('li');li.innerHTML='<b></b><span></span>';sysList.appendChild(li)});
var tl=$('#tl');
PROC.forEach(function(p,i){
  var it=document.createElement('div'); it.className='tl-item';
  it.innerHTML='<div class="num">0'+(i+1)+'</div><div class="tx"><h3></h3><p></p></div><i class="dt"></i>';
  tl.appendChild(it);
});
var models=$('#models');
MODELS.forEach(function(){var d=document.createElement('div');d.className='model';d.innerHTML='<i></i><h3></h3><p></p>';models.appendChild(d)});

function applyLang(l){
  lang=l; var t=D[l];
  document.documentElement.lang=l; document.documentElement.dir=(l==='ar'?'rtl':'ltr');
  $$('[data-t]').forEach(function(el){var k=el.getAttribute('data-t'); if(t[k]!==undefined) el.textContent=t[k]; else if(window.console) console.warn('missing i18n',k)});
  $$('.wd-tg').forEach(function(u){var v=t[u.getAttribute('data-tags')];if(v){u.innerHTML='';v.split('|').forEach(function(x){var li=document.createElement('li');li.textContent=x;u.appendChild(li)})}});
  $$('.svc',svcList).forEach(function(li,i){$('.n',li).textContent=SVC[i][l][0];$('p',li).textContent=SVC[i][l][1]});
  $$('li',sysList).forEach(function(li,i){$('b',li).textContent=SYS[i][l][0];$('span',li).textContent=SYS[i][l][1]});
  $$('.tl-item',tl).forEach(function(it,i){$('h3',it).textContent=PROC[i][l][0];$('p',it).textContent=PROC[i][l][1]});
  $$('.model',models).forEach(function(m,i){$('h3',m).textContent=MODELS[i][l][0];$('p',m).textContent=MODELS[i][l][1]});
  $('#lang').textContent=(l==='ar'?'EN':'العربية');
  $('#lang').setAttribute('aria-label',l==='ar'?'Switch to English':'التبديل إلى العربية');
  try{localStorage.setItem('br-lang',l)}catch(e){}
  schedule();
}
$('#lang').addEventListener('click',function(){applyLang(lang==='ar'?'en':'ar')});
$('#hideDraft').addEventListener('click',function(){$('#draft').hidden=true});

/* ================= copy ================= */
var toast=$('#toast'),tt;
function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('show')},1600)}
$$('.copy').forEach(function(b){b.addEventListener('click',function(){
  var v=b.getAttribute('data-copy');
  var done=function(){showToast(D[lang]['ct.copied'])};
  var fallback=function(){var a=b.parentNode.querySelector('a');var r=document.createRange();r.selectNodeContents(a);var s=getSelection();s.removeAllRanges();s.addRange(r);done()};
  try{navigator.clipboard.writeText(v).then(done,fallback)}catch(e){fallback()}
})});

/* ================= hero pointer parallax ================= */
var lock=$('#lockup');
if(lock&&!RM&&matchMedia('(hover:hover)').matches){
  lock.addEventListener('pointermove',function(e){
    var r=lock.getBoundingClientRect();
    lock.style.setProperty('--mx',((e.clientX-r.left)/r.width*2-1).toFixed(3));
    lock.style.setProperty('--my',((e.clientY-r.top)/r.height*2-1).toFixed(3));
  });
  lock.addEventListener('pointerleave',function(){lock.style.setProperty('--mx',0);lock.style.setProperty('--my',0)});
}

/* ================= reveal on scroll (resting state is visible) ================= */
var rvTargets=$$('.work-head > *, .svc-head > *, .svc, .about-copy > *, .hr > div, .process .wrap > .eyebrow, .process .h2, .process .lead, .model, .contact .wrap > *, .facts .fact');
if('IntersectionObserver' in window&&!RM){
  var vh=innerHeight;
  var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');e.target.classList.remove('rv-pre');ro.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  rvTargets.forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top>vh*0.95){el.classList.add('rv-pre');ro.observe(el)}
  });
}

/* ================= work: pinned film + stacked fallback ================= */
var work=$('#work'),filmEl=$('#film'),stage=$('#stage'),chs=$$('.chapter'),N=chs.length,cnt=$('#cnt'),fbtn=$$('#filmNav button');
var mq=matchMedia('(min-width:900px) and (min-height:700px)');
var isFilm=false;
function fmt(el,v){if(el.hasAttribute('data-static'))return;var d=+el.getAttribute('data-dec')||0;el.textContent=(el.getAttribute('data-pre')||'')+v.toFixed(d)+(el.getAttribute('data-suf')||'')}
function count(ch){
  var m=$('.metric',ch); if(!m||m.hasAttribute('data-static')) return; var to=+m.getAttribute('data-to');
  if(RM){fmt(m,to);return}
  cancelAnimationFrame(ch._raf); var t0=performance.now(),dur=1200;
  (function step(t){var k=clamp((t-t0)/dur,0,1);fmt(m,to*(1-Math.pow(1-k,3)));if(k<1)ch._raf=requestAnimationFrame(step)})(t0);
}
function setPh(ch,ph){
  if(ch._ph===ph) return;
  var prev=ch._ph; ch._ph=ph; ch.setAttribute('data-ph',ph);
  if(ph===2) count(ch);
}
var ease=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
function story(l){
  var p;
  if(l<.08)p=0;else if(l<.42)p=.5*ease((l-.08)/.34);else if(l<.56)p=.5;else if(l<.80)p=.5+.5*ease((l-.56)/.24);else p=1;
  return {p:p,ph:l>=.86?2:(l>=.42?1:0)};
}
var curIdx=-1;
function updateFilm(){
  var stTop=parseFloat(getComputedStyle(stage).top)||0;
  var top=filmEl.getBoundingClientRect().top+scrollY;
  var range=Math.max(1,filmEl.offsetHeight-stage.offsetHeight);
  var pr=clamp((scrollY-(top-stTop))/range,0,1);
  var f=pr*N, idx=Math.min(N-1,Math.floor(f)), local=f-idx;
  if(idx!==curIdx){
    chs.forEach(function(c,i){c.classList.toggle('on',i===idx)});
    stage.setAttribute('data-theme',chs[idx].getAttribute('data-theme'));
    fbtn.forEach(function(b,i){b.classList.toggle('on',i===idx)});
    cnt.innerHTML='<bdi dir="ltr">0'+(idx+1)+' / 0'+N+'</bdi>'; curIdx=idx;
  }
  var ch=chs[idx], s=story(local);
  ch.style.setProperty('--lp',local.toFixed(4));
  setPh(ch,s.ph);
  var nn=ch._n||4, sc=Math.min(nn-1,Math.floor(local*nn)); setSc(ch,sc); ch.style.setProperty('--sp',clamp(local*nn-sc,0,1).toFixed(3));
}
function setSc(ch,n){ if(ch._sc===n) return; ch._sc=n; ch.setAttribute('data-sc',n); $$('.svx li',ch).forEach(function(li,i){li.classList.toggle('act',i===n)}); }
chs.forEach(function(c){c._n=$$('.svx li',c).length||4; setSc(c,0)});
/* service index: click jumps to that scene (film) or sets it (stacked) */
chs.forEach(function(c,ci){
  $$('.svx li',c).forEach(function(li,si){
    $('button',li).addEventListener('click',function(){
      c._manual=true;
      if(isFilm){
        var stTop=parseFloat(getComputedStyle(stage).top)||0, top=filmEl.getBoundingClientRect().top+scrollY, range=Math.max(1,filmEl.offsetHeight-stage.offsetHeight);
        var pr=(ci+(si+.5)/c._n)/N; scrollTo({top:top-stTop+pr*range,behavior:RM?'auto':'smooth'});
      } else { setSc(c,si); c.style.setProperty('--sp',1); }
    });
  });
});
/* stacked mode: scenes advance on their own while the chapter is on screen */
(function(){
  if(RM||!('IntersectionObserver' in window)) return;
  chs.forEach(function(c){
    var tm=0,vis=false;
    function tick(){ if(isFilm||c._manual||!vis) return; var n=((c._sc||0)+1)%c._n; setSc(c,n); c.style.setProperty('--sp',1); }
    new IntersectionObserver(function(es){ var was=vis; vis=es[0].isIntersecting; clearInterval(tm); if(vis&&!isFilm){ if(!was&&!c._manual){ c._sc=-1; c.setAttribute('data-sc','-1'); requestAnimationFrame(function(){requestAnimationFrame(function(){setSc(c,0);c.style.setProperty('--sp',1)})}); } tm=setInterval(tick,2100); } },{threshold:.4}).observe(c);
  });
})();
function setMode(){
  isFilm=mq.matches; work.classList.toggle('is-film',isFilm); curIdx=-1;
  chs.forEach(function(c){
    c.classList.remove('on','pre'); c._ph=undefined; c.style.removeProperty('--lp');
    c.setAttribute('data-ph','2');
    c._seen=false;
  });
  if(!isFilm){stage.setAttribute('data-theme','canvas');stage.style.background='';
    if('IntersectionObserver' in window&&!RM){
      chs.forEach(function(c){var r=c.getBoundingClientRect(); if(r.top>innerHeight*.9){c.classList.add('pre');c.setAttribute('data-ph','0');observeCh(c)}});
    }
  }
  schedule();
}
var chObs=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting||isFilm) return; var c=e.target; if(c._seen) return; c._seen=true; chObs.unobserve(c);
  c.classList.remove('pre'); setTimeout(function(){c.setAttribute('data-ph','1')},650); setTimeout(function(){c.setAttribute('data-ph','2');count(c)},1500);
})},{threshold:.28}):null;
function observeCh(c){if(chObs){c._seen=false;chObs.observe(c)}}
fbtn.forEach(function(b){b.addEventListener('click',function(){
  var i=+b.getAttribute('data-i');
  var stTop=parseFloat(getComputedStyle(stage).top)||0;
  var top=filmEl.getBoundingClientRect().top+scrollY;
  var range=Math.max(1,filmEl.offsetHeight-stage.offsetHeight);
  scrollTo({top:top-stTop+(i/N)*range+3,behavior:RM?'auto':'smooth'});
})});
if(mq.addEventListener) mq.addEventListener('change',setMode); else if(mq.addListener) mq.addListener(setMode);

/* ================= services: system progress ================= */
var sys=$('#sys'), sysLis=$$('li',sysList);
function updateSys(){
  var r=sys.getBoundingClientRect(), vh=innerHeight;
  var k=clamp((vh*.85-r.top)/(r.height*.9+vh*.25),0,1);
  var n=Math.max(1,Math.round(k*sysLis.length)), cur=Math.min(sysLis.length,n)-1;
  sysLis.forEach(function(li,i){li.classList.toggle('lit',i<=cur);li.classList.toggle('cur',i===cur)});
  sysList.style.setProperty('--sp',((cur+.5)/sysLis.length).toFixed(3));
}

/* ================= process timeline ================= */
var tlItems=$$('.tl-item',tl), tlFill=$('.tl-fill',tl);
function updateTl(){
  var r=tl.getBoundingClientRect(), line=innerHeight*.55;
  var k=clamp((line-r.top)/r.height,0,1);
  tl.style.setProperty('--tp',k.toFixed(4));
  var cur=-1;
  tlItems.forEach(function(it,i){var ir=it.getBoundingClientRect();var c=ir.top+ir.height/2;var on=c<=line;it.classList.toggle('on',on);if(on)cur=i});
  tlItems.forEach(function(it,i){it.classList.toggle('cur',i===cur)});
}

/* ================= rail ================= */
var secs=$$('[data-sec]'), railA=$$('#rail a');
function updateRail(){
  var mid=innerHeight*.45, cur='top';
  secs.forEach(function(s){var r=s.getBoundingClientRect(); if(r.top<=mid&&r.bottom>mid) cur=s.getAttribute('data-sec')});
  railA.forEach(function(a){a.classList.toggle('on',a.getAttribute('data-s')===cur)});
}

/* ================= hero attention field (WebGL, no library) =================
   A slow topographic field in Canvas + Blush. Ink contour lines flow like video.
   The pointer is "attention": it lifts the field and sends ripples; a single coral dot marks it. */
(function(){
  var hero=$('#hero'), cv=$('#heroBg'), dot=$('#attn');
  if(!hero||!cv) return;
  var gl=null; try{gl=cv.getContext('webgl',{antialias:false,alpha:false,powerPreference:'low-power'})}catch(e){}
  if(!gl){hero.classList.add('no-gl');return}
  var VS='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  var FS=[
   'precision highp float;',
   'uniform vec2 uRes;uniform float uT;uniform vec2 uP;uniform float uA;',
   'float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
   'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}',
   'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(17.1,9.7);a*=.5;}return v;}',
   'void main(){',
   ' float asp=uRes.x/uRes.y; vec2 p=(gl_FragCoord.xy/uRes-.5)*vec2(asp,1.);',
   ' float t=uT*.17;',
   ' vec2 q=vec2(fbm(p*1.7+vec2(0.,t)),fbm(p*1.7+vec2(5.2,1.3)-t));',
   ' vec2 r=vec2(fbm(p*1.7+2.*q+vec2(1.7,9.2)+t*1.3),fbm(p*1.7+2.*q+vec2(8.3,2.8)-t));',
   ' float f=fbm(p*1.4+2.3*r);',
   ' vec2 pp=(uP-.5)*vec2(asp,1.); vec2 dp=p-pp; float d=length(dp);',
   ' f+=uA*(.26*exp(-d*d*7.)+.05*sin(d*38.-uT*3.)*exp(-d*3.));',
   ' vec2 pa=vec2(sin(uT*.23)*.42*asp,cos(uT*.17)*.24); vec2 da=p-pa; f+=.16*exp(-dot(da,da)*4.5);',
   ' float x=f*10.; float idx=floor(x+.5); float dist=abs(x-idx);',
   ' float line=1.-smoothstep(.012,.075,dist);',
   ' float major=1.-step(.5,mod(idx,4.));',
   ' vec3 canvas=vec3(.953,.933,.906),blush=vec3(.957,.761,.761),ink=vec3(.067);',
   ' float bd=.5+.5*sin(f*15.-uT*.45+q.x*3.);',
    ' vec3 coral=vec3(.91,.365,.333);',
    ' vec3 col=mix(canvas,blush,smoothstep(.15,.95,bd)*(.30+.70*smoothstep(.28,.78,f)));',
    ' col=mix(col,blush*.93,smoothstep(.62,.9,bd)*.35*smoothstep(.4,.7,f));',
   ' col=mix(col,ink,line*(.07+.13*major));',
    ' col=mix(col,coral,(.30*exp(-d*d*10.)*uA+.16*exp(-dot(da,da)*7.)));',
   ' col+=(h(gl_FragCoord.xy+uT)-.5)*.022;',
   ' gl_FragColor=vec4(col,1.);',
   '}'
  ].join('\n');
  function sh(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){if(window.console)console.warn(gl.getShaderInfoLog(s));return null}return s}
  var v=sh(gl.VERTEX_SHADER,VS), f=sh(gl.FRAGMENT_SHADER,FS);
  if(!v||!f){hero.classList.add('no-gl');return}
  var pg=gl.createProgram();gl.attachShader(pg,v);gl.attachShader(pg,f);gl.linkProgram(pg);
  if(!gl.getProgramParameter(pg,gl.LINK_STATUS)){hero.classList.add('no-gl');return}
  gl.useProgram(pg);
  var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var loc=gl.getAttribLocation(pg,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var uRes=gl.getUniformLocation(pg,'uRes'),uT=gl.getUniformLocation(pg,'uT'),uP=gl.getUniformLocation(pg,'uP'),uA=gl.getUniformLocation(pg,'uA');
  var ptr={x:.72,y:.45,tx:.72,ty:.45,a:0,ta:0}, seen=true, raf=0, last=0, t0=performance.now();
  function size(){
    var r=hero.getBoundingClientRect(), s=Math.min(window.devicePixelRatio||1,1)*(innerWidth<700?.55:.8);
    cv.width=Math.max(2,Math.round(r.width*s)); cv.height=Math.max(2,Math.round(r.height*s));
    gl.viewport(0,0,cv.width,cv.height);
  }
  function draw(now){
    var T=RM?14:(now-t0)/1000;
    ptr.x+=(ptr.tx-ptr.x)*.08; ptr.y+=(ptr.ty-ptr.y)*.08; ptr.a+=(ptr.ta-ptr.a)*.06;
    gl.uniform2f(uRes,cv.width,cv.height); gl.uniform1f(uT,T); gl.uniform2f(uP,ptr.x,ptr.y); gl.uniform1f(uA,ptr.a);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    if(dot){var r=hero.getBoundingClientRect();dot.style.transform='translate3d('+(ptr.x*r.width)+'px,'+((1-ptr.y)*r.height)+'px,0)';dot.style.opacity=Math.min(1,ptr.a*1.2).toFixed(3)}
  }
  function loop(now){
    raf=0; if(!seen||document.hidden||hero.classList.contains('vmode')) return;
    if(now-last>=33){last=now;draw(now)}
    raf=requestAnimationFrame(loop);
  }
  function start(){if(!RM&&!raf&&seen&&!document.hidden) raf=requestAnimationFrame(loop)}
  size(); draw(performance.now()); cv.classList.add('live');
  if(RM) return;
  hero.addEventListener('pointermove',function(e){
    var r=hero.getBoundingClientRect(); ptr.tx=(e.clientX-r.left)/r.width; ptr.ty=1-(e.clientY-r.top)/r.height; ptr.ta=1;
  });
  hero.addEventListener('pointerleave',function(){ptr.ta=0});
  hero.addEventListener('pointercancel',function(){ptr.ta=0});
  addEventListener('resize',function(){size();draw(performance.now())});
  document.addEventListener('visibilitychange',start);
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){seen=es[0].isIntersecting;if(seen)start()},{threshold:0}).observe(hero)}
  start();
})();



/* ================= hero film: A in the letters / B full screen ================= */
(function(){
  var hv=$('#heroVid'),vw=$('#vidWrap'),hero=$('#hero'),mark=$('.lockup .mark'),sw=$('#hsw');
  if(!hv||!vw||!hero||!mark) return;
  var seen=true;
  function play(){ if(RM||!seen||document.hidden){try{hv.pause()}catch(e){}return} var p=hv.play(); if(p&&p.catch)p.catch(function(){}) }
  function mode(m){
    try{localStorage.setItem('br-hero',m)}catch(e){}
    if(m==='B'){vw.insertBefore(hv,vw.firstChild);hero.classList.add('vmode');hero.setAttribute('data-theme','ink')}
    else{mark.insertBefore(hv,mark.firstChild);hero.classList.remove('vmode');hero.setAttribute('data-theme','canvas')}
    $$('button',sw).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-h')===m)});
    play(); document.dispatchEvent(new Event('visibilitychange'));
  }
  $$('button',sw).forEach(function(b){b.addEventListener('click',function(){mode(b.getAttribute('data-h'))})});
  var m0='A'; m0='A';
  mode(m0);
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){seen=es[0].isIntersecting;play()},{threshold:0}).observe(hero);
  document.addEventListener('visibilitychange',play);
})();

/* ================= selected work motion ================= */
(function(){
  var wh=$('#workHead'),cl=$('#clients');
  function go(el){if(el)el.classList.remove('pre')}
  if(RM||!('IntersectionObserver' in window)){go(wh);go(cl);}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go(e.target);io.unobserve(e.target)}})},{threshold:.2});
    io.observe(wh);io.observe(cl);
    setTimeout(function(){go(wh);go(cl)},4000);
  }
  var pk=$('#peek');
  if(!pk||RM||!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var x=0,y=0,tx=0,ty=0,raf=0,on=false,rot=0;
  function tick(){
    var dx=tx-x; x+=dx*.16; y+=(ty-y)*.16; rot+=((dx*.06)-rot)*.2;
    pk.style.transform='translate3d('+(x+28)+'px,'+(y-110)+'px,0) rotate('+Math.max(-9,Math.min(9,rot)).toFixed(2)+'deg)';
    raf=on||Math.abs(dx)>.5?requestAnimationFrame(tick):0;
  }
  $$('#clients li').forEach(function(li,i){
    li.addEventListener('pointerenter',function(e){pk.className='peek k'+i+' on';tx=x=e.clientX;ty=y=e.clientY;on=true;if(!raf)raf=requestAnimationFrame(tick)});
    li.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;if(!raf)raf=requestAnimationFrame(tick)});
    li.addEventListener('pointerleave',function(){on=false;pk.classList.remove('on')});
  });
})();

/* ================= clients index + gallery ================= */
$$('#clients button').forEach(function(b){b.addEventListener('click',function(){
  var i=+b.getAttribute('data-go'); var fb=fbtn[i]; if(fb&&isFilm){fb.click();return}
  var c=chs[i]; if(c) c.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});
})});
(function(){
  var g=$('#hgal'),wall=$('#wall'),tiles=$$('.tile',wall),chips=$$('#hgTabs button'),lb=$('#lb'),lbm=$('#lbm'); if(!g||!wall) return;
  var filt='all', cur=-1, cols=4;
  tiles.forEach(function(t){t._r=parseFloat(t.getAttribute('data-r'))||1});
  function layout(){
    var W=wall.clientWidth; if(!W) return; cols=W>1100?4:W>700?3:2;
    var gap=W>700?18:10, cw=(W-gap*(cols-1))/cols, hs=[]; for(var i=0;i<cols;i++)hs.push(0);
    var ci=0;
    tiles.forEach(function(t){
      var on=(filt==='all'||t.getAttribute('data-c')===filt); t.classList.toggle('off',!on); t._on=on;
      if(!on) return;
      var c=0; for(var i=1;i<cols;i++) if(hs[i]<hs[c]-1) c=i;
      var h=cw/t._r; t.style.width=cw+'px'; t.style.height=h+'px';
      t.style.transform='translate('+(c*(cw+gap)).toFixed(1)+'px,'+hs[c].toFixed(1)+'px)'; t._c=c;
      t.style.setProperty('--sp',((c%2)?14:-14)+'px'); hs[c]+=h+gap;
    });
    wall.style.height=Math.max.apply(null,hs)+'px';
  }
  function par(){
    var r=wall.getBoundingClientRect(), k=Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight));
    wall.style.setProperty('--py',k.toFixed(3));
  }
  window.addEventListener('resize',layout); layout();
  if(!RM){ tiles.forEach(function(t){t.style.translate='0 calc(var(--py,0) * var(--sp,0px))'}); window.addEventListener('scroll',function(){requestAnimationFrame(par)},{passive:true}); par(); }
  if('IntersectionObserver' in window&&!RM){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){wall.classList.add('in');io.disconnect()}})},{threshold:.08});io.observe(wall)}else wall.classList.add('in');
  chips.forEach(function(b){b.addEventListener('click',function(){
    filt=b.getAttribute('data-f'); chips.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
    g.setAttribute('data-theme',b.getAttribute('data-th')); layout();
  })});
  /* videos play only while visible */
  var vids=$$('video[data-auto]');
  vids.forEach(function(v){v.muted=true});
  if('IntersectionObserver' in window){var vo=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target; if(e.isIntersecting){var pr=v.play(); if(pr&&pr.catch)pr.catch(function(){})} else v.pause()})},{threshold:.25}); vids.forEach(function(v){vo.observe(v)})}
  /* lightbox */
  function vis(){return tiles.filter(function(t){return t._on})}
  function open(i){
    var vs=vis(); if(!vs.length) return; cur=(i+vs.length)%vs.length; var t=vs[cur];
    lb.setAttribute('data-theme',({h:'hamid',d:'digi',s:'sense'})[t.getAttribute('data-c')]);
    lb.style.setProperty('--lr',t._r); lbm.innerHTML=''; lbm.style.backgroundImage='';
    var v=t.querySelector('video');
    if(v){var nv=document.createElement('video'); nv.muted=true; nv.loop=true; nv.playsInline=true; nv.controls=false; nv.setAttribute('poster','/assets/1aa325d274.jpg'); nv.innerHTML=v.innerHTML; lbm.appendChild(nv); var pp=nv.play(); if(pp&&pp.catch)pp.catch(function(){})}
    else{var im=t.querySelector('i'); lbm.style.backgroundImage=getComputedStyle(im).backgroundImage}
    $('#lbc').textContent=t.querySelector('.cn').textContent; $('#lbt').textContent=t.querySelector('span[data-t]').textContent;
    lb.hidden=false; document.documentElement.style.overflow='hidden'; $('.lb-x',lb).focus();
  }
  function close(){lb.hidden=true; lbm.innerHTML=''; document.documentElement.style.overflow=''; if(tiles[0]&&cur>=0){var vs=vis(); if(vs[cur]) vs[cur].focus({preventScroll:true})}}
  tiles.forEach(function(t){t.addEventListener('click',function(){open(vis().indexOf(t))}); t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(vis().indexOf(t))}})});
  $('.lb-x',lb).addEventListener('click',close); $('.lb-p',lb).addEventListener('click',function(){open(cur-1)}); $('.lb-n',lb).addEventListener('click',function(){open(cur+1)});
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){if(lb.hidden)return; if(e.key==='Escape')close(); else if(e.key==='ArrowRight')open(cur+(document.dir==='rtl'?-1:1)); else if(e.key==='ArrowLeft')open(cur-(document.dir==='rtl'?-1:1))});
})();

(function(){
  var v=$('.sx-bg'),tc=$('#sxTc'),fl=$('#sxFill'); if(!v||!tc) return;
  function p2(n){return (n<10?'0':'')+n}
  v.addEventListener('timeupdate',function(){var t=v.currentTime,d=v.duration||1; tc.textContent=p2(Math.floor(t/60))+':'+p2(Math.floor(t%60))+':'+p2(Math.floor((t%1)*30)); fl.style.width=(t/d*100).toFixed(2)+'%'});
})();

/* ================= loop ================= */
var ticking=false;
function frame(){ticking=false; if(isFilm) updateFilm(); updateSys(); updateTl(); updateRail()}
function schedule(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
addEventListener('scroll',schedule,{passive:true});
addEventListener('resize',schedule);

applyLang(lang);
setMode();
})();

/* perf: pause offscreen chapters' animations + hero video; skip video on data saver */
(function(){
  var c=navigator.connection||{}, lite=c.saveData||/(^|-)2g$/.test(c.effectiveType||'');
  if(lite){document.querySelectorAll('video').forEach(function(v){v.removeAttribute('autoplay');v.preload='none';v.removeAttribute('data-auto');v.pause&&v.pause()});}
  if(!('IntersectionObserver' in window)) return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('inv',!e.isIntersecting)})},{rootMargin:'80px'});
  document.querySelectorAll('.chapter').forEach(function(el){io.observe(el)});
  var hv=document.getElementById('heroVid');
  if(hv&&!lite){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var p=hv.play();p&&p.catch&&p.catch(function(){})}else hv.pause()})},{threshold:.05}).observe(hv);}
})();

/* video robustness: reveal only once playing; fall back to a blob download if the host blocks range requests; retry on first touch */
(function(){
  function arm(v){
    if(!v||v._arm) return; v._arm=1;
    var tried=0;
    function ok(){v.classList.add('vp')}
    v.addEventListener('playing',ok); v.addEventListener('timeupdate',function f(){if(v.currentTime>0){ok();v.removeEventListener('timeupdate',f)}});
    function blob(){
      if(tried++||!window.fetch||!window.URL) return;
      var src=(v.querySelector('source[type="video/mp4"]')||{}).src; if(!src) return;
      fetch(src).then(function(r){return r.blob()}).then(function(b){v.src=URL.createObjectURL(b);v.load();var p=v.play();p&&p.catch&&p.catch(function(){})}).catch(function(){});
    }
    v.addEventListener('error',blob,true);
    var src=v.querySelector('source:last-of-type'); if(src) src.addEventListener('error',blob);
    setTimeout(function(){if(v.readyState<2&&!v.paused||v.readyState<2&&v.getBoundingClientRect().height>0) blob()},3500);
  }
  var hv=document.getElementById('heroVid'); arm(hv);
  document.querySelectorAll('video[data-auto]').forEach(arm);
  function kick(){var p=hv&&hv.paused&&hv.play(); p&&p.catch&&p.catch(function(){}); document.removeEventListener('touchstart',kick); document.removeEventListener('scroll',kick)}
  document.addEventListener('touchstart',kick,{passive:true}); document.addEventListener('scroll',kick,{passive:true,once:true});
})();

/* contact: Cairo clock + card tilt */
(function(){
  var c=document.getElementById('ctClock');
  function t(){try{c.textContent=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Africa/Cairo'}).format(new Date())}catch(e){c.textContent=''}}
  if(c){t();setInterval(t,20000)}
  if(!window.matchMedia||!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  document.querySelectorAll('.cc').forEach(function(el){
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*6).toFixed(2)+'deg');el.style.setProperty('--rx',((.5-(e.clientY-r.top)/r.height)*5).toFixed(2)+'deg')});
    el.addEventListener('pointerleave',function(){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')});
  });
})();

/* contact: brief builder -> prefilled WhatsApp / email (Roshdi only) */
(function(){
  var f=document.getElementById('brief'); if(!f) return;
  var go=document.getElementById('bfGo'), ml=document.getElementById('bfMail'), nm=document.getElementById('bfName'), pv=document.getElementById('bfPrev');
  var L={en:['Brand Identity','Social Media & Reels','Content & Creative','Paid Ads','Automation & Funnels','Full Marketing','Not sure yet'],ar:['الهوية البصرية','السوشيال ميديا والريلز','المحتوى والإبداع','إعلانات ممولة','الأتمتة والفانلز','تسويق متكامل','لسه مش متأكد']};
  function text(){
    var ar=document.documentElement.lang==='ar', l=ar?L.ar:L.en, sel=[].slice.call(f.querySelectorAll('.chip.on')).map(function(c){return l[+c.getAttribute('data-v')]});
    var n=nm.value.trim();
    var t=ar?('أهلاً BR! '+(n?'أنا '+n+'. ':'')+(sel.length?'محتاج: '+sel.join('، ')+'.':'عايز أتكلم معاكم عن مشروع.')):('Hi BR! '+(n?"I'm "+n+'. ':'')+(sel.length?"I'm interested in: "+sel.join(', ')+'.':"I'd like to talk about a project."));
    return t.trim();
  }
  function upd(){
    var t=text(); pv.textContent=t; pv.classList.remove('pop'); void pv.offsetWidth; pv.classList.add('pop');
    go.href='https://wa.me/201120529529?text='+encodeURIComponent(t);
    ml.href='https://mail.google.com/mail/?view=cm&fs=1&to=brmarketingagency02@gmail.com&su='+encodeURIComponent('BR project')+'&body='+encodeURIComponent(t); ml.target='_blank'; ml.rel='noopener'; ml.setAttribute('data-mail','brmarketingagency02@gmail.com');
  }
  f.addEventListener('click',function(e){var c=e.target.closest('.chip'); if(c){c.classList.toggle('on');c.setAttribute('aria-pressed',c.classList.contains('on'))} if(c) upd()});
  nm.addEventListener('input',upd);
  /* also log the brief to the Node backend (fire-and-forget; WhatsApp / mail still open as before) */
  function save(){
    var ar=document.documentElement.lang==='ar', l=ar?L.ar:L.en;
    var body=JSON.stringify({name:nm.value.trim(),services:[].slice.call(f.querySelectorAll('.chip.on')).map(function(c){return l[+c.getAttribute('data-v')]}),message:text(),lang:ar?'ar':'en'});
    try{fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:body,keepalive:true}).catch(function(){})}catch(e){}
  }
  go.addEventListener('click',save); ml.addEventListener('click',save);
  new MutationObserver(upd).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  upd();
  /* "Start a project" buttons: land on the form and draw the eye to it */
  document.querySelectorAll('a[href="#contact"]').forEach(function(a){a.addEventListener('click',function(){
    setTimeout(function(){
      f.classList.remove('nudge'); void f.offsetWidth; f.classList.add('nudge');
      if(matchMedia('(hover:hover) and (pointer:fine)').matches){try{nm.focus({preventScroll:true})}catch(e){}}
    },750);
  })});
})();

/* floating CTA: appears after the hero, hides while the form is on screen */
(function(){var b=document.getElementById('fcta'),c=document.getElementById('contact');if(!b)return;var past=false,inC=false;
function u(){b.classList.toggle('on',past&&!inC);b.classList.toggle('off',!(past&&!inC))}
var sv=document.getElementById('services');function sc(){past=(window.scrollY||0)>Math.min(innerHeight*.6,500);if(sv){var r=sv.getBoundingClientRect();past=past&&!(r.top<innerHeight*.3&&r.bottom>innerHeight*.7)}u()}
addEventListener('scroll',sc,{passive:true});sc();
if(c&&'IntersectionObserver' in window){new IntersectionObserver(function(e){inC=e[0].isIntersecting;u()},{threshold:.15}).observe(c)}
})();

/* what we do: scroll-driven story */
(function(){var sec=document.getElementById('services'); if(!sec||!sec.classList.contains('wd')) return;
var S=[].slice.call(sec.querySelectorAll('.wd-s')),V=[].slice.call(sec.querySelectorAll('.wd-v')),D=[].slice.call(sec.querySelectorAll('.wd-dots button')),cur=-1,tk=false;
function set(i){if(i===cur)return;cur=i;S.forEach(function(e,j){e.classList.toggle('on',j===i)});V.forEach(function(e,j){e.classList.toggle('on',j===i)});D.forEach(function(e,j){e.classList.toggle('on',j===i)})}
function calc(){tk=false;var r=sec.getBoundingClientRect(),t=sec.offsetHeight-innerHeight,p=t>0?Math.min(1,Math.max(0,-r.top/t)):0;set(Math.min(S.length-1,Math.floor(p*S.length*.999)))}
function rq(){if(!tk){tk=true;requestAnimationFrame(calc)}}
addEventListener('scroll',rq,{passive:true});addEventListener('resize',rq);
D.forEach(function(b,i){b.addEventListener('click',function(){var t=sec.offsetHeight-innerHeight,top=sec.getBoundingClientRect().top+scrollY;scrollTo({top:top+t*((i+.5)/S.length),behavior:'smooth'})})});
calc();
})();

/* Sense background video: play while its chapter is on screen */
(function(){
  var v=document.querySelector('video.sx-bg'); if(!v) return;
  var ch=v.closest('.chapter'), work=document.getElementById('work'), vis=false;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function ev(){
    var film=work&&work.classList.contains('is-film'), ok=vis&&!document.hidden&&(!film||!ch||ch.classList.contains('on'));
    if(ok){ v.muted=true; v.preload='auto'; if(v.paused){var p=v.play(); if(p&&p.catch)p.catch(function(){})} }
    else if(!v.paused){ v.pause() }
  }
  if('IntersectionObserver' in window){ new IntersectionObserver(function(es){vis=es[0].isIntersecting;ev()},{threshold:.15}).observe(v) } else { vis=true }
  if('MutationObserver' in window){ var mo=new MutationObserver(ev); if(ch) mo.observe(ch,{attributes:true,attributeFilter:['class','data-sc']}); if(work) mo.observe(work,{attributes:true,attributeFilter:['class']}) }
  ['loadedmetadata','canplay','loadeddata'].forEach(function(n){v.addEventListener(n,ev)});
  document.addEventListener('visibilitychange',ev);
  function kick(){ev();document.removeEventListener('touchstart',kick);document.removeEventListener('scroll',kick)}
  document.addEventListener('touchstart',kick,{passive:true}); document.addEventListener('scroll',kick,{passive:true});
  setTimeout(ev,1500);
})();


/* videos are embedded in the page itself (no external requests): decode to blob URLs */
(function(){
  var cache={};
  function url(k){
    if(cache[k]) return cache[k];
    return cache[k]='/videos/'+k+'.mp4';
  }
  function go(){
    document.querySelectorAll('video[data-vk]').forEach(function(v){
      var u=url(v.getAttribute('data-vk')); if(!u) return;
      v.src=u; v.muted=true; v.setAttribute('playsinline','');
      var p=v.hasAttribute('data-auto')?null:v.play(); p&&p.catch&&p.catch(function(){});
    });
    document.dispatchEvent(new Event('visibilitychange'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){setTimeout(go,0)}); else setTimeout(go,0);
})();

/* email: copy the address on click (mail apps can be blocked in a preview) + magnetic stickers */
(function(){
  var t=document.createElement('div'); t.className='mtoast'; t.setAttribute('role','status'); document.body.appendChild(t);
  var tm=0;
  function say(addr){
    var ar=document.documentElement.lang==='ar';
    t.innerHTML='<b>'+(ar?'اتنسخ الإيميل':'Email copied')+'</b>'+addr; t.classList.add('on'); clearTimeout(tm); tm=setTimeout(function(){t.classList.remove('on')},3600);
  }
  function copy(addr){
    try{ if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(addr).catch(function(){fb(addr)});return} }catch(e){}
    fb(addr);
  }
  function fb(addr){try{var x=document.createElement('textarea');x.value=addr;x.setAttribute('readonly','');x.style.cssText='position:fixed;opacity:0;top:0';document.body.appendChild(x);x.select();document.execCommand('copy');document.body.removeChild(x)}catch(e){}}
  document.addEventListener('click',function(e){var a=e.target.closest('[data-mail]'); if(!a) return; var m=a.getAttribute('data-mail'); copy(m); say(m)});
  var stk=document.querySelector('.stk');
  if(stk&&matchMedia('(hover:hover) and (pointer:fine)').matches&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
    var sk=stk.querySelectorAll('.sk');
    document.querySelector('.contact').addEventListener('pointermove',function(e){
      var r=stk.getBoundingClientRect(), cx=(e.clientX-(r.left+r.width/2))/r.width, cy=(e.clientY-(r.top+r.height/2))/Math.max(r.height,200);
      sk.forEach(function(el,i){var d=(i+1)*5; el.style.setProperty('--tx',(cx*d).toFixed(1)+'px'); el.style.setProperty('--ty',(cy*d*.8).toFixed(1)+'px')});
    });
  }
})();
