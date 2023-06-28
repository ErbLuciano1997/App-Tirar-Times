//CHAVE (nome que você batiza) -> VALOR (texto)
//EVENTOS PARA MANIPULAR O LOCALSTORAGE

//METODO PARA SALVAR UM VALOR
// localStorage.setItem("nome","Dimitri");

//METODO PARA PEGAR UM VALOR
// var nome = localStorage.getItem("nome");

//METODO PARA DELETAR UM VALOR
// localStorage.removeItem("nome");

//METODO PARA LIMPAR O LOCALSTORAGE
// localStorage.clear();

//QUANDO CLICAR EM SALVAR
$("#salvar1").on("click", function () {
    //pegar o valor que vem do campo input
    let nome = $("#nome_form1").val();

    //SE O CAMPO NOME ESTÁ VAZIO
    if (nome.length == 0 || nome == "" || nome == null) {
        app.dialog.alert('Por favor, digite algum nome!', function () {
            $("#nome_form1").focus();
        });
    } else {
        //SALVAR O NOME NO LOCALSTORAGE
        localStorage.setItem('nome', nome);
        app.dialog.alert('<strong>SALVO COM SUCESSO!</strong>');
    }

});

//QUANDO CLICAR EM PUXAR ÚLTIMO SALVO
$("#puxar1").on("click", function () {
    //recuperar o valor do localstorage
    let nome = localStorage.getItem("nome");

    //VERIFICAR SE TEM ALGUMA COISA VINDA DO LOCALSTORAGE
    if (nome == "" || nome == null || nome.length === 0) {
        app.dialog.alert('Nenhum dado armazenado no LocalStorage');
    } else {
        //SE NÃO TUDO CERTO MOSTRAR O VALOR PARA USUARIO
        app.dialog.alert(`O último salvo foi: <b> ${nome} </b>`);
    }

});