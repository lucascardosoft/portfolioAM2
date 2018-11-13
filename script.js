function Enviar() { //alert ao enviar o formulário
 
    var nome = document.getElementById("nomeid");
 
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}