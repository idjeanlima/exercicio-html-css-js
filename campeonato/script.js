var nomeParticipante = [], idadeParticipante = [], controleCadastro = 0;
var nomeCampeonato = "", qtdPessoas = 0, controleEnvio = 0, randomico;
nomeParticipante[0] = "";

function enviarCampeonato() {
    nomeCampeonato = document.getElementById('nomeCampeonato').value;
    qtdPessoas = Number(document.getElementById('qtdPessoas').value);
    document.getElementById('nomeCampeonato').value = '';
    if (nomeCampeonato == "") {
        alert("Preencha o nome do campeonato!");
        return false;
    } else {
        document.getElementById('tituloCampeonato').remove();
        document.getElementById('nomeCampeonato').remove();
        document.getElementById('qtdPessoas').remove();
        document.getElementById('labelPessoas').remove();
        document.getElementById('botaoCampeonato').remove();
        document.getElementById('cadastroCampeonato').innerText = 'Continue com o cadastro do seu campeonato.';
    }
}
function enviarParticipante() {
    if (nomeCampeonato != "") {
        nomeParticipante[controleCadastro] = document.getElementById('nomeParticipante').value;
        idadeParticipante[controleCadastro] = document.getElementById('idadeParticipante').value;
        document.getElementById('nomeParticipante').value = "";
        document.getElementById('idadeParticipante').value = "";
        if (nomeParticipante[controleCadastro] != "") {
            document.getElementById('botaoParticipante').value = `Participante ${controleCadastro + 2}`;
            controleCadastro++
        } else {
            alert("Preencha nome e idade do participante!");
            return false;
        }
    } else {
        alert("Preencha o nome do campeonato!");
        return false;
    }
    if (controleCadastro >= qtdPessoas) {
        document.getElementById('tituloParticipante').remove();
        document.getElementById('botaoParticipante').remove();
        document.getElementById('nomeParticipante').remove();
        document.getElementById('idadeParticipante').remove();
        document.getElementById('cadastroParticipante').innerText = 'Todos os participantes foram cadastrados com sucesso!';
    }
}

/*criando uma formação aleatoria
randomico = Math.floor(Math.random() * (qtdPessoas + 1));
document.getElementById('id').innerText += nomeParticipante[randomico];
criando uma formação aleatoria*/