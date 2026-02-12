export function MeuFormulario() {
  return (
    <div className="container">
      <form className="form">

        <h2>Cadastro</h2>

        <div className="campo">
          <label>Nome</label>
          <input type="text" />
        </div>

        <div className="campo">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="campo">
          <label>Idade</label>
          <input type="number" />
        </div>

        <button>Cadastrar</button>

      </form>
    </div>
  );
}











