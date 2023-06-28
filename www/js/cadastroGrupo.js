//CRIAMOS VARIAVEL PARA PEGAR VALOR NO LOCALSTORAGE OU CRIAR UMA MATRIZ VAZIA
var grupos = JSON.parse(localStorage.getItem("grupos")) || [];

//FUNÇÃO PARA PEGAR TODOS OS GRUPOS
function getGrupos() {
  return grupos;
}

//BOTÃO DE DELETAR GRUPO
$("#deletar_grupo").click(() => {
  //RECUPERAR OS DADOS
  var id = parseInt($("#grupo_id").html());
  var nome = $("#grupo_nome").html();
  //CONFIRMAÇÃO
  app.dialog.confirm(`Tem certeza que quer deletar o grupo: <b>${nome}</b>?`, function () {
      //EVENTO PARA DELETAR ESTE GRUPO
      //CRIANDO UM INDICE PROCURANDO O ITEM PELO ID NA NOSSA VARIAVEL GRUPOS
      var index = grupos.findIndex(grupo => grupo.id === id);
      //SE ELE ENCONTRAR
      if (index !== -1) {
          //ELMINAR O REGISTRO NO INDICE ENCONTRADO
          grupos.splice(index, 1);

          //SALVAR A ALTERAÇÃO NO LOCALSTORAGE
          localStorage.setItem('grupos', JSON.stringify(grupos));

          //RETORNO PARA O GRUPO
          app.dialog.alert(`Grupo <b>${nome}</b> deletado com sucesso!`, function () {
              AtualizaGrupo();
          })

      } else {
          //NÃO ACHOU O ID MOSTRAR PARA O GRUPO
          app.dialog.alert('Grupo não encontrado');
      }
  });
})

//CLICOU NO BOTÃO SALVAR 3 (CRUD)
//EVENTO QUANDO CLICAR NO BOTÃO SALVAR
$("#salvar_grupo").on("click", function () {
  //PEGAR VALORES DOS CAMPOS INPUT
  let nome = $("#nome_form_grupo").val();
  let local = $("#local_form_grupo").val();
  let cidade = $("#cidade_form_grupo").val();
  let estado = $("#estado_form_grupo").val();
  let horario = $("#horario_form_grupo").val();

  //VERIFICAR SE NOME ESTÁ VAZIO
  if (nome.length === 0 || nome == "" || nome == null) {
    app.dialog.alert("Por favor, informe um nome!");
    return false;
  }

  //VERIFICAR SE local ESTÁ VAZIO
  if (local.length === 0 || local == "" || local == null) {
    app.dialog.alert("Por favor, informe um local!");
    return false;
  }

  //VERIFICAR SE cidade ESTÁ VAZIO
  if (cidade.length === 0 || cidade == "" || cidade == null) {
    app.dialog.alert("Por favor, informe uma cidade!");
    return false;
  }

  //VERIFICAR SE estado ESTÁ VAZIO
  if (estado.length === 0 || estado == "" || estado == null) {
    app.dialog.alert("Por favor, informe um estado!");
    return false;
  }

  //VERIFICAR SE horario ESTÁ VAZIO
  if (horario.length === 0 || horario == "" || horario == null) {
    app.dialog.alert("Por favor, informe um horário!");
    return false;
  }

  //CRIAMOS UM ID COM NUMERO ALEATORIO DE 0 A 1 MILHAO
  const id = Math.floor(Math.random() * 10000000);

  //CRIAMOS UM OBJETO COM OS VALORES
  let grupo = {
    id: id,
    nome: nome,
    local: local,
    cidade: cidade,
    estado: estado,
    horario: horario,
  };

  //ADICIONAMOS NA VARIAVEL O VALOR DO USUARIO
  grupos.push(grupo);

  //SALVAMOS NO LOCALSTORAGE O VALOR
  localStorage.setItem("grupos", JSON.stringify(grupos));

  //ALERTA DE RETORNO PARA O USUÁRIO
  app.dialog.alert("Usuário Adicionado com sucesso!");

  AtualizaGrupo()
});

