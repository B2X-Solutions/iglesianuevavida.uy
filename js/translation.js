// Objeto com as traduções
const translations = {
    'en': {
        'home': 'Home',
        'activities': 'Activities',
        'events': 'Events',
        'meetings': 'Meetings',
        'welcome': 'Welcome to New Life Church',
        'our-activities': 'Our Activities',
        'prayer-group': 'Prayer Group',
        'prayer-group-description': 'Join our prayer group to lift up your needs and intercede for others.',
        'music-ministry': 'Music Ministry',
        'music-ministry-description': 'Use your musical talents to glorify God in our worship services.',
        'youth-activities': 'Youth Activities',
        'youth-description': 'Join our youth group for fun activities and spiritual growth.',
        'learn-more': 'Learn More',
        'about-us': 'About Us',
        'about-description': 'We are a welcoming community dedicated to spreading God\'s message about love and justice.',
        'contact': 'Contact',
        'address': 'Francisco Joaquín Muñoz 3376, 11300 Montevideo, Departamento de Montevideo',
        'phone': '26227763',
        'email': 'iebnuevid@gmail.com',
        'follow-us': 'Follow Us',
        'church-name': 'New Life Church',
        'all-rights': 'All rights reserved',
        'activities-description': 'Welcome to our activities page. Here you will find the weekly events calendar and important notes about our activities.',
        'weekly-events': 'Weekly Events',
        'important-notes': 'Important Notes',
        'note-1': 'All activities are free and open to the community.',
        'note-2': 'To participate in special activities, please register in advance.',
        'note-3': 'Schedules may change, please check the calendar to confirm.',
        'note-4': 'For more information, contact us by phone or email.',
        'meetings-description': 'Welcome to our meetings page. Here you will find our weekly schedule of activities.',
        'sunday': 'Sunday',
        'sunday-school': 'Sunday School',
        'sunday-school-time': '10:30 - 11:15',
        'sunday-school-description': 'Classes for children, adults and teenagers',
        'main-service': 'Main Service',
        'main-service-time': '11:30 - 13:00+',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'no-meetings': 'No scheduled meetings',
        'prayer-study': 'Prayer and Bible Study Meeting',
        'prayer-study-time': '18:00 - 19:30',
        'bible-study': 'In-person Bible Study',
        'bible-study-time': '15:00',
        'online-bible-study': 'Online Bible Study',
        'online-bible-study-time': '19:30',
        'upcoming-events': 'Upcoming Events',
        'youth-event-description': 'Join us for an exciting youth meeting with games, worship, and a powerful message.',
        'every-friday': 'Every Friday',
        'details': 'Details',
        'men-event-description': 'A special gathering for men to connect, grow spiritually, and support each other.',
        'first-saturday': 'First Saturday',
        'women-event-description': 'A time for women to come together, share experiences, and grow in faith.',
        'second-saturday': 'Second Saturday',
        'general-event-description': 'Join our entire church community for special celebrations and gatherings.',
        'last-sunday': 'Last Sunday',
        'events-description': 'Discover our upcoming church events'
    },
    'pt': {
        'home': 'Início',
        'activities': 'Atividades',
        'events': 'Eventos',
        'meetings': 'Reuniões',
        'welcome': 'Bem-vindo à Igreja Nova Vida',
        'our-activities': 'Nossas Atividades',
        'prayer-group': 'Grupo de Oração',
        'prayer-group-description': 'Junte-se ao nosso grupo de oração para elevar suas necessidades e interceder por outros.',
        'music-ministry': 'Ministério de Música',
        'music-ministry-description': 'Use seus talentos musicais para glorificar a Deus em nossos cultos.',
        'youth-activities': 'Atividades para Jovens',
        'youth-description': 'Junte-se ao nosso grupo de jovens para atividades divertidas e crescimento espiritual.',
        'learn-more': 'Saiba Mais',
        'about-us': 'Sobre Nós',
        'about-description': 'Somos uma comunidade acolhedora dedicada a espalhar a mensagem de Deus sobre o amor e a justiça.',
        'contact': 'Contato',
        'address': 'Francisco Joaquín Muñoz 3376, 11300 Montevideo, Departamento de Montevideo',
        'phone': '26227763',
        'email': 'iebnuevid@gmail.com',
        'follow-us': 'Siga-nos',
        'church-name': 'Igreja Nova Vida',
        'all-rights': 'Todos os direitos reservados',
        'activities-description': 'Bem-vindo à nossa página de atividades. Aqui você encontrará o calendário de eventos semanais e notas importantes sobre nossas atividades.',
        'weekly-events': 'Eventos da Semana',
        'important-notes': 'Notas Importantes',
        'note-1': 'Todas as atividades são gratuitas e abertas à comunidade.',
        'note-2': 'Para participar de atividades especiais, por favor registre-se com antecedência.',
        'note-3': 'Os horários podem mudar, consulte o calendário para confirmar.',
        'note-4': 'Para mais informações, entre em contato conosco por telefone ou e-mail.',
        'meetings-description': 'Bem-vindo à nossa página de reuniões. Aqui você encontrará nossa programação semanal de atividades.',
        'sunday': 'Domingo',
        'sunday-school': 'Escola Dominical',
        'sunday-school-time': '10:30 - 11:15',
        'sunday-school-description': 'Aulas para crianças, adultos e adolescentes',
        'main-service': 'Culto Principal',
        'main-service-time': '11:30 - 13:00+',
        'monday': 'Segunda-feira',
        'tuesday': 'Terça-feira',
        'wednesday': 'Quarta-feira',
        'thursday': 'Quinta-feira',
        'friday': 'Sexta-feira',
        'saturday': 'Sábado',
        'no-meetings': 'Não há reuniões programadas',
        'prayer-study': 'Reunião de Oração e Estudo Bíblico',
        'prayer-study-time': '18:00 - 19:30',
        'bible-study': 'Estudo Bíblico Presencial',
        'bible-study-time': '15:00',
        'online-bible-study': 'Estudo Bíblico Online',
        'online-bible-study-time': '19:30',
        'upcoming-events': 'Próximos Eventos',
        'youth-event-description': 'Junte-se a nós para uma emocionante reunião de jovens com jogos, adoração e uma poderosa mensagem.',
        'every-friday': 'Toda Sexta-feira',
        'details': 'Detalhes',
        'men-event-description': 'Um encontro especial para homens se conectarem, crescerem espiritualmente e apoiarem uns aos outros.',
        'first-saturday': 'Primeiro Sábado',
        'women-event-description': 'Um momento para as mulheres se reunirem, compartilharem experiências e crescerem na fé.',
        'second-saturday': 'Segundo Sábado',
        'general-event-description': 'Junte-se a toda a nossa comunidade da igreja para celebrações e encontros especiais.',
        'last-sunday': 'Último Domingo',
        'events-description': 'Conheça os próximos eventos da nossa igreja'
    },
    'es': {
        'home': 'Inicio',
        'activities': 'Actividades',
        'events': 'Eventos',
        'meetings': 'Reuniones',
        'welcome': 'Bienvenido a la Iglesia Nueva Vida',
        'our-activities': 'Nuestras Actividades',
        'prayer-group': 'Grupo de Oración',
        'prayer-group-description': 'Únase a nuestro grupo de oración para elevar sus necesidades e interceder por otros.',
        'music-ministry': 'Ministerio de Música',
        'music-ministry-description': 'Use sus talentos musicales para glorificar a Dios en nuestros servicios de adoración.',
        'youth-activities': 'Actividades Juveniles',
        'youth-description': 'Únase a nuestro grupo de jóvenes para actividades divertidas y crecimiento espiritual.',
        'learn-more': 'Saber más',
        'about-us': 'Sobre Nosotros',
        'about-description': 'Somos una comunidad acogedora dedicada a difundir el amor y el mensaje de Dios.',
        'contact': 'Contacto',
        'address': 'Francisco Joaquín Muñoz 3376, 11300 Montevideo, Departamento de Montevideo',
        'phone': '26227763',
        'email': 'iebnuevid@gmail.com',
        'follow-us': 'Síguenos',
        'church-name': 'Iglesia Nueva Vida',
        'all-rights': 'Todos los derechos reservados',
        'activities-description': 'Bienvenido a nuestra página de actividades. Aquí encontrarás el calendario de eventos semanales y notas importantes sobre nuestras actividades.',
        'weekly-events': 'Eventos de la Semana',
        'important-notes': 'Notas Importantes',
        'note-1': 'Todas las actividades son gratuitas y abiertas a la comunidad.',
        'note-2': 'Para participar en actividades especiales, por favor regístrese con anticipación.',
        'note-3': 'Los horarios pueden cambiar, consulte el calendario para confirmar.',
        'note-4': 'Para más información, contáctenos por teléfono o correo electrónico.',
        'meetings-description': 'Bienvenido a nuestra página de reuniones. Aquí encontrarás el horario semanal de nuestras actividades.',
        'sunday': 'Domingo',
        'sunday-school': 'Escuela Dominical',
        'sunday-school-time': '10:30 - 11:15',
        'sunday-school-description': 'Clases para niños, adultos y adolescentes',
        'main-service': 'Culto Principal',
        'main-service-time': '11:30 - 13:00+',
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado',
        'no-meetings': 'No hay reuniones programadas',
        'prayer-study': 'Reunión de Oración y Estudio Bíblico',
        'prayer-study-time': '18:00 - 19:30',
        'bible-study': 'Estudio Bíblico Presencial',
        'bible-study-time': '15:00',
        'online-bible-study': 'Estudio Bíblico Online',
        'online-bible-study-time': '19:30',
        'upcoming-events': 'Próximos Eventos',
        'youth-event-description': 'Únase a nosotros para una emocionante reunión de jóvenes con juegos, adoración y un poderoso mensaje.',
        'every-friday': 'Todos los viernes',
        'details': 'Detalles',
        'men-event-description': 'Un encuentro especial para que los hombres se conecten, crezcan espiritualmente y se apoyen mutuamente.',
        'first-saturday': 'Primer sábado',
        'women-event-description': 'Un momento para que las mujeres se reúnan, compartan experiencias y crezcan en la fe.',
        'second-saturday': 'Segundo sábado',
        'general-event-description': 'Únase a toda nuestra comunidad de la iglesia para celebraciones y reuniones especiales.',
        'last-sunday': 'Último domingo',
        'events-description': 'Descubre los próximos eventos de nuestra iglesia'
    }
};

// Função para atualizar o idioma da página
function updateLanguage(lang) {
    // Salvar o idioma selecionado no localStorage
    localStorage.setItem('language', lang);
    
    // Atualizar a bandeira do botão de idioma
    const currentLanguageSpan = document.querySelector('.current-language');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = getFlagForLang(lang);
    }
    
    // Atualizar todos os textos da página
    updatePageLanguage();
}

// Função para obter a bandeira correspondente ao idioma
function getFlagForLang(lang) {
    const flags = {
        'en': '🇺🇸',
        'pt': '🇧🇷',
        'es': '🇺🇾'
    };
    return flags[lang] || flags['es'];
}

// Função para atualizar os textos da página de acordo com o idioma selecionado
function updatePageLanguage() {
    const lang = localStorage.getItem('language') || 'es';
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
} 