function mostrarMenu() {
    let opcao;
    
    do {
        opcao = prompt(`Escolha uma opção:
1 - Área do triângulo
2 - Área do retângulo
3 - Área do quadrado
4 - Área do trapézio
5 - Área do círculo
6 - Sair`);

        let area;
        
        switch(opcao) {
            case "1":
                area = calcularAreaTriangulo()
                alert(`A área do triângulo é: ${area}`)
                break
            case "2":
                area = calcularAreaRetangulo();
                alert(`A área do retângulo é: ${area}`);
                break;
            case "3":
                area = calcularAreaQuadrado();
                alert(`A área do quadrado é: ${area}`);
                break;
            case "4":
                area = calcularAreaTrapezio();
                alert(`A área do trapézio é: ${area}`);
                break;
            case "5":
                area = calcularAreaCirculo();
                alert(`A área do círculo é: ${area}`);
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== "6");
}

function calcularAreaTriangulo() {
    let base = parseFloat(prompt("Informe a base do triângulo:"));
    let altura = parseFloat(prompt("Informe a altura do triângulo:"));
    return (base * altura) / 2;
}

function calcularAreaRetangulo() {
    let base = parseFloat(prompt("Informe a base do retângulo:"));
    let altura = parseFloat(prompt("Informe a altura do retângulo:"));
    return base * altura;
}

function calcularAreaQuadrado() {
    let lado = parseFloat(prompt("Informe o lado do quadrado:"));
    return lado * lado;
}

function calcularAreaTrapezio() {
    let baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
    let baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
    let altura = parseFloat(prompt("Informe a altura do trapézio:"));
    return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
    let raio = parseFloat(prompt("Informe o raio do círculo:"));
    let pi = 3.14;
    return pi * raio * raio;
}

mostrarMenu();