// FUNÇÃO PARA ATUALIZAR A LISTA SEMPRE QUE HOUVER ALTERAÇÃO
function AtualizaGrupo() {
  //SE TIVER ALGUM POPUP ABERTO FECHAR
  app.popup.close(".popup-sobre");
  app.popup.close(".popup-edit");

  //PEGANDO TODOS OS USUARIOS
  let groups = getGrupos();
  $("#listaGrupos").empty();

  //PERCORRENDO A LISTA E ADICIONANDO O USUARIO NA LISTA
  for (var i = 0; i < groups.length; i++) {
    $("#listaGrupos").append(`
        <li>
        <a 
        data-id="${groups[i].id}"
        data-nome="${groups[i].nome}"
        data-local="${groups[i].local}"
        data-cidade="${groups[i].cidade}"
        data-estado="${groups[i].estado}"
        data-horario="${groups[i].horario}"
        href="#"
         class="GrupoLista popup-open"
         data-popup=".popup-sobre"
         >
         ${groups[i].nome}
         </a>
         </li>
        `);
  }

  //CLICOU NUM ITEM DA LISTA
  $(".GrupoLista").on("click", function () {
    //RECUPERAR OS DADOS
    var id = $(this).attr("data-id");
    var nome = $(this).attr("data-nome");
    var local = $(this).attr("data-local");
    var cidade = $(this).attr("data-cidade");
    var estado = $(this).attr("data-estado");
    var horario = $(this).attr("data-horario");

    console.log(id);

    //ALIMENTAR OS CAMPOS COM OS DADOS NO POPUP-SOBRE
    $("#grupo_id").html(id);
    $("#grupo_nome").html(nome);
    $("#grupo_local").html(local);
    $("#grupo_cidade").html(cidade);
    $("#grupo_estado").html(estado);
    $("#grupo_horario").html(horario);

    //ALIMENTAR OS CAMPOS COM OS DADOS NO POPUP-EDIT
    $("#id_edit").html(id);
    $("#nome_edit").val(nome);
    $("#local_edit").val(local);
    $("#cidade_edit").val(cidade);
    $("#estado_edit").val(estado);
    $("#horario_edit").val(horario);
  });

  $("#salvar_edit").on("click", function () {
    //RECUPERAMOS OS VALORES DOS CAMPOS
    var id = parseInt($("#id_edit").html());
    var nome = $("#nome_edit").val();
    var email = $("#email_edit").val();
    var data_nasc = $("#nascimento_edit").val();

    //VERIFICAR SE NOME ESTÁ VAZIO
    if (nome.length === 0 || nome == "" || nome == null) {
      app.dialog.alert("Por favor, informe um nome!");
      return false;
    }

    //VERIFICAR SE EMAIL ESTÁ VAZIO
    if (email.length === 0 || email == "" || email == null) {
      app.dialog.alert("Por favor, informe um email!");
      return false;
    }

    //VERIFICAR SE DATA DE NASCIMENTO ESTÁ VAZIO
    if (data_nasc.length === 0 || data_nasc == "" || data_nasc == null) {
      app.dialog.alert("Por favor, informe uma data de nascimento!");
      return false;
    }

    //CRIANDO UM INDICE PROCURANDO O ITEM PELO ID NA NOSSA VARIAVEL USERS
    var index = users.findIndex((user) => user.id === id);
    //SE ELE ENCONTRAR
    if (index !== -1) {
      //ATUALIZANDO A LISTA
      users[index] = { ...users[index], nome, email, data_nasc };
      //SALVANDO NO LOCALSTORAGE
      localStorage.setItem("usuarios", JSON.stringify(users));
      //RETORNO TUDO CERTO
      app.dialog.alert("Usuário atualizado com sucesso!", function () {
        //ATUALIZAR A LISTA NOVAMENTE
        AtualizaGrupo();
      });
    } else {
      //NÃO ACHOU O ID MOSTRAR PARA O USUÁRIO
      app.dialog.alert("Usuário não encontrado");
    }
  });
}

AtualizaGrupo();
