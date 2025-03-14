import Card from "../components/card"

const Projects = () => {
    return (
        <section id="projetos" className="px-10">
            <h2 className="text-center text-3xl font-semibold border-b-2 pb-10 border-black">Projetos</h2>
            <div className="flex flex-col space-y-5 md:space-y-20 mt-10 pb-10">
                <ul className="flex flex-col flex-wrap space-y-5 md:space-y-0 md:flex-row justify-center md:justify-between">
                    <Card link={'https://eraumavez.vercel.app/'} title={'Era uma vez'} description={'Langing page real comercial'} url={'https://i.postimg.cc/fRx8m71B/project2.webp'}/>
                    <Card link={'https://www.brilliantsoftware.com.br/'} title={'Brilliant Software'} description={'Site para minha empresa'} url={'https://i.postimg.cc/tCcwJg0S/Captura-de-tela-2025-03-14-083752.png'}/>
                    <Card link={'https://responsive-login-screen.vercel.app/'} title={'Tela de login'} description={'Tela de login responsiva'} url={'https://i.postimg.cc/9Fw8FHb3/project3.webp'}/>
                </ul>
                <div className="md:flex justify-center"><a target="_blank" href="https://github.com/jockaplay?tab=repositories" className="flex justify-center md:w-2/12 bg-purple-950 rounded-2xl text-white p-5 md:p-2 md:hover:scale-110 transition md:hover:bg-purple-900">Ver Mais</a></div>
            </div>
        </section>
    )
}

export default Projects;