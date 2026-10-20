import React from 'react'
import Imagem1 from '../assets/cafe1.jpg'
import Imagem2 from '../assets/cafe2.jpg'
import Imagem3 from '../assets/cafe3.jpg'
import Imagem4 from '../assets/cafe4.jpg'

const Produtos = () => {

  const produtos = [
    { id: 1, titulo: "Espresso Signature", desc: "Blend exclusivo da casa com notas de chocolate amargo e amêndoa. Extraído em 28 segundos no ponto exato.", imagem: Imagem1},
    { id: 2, titulo: "Cappuccino Artesanal", desc: "Espresso duplo com leite vaporizado em microespuma sedosa e uma camada de canela srilankesa.", imagem: Imagem2},
    { id: 3, titulo: "Pour Over Sazonal", desc: "Método manual com grão de origem única, variando conforme a safra. Perfil limpo e floral.", imagem: Imagem3},
    { id: 4, titulo: "Brown Sugar Latte", desc: "Espresso com xarope de açúcar mascavo, leite vaporizado e uma pitada de flor de sal da Guérande.", imagem: Imagem4},
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">NOSSO CARDÁPIO</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {produtos.map((cafe) => (
          <Card
            key={cafe.id}
            titulo={cafe.titulo}
            descricao={cafe.desc}
            imagem={cafe.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Produtos