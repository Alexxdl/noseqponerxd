document.addEventListener('DOMContentLoaded', function() {
    const sobre = document.getElementById('sobre');
    const carta = document.getElementById('carta');
    const typingTexts = document.querySelectorAll('.typing-text');
    let isAnimating = false;

    function escribirTexto(elemento) {
        const texto = elemento.textContent;
        elemento.textContent = '';
        elemento.classList.add('show');
        
        let indiceCaracter = 0;
        const intervalo = setInterval(() => {
            if (indiceCaracter < texto.length) {
                elemento.textContent += texto[indiceCaracter];
                indiceCaracter++;
            } else {
                clearInterval(intervalo);
            }
        }, 150); 
    }

    function iniciarAnimacionTexto() {
        typingTexts.forEach((elemento, indice) => {
            setTimeout(() => {
                escribirTexto(elemento);
            }, indice * 300 + 500);
        });
    }

    sobre.addEventListener('click', function() {
        if (isAnimating) return;
        isAnimating = true;

        if (!this.classList.contains('open')) {
            this.classList.add('open');
            setTimeout(() => {
                iniciarAnimacionTexto();
                setTimeout(() => {
                    isAnimating = false;
                }, 2000);
            }, 800);
        } else {
            typingTexts.forEach(elemento => {
                elemento.classList.remove('show');
                elemento.textContent = '';
            });
            
            setTimeout(() => {
                this.classList.remove('open');
                setTimeout(() => {
                    isAnimating = false;
                }, 600);
            }, 300);
        }
    });
});
