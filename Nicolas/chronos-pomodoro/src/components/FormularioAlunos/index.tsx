import { useState } from "react";
import "./styles.css";
/**
 * Meu primeiro Formulário
 * criado em 05/02
 * referente a aprendizagem
 *
 */
export function FormularioAlunos() {
  //ESTADO PARA ARMAZENAR O NOME DIGITADO NO INPUT
  const [nome, setNome] = useState<string>("");

  //ESTADO PARA ARMAZENAR O email DIGITADO NO INPUT
  const [email, setEmail] = useState<string>("");

  //ESTADO PARA ARMAZENAR A profissão DIGITADO NO INPUT
  const [profissao, setProfissao] = useState<string>("");

  const [sobrenome, setSobrenome] = useState<string>("");

  const [telefone, settelefone] = useState<string>("");

  const [idade, setIdade] = useState<number >(0);

  const [endereco, setendereco] = useState<string>("");

  //ESTADO PARA GUARDAR OS DADOS ENVIADOS NO FORMULÁRIO
  //ELE COMEÇA COMO NULO, POIS NADA FOI ENVIADO AINDA
  const [enviarDados, setEnviarDados] = useState<{
    nome: string;
    sobrenome: string;
    email: string;
    profissão: string;
    telefone: string;
    idade: number;
    endereco: string;
  } | null>(null);

  //função executada quando o formulário é enviado
  function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
    //EVITA O COMPORTAMENTO PADRÃO DO FORMULÁRIO (recarregar a página várias vezes)

    evento.preventDefault();

    //SALVA OS DADOS DIGITADOS NO ESTADO ENVIARDADOS
    setEnviarDados({
      nome: nome,
      sobrenome: sobrenome,
      idade: idade,
      email: email,
      profissão: profissao,
      telefone: telefone,
      endereco: endereco,
    });

    //LIMPA O CAMPO NOME APÓS O ENVIO
    setNome("");
    //LIMPA O CAMPO email APÓS O ENVIO
    setEmail("");

    setProfissao("");

    settelefone("");

    setSobrenome("");

    setendereco("");
  }

  //Retorno do JSX que será exibido na tela
  return (
    <div className="container">
      {/*Título do formulário*/}
      <h2>Cadastro de Alunos</h2>

      {/*Formulário onde recebe também a função enviarFormulario*/}
      <form onSubmit={enviarFormulario}>
        <input
          type="text" //TIPO DO INPUT
          placeholder="Nome" //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={nome} //VALOR CONTROLADO
          onChange={(evento) => setNome(evento.target.value)} //ATUALIZA O ESTADO
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <h5>Idade:</h5>
    
        <input
          type="number"
          placeholder="idade"
          value={idade}
          onChange={(e) => setIdade(Number(e.target.value))}
        />

        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setendereco(e.target.value)}
        />

        <input
          type="text"
          placeholder="Digite sua profissão"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        />
        <input
          type="tel"
          placeholder="(  ) xxxx-xxxx"
          value={telefone}
          onChange={(e) => settelefone(e.target.value)}
        />
        <input
          type="email" //TIPO DO INPUT email
          placeholder="E-mail" //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
          value={email} //VALOR CONTROLADO
          onChange={(evento) => setEmail(evento.target.value)} //ATUALIZA O ESTADO
        />

        <button type="submit">Enviar</button>
      </form>

      {/* Renderização condicional:
          só aparece se submittedData NÃO for null 
          
          nota que uso o enviarDados para aparecer essa lista
          o enviarDados é um objeto qure salva os valores dos dados dos inputs
          */}
      {enviarDados && (
        <div className="result">
          <h3>Dados enviados:</h3>

          {/* Exibe o nome enviado */}
          <p>
            <strong>Nome:</strong> {enviarDados.nome}
          </p>

          <p>
            <strong>Sobrenome:</strong> {enviarDados.sobrenome}
          </p>
          <p>
            <strong>Idade:</strong> {enviarDados.idade}
          </p>
          <p>
            <strong>Endereco:</strong> {enviarDados.endereco}
          </p>
          <p>
            <strong>Profissão:</strong> {enviarDados.profissão}
          </p>

          <p>
            <strong>Telefone:</strong> {enviarDados.telefone}
          </p>
          <p>
            <strong>Email:</strong> {enviarDados.email}
          </p>
        </div>
      )}
    </div>
  );
}
