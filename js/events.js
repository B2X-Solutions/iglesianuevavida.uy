document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos
    const eventsData = {
        'youth': {
            title: 'Jóvenes',
            description: 'Únase a nosotros para una emocionante reunión de jóvenes con juegos, adoración y un poderoso mensaje.',
            date: 'Todos los viernes - 19:00',
            location: 'Salón principal',
            details: 'Nuestro grupo de jóvenes se reúne semanalmente para compartir, crecer en la fe y divertirse juntos. Incluye actividades dinámicas, adoración y enseñanza bíblica relevante para los jóvenes.',
            images: [
                'images/youth-event-1.jpg',
                'images/youth-event-2.jpg',
                'images/youth-event-3.jpg'
            ]
        },
        'men': {
            title: 'Hombres',
            description: 'Un encuentro especial para que los hombres se conecten, crezcan espiritualmente y se apoyen mutuamente.',
            date: 'Primer sábado - 15:00',
            location: 'Salón de conferencias',
            details: 'Este encuentro mensual está diseñado para fortalecer a los hombres en su fe y en sus roles como líderes en la familia y la comunidad. Incluye enseñanza, testimonios y tiempo de comunión.',
            images: [
                'images/men-event-1.jpg',
                'images/men-event-2.jpg',
                'images/men-event-3.jpg'
            ]
        },
        'women': {
            title: 'Mujeres',
            description: 'Un momento para que las mujeres se reúnan, compartan experiencias y crezcan en la fe.',
            date: 'Segundo sábado - 15:00',
            location: 'Salón de conferencias',
            details: 'Nuestro grupo de mujeres ofrece un espacio seguro para compartir, orar y crecer juntas. Cada reunión incluye un tema específico, tiempo de adoración y actividades prácticas.',
            images: [
                'images/women-event-1.jpg',
                'images/women-event-2.jpg',
                'images/women-event-3.jpg'
            ]
        },
        'general': {
            title: 'General',
            description: 'Únase a toda nuestra comunidad de la iglesia para celebraciones y reuniones especiales.',
            date: 'Último domingo - 11:30',
            location: 'Templo principal',
            details: 'Esta celebración mensual reúne a toda nuestra congregación para adorar juntos, escuchar un mensaje inspirador y compartir la comunión. Es un momento especial para fortalecer los lazos comunitarios.',
            images: [
                'images/general-event-1.jpg',
                'images/general-event-2.jpg',
                'images/general-event-3.jpg'
            ]
        }
    };

    // Criar o modal para exibir os detalhes do evento
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="event-modal-content">
            <span class="close-modal">&times;</span>
            <div class="event-modal-body">
                <div class="event-modal-image-container">
                    <div class="event-modal-carousel">
                        <div class="carousel-slides"></div>
                        <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
                        <div class="carousel-dots"></div>
                    </div>
                </div>
                <div class="event-modal-info">
                    <h2 class="event-modal-title"></h2>
                    <p class="event-modal-description"></p>
                    <div class="event-modal-details">
                        <p class="event-modal-date"></p>
                        <p class="event-modal-location"></p>
                    </div>
                    <div class="event-modal-full-details"></div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Adicionar estilos para o modal
    const style = document.createElement('style');
    style.textContent = `
        .event-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            overflow: auto;
        }
        
        .event-modal-content {
            background-color: #fff;
            margin: 5% auto;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 800px;
            position: relative;
            animation: modalFadeIn 0.3s;
        }
        
        @keyframes modalFadeIn {
            from {opacity: 0; transform: translateY(-50px);}
            to {opacity: 1; transform: translateY(0);}
        }
        
        .close-modal {
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            color: #aaa;
        }
        
        .close-modal:hover {
            color: #333;
        }
        
        .event-modal-body {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .event-modal-image-container {
            width: 100%;
            height: 250px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        }
        
        .event-modal-carousel {
            position: relative;
            width: 100%;
            height: 100%;
        }
        
        .carousel-slides {
            display: flex;
            width: 100%;
            height: 100%;
            transition: transform 0.5s ease;
        }
        
        .carousel-slide {
            min-width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-color: #f0f0f0;
        }
        
        .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .carousel-button:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .carousel-button.prev {
            left: 10px;
        }
        
        .carousel-button.next {
            right: 10px;
        }
        
        .carousel-dots {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
        }
        
        .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .carousel-dot.active {
            background-color: white;
        }
        
        .event-modal-info {
            padding: 0 10px;
        }
        
        .event-modal-title {
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--primary-color);
        }
        
        .event-modal-description {
            font-size: 16px;
            margin-bottom: 15px;
            color: #555;
        }
        
        .event-modal-details {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .event-modal-date, .event-modal-location {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            color: #666;
        }
        
        .event-modal-full-details {
            font-size: 15px;
            line-height: 1.6;
            color: #444;
        }
        
        @media (min-width: 768px) {
            .event-modal-body {
                flex-direction: row;
            }
            
            .event-modal-image-container {
                width: 40%;
                height: auto;
                min-height: 300px;
            }
            
            .event-modal-info {
                width: 60%;
            }
        }
    `;
    document.head.appendChild(style);

    // Adicionar eventos de clique aos botões de detalhes
    const detailButtons = document.querySelectorAll('.event-card .btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Identificar qual evento foi clicado
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('h3').textContent;
            let eventKey = '';
            
            // Determinar a chave do evento com base no título
            if (eventTitle.includes('Jóvenes')) {
                eventKey = 'youth';
            } else if (eventTitle.includes('Hombres')) {
                eventKey = 'men';
            } else if (eventTitle.includes('Mujeres')) {
                eventKey = 'women';
            } else if (eventTitle.includes('General')) {
                eventKey = 'general';
            }
            
            // Preencher o modal com os dados do evento
            if (eventKey && eventsData[eventKey]) {
                const eventData = eventsData[eventKey];
                
                // Configurar o carrossel de imagens
                const carouselSlides = modal.querySelector('.carousel-slides');
                const carouselDots = modal.querySelector('.carousel-dots');
                
                // Limpar slides e dots anteriores
                carouselSlides.innerHTML = '';
                carouselDots.innerHTML = '';
                
                // Adicionar imagens ao carrossel
                const images = eventData.images || ['images/default-event.jpg'];
                images.forEach((image, index) => {
                    // Criar slide
                    const slide = document.createElement('div');
                    slide.className = 'carousel-slide';
                    slide.style.backgroundImage = `url(${image})`;
                    carouselSlides.appendChild(slide);
                    
                    // Criar dot
                    const dot = document.createElement('div');
                    dot.className = 'carousel-dot';
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToSlide(index));
                    carouselDots.appendChild(dot);
                });
                
                // Configurar navegação do carrossel
                let currentSlide = 0;
                const totalSlides = images.length;
                
                function goToSlide(index) {
                    if (index < 0) index = totalSlides - 1;
                    if (index >= totalSlides) index = 0;
                    
                    currentSlide = index;
                    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
                    
                    // Atualizar dots
                    const dots = carouselDots.querySelectorAll('.carousel-dot');
                    dots.forEach((dot, i) => {
                        if (i === currentSlide) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                }
                
                // Adicionar eventos aos botões de navegação
                const prevButton = modal.querySelector('.carousel-button.prev');
                const nextButton = modal.querySelector('.carousel-button.next');
                
                prevButton.addEventListener('click', () => goToSlide(currentSlide - 1));
                nextButton.addEventListener('click', () => goToSlide(currentSlide + 1));
                
                // Iniciar o carrossel
                goToSlide(0);
                
                // Preencher o conteúdo do modal
                modal.querySelector('.event-modal-title').textContent = eventData.title;
                modal.querySelector('.event-modal-description').textContent = eventData.description;
                modal.querySelector('.event-modal-date').innerHTML = `<i class="far fa-calendar"></i> ${eventData.date}`;
                modal.querySelector('.event-modal-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${eventData.location}`;
                modal.querySelector('.event-modal-full-details').textContent = eventData.details;
                
                // Exibir o modal
                modal.style.display = 'block';
                
                // Impedir rolagem do body quando o modal estiver aberto
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar o modal quando clicar no X
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fechar o modal quando clicar fora dele
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 