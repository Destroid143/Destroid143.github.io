document.addEventListener('DOMContentLoaded', () => {
    const sliders = [
        { 
            container: document.getElementById('slider1'), 
            range: document.getElementById('sliderRange'), 
            leftBtn: null, 
            rightBtn: null, 
            angle: 0 
        },
        { 
            container: document.getElementById('slider2'), 
            range: document.getElementById('sliderRange2'), 
            leftBtn: null, 
            rightBtn: null, 
            angle: 0 
        }
    ];

    // Función para actualizar la posición del slider
    function updateSlider(sliderObj) {
        sliderObj.container.style.transform = `perspective(1000px) rotateY(${sliderObj.angle}deg)`;
    }

    // Asignar evento a la barra deslizante
    sliders.forEach(sliderObj => {
        sliderObj.range.addEventListener('input', () => {
            sliderObj.angle = sliderObj.range.value * 45; // 45 grados por imagen
            updateSlider(sliderObj);
        });
    });

    // Crear botones de control
    sliders.forEach((sliderObj) => {
        const controlsDiv = document.createElement('div');
        controlsDiv.classList.add('controls');

        const leftButton = document.createElement('button');
        leftButton.innerHTML = '←';
        leftButton.classList.add('slider-btn', 'left');
        leftButton.addEventListener('click', () => {
            sliderObj.angle -= 45;
            if (sliderObj.angle < 0) sliderObj.angle = 315; // Ciclo infinito
            sliderObj.range.value = sliderObj.angle / 45;
            updateSlider(sliderObj);
        });

        const rightButton = document.createElement('button');
        rightButton.innerHTML = '→';
        rightButton.classList.add('slider-btn', 'right');
        rightButton.addEventListener('click', () => {
            sliderObj.angle += 45;
            if (sliderObj.angle > 315) sliderObj.angle = 0; // Ciclo infinito
            sliderObj.range.value = sliderObj.angle / 45;
            updateSlider(sliderObj);
        });

        controlsDiv.appendChild(leftButton);
        controlsDiv.appendChild(rightButton);
        sliderObj.container.parentNode.appendChild(controlsDiv);

        sliderObj.leftBtn = leftButton;
        sliderObj.rightBtn = rightButton;
    });
});
