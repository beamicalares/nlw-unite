let participantes = [
    {
      nome: 'Ana Beatriz',
      email: 'anabea@gmail.com',
      dataInscricao: new Date(2024, 3, 22, 19, 20),
      checkIn: new Date(2024, 1, 24, 21, 00)
    },
       {
        nome: 'João Silva',
        email: 'joaosilva@gmail.com',
        dataInscricao: new Date(2024, 2, 15, 14, 30),
        checkIn: new Date(2024, 1, 23, 9, 45)
      },
      {
        nome: 'Maria Oliveira',
        email: 'mariaoliveira@gmail.com',
        dataInscricao: new Date(2024, 1, 10, 10, 0),
        checkIn: new Date(2024, 1, 22, 18, 15)
      },
      {
        nome: 'Pedro Santos',
        email: 'pedrosantos@gmail.com',
        dataInscricao: new Date(2024, 0, 5, 8, 45),
        checkIn: null
      },
      {
        nome: 'Juliana Costa',
        email: 'julianacosta@gmail.com',
        dataInscricao: new Date(2024, 2, 28, 16, 10),
        checkIn: new Date(2024, 2, 24, 20, 5)
      },
      {
        nome: 'Lucas Pereira',
        email: 'lucaspereira@gmail.com',
        dataInscricao: new Date(2024, 1, 18, 12, 20),
        checkIn: new Date(2023, 11, 23, 14, 40)
      },
      {
        nome: 'Carolina Lima',
        email: 'carolinalima@gmail.com',
        dataInscricao: new Date(2024, 0, 12, 9, 0),
        checkIn: new Date(2023, 12, 25, 8, 20)
      },
      {
        nome: 'Rafaela Sousa',
        email: 'rafaelasousa@gmail.com',
        dataInscricao: new Date(2024, 2, 5, 17, 30),
        checkIn: new Date(2024, 1, 23, 11, 55)
      },
      {
        nome: 'Diego Martins',
        email: 'diegomartins@gmail.com',
        dataInscricao: new Date(2024, 1, 25, 20, 15),
        checkIn: new Date(2024, 3, 22, 22, 25)
      },
      {
        nome: 'Fernanda Gomes',
        email: 'fernandagomes@gmail.com',
        dataInscricao: new Date(2024, 0, 30, 15, 50),
        checkIn: new Date(2024, 2, 24, 16, 35)
      }
    
    ];
    
    const criarNovoParticipante = (participante) => {
        const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

            let checkIn = dayjs(Date.now()).to(participante.checkIn)
      if(participante.checkIn == null) {
  checkIn = `<button data-email="${participante.email}" onclick="fazerCheckIn(event)" > Confirmar check-in </button>` 
  }

      return `<tr>
        <td> <strong>
          ${participante.nome} </strong>
          <br>
          <small> ${participante.email} </small>
        </td>
        <td> ${dataInscricao} </td>
        <td> ${checkIn} </td>
        </tr>`
    }
    
    const atualizarLista = (participantes) => {
    let output = " "
    for(let partcipante of participantes){
    output = output + criarNovoParticipante(partcipante)
    }
      document.querySelector('tbody').innerHTML = output
      
    }
    
    atualizarLista(participantes) 

    const adicionarParticipante = (event) => {event.preventDefault()
    
    const dadosDoFormulario = new formData(event.target)

    const participante = {
      nome: dadosDoFormulario.get('name'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      checkIn: null
      }

      const participanteExiste = participantes.find((p) =>  return p.email = participante.email
      )

      if (participanteExiste) { alert("Email já cadastrado!")
      return 
      }

     
   participantes = [participante, ...participantes]
   atualizarLista(participantes)

    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
    }

    const fazerCheckIn = (event) => {

      const mensagemConfirmacao = 'Tem certeza que deseja relizar o check-in?'
    
      if(confirm(mensagemConfirmacao) == false) { 
        return
      }

      const participante = participantes.find((p) => { return p.email == event.target.dataset.email })
      
     participante.checkIn = new Date()

     atualizarLista(participantes)
    }