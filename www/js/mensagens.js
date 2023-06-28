//EVENTO QUANDO CLICAR NO BOTÃO SALVAR
$("#salvar2").on("click", function () {
    //PEGAR VALORES DOS CAMPOS INPUT
    let nome = $('#nome_form2').val();
    let email = $('#email_form2').val();
    let nasc = $('#nascimento_form2').val();

    //VERIFICAR SE NOME ESTÁ VAZIO
    if (nome.length === 0 || nome == "" || nome == null) {
        app.dialog.alert('Por favor, informe um nome!');
        return false;
    }

    //VERIFICAR SE EMAIL ESTÁ VAZIO
    if (email.length === 0 || email == "" || email == null) {
        app.dialog.alert('Por favor, informe um email!');
        return false;
    }

    //VERIFICAR SE DATA DE NASCIMENTO ESTÁ VAZIO
    if (nasc.length === 0 || nasc == "" || nasc == null) {
        app.dialog.alert('Por favor, informe uma data de nascimento!');
        return false;
    }

    //CRIAMOS UM OBJETO COM OS VALORES
    let user = {
        nome: nome,
        email: email,
        data_nascimento: nasc
    }

    //CONVERTEMOS ESTE OBJETO PARA TEXTO
    let user_convertido = JSON.stringify(user);

    //SALVAMOS NO LOCALSTORAGE ESTE TEXTO
    localStorage.setItem("usuario", user_convertido);

    //RETORNO PARA USUARIO
    app.dialog.alert('<b>SALVO COM SUCESSO!</b>')


});

//CLICOU NO BOTÃO SALVAR 3 (CRUD)
//EVENTO QUANDO CLICAR NO BOTÃO SALVAR
$("#salvar3").on("click", function () {
    //PEGAR VALORES DOS CAMPOS INPUT
    let nome = $('#nome_form2').val();
    let email = $('#email_form2').val();
    let nasc = $('#nascimento_form2').val();

    //VERIFICAR SE NOME ESTÁ VAZIO
    if (nome.length === 0 || nome == "" || nome == null) {
        app.dialog.alert('Por favor, informe um nome!');
        return false;
    }

    //VERIFICAR SE EMAIL ESTÁ VAZIO
    if (email.length === 0 || email == "" || email == null) {
        app.dialog.alert('Por favor, informe um email!');
        return false;
    }

    //VERIFICAR SE DATA DE NASCIMENTO ESTÁ VAZIO
    if (nasc.length === 0 || nasc == "" || nasc == null) {
        app.dialog.alert('Por favor, informe uma data de nascimento!');
        return false;
    }

    //CRIAMOS VARIAVEL PARA PEGAR VALOR NO LOCALSTORAGE OU CRIAR UMA MATRIZ VAZIA
    var users = JSON.parse(localStorage.getItem('usuarios')) || [];

    //CRIAMOS UM ID COM NUMERO ALEATORIO DE 0 A 1 MILHAO
    const id = Math.floor(Math.random() * 1000000);

    //CRIAMOS UM OBJETO COM OS VALORES
    let user = {
        id: id,
        nome: nome,
        email: email,
        data_nascimento: nasc
    }

    //ADICIONAMOS NA VARIAVEL O VALOR DO USUARIO
    users.push(user);

    //SALVAMOS NO LOCALSTORAGE O VALOR
    localStorage.setItem('usuarios', JSON.stringify(users));

    //ALERTA DE RETORNO PARA O USUÁRIO
    app.dialog.alert('Usuário Adicionado com sucesso!');

});

//CLICOU EM PUXAR NOME
$("#puxar_nome").on('click', function () {
    //PEGAR VALOR SALVO NO LOCALSTORAGE
    let usuario = localStorage.getItem("usuario");
    //VERIFICAR SE EXISTE UM VALOR SALVO
    if (usuario == "" || usuario == null || usuario.length === 0) {
        app.dialog.alert('Nenhum dado disponível!');
    } else {
        //TEM USUARIO
        //CONVERTER TEXTO EM OBJETO
        let user_convert = JSON.parse(usuario);

        //PEGAR APENAS O NOME
        app.dialog.alert(`O nome é: <b>${user_convert.nome}</b>`)
    }
});

//CLICOU EM PUXAR EMAIL
$("#puxar_email").on('click', function () {
    //PEGAR VALOR SALVO NO LOCALSTORAGE
    let usuario = localStorage.getItem("usuario");
    //VERIFICAR SE EXISTE UM VALOR SALVO
    if (usuario == "" || usuario == null || usuario.length === 0) {
        app.dialog.alert('Nenhum dado disponível!');
    } else {
        //TEM USUARIO
        //CONVERTER TEXTO EM OBJETO
        let user_convert = JSON.parse(usuario);

        //PEGAR APENAS O NOME
        app.dialog.alert(`O email é: <b>${user_convert.email}</b>`)
    }
});

//CLICOU EM PUXAR EMAIL
$("#puxar_data").on('click', function () {
    //PEGAR VALOR SALVO NO LOCALSTORAGE
    let usuario = localStorage.getItem("usuario");
    //VERIFICAR SE EXISTE UM VALOR SALVO
    if (usuario == "" || usuario == null || usuario.length === 0) {
        app.dialog.alert('Nenhum dado disponível!');
    } else {
        //TEM USUARIO
        //CONVERTER TEXTO EM OBJETO
        let user_convert = JSON.parse(usuario);

        //PEGAR APENAS O NOME
        app.dialog.alert(`A data de nascimento é: <b>${user_convert.data_nascimento}</b>`)
    }
});

//METODO PARA APAGAR TUDO QUE ESTÁ NO LOCALSTORAGE
$("#apagar_tudo").on("click", function () {
    //PERGUNTAR PARA O USUÁRIO SE ELE TEM CERTEZA
    app.dialog.confirm("Tem certeza que quer apagar usuário?", "Confirmação", function () {
        //REMOVER CHAVE USUARIO
        localStorage.clear();
        //RETORNO PARA USUARIO
        app.dialog.alert("Deletado com sucesso!");
    });
});