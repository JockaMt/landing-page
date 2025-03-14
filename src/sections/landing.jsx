import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Landing = () => {
    return (
        <section className="md:before:z-0 md:before:translate-y-10 md:before:absolute md:before:w-[30rem] md:before:h-[30rem] md:before:rounded-full md:before:bg-stone-100 md:before:opacity-25 flex flex-col space-y-10 items-center px-10 md:px-20 md:py-[5rem] pt-20 pb-10 md:flex-row-reverse bg-stone-100" style={{'backgroundImage': 'url("https://github.com/jockaplay/landing-page/blob/dev/src/assets/subtle-prism.svg?raw=true")'}}>
            <div className="animate-fade-up animate-delay-300 md:flex md:w-6/12 md:justify-end w-6/12">
                <img className="md:w-8/12 z-10" src="https://i.postimg.cc/vmb3zgsM/jockson.webp" alt="me" />
            </div>
            <div className="animate-fade-up animate-delay-500 flex flex-col space-y-20 md:w-6/12 md:justify-between">
                <div className="flex items-center md:items-start flex-col">
                    <h2 className="font-bold text-5xl bg-gradient-to-r from-purple-900 via-purple-900 via-purple-600 to-purple-900 text-transparent bg-clip-text">Full Stack</h2>
                    <h3 className="pt-2 font-semibold">Web, Mobile e Games</h3>
                    <ul className="flex space-x-5 pt-6">
                        <li><a className="hover:text-purple-800" href="https://github.com/jockaplay?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a className="hover:text-purple-800" href="https://br.linkedin.com/in/jocka-dev?trk=people-guest_people_search-card"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a className="hover:text-purple-800" href="https://www.instagram.com/j.mt1s/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div> 
                    <p className="text-justify font-semibold">Seja bem vindo ao meu portfólio! Meu nome é jockson, tenho 22 anos e trabalho como Desenvolvedor FrontEnd, utilizando tecnologias como HTML, CSS, e JavaScript e como Desenvolvedor BackEnd, utilizando python, node e mais. Nesta página você verá minhas skills e projetos, aproveite.</p>
                </div>
            </div>
        </section>
    )
}

export default Landing;