document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animaciones on Scroll)
    AOS.init({
        duration: 1000,
        once: true, // La animación solo ocurre una vez
        offset: 100
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Modal Logic
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.querySelector('.close-modal');

    // Función global para abrir el modal
    window.openModal = function(type, source, title) {
        modal.style.display = "block";
        modalTitle.innerText = title;
        modalBody.innerHTML = ''; // Limpiar contenido previo

        if (type === 'image') {
            const img = document.createElement('img');
            img.src = source;
            img.alt = title;
            modalBody.appendChild(img);
        } else if (type === 'pdf') {
            // Usamos iframe para PDF (funciona mejor en móviles que embed)
            const iframe = document.createElement('iframe');
            iframe.src = source;
            iframe.style.width = "100%";
            iframe.style.height = "500px";
            modalBody.appendChild(iframe);
        } else if (type === 'video') {
            const video = document.createElement('video');
            video.src = source;
            video.controls = true;
            video.style.width = "100%";
            video.style.maxHeight = "500px";
            modalBody.appendChild(video);
        }
    }

    // Función para cerrar modal
    window.closeModal = function() {
        modal.style.display = "none";
        modalBody.innerHTML = ''; // Limpiar para detener videos
    }

    // Cerrar si se hace clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
