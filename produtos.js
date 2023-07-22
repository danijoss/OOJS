function Produto(codigo, modelo, preco){
    this.codigo = codigo;
    this.modelo = modelo;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number')
        _preco = valor;
    }
}

function Tenis(codigo, modelo, preco, numeracao){
    this.numeracao = numeracao;
    
    Produto.call(this, codigo, modelo, preco);
}

function Roupa(codigo, modelo, preco, tamanho){
    this.tamanho = tamanho;
    
    Produto.call(this, codigo, modelo, preco);
}

const tenis1 = new Tenis(123, "Air Jordan 1", 500, "34-45");
const tenis2 = new Tenis(456, "Suede", 400, "33-44");

const camisa1 = new Roupa(789, "Camisa Adidas", 150, "pp-p-m-g-gg")

console.log(tenis1)
console.log('valor do tenis: '+ tenis1.getPreco())

tenis1.setPreco(600)

console.log('novo valor do tenis: '+ tenis1.getPreco())

console.log(tenis2)
console.log(camisa1)