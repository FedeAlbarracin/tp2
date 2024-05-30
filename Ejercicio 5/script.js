function calcularArea() {
    const areaTriangulo = (ladoB.value * (ladoA.value - ladoC.value)) / 2;
    const areaRectangulo = ladoB.value * ladoC.value;
    alert(`El área del terreno es: ${areaTriangulo + areaRectangulo}`);
}