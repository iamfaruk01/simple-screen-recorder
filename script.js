// ===== Screenshot Carousel =====
let currentSlideIndex = 1;

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('screenshot-container');
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) currentSlideIndex = slides.length;
    if (n < 1) currentSlideIndex = 1;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Show current slide and activate dot
    slides[currentSlideIndex - 1].style.display = 'flex';
    dots[currentSlideIndex - 1].classList.add('active');
}

// Auto-advance carousel every 4 seconds
setInterval(() => {
    currentSlideIndex++;
    const slides = document.getElementsByClassName('screenshot-container');
    if (currentSlideIndex > slides.length) currentSlideIndex = 1;
    showSlide(currentSlideIndex);
}, 4000);

// ===== Support Modal Functions =====
function openSupportModal() {
    const modal = document.getElementById('supportModal');
    
    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeSupportModal() {
    const modal = document.getElementById('supportModal');
    
    // Hide modal with animation
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// ===== Copy UPI ID =====
function copyUPI() {
    const upiId = document.getElementById('upiId').textContent;
    navigator.clipboard.writeText(upiId).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// ===== QR Tooltip Functions =====
function showQRTooltip() {
    // The tooltip is shown via CSS hover, no JavaScript needed
}

function hideQRTooltip() {
    // The tooltip is hidden via CSS hover, no JavaScript needed
}

function closeQRModal() {
    const modal = document.getElementById('qrModal');
    
    // Hide modal with animation
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Close modal when clicking outside the content
document.addEventListener('click', (e) => {
    const qrModal = document.getElementById('qrModal');
    const supportModal = document.getElementById('supportModal');
    
    if (e.target === qrModal) {
        closeQRModal();
    }
    if (e.target === supportModal) {
        closeSupportModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQRModal();
        closeSupportModal();
    }
});

// ===== Parallax for orbs =====
document.addEventListener('mousemove', (e) => {
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
    if (orb2) orb2.style.transform = `translate(${-x}px, ${-y}px)`;
});
