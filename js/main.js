document.addEventListener('DOMContentLoaded', function() {
    // Inicializar menu mobile
    initMobileMenu();
    
    // Inicializar seletor de idioma
    initLanguageSelector();
    
    // Atualizar links ativos
    updateActiveLinks();
    
    // Função para lidar com o efeito de scroll do header
    initHeaderScrollEffect();
    
    // Verifica se há um idioma salvo e aplica
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
        
        // Atualiza a exibição do idioma selecionado
        const languageText = document.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = savedLanguage === 'es' ? 'ES' : 'PT';
        }
    }
});

// Função para inicializar o menu mobile
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuButton && mainNavigation) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle da classe active no menu
            mainNavigation.classList.toggle('active');
            // Toggle da classe active no botão
            this.classList.toggle('active');
            // Bloquear scroll do body quando menu está aberto
            document.body.classList.toggle('menu-open');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNavigation.classList.remove('active');
                mobileMenuButton.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// Função para inicializar o seletor de idioma
function initLanguageSelector() {
    const languageButton = document.querySelector('.language-button');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageButton && languageDropdown) {
        // Toggle do dropdown
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function(e) {
            if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });
        
        // Selecionar idioma
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const flag = this.getAttribute('data-flag');
                
                // Atualizar o ícone de bandeira no botão
                const currentLanguage = document.querySelector('.current-language');
                if (currentLanguage) {
                    currentLanguage.textContent = flag;
                }
                
                // Fechar dropdown
                languageDropdown.classList.remove('active');
                
                // Chamar função de tradução do translation.js
                updateLanguage(lang);
            });
        });
        
        // Carregar idioma salvo ou padrão
        const savedLanguage = localStorage.getItem('language') || 'es';
        let flagForSavedLang = getFlagForLang(savedLanguage);
        
        const currentLanguage = document.querySelector('.current-language');
        if (currentLanguage) {
            currentLanguage.textContent = flagForSavedLang;
        }
        
        updatePageLanguage();
    }
}

// Função para destacar o link ativo
function updateActiveLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Remover classe ativa de todos os links
        link.classList.remove('active');
        
        // Verificar se o href do link corresponde ao caminho atual
        const href = link.getAttribute('href');
        if (href === currentPath || 
            (currentPath === '/' && href === 'index.html') ||
            (currentPath.includes(href) && href !== '/')) {
            link.classList.add('active');
        }
    });
}

// Função para mudar o idioma do site
function changeLanguage(lang) {
    // Dicionário de traduções
    const translations = {
        'pt': {
            'home': 'Início',
            'about': 'Sobre Nós',
            'services': 'Serviços',
            'schedule': 'Horários',
            'contact': 'Contato'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'schedule': 'Schedule',
            'contact': 'Contact'
        },
        'es': {
            'home': 'Inicio',
            'about': 'Sobre Nosotros',
            'services': 'Servicios',
            'schedule': 'Horarios',
            'contact': 'Contacto'
        }
    };
    
    // Seleciona todos os elementos com o atributo data-translate
    const elements = document.querySelectorAll('[data-translate]');
    
    // Atualiza o texto de cada elemento baseado no idioma selecionado
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Armazenar o idioma selecionado para futuras visitas
    localStorage.setItem('preferredLanguage', lang);
}

// Função para lidar com o efeito de scroll do header
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Verifica se o scroll ultrapassou o limite
        if (currentScroll > scrollThreshold) {
            header.classList.add('header-scrolled');
            
            // Oculta o header quando o scroll é para baixo e mostra quando é para cima
            if (currentScroll > lastScrollTop && currentScroll > 300) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        } else {
            header.classList.remove('header-scrolled');
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
} 