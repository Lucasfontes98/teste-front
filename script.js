document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertendo para metros
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    document.getElementById('bmi-value').textContent = imc.toFixed(1);

    let categoria;
    let explicacao;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso: IMC inferior a 18,5';
        explicacao = 'Você está abaixo do peso ideal. É importante manter uma alimentação equilibrada e procurar orientação médica para garantir uma saúde adequada.';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso saudável: IMC 18,5 a 24,9';
        explicacao = 'Parabéns! Seu peso está dentro da faixa considerada saudável. Continue mantendo hábitos saudáveis para preservar sua saúde e bem-estar.';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Excesso de peso: IMC 25 a 29,9';
        explicacao = 'Você está na faixa de excesso de peso. Pode ser interessante adotar uma rotina de exercícios e uma dieta balanceada. Consultar um profissional de saúde pode ajudar.';
    } else {
        categoria = 'Obeso: IMC 30 ou superior';
        explicacao = 'Seu IMC está na faixa de obesidade. É recomendável procurar orientação médica para elaborar um plano de cuidados que inclua dieta, atividade física e acompanhamento especializado.';
    }

    document.getElementById('imc-range').textContent = categoria;
    document.getElementById('imc-explanation').textContent = explicacao;
    document.getElementById('bmi-explanation').textContent = explicacao;

});
