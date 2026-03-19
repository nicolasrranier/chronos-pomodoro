import { useState } from "react";
import "./styles.css";
import { TrashIcon } from "lucide-react";

type Produto = {
  insumo: string;
  preco: number;
};

export function MercadoDois() {
  // Estados dos inputs
  const [insumo, setInsumo] = useState<string>("");
  const [preco, setPreco] = useState<string>("");

  const [produtos, setProdutos] = useState<Produto[]>([]);

  function adicionarProduto(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (!insumo || !preco) return;

    const novoProduto: Produto = {
      insumo: insumo,
      preco: Number(preco),
    };

    setProdutos([...produtos, novoProduto]);

    // limpa os inputs
    setInsumo("");
    setPreco("");
  }

  const total = produtos.reduce((soma, produto) => soma + produto.preco, 0);
  return (
    <div className="container">
      <h2>Mercado 🛒🍶 </h2>

      <form onSubmit={adicionarProduto}>
        <input
          type="text"
          placeholder="Nome do insumo"
          value={insumo}
          onChange={(e) => setInsumo(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">
          <TrashIcon />
        </button>
      </form>

      <div className="lista">
        <h3>Insumos Listados</h3>

        {produtos.map((produto, index) => (
          <div key={index} className="item">
            <span>{produto.insumo}</span>
            <span>R$ {produto.preco.toFixed(2)}</span>
          </div>
        ))}
        {produtos.length > 0 && (
          <div className="total">Total: R$ {total.toFixed(2)}</div>
        )}
      </div>
    </div>
  );
}
