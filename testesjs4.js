var imagem = document.getElementById('imagem');
imagem.addEventListener('mouseover', function(){
    imagem.style.transform = 'scale(1.2)';
})
imagem.addEventListener('mouseout', function(){
    imagem.style.transform = 'scale(1.0)';
})

var imagem2 = document.getElementById('imagem2');
imagem2.addEventListener('mouseover', function(){
    imagem2.style.transform = 'scale(1.2)';
})
imagem2.addEventListener('mouseout', function(){
    imagem2.style.transform = 'scale(1.0)';
})

var imagem3 = document.getElementById('imagem3');
imagem3.addEventListener('mouseover', function(){
    imagem3.style.transform = 'scale(1.2)';
})
imagem3.addEventListener('mouseout', function(){
    imagem3.style.transform = 'scale(1.0)';
})

var imagem4 = document.getElementById('imagem4');
imagem4.addEventListener('mouseover', function(){
    imagem4.style.transform = 'scale(1.2)';
})
imagem4.addEventListener('mouseout', function(){
    imagem4.style.transform = 'scale(1.0)';
})

var imagem5 = document.getElementById('imagem5');
imagem5.addEventListener('mouseover', function(){
    imagem5.style.transform = 'scale(1.2)';
})
imagem5.addEventListener('mouseout', function(){
    imagem5.style.transform = 'scale(1.0)';
})

var imagem6 = document.getElementById('imagem6');
imagem6.addEventListener('mouseover', function(){
    imagem6.style.transform = 'scale(1.2)';
})
imagem6.addEventListener('mouseout', function(){
    imagem6.style.transform = 'scale(1.0)';
})






var formularionome = document.getElementById("formularionome");
formularionome.addEventListener('click', function(){
    alert("Digite aqui o seu nome completo!");
})
var formularioidade = document.getElementById("formularioidade");
formularioidade.addEventListener('click', function(){
    alert("Digite aqui a sua idade!");
})

var formularioemail = document.getElementById("formularioemail");
formularioemail.addEventListener('click', function(){
    alert("Digite aqui o seu email!");
})

var formulariotelefone = document.getElementById("formulariotelefone");
formulariotelefone.addEventListener('click', function(){
    alert("Digite aqui o seu telefone celular!");
})

var formularioendereco = document.getElementById("formularioendereco");
formularioendereco.addEventListener('click', function(){
    alert("Digite aqui o seu endereço!");
})

var formularioprofissao = document.getElementById("formularioprofissao");
formularioprofissao.addEventListener('click', function(){
    alert("Digite aqui a sua profissão!");
})

var enviado = document.getElementById("enviado");
enviado.addEventListener('click', function(){
    enviado.innerHTML = `
            <button class="text-bg-success">ENVIADO!</button>
    `;
})

var dados = document.getElementById("dados");
dados.addEventListener('click', function(){
    dados.innerHTML = `
             <h2 class="text-bg-light">Dados pessoais:</h2>
             <h7 class="text-bg-warning">Digite aqui suas iformações pessoais</h7> 
    `;
})

var dadose = document.getElementById("dadose");
dadose.addEventListener('click', function(){
    dadose.innerHTML = `
             <h2 class="text-bg-light">Endereços:</h2>
             <h7 class="text-bg-warning">Digite aqui seus principais endereços para contato</h7>
    `;
})








