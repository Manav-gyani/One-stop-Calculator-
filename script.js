function calculate() {
    const angleInput = document.getElementById('angle');
    const functionSelect = document.getElementById('function');
    const output = document.getElementById('output');

    const angle = parseFloat(angleInput.value);
    const func = functionSelect.value;

    if (isNaN(angle)) {
        output.textContent = 'Please enter a valid angle.';
        return;
    }

    const radians = angle * (Math.PI / 180);
    let result;

    switch (func) {
        case 'sin':
            result = Math.sin(radians);
            output.textContent = `Sin(${angle}°) = ${result.toFixed(4)}`;
            break;
        case 'cos':
            result = Math.cos(radians);
            output.textContent = `Cos(${angle}°) = ${result.toFixed(4)}`;
            break;
        case 'tan':
            result = Math.tan(radians);
            output.textContent = `Tan(${angle}°) = ${result.toFixed(4)}`;
            break;
        default:
            output.textContent = 'Please select a function.';
            break;
    }
}