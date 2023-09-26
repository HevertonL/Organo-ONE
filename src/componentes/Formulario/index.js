import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = () => {

    const times = [
      'Programação', 
      'Front-End',
      'Data Science', 
      'Devops',
      'Ux e Design',
      'Mobile',
      'Inovação e Gestão'

    ]

    const submeterFormulario = (event) => {
      event.preventDefault()
      console.log('Form foi submetido')
    }

  return(
    <section className="formulario">
      <form onSubmit={submeterFormulario}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>  
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/> 
        <CampoTexto label="Imagem" placeholder="Importe sua imagem"/>
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao texto="Criar card"/>
      </form>
    </section>
  )
}