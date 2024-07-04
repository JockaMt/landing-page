const MenuButton = () => {
    let a = []
    const switcher = (select) => {
        if (select == true){
            a.forEach(e => {
                e.classList.remove('hidden');
            })
        } else if (select == false) {
            a.forEach(e=>{
                e.classList.add('hidden');
            })
        }
    }

    return (
        <div className="md:hidden fixed bottom-0 right-0 m-5 z-20">
            <button onFocus={() =>{
                a = document.querySelectorAll('#btn1, #btn2, #btn3, #btn4');
                switcher(true);
                }}
                 className="group bg-white h-16 w-16 flex justify-center items-center rounded-full drop-shadow-md scale-75 focus:bg-purple-200">
                <ion-icon size="large" name="grid"></ion-icon>
                <a id="btn1" href="#" onClick={() => switcher(false)} className="secBtn animate-jump-in animate-once animate-delay-[000ms] hidden fixed top-[-16rem] right-0 bg-white rounded-lg px-8 py-2 text-2xl hover:bg-gray-400">Início</a>
                <a id="btn2" href="#sobre" onClick={() => switcher(false)} className="animate-jump-in animate-once animate-delay-[100ms] hidden fixed top-[-12rem] right-0 bg-white rounded-lg px-8 py-2 text-2xl hover:bg-gray-400">Sobre</a>
                <a id="btn3" href="#projetos" onClick={() => switcher(false)} className="animate-jump-in animate-once animate-delay-[200ms] hidden fixed top-[-8rem] right-0 bg-white rounded-lg px-8 py-2 text-2xl hover:bg-gray-400">Projetos</a>
                <a id="btn4" href="https://wa.me/5582991245437?text=Olá,%20venho%20diretamente%20de%20seu%20site,%20tenho%20interesse%20em%20contratar%20seus%20serviços!" onClick={() => switcher(false)} target="_blank" className="animate-jump-in animate-once animate-delay-[300ms] hidden fixed top-[-4rem] right-0 bg-white rounded-lg px-8 py-2 text-2xl hover:bg-gray-400">Contato</a>
            </button>
        </div>
    )
}
export default MenuButton