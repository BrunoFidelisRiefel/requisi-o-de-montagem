function gerarPDF() {
  const doc = new jsPDF();
  doc.text(`Nome: ${requisicao.nome}`, 10, 10);
  doc.text(`Endereço: ${requisicao.endereco}`, 10, 20);
  doc.text(`Telefone: ${requisicao.telefone}`, 10, 30);
  // Adicionar mais campos aqui
  
  let y = 50;
  requisicao.produtos.forEach((produto, index) => {
    doc.text(`Produto ${index + 1}: ${produto.descricao}`, 10, y);
    doc.text(`Quantidade: ${produto.quantidade}`, 10, y + 10);
    doc.text(`Valor: ${produto.valor}`, 10, y + 20);
    y += 30;
  });
  
  doc.text(`Valor Total: R$${requisicao.valorTotal().toFixed(2)}`, 10, y + 10);
  
  // Salvar PDF
  doc.save('requisicao.pdf');
}
