//Selección de los elementos de interés
const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');
const strengthLabel = document.getElementById('strength-label');
const strengthBars = document.getElementById('strength-bars');
const bars = strengthBars.querySelectorAll('.bar'); 

// Modifica el número de caracteres de la contraseña según la posición del control deslizante
const handleChange = () => {
    lenghtCounter.textContent = inputRange.value;
};

// Genera una contraseña aleatoria en función de la longitud y las opciones seleccionadas
const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    // Obtener las opciones que están seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    // Creamos un conjunto de caracteres a usar en la contraseña
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSymbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Si no se selecciona ninguna opción
    if (characters === '') {
        passwordHeading.textContent = 'Selecciona al menos una opción :D';
        strengthLabel.textContent = '';  // Limpia la calificación de seguridad
        resetStrengthBars();  // Limpia el relleno de las barras
        return '';
    }

    // Generador de contraseña aleatoria
    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

// Califica la seguridad de la contraseña generada
const evaluatePasswordStrength = (password) => {
    const lengthCriteria = password.length >= 12;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;

    // Incrementa la fuerza en base a los criterios cumplidos
    if (lengthCriteria) strength++;
    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumbers) strength++;
    if (hasSymbols) strength++;

    // Devuelve la calificación de seguridad y el número de barras llenas
    if (strength <= 2) {
        return { rating: 'Débil', bars: 1 };
    } else if (strength === 3 || strength === 4) {
        return { rating: 'Media', bars: 2 };
    } else {
        return { rating: 'Fuerte', bars: 3 };
    }
};

// Imprime la contraseña generada, su calificación de seguridad y actualiza las barras
const printPassword = (event) => {
    event.preventDefault();  // Evita que el formulario se envíe
    const password = generatePassword(inputRange.value);
    if (password) {
        passwordHeading.textContent = password;  // Muestra la contraseña generada
        const { rating, bars } = evaluatePasswordStrength(password);
        strengthLabel.textContent = `${rating}`;  // Muestra la calificación de seguridad
        updateStrengthBars(bars);  // Actualiza las barras de seguridad
    }
};

// Actualiza las barras según la seguridad
const updateStrengthBars = (filledBars) => {
    // Resetea las clases de las barras
    bars.forEach(bar => bar.classList.remove('weak', 'medium', 'strong'));

    // Llena las barras dependiendo del valor de 'filledBars'
    for (let i = 0; i < filledBars; i++) {
        bars[i].classList.add('strong');
    }

    // Las barras restantes se etiquetan como débiles
    for (let i = filledBars; i < bars.length; i++) {
        bars[i].classList.add('weak');
    }
};

// Limpia las barras de seguridad
const resetStrengthBars = () => {
    bars.forEach(bar => bar.classList.remove('weak', 'medium', 'strong'));
};

// Configuración de los eventos
inputRange.addEventListener('input', handleChange);  // Actualiza la longitud de la contraseña en tiempo real
generateBtn.addEventListener('click', printPassword);  // Genera la contraseña y la muestra al hacer clic