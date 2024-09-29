const requisicao = {
  nome: "Nome do Cliente",
  endereco: "Endereço do Cliente",
  telefone: "Telefone do Cliente",
  codigoCliente: "12345",
  numeroNF: "67890",
  dataVenda: "2024-09-28",
  dataEntrega: "2024-10-05",
  produtos: [
    {
      codigoProduto: "001",
      descricao: "Mesa de Jantar",
      quantidade: 1,
      valor: 500.00,
    },
    {
      codigoProduto: "002",
      descricao: "Cadeira",
      quantidade: 4,
      valor: 100.00,
    }
  ],
  valorTotal: function() {
    return this.produtos.reduce((total, produto) => total + (produto.quantidade * produto.valor), 0);
  }
};
