// Links de afiliado para diferentes períodos de tratamento
const affiliateLinks = {
    "1mes": "https://ev.braip.com/ref?pl=plalxgye&ck=chejnlrv&af=afie05mm49", // R$197,00
    "3meses": "https://ev.braip.com/ref?pl=plarp9xw&ck=chejnlrv&af=afie05mm49", // R$297,00
    "5meses": "https://ev.braip.com/ref?pl=pla4w6lg&ck=chejnlrv&af=afie05mm49"  // R$397,00
};

// Função para redirecionar para o link de afiliado específico
function redirectToAffiliate(period) {
    const link = affiliateLinks[period];
    if (link) {
        window.open(link, '_blank');
    }
}

// Função para alternar FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    // Fechar todas as outras FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.faq-icon').textContent = '+';
            item.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
    });
    
    // Alternar a FAQ atual
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Animações de scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit, .feature, .ingredient, .pricing-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    // Configurar elementos para animação
    const elements = document.querySelectorAll('.benefit, .feature, .ingredient, .pricing-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação inicial
    animateOnScroll();
    
    // Executar animação no scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de hover nos botões de compra
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contador de urgência (opcional)
function startUrgencyCounter() {
    const hours = 23;
    const minutes = 59;
    const seconds = 59;
    
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    const timer = setInterval(() => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        
        // Atualizar display do contador se existir
        const counterElement = document.getElementById('urgency-counter');
        if (counterElement) {
            counterElement.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        
        totalSeconds--;
        
        if (totalSeconds < 0) {
            clearInterval(timer);
            totalSeconds = hours * 3600 + minutes * 60 + seconds; // Reiniciar
            startUrgencyCounter();
        }
    }, 1000);
}

// Inicializar contador se necessário
// startUrgencyCounter();

