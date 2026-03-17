import { useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";

function Cadastro(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(e){
        e.preventDefault();

        if(name.length==0 || email.length==0 || tel.length==0){
            alert("Dados incompletos. Preencha-os corretamente!")
            return
        }

        fetch("http://localhost:3000/cadastros",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                tel,
                message
            })
        })
        console.log("dados enviados", name)
        setName("")
        setEmail("")
        setTel("")
        setMessage("")
    }
    return(
        <div className="w-full">

            <Header/>

            <div className='bg-gray-100 py-3 px-4 flex flex-col justify-center items-center'>
                <h1 className="text-[48px] font-bold text-center">Seja Voluntário</h1>
                <p className="text-xl mt-4 text-center">Junte-se a nos e faça a diferença na vida de pessoas que precisam</p>
                
                <div className="w-full max-w-6xl px-4 mt-8 mb-6 gap-6 justify-center flex flex-col md:flex-row">
                     <section className="bg-white px-4 py-3 rounded-[14px] border border-gray-600 text-center flex flex-1 flex-col justify-center items-center">
                       <span className="font-bold text-[28px]">Impacto Direto</span>
                        <p className="text-[18px] w-4/5 mt-2">Sua dedicação salva vidas e transforma comunidades</p>
                    </section >
                     <section className="bg-white px-4 py-3 rounded-[14px] border border-gray-600 text-center flex flex-1 flex-col justify-center items-center">
                       <span className="font-bold text-[28px]">Crescimento Pessoal</span>
                        <p className="text-[18px] w-4/5 mt-2">Desenvolva habilidades e cresça profissionalmente</p>
                    </section>
                     <section className="bg-white px-4 py-3 rounded-[14px] border border-gray-600 text-center flex flex-1 flex-col justify-center items-center">
                       <span className="font-bold text-[28px]">Comunidade</span>
                        <p className="text-[18px] w-4/5 mt-2">Faça parte de uma rede de profissionais comprometidos</p>
                    </section>                                        
                </div>
            </div>

            <div className="w-full bg-[#00745A] flex justify-center items-center px-4">
                <form onSubmit={handleSubmit} className="mt-12 mb-24 w-full max-w-5xl px-4 py-5 bg-white flex flex-col gap-2 rounded-2xl">
                    <h1 className="text-2xl font-bold mt-2 text-center md:text-start">Incrição para Voluntários</h1>
                    <p className="font-bold text-base mt-6">Dados Pessoais</p>
                    <div className="w-full mt-2 flex gap-4 ">
                        <Input
                        placeholder="Seu Nome *"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <Input
                        type="email"
                        placeholder="Seu Email *"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <Input
                        placeholder="Seu Telefone *"
                        value={tel}
                        onChange={(e)=>setTel(e.target.value)}
                    />
                    <p className="font-bold text-base mt-3">Mensagem Adicional</p>
                    <textarea
                        placeholder="Conte nos porque você quer ser voluntário..."
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="h-24 w-full text-sm bg-[#F8F8F8] border border-black rounded-lg px-4 py-2 resize-none focus:outline-none"
                    />  
                    <p className="my-4 text-center text-sm">Entraremos em contato para mais informações</p>
                    <button type="submit" className="bg-[#00745A] text-white w-56 py-3 rounded-lg mx-auto">
                        Enviar Inscrição
                    </button>                  
                </form>
            </div>

            <Footer/>
        </div>
    )
}

export default Cadastro;