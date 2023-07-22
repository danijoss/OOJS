function Produto(codigo, preco){
    this.codigo = codigo;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number')
        _preco = valor;
    }
}

function Tenis(codigo, modelo, preco){
    this.modelo = modelo;
    
    Produto.call(this, codigo, preco);
}

function Roupa(codigo, marca, preco){
    this.marca = marca;
    
    Produto.call(this, codigo, preco);
}

const tenis1 = new Tenis(123, "Air Jordan 1", 500);
const tenis2 = new Tenis(456, "Suede", 400);

const camisa1 = new Roupa(789, "Camisa Adidas", 150)

console.log(tenis1)
console.log('valor do tenis: '+ tenis1.getPreco())

console.log(tenis2)
console.log(camisa1)