document.addEventListener('DOMContentLoaded', () => {
    const ticketOverlay = document.getElementById('ticket-overlay');
    const birthdaySong = document.getElementById('birthday-song');
    const mainContainer = document.querySelector('.container');
    const confettiContainer = document.getElementById('confetti-container');

    // Fungsi untuk membuat konfeti
    function createConfetti() {
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's'; // Delay berbeda agar tidak jatuh bersamaan
            confetti.style.animationDuration = 3 + Math.random() * 4 + 's'; // Durasi jatuh berbeda
            
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Randomize bentuk (kotak atau lingkaran)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            confettiContainer.appendChild(confetti);
        }
    }

    // Event listener untuk tiket pembuka
    ticketOverlay.addEventListener('click', () => {
        // Coba putar musik
        birthdaySong.play();

        // Sembunyikan tiket pembuka
        ticketOverlay.style.opacity = '0';
        setTimeout(() => {
            ticketOverlay.style.display = 'none';
        }, 800);

        // Tampilkan konten utama dan mulai hujan konfeti
        mainContainer.style.display = 'block';
        createConfetti();
    }, { once: true }); // Opsi {once: true} agar event ini hanya berjalan sekali
});