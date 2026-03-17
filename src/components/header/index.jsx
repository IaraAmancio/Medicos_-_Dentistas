import { Link } from "react-router-dom";
import Logo from "../../assets/icon_heart.svg";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useState } from "react";
import {Dialog, DialogPanel} from "@headlessui/react";

export function Header(){

    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    return(
        <header className="w-full h-20 px-2 bg-white border-b border-gray-500 flex justify-center">
            <nav className="max-w-full w-11/12 flex justify-between items-center">
                <Link to={"/"} className="flex items-center gap-2">
                    <div className="px-[4px] py-[4px] bg-[#00745A] rounded-md">
                        <img src={Logo}/>
                    </div>
                    <h1 className="font-bold text-lg">Médicos & Dentistas</h1>
                </Link>
                <div className="md:flex hidden items-center gap-4">
                    <Link to={"/"} className="font-medium text-xl">Home</Link>
                    <Link to={"/cadastros"}>
                        <button className="bg-[#00745A] text-[22px] text-white px-5 py-2 rounded-lg">Seja Voluntário</button>
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <button onClick={()=>setMobileMenuOpen(true)}>
                    <div className="flex md:hidden">
                        <Bars3Icon className="size-7"/>
                        </div>  
                    </button>                    
                </div>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="flex md:hidden">
                    <div className="fixed inset-0 z-50">
                        <DialogPanel className="fixed z-50 flex flex-col gap-8 w-full bg-black/90 text-white overflow-y-auto p-6 ring-1">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex justify-end"
                                >
                                <XMarkIcon aria-hidden="true" className="size-8" />
                            </button>
                            <div className="flex flex-col items-start justify-center text-3xl gap-6 mb-8">
                                <Link to="/" className="font-medium">Home</Link>
                                <Link to="/cadastros" className="font-medium">Seja voluntário</Link>                                
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog >

               
            </nav>
        </header>
    )
}