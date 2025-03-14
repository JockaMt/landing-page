const Header = () => {
    return (
        <header className="fixed w-full overflow-hidden bg-white flex h-16 justify-center md:justify-between font-bold z-10 drop-shadow-sm">
            <ul className="hidden md:flex">
                <li><a className="transition ease-out duration-170 flex px-10 items-center h-full hover:scale-125 hover:text-purple-700" href="#">Início</a></li>
                <li><a className="transition ease-out duration-170 flex px-10 items-center h-full hover:scale-125 hover:text-purple-700" href="#sobre">Sobre</a></li>
            </ul>
            <a href="#"><h1 className="animate-fade-down animate-once flex px-10 bg-gradient-to-r from-purple-700 via-purple-800 to-violet-900 text-transparent bg-clip-text items-center h-full font-black text-3xl">JOCKA<span className="pl-1 pb-1 animate-blinking text-stone-800 text-2xl">▌</span></h1></a>
            <ul className="hidden md:flex">
                <li><a className="transition ease-out duration-170 flex px-10 items-center h-full hover:scale-125 hover:text-purple-700" href="#projetos">Projetos</a></li>
                <li><a className="transition ease-out duration-170 flex px-10 items-center h-full hover:scale-125 hover:text-purple-700" href="https://wa.me/5582991245437?text=Olá,%20venho%20diretamente%20de%20seu%20site,%20tenho%20interesse%20em%20contratar%20seus%20serviços!" target="_blank">Contato</a></li>
            </ul>
        </header>
    )
}

export default Header;
