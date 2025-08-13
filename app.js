function criaCartao(categoria, pergunta, resposta) {
  let container = document.getElementById('container')
  let cartao = document.createElement('article')
  cartao.className = 'cartao'

  cartao.innerHTML = `
  <div class="cartao__conteudo">
    <h3>Matemática</h3>
   <div class="cartao__conteudo__pergunta">
   <p>O que é o número Pi?</p>
   </div>
  <div class="cartao__conteudo__resposta">
   <p>O número Pi é um número irracional, obtido pela divisão do comprimento da circunferência pelo seu diâmetro.</p>
   </div>
   </div>
   `
}
