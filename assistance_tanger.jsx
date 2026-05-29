import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  Car,
  Activity,
  LifeBuoy,
  ArrowRight,
  Globe,
  Truck,
  Wrench,
  Zap,
  Mail,
  Send,
  CheckCircle,
  User,
  Settings,
  Lock,
  Plus,
  Trash2,
  Calendar,
  Bell,
  LogOut,
  Save
} from 'lucide-react';

// --- Translations Dictionary ---
const translations = {
  fr: {
    brandName: "Dépannage",
    brandCity: "Tanger",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_portal: "E-Portail Melloussa",
    nav_about: "À Propos",
    nav_urgent: "Urgence 24/7",
    hero_badge: "Dépanneuses disponibles à Tanger",
    hero_title1: "Votre Véhicule,",
    hero_title2: "Notre Priorité.",
    hero_desc: "Une panne, un accident ou un problème de batterie à Tanger ? Notre flotte de camions de dépannage intervient 24h/24 et 7j/7 en moins de 30 minutes.",
    hero_btn_services: "Nos Services",
    stat1_title: "Dispo 24/7",
    stat1_desc: "Intervention à toute heure",
    stat2_title: "< 30 Minutes",
    stat2_desc: "Temps d'arrivée moyen",
    stat3_title: "Flotte Équipée",
    stat3_desc: "Camions modernes et sécurisés",
    services_subtitle: "Notre Expertise",
    services_title: "Remorquage et transport sécurisé",
    services_desc: "Nous couvrons l'ensemble de la région de Tanger-Tétouan avec une flotte de dépanneuses prêtes à intervenir.",
    srv1_title: "Dépannage Auto",
    srv1_desc: "Remorquage, batterie à plat, crevaison ou panne mécanique. Nous remettons votre véhicule sur la route rapidement.",
    srv2_title: "Transport de Véhicules",
    srv2_desc: "Transport sécurisé de tous types de véhicules (voitures, motos, utilitaires) partout au Maroc.",
    srv3_title: "Motos & Jet Skis",
    srv3_desc: "Dépannage et transport spécialisé pour vos motos, quads et jet skis en toute sécurité.",
    srv4_title: "Batterie & Pneus",
    srv4_desc: "Intervention rapide sur place pour le rechargement de batterie, changement de pneus crevés ou panne de carburant.",
    gallery_subtitle: "Nos Camions & Interventions",
    gallery_title: "Notre flotte en images",
    gallery_desc: "Découvrez nos camions de remorquage en action sur le terrain.",
    gallery_more: "Voir plus de photos",
    gallery_less: "Voir moins",
    map_subtitle: "Notre Parc de Véhicules",
    map_title: "Où nous trouver",
    map_desc: "Notre centre de dispatching principal est situé au cœur de Tanger pour déployer nos dépanneuses rapidement dans toutes les directions.",
    about_subtitle: "Pourquoi Nous Choisir ?",
    about_title: "Le spécialiste du dépannage dans le Nord du Maroc",
    about_desc: "Basés au cœur de Tanger, nous sommes spécialisés dans le remorquage de tous types de véhicules. Notre flotte de camions de dépannage nous permet de garantir des interventions rapides et efficaces.",
    about_bullet1: "Centre d'appel trilingue (Français, Arabe, Anglais)",
    about_bullet2: "Transparence totale sur les tarifs de remorquage",
    about_bullet3: "Flotte de camions de dépannage modernes et équipés",
    about_bullet4: "Intervention rapide avec suivi GPS de la dépanneuse",
    about_btn: "Demander une dépanneuse",
    badge_years: "10+",
    badge_text: "Ans d'expérience",
    banner_title: "Besoin d'une dépannage immédiatement ?",
    banner_desc: "Nos camions sont prêts à intervenir 24h/24 et 7j/7.",
    footer_desc: "Votre partenaire de confiance pour le remorquage et le transport de véhicules à Tanger et sa région.",
    footer_links_title: "Liens Rapides",
    footer_link1: "Accueil",
    footer_link2: "Zone d'intervention",
    footer_link3: "Contact",
    footer_services_title: "Services",
    footer_srv1: "Remorquage Auto",
    footer_srv2: "Dépannage Moto",
    footer_srv3: "Batterie & Pneus",
    footer_srv4: "Transport Sécurisé",
    footer_contact_title: "Contact",
    footer_address: "Avenue Mohamed V, Centre Ville, 90000 Tanger, Maroc",
    footer_rights: "Dépannage Tanger. Tous droits réservés.",
    footer_legal1: "Mentions Légales",
    footer_legal2: "Politique de Confidentialité",
    
    // Portal Translations
    portal_subtitle: "Plateforme de Réservation",
    portal_title: "Melloussa Connect Portal",
    portal_desc: "Gérez vos demandes de dépannage en temps réel. Connectez-vous pour accéder à votre espace.",
    client_login_title: "Connexion au Portail",
    client_login_desc: "Entrez vos identifiants pour accéder à votre espace sécurisé.",
    label_fullname: "Nom Complet",
    label_username: "Email ou Nom d'utilisateur",
    label_password: "Mot de passe",
    btn_login: "Se connecter / S'inscrire",
    btn_logout: "Se déconnecter",
    
    // Dashboard Specific
    hello_client: "Bonjour, {name}",
    welcome_admin: "Bon retour, {name}",
    tab_dashboard: "Tableau de Bord",
    tab_profile: "Mon Profil",
    
    // Form elements
    label_location: "Localisation (La place)",
    label_date: "Date d'intervention",
    label_slot: "Horaire disponible",
    label_phone: "Numéro de téléphone",
    label_problem: "Type de problème",
    btn_submit_request: "Envoyer ma demande",
    title_my_requests: "Mes Demandes & Suivi",
    admin_pending: "Demandes à valider",
    btn_accept: "Accepter",
    btn_reject: "Rejeter",
    btn_change_status: "Changer Statut",
    title_todo: "To-Do List Interne",
    placeholder_todo: "Nouvelle tâche admin...",
    title_calendar: "Calendrier des Rendez-vous",
    title_notification: "Notifier le Client",
    placeholder_notif: "Message à envoyer au client...",
    btn_send_notif: "Envoyer Notification",
    notif_success: "Notification envoyée au client avec succès !",
    
    // Profile
    profile_title: "Paramètres de votre compte",
    profile_desc: "Mettez à jour vos informations personnelles ici.",
    btn_save_profile: "Sauvegarder les modifications",
    profile_success: "Données sauvegardées avec succès !"
  },
  ar: {
    brandName: "ديباناج",
    brandCity: "طنجة ",
    nav_services: "الخدمات",
    nav_gallery: "معرض الصور",
    nav_portal: "بوابة ميلوسة",
    nav_about: "من نحن",
    nav_urgent: "طوارئ 24/7",
    hero_badge: "شاحنات الديباناج متوفرة في طنجة",
    hero_title1: "سيارتك،",
    hero_title2: "أولويتنا.",
    hero_desc: "عطل، حادث أو مشكلة في البطارية في طنجة؟ أسطول شاحنات الديباناج لدينا يتدخل على مدار الساعة طوال أيام الأسبوع في أقل من 30 دقيقة.",
    hero_btn_services: "خدماتنا",
    stat1_title: "متوفر 24/7",
    stat1_desc: "تدخل في أي وقت",
    stat2_title: "أقل من 30 دقيقة",
    stat2_desc: "متوسط وقت وصول الشاحنة",
    stat3_title: "أسطول مجهز",
    stat3_desc: "شاحنات حديثة وآمنة",
    services_subtitle: "خبرتنا",
    services_title: "قطر ونقل السيارات بأمان",
    services_desc: "نغطي منطقة طنجة وتطوان بأكملها بأسطول من شاحنات الإنقاذ (الديباناج) الجاهزة للتدخل الفوري.",
    srv1_title: "إنقاذ السيارات",
    srv1_desc: "قطر، بطارية فارغة، ثقب الإطار أو عطل ميكانيكي. نعيد سيارتك إلى الطريق بسرعة وأمان.",
    srv2_title: "نقل السيارات",
    srv2_desc: "نقل آمن لجميع أنواع المركبات (سيارات، دراجات نارية، سيارات نفعية) في جميع أنحاء المغرب.",
    srv3_title: "الدراجات والجت سكي",
    srv3_desc: "إنقاذ ونقل متخصص لدراجاتكم النارية، الكواد والجت سكي بكل أمان.",
    srv4_title: "البطارية والإطارات",
    srv4_desc: "تدخل سريع على عين المكان لشحن البطاريات، تغيير الإطارات المثقوبة أو تزويد الوقود.",
    gallery_subtitle: "أسطولنا وتدخلاتنا",
    gallery_title: "شاحناتنا في الميدان",
    gallery_desc: "اكتشف شاحنات الديباناج وفريقنا أثناء العمل.",
    gallery_more: "عرض المزيد من الصور",
    gallery_less: "عرض أقل",
    map_subtitle: "موقعنا",
    map_title: "أين تجدنا",
    map_desc: "يقع مركز التوجيه الرئيسي لدينا في قلب طنجة لضمان إرسال شاحنات الديباناج بسرعة في جميع الاتجاهات.",
    about_subtitle: "لماذا تختارنا؟",
    about_title: "المتخصص الأول في الديباناج في شمال المغرب",
    about_desc: "انطلاقاً من قلب طنجة، نحن متخصصون في قطر جميع أنواع السيارات. يتيح لنا أسطول شاحنات الديباناج ضمان تدخلات سريعة وفعالة أينما كنتم.",
    about_bullet1: "مركز اتصال بـ 3 لغات (الفرنسية، العربية، الإنجليزية)",
    about_bullet2: "شفافية تامة في أسعار القطر (الرموكاج)",
    about_bullet3: "أسطول من شاحنات الإنقاذ الحديثة والمجهزة",
    about_bullet4: "تدخل سريع مع تتبع مسار شاحنة الديباناج",
    about_btn: "اطلب ديباناج الآن",
    badge_years: "+10",
    badge_text: "سنوات خبرة",
    banner_title: "بحاجة إلى ديباناج فوراً؟",
    banner_desc: "شاحناتنا مستعدة للتدخل على مدار الساعة طوال أيام الأسبوع.",
    footer_desc: "شريكك الموثوق لإنقاذ وقطر السيارات في طنجة ومنطقتها. أسطول مجهز، سريع واحترافي.",
    footer_links_title: "روابط سريعة",
    footer_link1: "الرئيسية",
    footer_link2: "مناطق التدخل",
    footer_link3: "اتصل بنا",
    footer_services_title: "الخدمات",
    footer_srv1: "قطر السيارات",
    footer_srv2: "إنقاذ الدراجات",
    footer_srv3: "البطارية والإطارات",
    footer_srv4: "نقل آمن",
    footer_contact_title: "اتصال",
    footer_address: "شارع محمد الخامس، وسط المدينة، 90000 طنجة، المغرب",
    footer_rights: "ديباناج طنجة. جميع الحقوق محفوظة.",
    footer_legal1: "إشعار قانوني",
    footer_legal2: "سياسة الخصوصية",

    // Portal Translations
    portal_subtitle: "منصة الحجز وإدارة الطلبات",
    portal_title: "بوابة ميلوسة الإلكترونية",
    portal_desc: "تسيير وتتبع طلبات ديباناج في الوقت الحقيقي. سجل الدخول للولوج إلى فضائك الخاص.",
    client_login_title: "تسجيل الدخول",
    client_login_desc: "أدخل معلوماتك الشخصية للولوج إلى حسابك بأمان.",
    label_fullname: "الاسم الكامل",
    label_username: "البريد الإلكتروني أو اسم المستخدم",
    label_password: "كلمة المرور",
    btn_login: "تسجيل الدخول / إنشاء حساب",
    btn_logout: "تسجيل الخروج",
    
    // Dashboard Specific
    hello_client: "مرحباً، {name}",
    welcome_admin: "مرحباً بعودتك، {name}",
    tab_dashboard: "لوحة التحكم",
    tab_profile: "حسابي (تعديل البيانات)",
    
    // Form elements
    label_location: "المكان (البلاصة)",
    label_date: "التاريخ",
    label_slot: "الوقت المناسب والمتوفر",
    label_phone: "رقم الهاتف",
    label_problem: "نوع المشكل",
    btn_submit_request: "إرسال طلب الإنقاذ",
    title_my_requests: "طلباتي وتتبع الحالة",
    admin_pending: "الطلبات الحالية والجديدة",
    btn_accept: "قبول الطلب",
    btn_reject: "رفض الطلب",
    btn_change_status: "تغيير الحالة",
    title_todo: "جدول المهام الداخلية",
    placeholder_todo: "إضافة مهمة جديدة للإدارة...",
    title_calendar: "أجندة وجدول المواعيد والتدخلات",
    title_notification: "إرسال إشعار للزبون",
    placeholder_notif: "اكتب رسالة لإرسالها للزبون...",
    btn_send_notif: "إرسال إشعار",
    notif_success: "تم إرسال الإشعار والتنبيه للزبون بنجاح !",
    
    // Profile
    profile_title: "إعدادات الحساب",
    profile_desc: "قم بتحديث معلوماتك الشخصية هنا.",
    btn_save_profile: "حفظ التغييرات",
    profile_success: "تم حفظ البيانات بنجاح !"
  },
  en: {
    brandName: "Towing",
    brandCity: "Tangier",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_portal: "Melloussa E-Portal",
    nav_about: "About",
    nav_urgent: "24/7 Emergency",
    hero_badge: "Tow trucks available in Tangier",
    hero_title1: "Your Vehicle,",
    hero_title2: "Our Priority.",
    hero_desc: "Breakdown, accident, or battery issue in Tangier? Our fleet of tow trucks intervenes 24/7 in under 30 minutes.",
    hero_btn_services: "Our Services",
    stat1_title: "24/7 Available",
    stat1_desc: "Intervention at any time",
    stat2_title: "< 30 Minutes",
    stat2_desc: "Average truck arrival time",
    stat3_title: "Equipped Fleet",
    stat3_desc: "Modern & secure tow trucks",
    services_subtitle: "Our Expertise",
    services_title: "Towing & Secure Transport",
    services_desc: "We cover the entire Tangier-Tetouan region with a fleet of tow trucks ready to intervene.",
    srv1_title: "Auto Towing",
    srv1_desc: "Towing, flat battery, flat tire or mechanical breakdown. We get your vehicle back on the road safely.",
    srv2_title: "Vehicle Transport",
    srv2_desc: "Secure transport of all types of vehicles (cars, motorcycles, utility vehicles) anywhere in Morocco.",
    srv3_title: "Motos & Jet Skis",
    srv3_desc: "Specialized breakdown assistance and secure transport for motorcycles, quads, and jet skis.",
    srv4_title: "Battery & Tires",
    srv4_desc: "Fast on-site intervention for battery jump-starts, flat tire changes, or fuel delivery.",
    gallery_subtitle: "Our Fleet & Interventions",
    gallery_title: "Our trucks in action",
    gallery_desc: "Discover our tow trucks and team in action on the field.",
    gallery_more: "Load more photos",
    gallery_less: "Show less",
    map_subtitle: "Our Fleet Location",
    map_title: "Where to find us",
    map_desc: "Our main dispatch center is located in the heart of Tangier to deploy our tow trucks rapidly in all directions.",
    about_subtitle: "Why Choose Us?",
    about_title: "The #1 Towing Specialist in Northern Morocco",
    about_desc: "Based in the heart of Tangier, we specialize in vehicle towing. Our fleet of modern tow trucks allows us to guarantee quick and effective interventions everywhere.",
    about_bullet1: "Trilingual call center (French, Arabic, English)",
    about_bullet2: "Total transparency on towing rates",
    about_bullet3: "Fleet of modern and fully equipped tow trucks",
    about_bullet4: "Fast intervention with tow truck GPS tracking",
    about_btn: "Request a tow truck",
    badge_years: "10+",
    badge_text: "Years of experience",
    banner_title: "Need a tow truck right now?",
    banner_desc: "Our tow trucks are ready to deploy 24/7.",
    footer_desc: "Your trusted partner for auto towing and vehicle transport in Tangier and its region.",
    footer_links_title: "Quick Links",
    footer_link1: "Home",
    footer_link2: "Service Area",
    footer_link3: "Contact",
    footer_services_title: "Services",
    footer_srv1: "Auto Towing",
    footer_srv2: "Moto Recovery",
    footer_srv3: "Battery & Tires",
    footer_srv4: "Secure Transport",
    footer_contact_title: "Contact",
    footer_address: "Avenue Mohamed V, City Center, 90000 Tangier, Morocco",
    footer_rights: "Towing Tangier. All rights reserved.",
    footer_legal1: "Legal Notice",
    footer_legal2: "Privacy Policy",
    
    // Portal Translations
    portal_subtitle: "Booking & Management System",
    portal_title: "Melloussa Connect Portal",
    portal_desc: "Manage and request towing interventions in real-time. Log in to access your secure space.",
    client_login_title: "Portal Login",
    client_login_desc: "Enter your details to access your secure space.",
    label_fullname: "Full Name",
    label_username: "Email or Username",
    label_password: "Password",
    btn_login: "Sign In / Sign Up",
    btn_logout: "Sign Out",
    
    // Dashboard Specific
    hello_client: "Hello, {name}",
    welcome_admin: "Welcome back, {name}",
    tab_dashboard: "Dashboard",
    tab_profile: "My Profile",
    
    // Form elements
    label_location: "Location (Where)",
    label_date: "Date",
    label_slot: "Available Time Slot",
    label_phone: "Phone Number",
    label_problem: "Problem Type",
    btn_submit_request: "Send Recovery Request",
    title_my_requests: "My Requests & Live Tracking",
    admin_pending: "Manage All Requests",
    btn_accept: "Accept",
    btn_reject: "Reject",
    btn_change_status: "Change Status",
    title_todo: "Internal Task List",
    placeholder_todo: "New admin task...",
    title_calendar: "Intervention Schedule Calendar",
    title_notification: "Notify the Client",
    placeholder_notif: "Type a message to send to the client...",
    btn_send_notif: "Send Notification",
    notif_success: "Notification sent successfully to the client!",
    
    // Profile
    profile_title: "Account Settings",
    profile_desc: "Update your personal information here.",
    btn_save_profile: "Save Changes",
    profile_success: "Profile updated successfully!"
  }
};

