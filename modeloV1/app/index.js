//criando array com os elementos do formulario
const campos = [
    document.getElementById('data'),
    document.getElementById('valor'),
    document.getElementById('quantidade'),
]

//pegando a tabela
var tbody = document.getElementById('tbody')
//ao disparar o evento subit ativar a função que irá adicionar os itens a tabela
document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault();
    var tr = document.createElement('tr')
    
    campos.forEach(function(campo){
        //criando elemento td
        var td = document.createElement('td')
        
        td.textContent = campo.value

        tr.appendChild(td)
    })

    var tdVolume = document.createElement('td')

    tdVolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdVolume)

    console.log(tr);
    tbody.appendChild(tr)

    campos[0].value = ""
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()
})