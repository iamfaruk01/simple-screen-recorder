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

// ===== Parallax for orbs =====
document.addEventListener('mousemove', (e) => {
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
    if (orb2) orb2.style.transform = `translate(${-x}px, ${-y}px)`;
});