// --- Custom CSS ---
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

  .font-arabic { font-family: 'Cairo', sans-serif; }
  
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }
  .delay-400 { transition-delay: 400ms; }

  .bg-hero-pattern {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(8, 145, 178, 0.8) 100%), url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  }
  
  .blob-shape {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph 8s ease-in-out infinite;
  }

  @keyframes morph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
    67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
  }
`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('fr'); // 'fr', 'ar', 'en'
  const [showAllImages, setShowAllImages] = useState(false);
  
  // --- Authentication & Portal States ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'client' | 'admin'
  const [activeDashboardTab, setActiveDashboardTab] = useState('dashboard'); // 'dashboard' | 'profile'
  
  // Login Form States
  const [loginName, setLoginName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [loginPass, setLoginPass] = useState('');
  
  // User Data State (For Profile Editing)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [profileSuccessMsg, setProfileSuccessMsg] = useState(false);
  
  // Simulated Requests DB
  const [requests, setRequests] = useState([
    {
      id: "REQ-01",
      clientName: "Khalid Tangawi",
      email: "khalid@gmail.com",
      phone: "06 12 34 56 78",
      location: "Avenue Pasteur, Tanger Centre",
      date: "2026-05-29",
      slot: "14:00 - 16:00",
      problemType: "Auto Towing",
      status: "Confirmé", 
      createdAt: "10:30"
    },
    {
      id: "REQ-02",
      clientName: "Sarah Boulmane",
      email: "sarah@gmail.com",
      phone: "06 99 88 77 66",
      location: "Melloussa Industrial Zone",
      date: "2026-05-29",
      slot: "16:00 - 18:00",
      problemType: "Battery & Tires",
      status: "En attente",
      createdAt: "12:15"
    }
  ]);

  // Client Request Form State
  const [newLoc, setNewLoc] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSlot, setNewSlot] = useState('10:00 - 12:00');
  const [newPhone, setNewPhone] = useState('');
  const [newProblem, setNewProblem] = useState('Dépannage Auto');

  // Admin section states
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Preparer camion depannage N3 (Melloussa)", completed: false },
    { id: 2, text: "Appeler le client REQ-02 pour confirmer", completed: true },
    { id: 3, text: "Vérifier le niveau d'essence de la dépanneuse 4", completed: false }
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  
  const [notifTarget, setNotifTarget] = useState('REQ-02');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifStatus, setNotifStatus] = useState(false);

  const phoneNumber = "06 68 19 59 92";
  const phoneLink = "tel:+212668195992";
  const whatsappLink = "https://wa.me/212668195992";
  
  const isRtl = lang === 'ar';
  const t = (key) => translations[lang][key];

  const toggleLanguage = () => {
    if (lang === 'fr') setLang('ar');
    else if (lang === 'ar') setLang('en');
    else setLang('fr');
    setMobileMenuOpen(false);
  };

  const getLangDisplay = () => {
    if (lang === 'fr') return 'FR';
    if (lang === 'ar') return 'AR';
    return 'EN';
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1543393478-ea17a10dd3b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605663785489-3c0f2095f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563242045-8ce66050e640?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 2);

  // --- Handlers ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginId || !loginPass) return;

    if (loginId.toLowerCase() === 'jouad' && loginPass === 'jaouad1975') {
      setUserRole('admin');
      setUserData({
        name: 'Jaouad',
        email: 'jouad@melloussa.com',
        phone: '06 68 19 59 92',
        password: loginPass
      });
      setIsLoggedIn(true);
      window.scrollTo(0,0);
    } else {
      setUserRole('client');
      // Use provided name or extract from email if missing
      const determinedName = loginName || loginId.split('@')[0];
      setUserData({
        name: determinedName,
        email: loginId,
        phone: '',
        password: loginPass
      });
      setIsLoggedIn(true);
      window.scrollTo(0,0);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setLoginId('');
    setLoginPass('');
    setLoginName('');
    setActiveDashboardTab('dashboard');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileSuccessMsg(true);
    setTimeout(() => setProfileSuccessMsg(false), 3000);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!newLoc || !newDate || !newPhone) return;

    const newRequest = {
      id: `REQ-0${requests.length + 1}`,
      clientName: userData.name,
      email: userData.email,
      phone: newPhone,
      location: newLoc,
      date: newDate,
      slot: newSlot,
      problemType: newProblem,
      status: "En attente",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setRequests([newRequest, ...requests]);
    setNewLoc('');
    setNewDate('');
    setNewPhone('');
  };

  const updateStatus = (reqId, newStatus) => {
    setRequests(requests.map(req => 
      req.id === reqId ? { ...req, status: newStatus } : req
    ));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodoList([...todoList, { id: Date.now(), text: newTodoText, completed: false }]);
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodoList(todoList.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(t => t.id !== id));
  };

  const sendNotification = (e) => {
    e.preventDefault();
    if (!notifMessage.trim()) return;
    setNotifStatus(true);
    setTimeout(() => {
      setNotifStatus(false);
      setNotifMessage('');
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations (re-runs when views change)
  useEffect(() => {
    if (!isLoggedIn) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [lang, showAllImages, isLoggedIn]);

  // ==========================================
  // VIEW 1: FULL SCREEN DASHBOARD (LOGGED IN)
  // ==========================================
  if (isLoggedIn) {
    const greetingText = userRole === 'admin' 
      ? t('welcome_admin').replace('{name}', userData.name) 
      : t('hello_client').replace('{name}', userData.name);

    return (
      <div className={`min-h-screen bg-slate-900 text-slate-100 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <style>{customStyles}</style>

        {/* Dashboard Navbar */}
        <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                  <LifeBuoy className="text-white w-6 h-6" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xl font-bold text-white leading-none">
                    {t('brandName')}<span className="text-amber-500">{t('brandCity')}</span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase mt-0.5 text-slate-400">
                    Melloussa Assistance
                  </span>
                </div>
              </div>

              {/* Greeting & Logout */}
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-700">
                  <User className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-slate-200">{greetingText}</span>
                </div>
                
                {/* Language Switcher inside dashboard */}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors border border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {getLangDisplay()}
                </button>

                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-red-500/20"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline-block">{t('btn_logout')}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Tabs / Sub-nav */}
        <div className="bg-slate-800/50 border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveDashboardTab('dashboard')}
                className={`py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeDashboardTab === 'dashboard' ? 'border-amber-500 text-amber-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
              >
                <Activity className="w-4 h-4" />
                {t('tab_dashboard')}
              </button>
              <button 
                onClick={() => setActiveDashboardTab('profile')}
                className={`py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeDashboardTab === 'profile' ? 'border-amber-500 text-amber-500' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
              >
                <Settings className="w-4 h-4" />
                {t('tab_profile')}
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          
          {/* PROFILE TAB (Both Admin & Client) */}
          {activeDashboardTab === 'profile' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-800 rounded-3xl p-6 md:p-10 border border-slate-700 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-amber-500">
                    {userData.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{t('profile_title')}</h2>
                    <p className="text-slate-400 text-sm">{t('profile_desc')}</p>
                  </div>
                </div>

                {profileSuccessMsg && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm p-4 rounded-xl mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>{t('profile_success')}</span>
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_fullname')}</label>
                    <input 
                      type="text" 
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_phone')}</label>
                    <input 
                      type="tel" 
                      value={userData.phone}
                      onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      placeholder="06 00 00 00 00"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_password')}</label>
                    <input 
                      type="password" 
                      value={userData.password}
                      onChange={(e) => setUserData({...userData, password: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-colors mt-4 shadow-lg flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" />
                    {t('btn_save_profile')}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* DASHBOARD TAB - CLIENT */}
          {activeDashboardTab === 'dashboard' && userRole === 'client' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form to Send Towing Request */}
              <div className="lg:col-span-6 bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-xl">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                  <div className="bg-amber-500/20 p-2 rounded-lg"><Car className="w-5 h-5 text-amber-500" /></div>
                  <h3 className="text-xl font-bold">Nouvelle Demande</h3>
                </div>

                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{t('label_location')}</label>
                    <input 
                      type="text" 
                      required
                      value={newLoc}
                      onChange={(e) => setNewLoc(e.target.value)}
                      placeholder="Ex: Route de Rabat, Tanger" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{t('label_date')}</label>
                      <input 
                        type="date" 
                        required
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{t('label_slot')}</label>
                      <select 
                        value={newSlot}
                        onChange={(e) => setNewSlot(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs md:text-sm"
                      >
                        <option value="08:00 - 10:00">08:00 - 10:00</option>
                        <option value="10:00 - 12:00">10:00 - 12:00</option>
                        <option value="12:00 - 14:00">12:00 - 14:00</option>
                        <option value="14:00 - 16:00">14:00 - 16:00</option>
                        <option value="16:00 - 18:00">16:00 - 18:00</option>
                        <option value="18:00 - 20:00">18:00 - 20:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{t('label_problem')}</label>
                      <select 
                        value={newProblem}
                        onChange={(e) => setNewProblem(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      >
                        <option value="Auto Towing">Auto Towing / قطر السيارات</option>
                        <option value="Vehicle Transport">Transport de Véhicule / نقل آمن</option>
                        <option value="Motos & Jet Skis">Motos & Jet Skis / الدراجات والجت سكي</option>
                        <option value="Battery & Tires">Battery & Tires / البطارية والإطارات</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{t('label_phone')}</label>
                      <input 
                        type="tel" 
                        required
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder="06 00 00 00 00" 
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-colors mt-6 shadow-lg flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    {t('btn_submit_request')}
                  </button>
                </form>
              </div>

              {/* Live Requests Tracker */}
              <div className="lg:col-span-6 bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
                  <Activity className="w-5 h-5 text-amber-500 animate-pulse" />
                  {t('title_my_requests')}
                </h3>

                <div className="space-y-4">
                  {requests.filter(r => r.email === userData.email || r.email === 'invite@gmail.com').length === 0 ? (
                    <p className="text-slate-400 text-center py-8">Aucune demande pour le moment.</p>
                  ) : (
                    requests.filter(r => r.email === userData.email || r.email === 'invite@gmail.com').map((req) => (
                      <div key={req.id} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md font-mono">{req.id}</span>
                            <h4 className="font-bold text-sm mt-1">{req.problemType}</h4>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                            req.status === 'En attente' ? 'bg-amber-500/10 text-amber-400' :
                            req.status === 'Confirmé' ? 'bg-blue-500/10 text-blue-400' :
                            req.status === 'En cours' ? 'bg-purple-500/10 text-purple-400' :
                            'bg-green-500/10 text-green-400'
                          }`}>
                            {req.status}
                          </span>
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
                          <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {req.location}</p>
                          <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-500" /> {req.date} ({req.slot})</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* DASHBOARD TAB - ADMIN */}
          {activeDashboardTab === 'dashboard' && userRole === 'admin' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* All Requests with Action Controls */}
              <div className="lg:col-span-7 bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-xl">
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-500" />
                    {t('admin_pending')}
                  </h3>
                  <span className="text-xs bg-slate-900 px-3 py-1 rounded-full text-slate-400 font-mono">Real-time DB Active</span>
                </div>

                <div className="space-y-4">
                  {requests.map((req) => (
                    <div key={req.id} className="bg-slate-900/60 p-4 md:p-6 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded font-mono font-bold">{req.id}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            req.status === 'En attente' ? 'bg-amber-500/10 text-amber-400' :
                            req.status === 'Confirmé' ? 'bg-blue-500/10 text-blue-400' :
                            req.status === 'En cours' ? 'bg-purple-500/10 text-purple-400' :
                            'bg-green-500/10 text-green-400'
                          }`}>
                            {req.status}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-sm text-white">{req.clientName}</h4>
                        <p className="text-xs text-slate-300 font-medium">{req.problemType} - <span className="text-amber-500">{req.location}</span></p>
                        <p className="text-xs text-slate-400">{req.date} ({req.slot}) | Tel: {req.phone}</p>
                      </div>

                      {/* Admin Controls */}
                      <div className="flex flex-row sm:flex-col justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800">
                        {req.status === 'En attente' && (
                          <div className="flex gap-2 w-full">
                            <button 
                              onClick={() => updateStatus(req.id, 'Confirmé')}
                              className="flex-1 text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg font-bold transition-colors"
                            >
                              {t('btn_accept')}
                            </button>
                            <button 
                              onClick={() => updateStatus(req.id, 'Reject')} 
                              className="flex-1 text-xs bg-red-600/30 hover:bg-red-600/50 text-red-400 px-3 py-1.5 rounded-lg font-bold transition-colors border border-red-500/20"
                            >
                              {t('btn_reject')}
                            </button>
                          </div>
                        )}
                        {req.status !== 'En attente' && (
                          <div className="flex flex-wrap gap-1 mt-auto">
                            {['Confirmé', 'En cours', 'Terminé'].map((st) => (
                              <button 
                                key={st}
                                onClick={() => updateStatus(req.id, st)}
                                className={`text-[10px] px-2 py-1 rounded font-bold transition-colors ${req.status === st ? 'bg-blue-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-400'}`}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Todo, Calendar, Notifier */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 1. Interactive To-Do List */}
                <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
                  <h3 className="text-md md:text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    {t('title_todo')}
                  </h3>

                  <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
                    <input 
                      type="text"
                      required
                      value={newTodoText}
                      onChange={(e) => setNewTodoText(e.target.value)}
                      placeholder={t('placeholder_todo')}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-500 p-2.5 rounded-xl transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1 custom-scrollbar">
                    {todoList.map((todo) => (
                      <div key={todo.id} className="flex items-center justify-between bg-slate-900/40 p-2.5 rounded-xl border border-slate-700/30 text-xs">
                        <label className="flex items-center gap-2.5 cursor-pointer flex-1">
                          <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0"
                          />
                          <span className={`font-medium ${todo.completed ? 'line-through text-slate-500' : 'text-slate-300'}`}>{todo.text}</span>
                        </label>
                        <button onClick={() => deleteTodo(todo.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Visual Schedule / Appointments */}
                <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
                  <h3 className="text-md md:text-lg font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    {t('title_calendar')}
                  </h3>

                  <div className="space-y-2">
                    {requests.filter(r => r.status === 'Confirmé' || r.status === 'En cours').map((req) => (
                      <div key={req.id} className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border-l-4 border-blue-500">
                        <div className="text-center bg-slate-900 p-2 rounded-lg shrink-0">
                          <p className="text-[9px] text-slate-400 uppercase font-mono">{req.date.split('-')[1]}/{req.date.split('-')[2]}</p>
                          <p className="text-xs text-blue-400 font-bold font-mono">{req.id}</p>
                        </div>
                        <div className="text-xs min-w-0">
                          <p className="font-bold text-white truncate">{req.clientName}</p>
                          <p className="text-slate-400 truncate">{req.location}</p>
                          <p className="text-[10px] text-amber-500 font-semibold">{req.slot}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Notification Sender */}
                <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
                  <h3 className="text-md md:text-lg font-bold mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-500" />
                    {t('title_notification')}
                  </h3>

                  {notifStatus && (
                    <div className="bg-green-950/50 border border-green-800 text-green-400 text-xs p-3 rounded-xl mb-4 flex items-center gap-2 animate-pulse">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>{t('notif_success')}</span>
                    </div>
                  )}

                  <form onSubmit={sendNotification} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <label className="text-xs text-slate-400 font-medium flex items-center">{lang === 'ar' ? "اختيار الزبون:" : "Cible:"}</label>
                      <select 
                        value={notifTarget}
                        onChange={(e) => setNotifTarget(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-white"
                      >
                        {requests.map(r => (
                          <option key={r.id} value={r.id}>{r.id} - {r.clientName}</option>
                        ))}
                      </select>
                    </div>

                    <textarea 
                      required
                      rows="2"
                      value={notifMessage}
                      onChange={(e) => setNotifMessage(e.target.value)}
                      placeholder={t('placeholder_notif')}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    ></textarea>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1">
                      <Send className="w-3.5 h-3.5" />
                      {t('btn_send_notif')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

        </main>
        
        {/* Floating Action Buttons remain on Dashboard too if needed, maybe just Whatsapp */}
        <div className="fixed bottom-6 right-6 z-50">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: PUBLIC LANDING PAGE (NOT LOGGED IN)
  // ==========================================
  return (
    <div 
      className={`min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden ${isRtl ? 'font-arabic' : 'font-sans'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <style>{customStyles}</style>

      {/* --- Navigation Bar --- */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <LifeBuoy className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-bold tracking-tight leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                  {t('brandName')}<span className="text-amber-500">{t('brandCity')}</span>
                </span>
                <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-0.5 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                  Melloussa Assistance
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 lg:gap-8">
              <a href="#services" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>{t('nav_services')}</a>
              <a href="#galerie" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>{t('nav_gallery')}</a>
              <a href="#melloussa-portal" className={`text-sm font-medium text-amber-500 hover:text-amber-600 transition-colors ${isScrolled ? 'font-bold' : 'font-bold'}`}>{t('nav_portal')}</a>
              <a href="#about" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>{t('nav_about')}</a>
              
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold transition-colors border ${isScrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-100' : 'border-white/30 text-white hover:bg-white/10'}`}
              >
                <Globe className="w-4 h-4" />
                {getLangDisplay()}
              </button>

              <a href={phoneLink} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-5 py-2.5 rounded-full font-semibold transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span dir="ltr">{phoneNumber}</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3">
               <button 
                onClick={toggleLanguage}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors border ${isScrolled ? 'border-slate-200 text-slate-700 bg-slate-50' : 'border-white/30 text-white bg-white/10'}`}
              >
                {getLangDisplay()}
              </button>
              
              <button 
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">
              {t('nav_services')}
            </a>
            <a href="#galerie" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">
              {t('nav_gallery')}
            </a>
            <a href="#melloussa-portal" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-bold text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">
              {t('nav_portal')}
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-lg transition-colors">
              {t('nav_about')}
            </a>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a href={phoneLink} className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white px-5 py-3.5 rounded-xl font-semibold transition-colors">
                <PhoneCall className="w-5 h-5" />
                <span dir="ltr">{phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-hero-pattern overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6 md:mb-8 reveal">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
              <span className="text-xs md:text-sm font-medium">{t('hero_badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-relaxed md:leading-normal mb-4 md:mb-6 reveal delay-100">
              {t('hero_title1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {t('hero_title2')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-2xl reveal delay-200 leading-relaxed md:leading-loose">
              {t('hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 reveal delay-300">
              <a href={phoneLink} className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-bold transition-colors shadow-lg">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span dir="ltr">{phoneNumber}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-bold transition-colors shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span dir="ltr">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 md:h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123,194.2,112.3Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* --- Quick Stats --- */}
      <section className="py-6 md:py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8 -mt-16 md:-mt-24 relative z-20 reveal">
            {[
              { icon: <Clock className="w-7 h-7 text-blue-600 shrink-0" />, title: t('stat1_title'), desc: t('stat1_desc') },
              { icon: <Activity className="w-7 h-7 text-blue-600 shrink-0" />, title: t('stat2_title'), desc: t('stat2_desc') },
              { icon: <ShieldCheck className="w-7 h-7 text-blue-600 shrink-0" />, title: t('stat3_title'), desc: t('stat3_desc') }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="bg-blue-50 p-3 md:p-4 rounded-2xl">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed">{stat.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
            <h2 className="text-xs md:text-sm font-bold text-amber-500 uppercase tracking-wider mb-2 md:mb-3">{t('services_subtitle')}</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-relaxed">{t('services_title')}</h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {t('services_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Car className="w-8 h-8" />, color: "blue", title: t('srv1_title'), desc: t('srv1_desc') },
              { icon: <Truck className="w-8 h-8" />, color: "red", title: t('srv2_title'), desc: t('srv2_desc') },
              { icon: <Wrench className="w-8 h-8" />, color: "amber", title: t('srv3_title'), desc: t('srv3_desc') },
              { icon: <Zap className="w-8 h-8" />, color: "emerald", title: t('srv4_title'), desc: t('srv4_desc') }
            ].map((service, idx) => (
              <div key={idx} className={`group bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-100 reveal delay-${(idx+1)*100}`}>
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-${service.color}-50 text-${service.color}-500 rounded-2xl flex items-center justify-center mb-5 md:mb-6 shrink-0`}>
                  {service.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 leading-relaxed">{service.title}</h4>
                <p className="text-sm md:text-base text-slate-600 mb-5 md:mb-6 line-clamp-3 leading-relaxed">
                  {service.desc}
                </p>
                <a href={phoneLink} className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:text-amber-500 transition-colors text-sm md:text-base">
                  {t('learn_more')} <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="galerie" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 reveal">
            <h2 className="text-xs md:text-sm font-bold text-amber-500 uppercase tracking-wider mb-2 md:mb-3">{t('gallery_subtitle')}</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-relaxed">{t('gallery_title')}</h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {t('gallery_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto transition-all duration-500">
            {displayedImages.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer shadow-md reveal active">
                <img 
                  src={img} 
                  alt="Flotte d'intervention Melloussa Assistance" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 md:mt-12 text-center reveal delay-100">
            <button 
              onClick={() => setShowAllImages(!showAllImages)}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm"
            >
              {showAllImages ? t('gallery_less') : t('gallery_more')}
            </button>
          </div>
        </div>
      </section>

      {/* --- Melloussa Connect Portal LOGIN --- */}
      <section id="melloussa-portal" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 reveal">
            <span className="bg-amber-500/10 text-amber-500 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3 border border-amber-500/20">
              {t('portal_subtitle')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-relaxed tracking-tight">
              {t('portal_title')}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {t('portal_desc')}
            </p>
          </div>

          <div className="reveal">
            {/* Universal Login Card */}
            <div className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-slate-700 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center">
                  <Lock className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-2 leading-relaxed">{t('client_login_title')}</h3>
              <p className="text-slate-400 text-xs md:text-sm text-center mb-8 leading-relaxed">{t('client_login_desc')}</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_fullname')}</label>
                  <input 
                    type="text" 
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    placeholder="Ex: Ahmed Benali" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_username')}</label>
                  <input 
                    type="text" 
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="Ex: hamza@gmail.com ou jouad" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('label_password')}</label>
                  <input 
                    type="password" 
                    required
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-colors mt-6 shadow-lg shadow-amber-500/10">
                  {t('btn_login')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image side */}
            <div className="relative reveal order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-900 blob-shape opacity-10 transform scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1621501103258-3e125c1109b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Équipe de dépannage Tanger" 
                className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[350px] md:h-[500px]"
              />
              <div className={`absolute -bottom-4 md:-bottom-6 ${isRtl ? '-left-4 md:-left-6' : '-right-4 md:-right-6'} bg-amber-500 text-white p-4 md:p-6 rounded-2xl shadow-xl z-20`}>
                <p className="text-2xl md:text-4xl font-extrabold" dir="ltr">{t('badge_years')}</p>
                <p className="font-medium text-xs md:text-sm">{t('badge_text')}</p>
              </div>
            </div>

            {/* Text side */}
            <div className="reveal delay-200 order-1 lg:order-2">
              <h2 className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 md:mb-3">{t('about_subtitle')}</h2>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-relaxed">{t('about_title')}</h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-loose">
                {t('about_desc')}
              </p>
              
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {[t('about_bullet1'), t('about_bullet2'), t('about_bullet3'), t('about_bullet4')].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 md:mt-1 bg-green-100 text-green-600 rounded-full p-1 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href={phoneLink} className="inline-flex justify-center w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold transition-colors shadow-lg items-center gap-2">
                {t('about_btn')}
                <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section id="localisation" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 reveal">
            <h2 className="text-xs md:text-sm font-bold text-amber-500 uppercase tracking-wider mb-2 md:mb-3">{t('map_subtitle')}</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-relaxed">{t('map_title')}</h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {t('map_desc')}
            </p>
          </div>
          
          <div className="w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 reveal delay-100">
            <iframe 
              title="Carte de localisation Dépannage Tanger"
              src="https://maps.google.com/maps?q=Avenue%20Mohamed%20V,%20Tanger,%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- Emergency Banner --- */}
      <section className="py-12 md:py-16 bg-amber-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 reveal">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-relaxed">{t('banner_title')}</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 text-amber-50 px-2 leading-relaxed">{t('banner_desc')}</p>
          <a href={phoneLink} className="inline-flex items-center justify-center gap-3 bg-white text-amber-500 hover:bg-slate-50 px-8 md:px-10 py-4 md:py-5 rounded-full text-xl md:text-2xl font-black transition-colors shadow-xl w-full sm:w-auto">
            <PhoneCall className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
            <span dir="ltr">{phoneNumber}</span>
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shrink-0">
                  <LifeBuoy className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
                    {t('brandName')}<span className="text-amber-500">{t('brandCity')}</span>
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-slate-400 mt-0.5">
                    Melloussa Assistance
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                {t('footer_desc')}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">{t('footer_links_title')}</h4>
              <ul className="space-y-2.5 md:space-y-3">
                {[t('footer_link1'), t('footer_link2'), t('footer_link3')].map((link, i) => (
                  <li key={i}>
                    <a href={i === 2 ? phoneLink : '#'} className="hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                      <ChevronRight className={`w-3 h-3 ${isRtl ? 'rotate-180' : ''} shrink-0`} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">{t('footer_services_title')}</h4>
              <ul className="space-y-2.5 md:space-y-3">
                {[t('footer_srv1'), t('footer_srv2'), t('footer_srv3'), t('footer_srv4')].map((link, i) => (
                  <li key={i}>
                    <a href="#services" className="hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                      <ChevronRight className={`w-3 h-3 ${isRtl ? 'rotate-180' : ''} shrink-0`} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">{t('footer_contact_title')}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm">{t('footer_address')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-amber-500 shrink-0" />
                  <a href={phoneLink} className="text-sm font-bold text-white hover:text-amber-500 transition-colors" dir="ltr">{phoneNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm" dir="ltr">24/24 - 7/7</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">{t('footer_legal1')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer_legal2')}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Phone Button (Mobile only) */}
        <a href={phoneLink} className="md:hidden w-14 h-14 bg-amber-500 hover:bg-amber-600 transition-colors text-white rounded-full flex items-center justify-center shadow-lg">
          <PhoneCall className="w-6 h-6" />
        </a>
        
        {/* WhatsApp Button (All devices) */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}