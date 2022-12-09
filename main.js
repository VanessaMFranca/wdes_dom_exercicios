/**
 * Use esse arquivo para resolver os exercícios
 */

const formulario = document.querySelector('form')
formulario.addEventListener('submit', validate)

function validate(evento) {
    evento.preventDefault()

    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    const span_email = document.querySelector('#email-error')
    const span_senha = document.querySelector('#senha-error')

    console.log(email.value, senha.value)

    span_email.classList.remove('visivel')

    //Validar email
    if (email.value === '') {
        span_email.classList.add('visivel')
    }

    span_senha.classList.remove('visivel')

    //Validar senha
    if (senha.value === '') {
        span_senha.classList.add('visivel')
    }

    //Login efetuado
    if (email.value != '' && senha.value!= '') {
        const mensagem = document.querySelector('p.mensagem')
        mensagem.innerHTML = 'Login efetuado com sucesso!'

        const botao = document.querySelector('button[type="submit"]')
        if (email.value == 'teste@gmail.com' && senha.value == '123456') {
            botao.style.backgroundColor = 'rgb(0,255,0)'
        } else {
            botao.style.backgroundColor = 'rgb(255,0,0)'
            mensagem.innerHTML = ""
        }
    }

    //Adicionar o email na lista
    lista.innerHTML += '<li>' + email.value + '</li>'
}

const limpar = document.querySelector('a[name="limpar"]')