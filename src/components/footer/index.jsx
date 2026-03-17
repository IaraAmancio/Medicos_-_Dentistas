import Logo from '../../assets/icon_heart.svg'

export function Footer(){
    return(
        <footer className="w-full bg-[#0B0B0B] flex flex-col justify-center items-center text-white">
            <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 mt-8 px-4 gap-4">
                <div className="w-full flex flex-col gap-4, justify-center items-start">
                    <div className='flex gap-2 items-center'>
                        <div className="px-[4px] py-[4px] bg-[#00745A] rounded-md">
                            <img src={Logo} width={24}/>
                        </div>
                        <h1 className="font-bold">Médicos & Dentistas</h1>       
                    </div>
                    <div>
                        <p className="text-sm mt-4">Saúde e cuidado sem barreiras para toda comunidade.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <h1 className="text-base font-bold">Contato</h1>
                    <p className="text-sm">contato@medico-dentista.org</p>
                    <p className="text-sm">(11) 3000-0000</p>
                    <p className="text-sm">São Paulo, Brasil</p>
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <h1 className="text-base font-bold">Redes Sociais</h1>
                    <p className="text-sm">Facebook</p>
                    <p className="text-sm">Instagram</p>
                    <p className="text-sm">LinkedIn</p>
                </div>
            </div>
            <p className="text-[10px] md:text-sm mb-8 mt-6">© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
        </footer>
    )
}