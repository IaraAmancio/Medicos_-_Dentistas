import { useState, useEffect } from 'react'
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import IconDoctor from '../../assets/icon_doctor.svg';
import ImgDoctor from '../../assets/img_doctor.png';
import { Link } from 'react-router-dom';

function Home() {

  const [cadastros, setCadastros] = useState([]);

  return (
    <div className='w-full'>

      <Header/>

      <main className='w-full flex flex-col items-center'>

        <div className='w-11/12 max-w-full flex mt-6 flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-1 flex-col items-center md:items-start gap-6 text-center md:text-start'>
              <div className='flex gap-3 bg-[#E5E5E5] px-3 py-2 rounded-full'>
                <img src={IconDoctor} width={25}/>
                <p className='text-xl font-medium'>Saúde para todos</p>
              </div>
              <h1 className='w-full max-w-lg text-[46px] md:text-6xl text-center md:text-start leading-none font-bold'>Saúde e cuidado sem barreiras</h1>
              <p className='w-full max-w-lg md:mt-2 text-lg md:text-2xl'>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
              <div className='w-full max-w-lg md:mt-8 flex flex-col md:flex-row gap-4'>
                  <Link to={"/cadastros"}>
                      <button className="bg-[#00745A] text-white text-[22px] w-full font-medium px-6 py-3 rounded-lg">Seja Voluntário</button>
                  </Link>
                  <Link to={"/cadastros"}>
                      <button className="bg-white font-medium text-[22px] text-[#00745A] w-full px-6 py-3 rounded-lg border border-[#00745A]">Como Ajudar</button>
                  </Link>
              </div>
            </div>
            <div className='hidden md:flex flex-1 justify-end px-2'>
              <img src={ImgDoctor} width={500} />
            </div>
        </div>

        <div className='w-full bg-[#00745a] mt-16 flex flex-col items-center'>
          <div className='w-11/12 max-w-full my-12  text-white'>
            <h1 className='text-[46px] md:text-6xl font-bold text-center md:text-start'>Nossa Missão</h1>
            <p className='mt-4 text-[21px] font-normal text-center md:text-start'>Transformar vidas através do acesso universal a saúde de qualidade</p>
            <div className='mt-8 grid md:grid-cols-3 grid-cols-1 gap-8'>
              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[30px] font-bold'>Acesso Equitativo</h1>
                  <p className='text-[18px]'>
                    Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.
                  </p>                  
                </div>
              </section>

              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[30px] font-bold'>Comunidade Forte</h1>
                  <p className='text-[18px]'>
                    Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.                  </p>                  
                </div>
              </section>

              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[30px] font-bold'>Bem-estar Total</h1>
                  <p className='text-[18px]'>
                    Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.                  </p>                  
                </div>
              </section>

            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className='w-11/12 max-w-full my-12'>
            <h1 className='text-[46px] md:text-6xl font-bold text-center md:text-start'>Nosso impacto</h1>
            <p className='mt-4 text-[21px] font-normal text-center md:text-start'>Transformar vidas através do acesso universal a saúde de qualidade</p>
            <div className='mt-8 grid md:grid-cols-4 grid-cols-1 gap-8'>
              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[46px] font-bold text-[#00745A]'>2,500+</h1>
                  <p className='text-[18px]'>
                    Pessoas atendidas
                  </p>                  
                </div>
              </section>

              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[46px] font-bold text-[#00745A]'>150+</h1>
                  <p className='text-[18px]'>
                    Profissionais Voluntários
                  </p>                  
                </div>
              </section>

              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[46px] font-bold text-[#00745A]'>98%</h1>
                  <p className='text-[18px]'>
                    Satisfação dos Pacientes
                  </p>                  
                </div>
              </section>

              <section className='w-full py-6 px-2 flex justify-center text-center border rounded-[14px] '>
                <div className='w-[78%]'>
                  <h1 className=' text-[46px] font-bold text-[#00745A]'>5+</h1>
                  <p className='text-[18px]'>
                    Anos de Dedicação
                  </p>                  
                </div>
              </section>

            </div>
          </div>
        </div>


      </main>
      <Footer/>
      
    </div>
  )
}

export default Home
