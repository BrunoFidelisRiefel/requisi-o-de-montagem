function adicionarProduto(codigo, descricao, quantidade, valor) {
  requisicao.produtos.push({
    codigoProduto: codigo,
    descricao: descricao,
    quantidade: quantidade,
    valor: valor,
  });
}
