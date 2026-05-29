import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  Globe,
  LifeBuoy,
  Lock,
  LogOut,
  MapPin,
  Menu,
  PhoneCall,
  Plus,
  Save,
  Send,
  Settings,
  ShieldCheck,
  Trash2,
  Truck,
  User,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import whatsappGallery1 from './assets/gallery/whatsapp-1.jpeg';
import whatsappGallery2 from './assets/gallery/whatsapp-2.jpeg';
import whatsappGallery3 from './assets/gallery/whatsapp-3.jpeg';
import whatsappGallery4 from './assets/gallery/whatsapp-4.jpeg';
import aboutTowTruck from './assets/about/5098287-1-1024x683.jpg';

const translations = {
  fr: {
    brandName: 'Dépannage',
    brandCity: 'Tanger',
    nav_services: 'Services',
    nav_gallery: 'Galerie',
    nav_portal: 'E-Portail Melloussa',
    nav_about: 'À Propos',
    hero_badge: 'Dépanneuses disponibles à Tanger',
    hero_title1: 'Votre Véhicule,',
    hero_title2: 'Notre Priorité.',
    hero_desc:
      'Une panne, un accident ou un problème de batterie à Tanger ? Notre flotte de camions de dépannage intervient 24h/24 et 7j/7 en moins de 30 minutes.',
    stat1_title: 'Dispo 24/7',
    stat1_desc: 'Intervention à toute heure',
    stat2_title: '< 30 Minutes',
    stat2_desc: "Temps d'arrivée moyen",
    stat3_title: 'Flotte Équipée',
    stat3_desc: 'Camions modernes et sécurisés',
    services_subtitle: 'Notre Expertise',
    services_title: 'Remorquage et transport sécurisé',
    services_desc:
      "Nous couvrons l'ensemble de la région de Tanger-Tétouan avec une flotte de dépanneuses prêtes à intervenir.",
    srv1_title: 'Dépannage Auto',
    srv1_desc:
      'Remorquage, batterie à plat, crevaison ou panne mécanique. Nous remettons votre véhicule sur la route rapidement.',
    srv2_title: 'Transport de Véhicules',
    srv2_desc:
      'Transport sécurisé de tous types de véhicules partout au Maroc.',
    srv3_title: 'Motos & Jet Skis',
    srv3_desc:
      'Dépannage et transport spécialisé pour motos, quads et jet skis.',
    srv4_title: 'Batterie & Pneus',
    srv4_desc:
      'Intervention rapide pour batterie, pneus crevés ou panne de carburant.',
    gallery_subtitle: 'Nos Camions & Interventions',
    gallery_title: 'Notre flotte en images',
    gallery_desc: 'Cliquez sur une photo pour voir la marque et le modèle.',
    gallery_more: 'Voir plus de photos',
    gallery_less: 'Voir moins',
    map_subtitle: 'Notre Parc de Véhicules',
    map_title: 'Où nous trouver',
    map_desc:
      'Notre centre de dispatching principal est situé au cœur de Tanger pour déployer nos dépanneuses rapidement.',
    about_subtitle: 'Pourquoi Nous Choisir ?',
    about_title: 'Le spécialiste du dépannage dans le Nord du Maroc',
    about_desc:
      'Basés au cœur de Tanger, nous sommes spécialisés dans le remorquage de tous types de véhicules avec une flotte moderne et équipée.',
    about_bullet1: "Centre d'appel trilingue (Français, Arabe, Anglais)",
    about_bullet2: 'Transparence totale sur les tarifs de remorquage',
    about_bullet3: 'Flotte de camions de dépannage modernes et équipés',
    about_bullet4: 'Intervention rapide avec suivi GPS de la dépanneuse',
    about_btn: 'Demander une dépanneuse',
    badge_years: '10+',
    badge_text: "Ans d'expérience",
    banner_title: "Besoin d'une dépanneuse immédiatement ?",
    banner_desc: 'Nos camions sont prêts à intervenir 24h/24 et 7j/7.',
    footer_desc:
      'Votre partenaire de confiance pour le remorquage et le transport de véhicules à Tanger et sa région.',
    footer_rights: 'Dépannage Tanger. Tous droits réservés.',
    portal_subtitle: 'Plateforme de Réservation',
    portal_title: 'Melloussa Connect Portal',
    portal_desc:
      'Gérez vos demandes de dépannage en temps réel. Connectez-vous pour accéder à votre espace.',
    client_login_title: 'Connexion au Portail',
    client_login_desc: 'Entrez vos identifiants pour accéder à votre espace sécurisé.',
    label_fullname: 'Nom Complet',
    label_username: "Email ou Nom d'utilisateur",
    label_password: 'Mot de passe',
    label_location: 'Localisation',
    label_date: "Date d'intervention",
    label_slot: 'Horaire disponible',
    label_phone: 'Numéro de téléphone',
    label_problem: 'Type de problème',
    btn_login: "Se connecter / S'inscrire",
    btn_logout: 'Se déconnecter',
    btn_submit_request: 'Envoyer ma demande',
    btn_save_profile: 'Sauvegarder les modifications',
    btn_accept: 'Accepter',
    btn_reject: 'Rejeter',
    btn_send_notif: 'Envoyer Notification',
    hello_client: 'Bonjour, {name}',
    welcome_admin: 'Bon retour, {name}',
    tab_dashboard: 'Tableau de Bord',
    tab_profile: 'Mon Profil',
    title_my_requests: 'Mes Demandes & Suivi',
    admin_pending: 'Demandes à valider',
    title_todo: 'To-Do List Interne',
    title_calendar: 'Calendrier des Rendez-vous',
    title_notification: 'Notifier le Client',
    profile_title: 'Paramètres de votre compte',
    profile_desc: 'Mettez à jour vos informations personnelles ici.',
    profile_success: 'Données sauvegardées avec succès !',
    notif_success: 'Notification envoyée au client avec succès !',
  },
  ar: {
    brandName: 'ديباناج',
    brandCity: 'طنجة',
    nav_services: 'الخدمات',
    nav_gallery: 'معرض الصور',
    nav_portal: 'بوابة ميلوسة',
    nav_about: 'من نحن',
    hero_badge: 'شاحنات الديباناج متوفرة في طنجة',
    hero_title1: 'سيارتك،',
    hero_title2: 'أولويتنا.',
    hero_desc:
      'عطل، حادث أو مشكلة في البطارية في طنجة؟ أسطول شاحنات الديباناج لدينا يتدخل على مدار الساعة.',
    stat1_title: 'متوفر 24/7',
    stat1_desc: 'تدخل في أي وقت',
    stat2_title: 'أقل من 30 دقيقة',
    stat2_desc: 'متوسط وقت وصول الشاحنة',
    stat3_title: 'أسطول مجهز',
    stat3_desc: 'شاحنات حديثة وآمنة',
    services_subtitle: 'خبرتنا',
    services_title: 'قطر ونقل السيارات بأمان',
    services_desc: 'نغطي طنجة وتطوان بأسطول من شاحنات الإنقاذ الجاهزة.',
    srv1_title: 'إنقاذ السيارات',
    srv1_desc: 'قطر، بطارية فارغة، ثقب الإطار أو عطل ميكانيكي.',
    srv2_title: 'نقل السيارات',
    srv2_desc: 'نقل آمن لجميع أنواع المركبات في جميع أنحاء المغرب.',
    srv3_title: 'الدراجات والجت سكي',
    srv3_desc: 'إنقاذ ونقل متخصص لدراجاتكم النارية والجت سكي.',
    srv4_title: 'البطارية والإطارات',
    srv4_desc: 'تدخل سريع لشحن البطاريات وتغيير الإطارات.',
    gallery_subtitle: 'أسطولنا وتدخلاتنا',
    gallery_title: 'شاحناتنا في الميدان',
    gallery_desc: 'اضغط على الصورة لرؤية ماركة السيارة واسمها.',
    gallery_more: 'عرض المزيد من الصور',
    gallery_less: 'عرض أقل',
    map_subtitle: 'موقعنا',
    map_title: 'أين تجدنا',
    map_desc: 'مركزنا في قلب طنجة لضمان إرسال سريع في كل الاتجاهات.',
    about_subtitle: 'لماذا تختارنا؟',
    about_title: 'المتخصص الأول في الديباناج في شمال المغرب',
    about_desc: 'نحن متخصصون في قطر جميع أنواع السيارات بأسطول حديث ومجهز.',
    about_bullet1: 'مركز اتصال بثلاث لغات',
    about_bullet2: 'شفافية تامة في أسعار القطر',
    about_bullet3: 'أسطول حديث ومجهز',
    about_bullet4: 'تدخل سريع مع تتبع الشاحنة',
    about_btn: 'اطلب ديباناج الآن',
    badge_years: '+10',
    badge_text: 'سنوات خبرة',
    banner_title: 'بحاجة إلى ديباناج فوراً؟',
    banner_desc: 'شاحناتنا مستعدة للتدخل على مدار الساعة.',
    footer_desc: 'شريكك الموثوق لإنقاذ وقطر السيارات في طنجة ومنطقتها.',
    footer_rights: 'ديباناج طنجة. جميع الحقوق محفوظة.',
    portal_subtitle: 'منصة الحجز وإدارة الطلبات',
    portal_title: 'بوابة ميلوسة الإلكترونية',
    portal_desc: 'تسيير وتتبع طلبات ديباناج في الوقت الحقيقي.',
    client_login_title: 'تسجيل الدخول',
    client_login_desc: 'أدخل معلوماتك للولوج إلى حسابك بأمان.',
    label_fullname: 'الاسم الكامل',
    label_username: 'البريد الإلكتروني أو اسم المستخدم',
    label_password: 'كلمة المرور',
    label_location: 'المكان',
    label_date: 'التاريخ',
    label_slot: 'الوقت المناسب',
    label_phone: 'رقم الهاتف',
    label_problem: 'نوع المشكل',
    btn_login: 'تسجيل الدخول / إنشاء حساب',
    btn_logout: 'تسجيل الخروج',
    btn_submit_request: 'إرسال طلب الإنقاذ',
    btn_save_profile: 'حفظ التغييرات',
    btn_accept: 'قبول الطلب',
    btn_reject: 'رفض الطلب',
    btn_send_notif: 'إرسال إشعار',
    hello_client: 'مرحباً، {name}',
    welcome_admin: 'مرحباً بعودتك، {name}',
    tab_dashboard: 'لوحة التحكم',
    tab_profile: 'حسابي',
    title_my_requests: 'طلباتي وتتبع الحالة',
    admin_pending: 'الطلبات الحالية والجديدة',
    title_todo: 'جدول المهام الداخلية',
    title_calendar: 'جدول المواعيد',
    title_notification: 'إرسال إشعار للزبون',
    profile_title: 'إعدادات الحساب',
    profile_desc: 'قم بتحديث معلوماتك الشخصية هنا.',
    profile_success: 'تم حفظ البيانات بنجاح !',
    notif_success: 'تم إرسال الإشعار بنجاح !',
  },
  en: {
    brandName: 'Towing',
    brandCity: 'Tangier',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_portal: 'Melloussa E-Portal',
    nav_about: 'About',
    hero_badge: 'Tow trucks available in Tangier',
    hero_title1: 'Your Vehicle,',
    hero_title2: 'Our Priority.',
    hero_desc:
      'Breakdown, accident, or battery issue in Tangier? Our tow-truck fleet responds 24/7 in under 30 minutes.',
    stat1_title: '24/7 Available',
    stat1_desc: 'Intervention any time',
    stat2_title: '< 30 Minutes',
    stat2_desc: 'Average arrival time',
    stat3_title: 'Equipped Fleet',
    stat3_desc: 'Modern secure tow trucks',
    services_subtitle: 'Our Expertise',
    services_title: 'Towing & Secure Transport',
    services_desc: 'We cover Tangier-Tetouan with tow trucks ready to respond.',
    srv1_title: 'Auto Towing',
    srv1_desc: 'Towing, flat battery, flat tire or mechanical breakdown.',
    srv2_title: 'Vehicle Transport',
    srv2_desc: 'Secure transport for all vehicle types across Morocco.',
    srv3_title: 'Motos & Jet Skis',
    srv3_desc: 'Specialized transport for motorcycles, quads and jet skis.',
    srv4_title: 'Battery & Tires',
    srv4_desc: 'Fast on-site battery, tire and fuel assistance.',
    gallery_subtitle: 'Our Fleet & Interventions',
    gallery_title: 'Our trucks in action',
    gallery_desc: 'Click a photo to see the vehicle brand and name.',
    gallery_more: 'Load more photos',
    gallery_less: 'Show less',
    map_subtitle: 'Our Fleet Location',
    map_title: 'Where to find us',
    map_desc: 'Our dispatch center is in central Tangier for rapid deployment.',
    about_subtitle: 'Why Choose Us?',
    about_title: 'The #1 Towing Specialist in Northern Morocco',
    about_desc: 'We specialize in vehicle towing with a modern equipped fleet.',
    about_bullet1: 'Trilingual call center',
    about_bullet2: 'Transparent towing rates',
    about_bullet3: 'Modern fully equipped tow trucks',
    about_bullet4: 'Fast intervention with GPS tracking',
    about_btn: 'Request a tow truck',
    badge_years: '10+',
    badge_text: 'Years of experience',
    banner_title: 'Need a tow truck right now?',
    banner_desc: 'Our trucks are ready to deploy 24/7.',
    footer_desc: 'Your trusted towing partner in Tangier and its region.',
    footer_rights: 'Towing Tangier. All rights reserved.',
    portal_subtitle: 'Booking & Management System',
    portal_title: 'Melloussa Connect Portal',
    portal_desc: 'Manage and request towing interventions in real time.',
    client_login_title: 'Portal Login',
    client_login_desc: 'Enter your details to access your secure space.',
    label_fullname: 'Full Name',
    label_username: 'Email or Username',
    label_password: 'Password',
    label_location: 'Location',
    label_date: 'Date',
    label_slot: 'Available Time Slot',
    label_phone: 'Phone Number',
    label_problem: 'Problem Type',
    btn_login: 'Sign In / Sign Up',
    btn_logout: 'Sign Out',
    btn_submit_request: 'Send Recovery Request',
    btn_save_profile: 'Save Changes',
    btn_accept: 'Accept',
    btn_reject: 'Reject',
    btn_send_notif: 'Send Notification',
    hello_client: 'Hello, {name}',
    welcome_admin: 'Welcome back, {name}',
    tab_dashboard: 'Dashboard',
    tab_profile: 'My Profile',
    title_my_requests: 'My Requests & Live Tracking',
    admin_pending: 'Manage All Requests',
    title_todo: 'Internal Task List',
    title_calendar: 'Intervention Calendar',
    title_notification: 'Notify the Client',
    profile_title: 'Account Settings',
    profile_desc: 'Update your personal information here.',
    profile_success: 'Profile updated successfully!',
    notif_success: 'Notification sent successfully!',
  },
};

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
  .font-arabic { font-family: 'Cairo', sans-serif; }
  .reveal { opacity: 0; transform: translateY(30px); transition: all .8s cubic-bezier(.5,0,0,1); }
  .reveal.active { opacity: 1; transform: translateY(0); }
  .delay-100 { transition-delay: 100ms; }
  .delay-200 { transition-delay: 200ms; }
  .delay-300 { transition-delay: 300ms; }
  .delay-400 { transition-delay: 400ms; }
  .bg-hero-pattern {
    background: linear-gradient(135deg, rgba(30, 58, 138, .9), rgba(8, 145, 178, .78)), url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  }
  .blob-shape { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; animation: morph 8s ease-in-out infinite; }
  @keyframes morph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
    67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
  }
