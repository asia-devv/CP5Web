import React from 'react'

const Home = () => {
  return (
    <div className='container-home w-100vh h-screen'>
      <div className='text-[#F9E0BB] flex flex-col px-50 py-50 '>
        <h3 className='font-bold text-2xl'>Desde 2015 - São Paulo, SP</h3>
        <h2 className='text-5xl font-bold text-[#C38154]'>Cada xícara conta <br/><span className='text-[#FFC26F]'>uma história</span></h2>
        <p className='text-lg font-normal mt-3 mb-5 '>Grãos selecionados, preparo artesanal e um ambiente feito para você parar, <br/> respirar e saborear o momento.</p>
        <a href="./produtos" className='bg-[#C38154] w-40 h-10 font-bold text-2xl items-center text-center rounded-xl text-white hover:texr[#F9E0BB]'>Ver Cardápio</a>
      </div>

    </div>
  )
}

export default Home
