function comparePrices() {
    // Obter os valores dos preços dos produtos
    var price1 = parseFloat(document.getElementById('price1').innerText);
    var price2 = parseFloat(document.getElementById('price2').innerText);

    // Comparar os preços e exibir o resultado
    var resultElement = document.getElementById('cheaperProduct');
    if (price1 < price2) {
        resultElement.innerText = 'Produto 1 é mais barato!';
    } else if (price1 > price2) {
        resultElement.innerText = 'Produto 2 é mais barato!';
    } else {
        resultElement.innerText = 'Os dois produtos têm o mesmo preço!';
    }
}