`;

const serviceIconStyles = [
  'bg-blue-50 text-blue-500',
  'bg-red-50 text-red-500',
  'bg-amber-50 text-amber-500',
  'bg-emerald-50 text-emerald-500',
];

const initialRequests = [
  {
    id: 'REQ-01',
    clientName: 'Khalid Tangawi',
    email: 'khalid@gmail.com',
    phone: '06 12 34 56 78',
    location: 'Avenue Pasteur, Tanger Centre',
    date: '2026-05-29',
    slot: '14:00 - 16:00',
    problemType: 'Auto Towing',
    status: 'Confirmé',
  },
  {
    id: 'REQ-02',
    clientName: 'Sarah Boulmane',
    email: 'sarah@gmail.com',
    phone: '06 99 88 77 66',
    location: 'Melloussa Industrial Zone',
    date: '2026-05-29',
    slot: '16:00 - 18:00',
    problemType: 'Battery & Tires',
    status: 'En attente',
  },
];

const galleryItems = [
  {
    image: whatsappGallery1,
    brand: 'Mercedes-Benz',
    name: 'Atego Plateau',
    description: 'Dépanneuse plateau pour transport sécurisé de voitures.',
  },
  {
    image: whatsappGallery2,
    brand: 'Renault Trucks',
    name: 'Master Dépannage',
    description: 'Intervention rapide en ville et zones industrielles.',
  },
  {
    image: whatsappGallery3,
    brand: 'Iveco',
    name: 'Daily Tow Truck',
    description: 'Camion compact pour remorquage et assistance urgente.',
  },
  {
    image: whatsappGallery4,
    brand: 'Mitsubishi Fuso',
    name: 'Canter Recovery',
    description: 'Plateau robuste pour voitures, motos et utilitaires.',
  },
];

function WhatsappIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('fr');
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [activeDashboardTab, setActiveDashboardTab] = useState('dashboard');
  const [loginName, setLoginName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [userData, setUserData] = useState({ name: '', email: '', phone: '', password: '' });
  const [profileSuccessMsg, setProfileSuccessMsg] = useState(false);
  const [requests, setRequests] = useState(initialRequests);
  const [newLoc, setNewLoc] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSlot, setNewSlot] = useState('10:00 - 12:00');
  const [newPhone, setNewPhone] = useState('');
  const [newProblem, setNewProblem] = useState('Auto Towing');
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Préparer camion dépannage N3 (Melloussa)', completed: false },
    { id: 2, text: 'Appeler le client REQ-02 pour confirmer', completed: true },
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifStatus, setNotifStatus] = useState(false);

  const phoneNumber = '06 68 19 59 92';
  const phoneLink = 'tel:+212668195992';
  const whatsappLink = 'https://wa.me/212668195992';
  const isRtl = lang === 'ar';
  const t = (key) => translations[lang][key] || translations.fr[key] || key;

  const displayedImages = showAllImages ? galleryItems : galleryItems.slice(0, 2);
  const clientRequests = useMemo(
    () => requests.filter((request) => request.email === userData.email),
    [requests, userData.email],
  );

  const toggleLanguage = () => {
    setLang((current) => (current === 'fr' ? 'ar' : current === 'ar' ? 'en' : 'fr'));
    setMobileMenuOpen(false);
  };

  const getLangDisplay = () => (lang === 'fr' ? 'FR' : lang === 'ar' ? 'AR' : 'EN');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!loginId || !loginPass) return;

    const isAdmin = loginId.toLowerCase() === 'jouad' && loginPass === 'jaouad1975';
    const name = isAdmin ? 'Jaouad' : loginName || loginId.split('@')[0];

    setUserRole(isAdmin ? 'admin' : 'client');
    setUserData({
      name,
      email: isAdmin ? 'jouad@melloussa.com' : loginId,
      phone: isAdmin ? phoneNumber : '',
      password: loginPass,
    });
    setIsLoggedIn(true);
    window.scrollTo({ top: 0 });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setLoginName('');
    setLoginId('');
    setLoginPass('');
    setActiveDashboardTab('dashboard');
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();
    setProfileSuccessMsg(true);
    setTimeout(() => setProfileSuccessMsg(false), 3000);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    if (!newLoc || !newDate || !newPhone) return;

    setRequests((current) => [
      {
        id: `REQ-${String(current.length + 1).padStart(2, '0')}`,
        clientName: userData.name,
        email: userData.email,
        phone: newPhone,
        location: newLoc,
        date: newDate,
        slot: newSlot,
        problemType: newProblem,
        status: 'En attente',
      },
      ...current,
    ]);
    setNewLoc('');
    setNewDate('');
    setNewPhone('');
  };

  const updateStatus = (requestId, status) => {
    setRequests((current) =>
      current.map((request) => (request.id === requestId ? { ...request, status } : request)),
    );
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!newTodoText.trim()) return;
    setTodoList((current) => [...current, { id: Date.now(), text: newTodoText, completed: false }]);
    setNewTodoText('');
  };

  const sendNotification = (event) => {
    event.preventDefault();
    if (!notifMessage.trim()) return;
    setNotifStatus(true);
    setTimeout(() => {
      setNotifStatus(false);
      setNotifMessage('');
    }, 3500);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoggedIn) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 },
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));
    return () => revealElements.forEach((element) => observer.unobserve(element));
  }, [lang, showAllImages, isLoggedIn]);

  const statusClasses = (status) => {
    if (status === 'En attente') return 'bg-amber-500/10 text-amber-400';
    if (status === 'Confirmé') return 'bg-blue-500/10 text-blue-400';
    if (status === 'En cours') return 'bg-purple-500/10 text-purple-400';
    if (status === 'Reject') return 'bg-red-500/10 text-red-400';
    return 'bg-green-500/10 text-green-400';
  };

  if (isLoggedIn) {
    const greetingText =
      userRole === 'admin'
        ? t('welcome_admin').replace('{name}', userData.name)
        : t('hello_client').replace('{name}', userData.name);

    return (
      <div className={`min-h-screen bg-slate-900 text-slate-100 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <style>{customStyles}</style>
        <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-800 shadow-sm">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500">
                <LifeBuoy className="h-6 w-6 text-white" />
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="text-xl font-bold leading-none text-white">
                  {t('brandName')}<span className="text-amber-500">{t('brandCity')}</span>
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Melloussa Assistance
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 md:flex">
                <User className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-bold">{greetingText}</span>
              </div>
              <button onClick={toggleLanguage} className="flex items-center gap-1.5 rounded-full border border-slate-600 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-700">
                <Globe className="h-3.5 w-3.5" />
                {getLangDisplay()}
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400 hover:bg-red-500/20">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{t('btn_logout')}</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="border-b border-slate-700/50 bg-slate-800/50">
          <div className="mx-auto flex max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
            {[
              ['dashboard', Activity, t('tab_dashboard')],
              ['profile', Settings, t('tab_profile')],
            ].map(([id, Icon, label]) => (
              <button
                key={id}
                onClick={() => setActiveDashboardTab(id)}
                className={`flex items-center gap-2 border-b-2 py-4 text-sm font-bold transition-colors ${
                  activeDashboardTab === id
                    ? 'border-amber-500 text-amber-500'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {activeDashboardTab === 'profile' && (
            <section className="mx-auto max-w-2xl rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl md:p-10">
              <div className="mb-8 flex items-center gap-4 border-b border-slate-700 pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-2xl font-bold text-amber-500">
                  {userData.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{t('profile_title')}</h2>
                  <p className="text-sm text-slate-400">{t('profile_desc')}</p>
                </div>
              </div>

              {profileSuccessMsg && (
                <div className="mb-6 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  {t('profile_success')}
                </div>
              )}

              <form onSubmit={handleSaveProfile} className="space-y-5">
                {[
                  [t('label_fullname'), 'name', 'text'],
                  ['Email', 'email', 'email'],
                  [t('label_phone'), 'phone', 'tel'],
                  [t('label_password'), 'password', 'password'],
                ].map(([label, key, type]) => (
                  <label key={key} className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>
                    <input
                      type={type}
                      value={userData[key]}
                      onChange={(event) => setUserData({ ...userData, [key]: event.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </label>
                ))}
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-bold text-slate-950 shadow-lg hover:bg-amber-400">
                  <Save className="h-5 w-5" />
                  {t('btn_save_profile')}
                </button>
              </form>
            </section>
          )}

          {activeDashboardTab === 'dashboard' && userRole === 'client' && (
            <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl md:p-8 lg:col-span-6">
                <h3 className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4 text-xl font-bold">
                  <Car className="h-5 w-5 text-amber-500" />
                  Nouvelle Demande
                </h3>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <input required value={newLoc} onChange={(event) => setNewLoc(event.target.value)} placeholder={t('label_location')} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input required type="date" value={newDate} onChange={(event) => setNewDate(event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500" />
                    <select value={newSlot} onChange={(event) => setNewSlot(event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500">
                      {['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map((slot) => (
                        <option key={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <select value={newProblem} onChange={(event) => setNewProblem(event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500">
                      <option>Auto Towing</option>
                      <option>Vehicle Transport</option>
                      <option>Motos & Jet Skis</option>
                      <option>Battery & Tires</option>
                    </select>
                    <input required type="tel" value={newPhone} onChange={(event) => setNewPhone(event.target.value)} placeholder={t('label_phone')} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-bold text-slate-950 hover:bg-amber-400">
                    <Send className="h-4 w-4" />
                    {t('btn_submit_request')}
                  </button>
                </form>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl md:p-8 lg:col-span-6">
                <h3 className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4 text-xl font-bold">
                  <Activity className="h-5 w-5 text-amber-500" />
                  {t('title_my_requests')}
                </h3>
                <div className="space-y-4">
                  {clientRequests.length === 0 ? (
                    <p className="py-8 text-center text-slate-400">Aucune demande pour le moment.</p>
                  ) : (
                    clientRequests.map((request) => (
                      <div key={request.id} className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-4">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div>
                            <span className="rounded-md bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-500">{request.id}</span>
                            <h4 className="mt-1 text-sm font-bold">{request.problemType}</h4>
                          </div>
                          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusClasses(request.status)}`}>{request.status}</span>
                        </div>
                        <p className="text-xs text-slate-400">{request.location}</p>
                        <p className="mt-1 text-xs text-slate-400">{request.date} ({request.slot})</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          )}

          {activeDashboardTab === 'dashboard' && userRole === 'admin' && (
            <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl md:p-8 lg:col-span-7">
                <h3 className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4 text-xl font-bold">
                  <Settings className="h-5 w-5 text-blue-500" />
                  {t('admin_pending')}
                </h3>
                <div className="space-y-4">
                  {requests.map((request) => (
                    <div key={request.id} className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-4 md:p-6">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row">
                        <div>
                          <span className="rounded bg-blue-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-400">{request.id}</span>
                          <span className={`ms-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${statusClasses(request.status)}`}>{request.status}</span>
                          <h4 className="mt-2 text-sm font-extrabold text-white">{request.clientName}</h4>
                          <p className="text-xs font-medium text-slate-300">{request.problemType} - <span className="text-amber-500">{request.location}</span></p>
                          <p className="text-xs text-slate-400">{request.date} ({request.slot}) | Tel: {request.phone}</p>
                        </div>
                        <div className="flex flex-wrap items-end gap-2">
                          {request.status === 'En attente' && (
                            <>
                              <button onClick={() => updateStatus(request.id, 'Confirmé')} className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-500">{t('btn_accept')}</button>
                              <button onClick={() => updateStatus(request.id, 'Reject')} className="rounded-lg border border-red-500/20 bg-red-600/30 px-3 py-1.5 text-xs font-bold text-red-300 hover:bg-red-600/50">{t('btn_reject')}</button>
                            </>
                          )}
                          {['Confirmé', 'En cours', 'Terminé'].map((status) => (
                            <button key={status} onClick={() => updateStatus(request.id, status)} className={`rounded px-2 py-1 text-[10px] font-bold ${request.status === status ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{status}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><Activity className="h-5 w-5 text-blue-500" />{t('title_todo')}</h3>
                  <form onSubmit={handleAddTodo} className="mb-4 flex gap-2">
                    <input value={newTodoText} onChange={(event) => setNewTodoText(event.target.value)} placeholder="Nouvelle tâche admin..." className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500" />
                    <button className="rounded-xl bg-blue-600 p-2.5 hover:bg-blue-500"><Plus className="h-4 w-4" /></button>
                  </form>
                  <div className="space-y-2">
                    {todoList.map((todo) => (
                      <div key={todo.id} className="flex items-center justify-between rounded-xl border border-slate-700/30 bg-slate-900/40 p-2.5 text-xs">
                        <label className="flex flex-1 cursor-pointer items-center gap-2.5">
                          <input checked={todo.completed} onChange={() => setTodoList((items) => items.map((item) => item.id === todo.id ? { ...item, completed: !item.completed } : item))} type="checkbox" />
                          <span className={todo.completed ? 'text-slate-500 line-through' : 'text-slate-300'}>{todo.text}</span>
                        </label>
                        <button onClick={() => setTodoList((items) => items.filter((item) => item.id !== todo.id))} className="text-slate-500 hover:text-red-400"><Trash2 className="h-3.5 w-3.5" /></button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><Calendar className="h-5 w-5 text-blue-500" />{t('title_calendar')}</h3>
                  <div className="space-y-2">
                    {requests.filter((request) => request.status === 'Confirmé' || request.status === 'En cours').map((request) => (
                      <div key={request.id} className="rounded-xl border-l-4 border-blue-500 bg-slate-900/40 p-3 text-xs">
                        <p className="font-bold text-white">{request.clientName}</p>
                        <p className="text-slate-400">{request.location}</p>
                        <p className="font-semibold text-amber-500">{request.date} - {request.slot}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><Bell className="h-5 w-5 text-blue-500" />{t('title_notification')}</h3>
                  {notifStatus && <p className="mb-4 rounded-xl border border-green-800 bg-green-950/50 p-3 text-xs text-green-400">{t('notif_success')}</p>}
                  <form onSubmit={sendNotification} className="space-y-3">
                    <textarea value={notifMessage} onChange={(event) => setNotifMessage(event.target.value)} required rows="3" placeholder="Message à envoyer au client..." className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500" />
                    <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500"><Send className="h-3.5 w-3.5" />{t('btn_send_notif')}</button>
                  </form>
                </div>
              </div>
            </section>
          )}
        </main>
        <FloatingButtons phoneLink={phoneLink} whatsappLink={whatsappLink} dashboard />
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <style>{customStyles}</style>
      <nav className={`fixed z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white/95 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Brand isScrolled={isScrolled} t={t} />
            <div className="hidden items-center gap-8 lg:flex">
              {[
                ['#services', t('nav_services')],
                ['#galerie', t('nav_gallery')],
                ['#melloussa-portal', t('nav_portal')],
                ['#about', t('nav_about')],
              ].map(([href, label]) => (
                <a key={href} href={href} className={`text-sm font-semibold transition-colors hover:text-amber-500 ${href.includes('portal') ? 'text-amber-500' : isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                  {label}
                </a>
              ))}
              <button onClick={toggleLanguage} className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold transition-colors ${isScrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-100' : 'border-white/30 text-white hover:bg-white/10'}`}>
                <Globe className="h-4 w-4" />
                {getLangDisplay()}
              </button>
              <a href={phoneLink} className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 font-semibold text-white hover:bg-amber-400">
                <PhoneCall className="h-4 w-4" />
                <span dir="ltr">{phoneNumber}</span>
              </a>
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <button onClick={toggleLanguage} className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold ${isScrolled ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-white/30 bg-white/10 text-white'}`}>{getLangDisplay()}</button>
              <button onClick={() => setMobileMenuOpen((open) => !open)} className={`rounded-lg p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        <div className={`absolute w-full bg-white shadow-xl transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}>
          <div className="space-y-2 px-4 pb-6 pt-2">
            {[
              ['#services', t('nav_services')],
              ['#galerie', t('nav_gallery')],
              ['#melloussa-portal', t('nav_portal')],
              ['#about', t('nav_about')],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-amber-500">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="bg-hero-pattern relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
        <div className="absolute left-10 top-1/4 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium">{t('hero_badge')}</span>
            </div>
            <h1 className="reveal delay-100 mb-6 text-4xl font-extrabold leading-relaxed text-white md:text-5xl lg:text-7xl">
              {t('hero_title1')}<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">{t('hero_title2')}</span>
            </h1>
            <p className="reveal delay-200 mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">{t('hero_desc')}</p>
            <div className="reveal delay-300 flex flex-col gap-3 sm:flex-row">
              <a href={phoneLink} className="flex items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-amber-600">
                <PhoneCall className="h-6 w-6" />
                <span dir="ltr">{phoneNumber}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-600">
                <WhatsappIcon />
                <span dir="ltr">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal relative z-20 -mt-16 grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 md:-mt-24 md:grid-cols-3 md:p-8">
            {[
              [Clock, t('stat1_title'), t('stat1_desc')],
              [Activity, t('stat2_title'), t('stat2_desc')],
              [ShieldCheck, t('stat3_title'), t('stat3_desc')],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl p-4 hover:bg-slate-50">
                <div className="rounded-2xl bg-blue-50 p-4"><Icon className="h-7 w-7 text-blue-600" /></div>
                <div><h3 className="text-xl font-bold text-slate-800">{title}</h3><p className="text-slate-500">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionHeader id="services" subtitle={t('services_subtitle')} title={t('services_title')} desc={t('services_desc')} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 bg-slate-50 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {[
          [Car, t('srv1_title'), t('srv1_desc')],
          [Truck, t('srv2_title'), t('srv2_desc')],
          [Wrench, t('srv3_title'), t('srv3_desc')],
          [Zap, t('srv4_title'), t('srv4_desc')],
        ].map(([Icon, title, desc], index) => (
          <div key={title} className={`reveal delay-${(index + 1) * 100} rounded-3xl border border-slate-100 bg-white p-8 shadow-md`}>
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${serviceIconStyles[index]}`}>
              <Icon className="h-8 w-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold text-slate-900">{title}</h4>
            <p className="mb-6 text-slate-600">{desc}</p>
            <a href={phoneLink} className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-amber-500">
              {t('about_btn')} <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            </a>
          </div>
        ))}
      </div>

      <section id="galerie" className="border-t border-slate-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-500">{t('gallery_subtitle')}</h2>
            <h3 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">{t('gallery_title')}</h3>
            <p className="text-lg text-slate-600">{t('gallery_desc')}</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
            {displayedImages.map((item) => (
              <button key={item.image} onClick={() => setSelectedCar(item)} className="reveal active group relative aspect-video overflow-hidden rounded-2xl text-left shadow-md outline-none ring-amber-500 transition focus:ring-4">
                <img src={item.image} alt={`${item.brand} ${item.name}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">{item.brand}</p>
                  <h4 className="text-lg font-black">{item.name}</h4>
                </div>
              </button>
            ))}
          </div>
          <div className="reveal delay-100 mt-10 text-center">
            <button onClick={() => setShowAllImages((show) => !show)} className="rounded-full bg-slate-100 px-8 py-3.5 font-bold text-slate-800 shadow-sm hover:bg-slate-200">
              {showAllImages ? t('gallery_less') : t('gallery_more')}
            </button>
          </div>
        </div>
      </section>

      <PortalLogin t={t} onLogin={handleLogin} loginName={loginName} setLoginName={setLoginName} loginId={loginId} setLoginId={setLoginId} loginPass={loginPass} setLoginPass={setLoginPass} />

      <section id="about" className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal relative order-2 lg:order-1">
            <div className="blob-shape absolute inset-0 scale-105 bg-blue-900 opacity-10" />
            <img src={aboutTowTruck} alt="Équipe d'assistance Tanger" className="relative z-10 h-[350px] w-full rounded-3xl object-cover shadow-xl md:h-[500px]" />
            <div className={`absolute -bottom-4 z-20 rounded-2xl bg-amber-500 p-5 text-white shadow-xl md:-bottom-6 md:p-6 ${isRtl ? '-left-4 md:-left-6' : '-right-4 md:-right-6'}`}>
              <p className="text-3xl font-extrabold md:text-4xl" dir="ltr">{t('badge_years')}</p>
              <p className="text-sm font-medium">{t('badge_text')}</p>
            </div>
          </div>
          <div className="reveal delay-200 order-1 lg:order-2">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">{t('about_subtitle')}</h2>
            <h3 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">{t('about_title')}</h3>
            <p className="mb-8 text-lg leading-loose text-slate-600">{t('about_desc')}</p>
            <ul className="mb-10 space-y-4">
              {[t('about_bullet1'), t('about_bullet2'), t('about_bullet3'), t('about_bullet4')].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <a href={phoneLink} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-8 py-4 font-bold text-white shadow-lg hover:bg-blue-800 sm:w-auto">
              {t('about_btn')} <ArrowRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </section>

      <section id="localisation" className="border-t border-slate-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-500">{t('map_subtitle')}</h2>
            <h3 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">{t('map_title')}</h3>
            <p className="text-lg text-slate-600">{t('map_desc')}</p>
          </div>
          <div className="reveal delay-100 h-[350px] overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-200 md:h-[500px]">
            <iframe title="Carte de localisation Dépannage Tanger" src="https://maps.google.com/maps?q=Avenue%20Mohamed%20V,%20Tanger,%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-amber-500 py-14 text-center text-white md:py-16">
        <div className="reveal relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">{t('banner_title')}</h2>
          <p className="mb-10 text-xl text-amber-50">{t('banner_desc')}</p>
          <a href={phoneLink} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-2xl font-black text-amber-500 shadow-xl hover:bg-slate-50 sm:w-auto">
            <PhoneCall className="h-8 w-8" />
            <span dir="ltr">{phoneNumber}</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900 py-12 text-slate-300 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500"><LifeBuoy className="h-5 w-5 text-white" /></div>
                <span className="text-2xl font-bold text-white">{t('brandName')}<span className="text-amber-500">{t('brandCity')}</span></span>
              </div>
              <p className="max-w-md text-sm leading-relaxed">{t('footer_desc')}</p>
            </div>
            <FooterList title="Services" items={[t('srv1_title'), t('srv2_title'), t('srv3_title'), t('srv4_title')]} isRtl={isRtl} />
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 shrink-0 text-amber-500" />Avenue Mohamed V, 90000 Tanger</li>
                <li className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-amber-500" /><a href={phoneLink} className="font-bold text-white">{phoneNumber}</a></li>
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-amber-500" /><span dir="ltr">24/24 - 7/7</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} {t('footer_rights')}</div>
        </div>
      </footer>

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
      <FloatingButtons phoneLink={phoneLink} whatsappLink={whatsappLink} />
    </div>
  );
}

function Brand({ isScrolled, t }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500">
        <LifeBuoy className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-none tracking-tight md:text-2xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
          {t('brandName')}<span className="text-amber-500">{t('brandCity')}</span>
        </span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-widest md:text-xs ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>Melloussa Assistance</span>
      </div>
    </div>
  );
}

function SectionHeader({ id, subtitle, title, desc }) {
  return (
    <section id={id} className="bg-slate-50 px-4 pb-12 pt-16 text-center md:pt-24">
      <div className="reveal mx-auto max-w-3xl">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-500">{subtitle}</h2>
        <h3 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-5xl">{title}</h3>
        <p className="text-lg leading-relaxed text-slate-600">{desc}</p>
      </div>
    </section>
  );
}

function PortalLogin({ t, onLogin, loginName, setLoginName, loginId, setLoginId, loginPass, setLoginPass }) {
  return (
    <section id="melloussa-portal" className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-500">{t('portal_subtitle')}</span>
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">{t('portal_title')}</h2>
          <p className="text-slate-400">{t('portal_desc')}</p>
        </div>
        <div className="reveal mx-auto max-w-md rounded-3xl border border-slate-700 bg-slate-800/80 p-6 shadow-2xl backdrop-blur-sm md:p-10">
          <div className="mb-6 flex justify-center"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500"><Lock className="h-7 w-7" /></div></div>
          <h3 className="mb-2 text-center text-2xl font-bold">{t('client_login_title')}</h3>
          <p className="mb-8 text-center text-sm text-slate-400">{t('client_login_desc')}</p>
          <form onSubmit={onLogin} className="space-y-4">
            <PortalInput label={t('label_fullname')} value={loginName} setValue={setLoginName} placeholder="Ex: Ahmed Benali" />
            <PortalInput label={t('label_username')} value={loginId} setValue={setLoginId} placeholder="Ex: hamza@gmail.com ou jouad" required />
            <PortalInput label={t('label_password')} value={loginPass} setValue={setLoginPass} placeholder="••••••••" type="password" required />
            <button className="mt-6 w-full rounded-xl bg-amber-500 py-3.5 font-bold text-slate-950 shadow-lg shadow-amber-500/10 hover:bg-amber-400">{t('btn_login')}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function PortalInput({ label, value, setValue, placeholder, type = 'text', required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>
      <input type={type} required={required} value={value} onChange={(event) => setValue(event.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500" />
    </label>
  );
}

function FooterList({ title, items, isRtl }) {
  return (
    <div>
      <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#services" className="flex items-center gap-2 text-sm transition-colors hover:text-amber-500">
              <ChevronRight className={`h-3 w-3 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CarModal({ car, onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="relative aspect-video">
          <img src={car.image} alt={`${car.brand} ${car.name}`} className="h-full w-full object-cover" />
          <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-slate-950/70 p-2 text-white hover:bg-slate-950" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-500">{car.brand}</p>
          <h3 className="mt-1 text-3xl font-black text-slate-900">{car.name}</h3>
          <p className="mt-3 text-slate-600">{car.description}</p>
        </div>
      </div>
    </div>
  );
}

function FloatingButtons({ phoneLink, whatsappLink, dashboard = false }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {!dashboard && (
        <a href={phoneLink} className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-colors hover:bg-amber-600 md:hidden">
          <PhoneCall className="h-6 w-6" />
        </a>
      )}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600">
        <WhatsappIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
