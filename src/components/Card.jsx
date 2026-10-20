
const card = ({titulo,desc,imagem}) => {
  return (
    <div className="bg-[#F9E0BB] rounded-2xl overflow-hidden transition-all duration-300 hover:-trasnlate-y-2 hover: border-4 hover:border-[#C38154]">
        <img src={imagem} alt={titulo} className="w-full h-65 object-cover"/>

        <article className="p-4 text-left">
            <h2 className="text-2xl text-[#884A39] mb-3 font-bold"> {titulo} </h2>
            <p className="text-[#c2ab97] text-xl font-normal mb-4"> {desc} </p>
        </article>

    </div>
  )
}

export default card
