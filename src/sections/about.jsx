const About = () => {
    return (
        <section id="sobre">
            <div className="bg-purple-950 text-white px-10 md:px-20 space-y-20 pt-10">
                <div className="flex flex-col needed">
                    <h2 className="text-center text-3xl font-semibold border-b-2 pb-10">5 motivos para ter um site!</h2>
                    <ul className="flex flex-col list-disc pt-10 md:px-20 md:py-10 xl:grid grid-cols-2 gap-10">
                        <li className="flex flex-row gap-5">
                            <img className="flex h-8" src="https://i.postimg.cc/nLNV6cYH/icons8-conta-verificada-96.webp"/><p><strong>Presença Online e Visibilidade:</strong> Um site serve como a &quot;vitrine&quot; online, permitindo que pessoas de todo o mundo descubram você, sua empresa ou sua organização. É essencial para estabelecer uma presença digital e aumentar a visibilidade.</p>
                        </li>
                        <li className="flex flex-row gap-5">
                            <img className="flex h-8" src="https://i.postimg.cc/nLNV6cYH/icons8-conta-verificada-96.webp"/><p><strong>Credibilidade e Profissionalismo:</strong> Ter um site bem projetado e informativo ajuda a construir credibilidade e profissionalismo. As pessoas tendem a confiar mais em empresas e profissionais que têm um site do que naqueles que não têm.</p>
                        </li>
                        <li className="flex flex-row gap-5">
                            <img className="flex h-8" src="https://i.postimg.cc/nLNV6cYH/icons8-conta-verificada-96.webp"/><p><strong>Marketing e Publicidade:</strong> Um site é uma ferramenta crucial para estratégias de marketing digital, incluindo SEO (otimização para mecanismos de busca), marketing de conteúdo e campanhas de mídia paga. Ele permite alcançar um público mais amplo e específico.</p>
                        </li>
                        <li className="flex flex-row gap-5">
                            <img className="flex h-8" src="https://i.postimg.cc/nLNV6cYH/icons8-conta-verificada-96.webp"/><p><strong>Expansão de Negócios:</strong> Um site pode ajudar na expansão dos negócios, alcançando novos mercados e clientes em diferentes regiões geográficas que, de outra forma, seriam inacessíveis.</p>
                        </li>
                        <li className="flex flex-row col-span-2 gap-5">
                            <img className="flex h-8" src="https://i.postimg.cc/nLNV6cYH/icons8-conta-verificada-96.webp"/><p><strong>Informação e Comunicação:</strong> Um site permite compartilhar informações detalhadas sobre produtos, serviços, eventos e outras atualizações importantes. Também facilita a comunicação com clientes, parceiros e o público em geral através de formulários de contato, blogs, newsletters e chats ao vivo.</p>
                        </li>
                    </ul>
                    <div className="flex w-full justify-center pt-20 xl:pt-5 gl:pt-10">
                        <a href="mailto:jocksonmatheus@gmail.com" className="transition ease-out duration-170 flex text-center bg-white text-black px-10 py-5 rounded hover:scale-110 hover:text-purple-700">Quero um site para mim!</a>
                    </div>
                </div>
                <h2 className="text-center text-3xl font-semibold border-b-2 pb-10">Sobre</h2>
                <div className="flex space-x-10 justify-between">
                    <p className="md:w-6/12 text-justify">Olá, <span className="font-bold">meu nome é Jocka</span>. Atualmente estudando na Universidade Federal de Alagoas, cursando ciência da computação, procuro oportunidades de adquirir experiência na área de programação e tecnologia.<br/><br/>
                    Sempre fui apaixonado por tecnologia e por volta de 2019 entrei no mundo da programação e achei incrível, desde então tenho me aperfeiçoado e me proficionalizado cada vez mais, já fiz alguns projetos comerciais na empresa que trabalhava e alguns projetos pessoais, mas ainda não entrei em um grande projeto, e espero conseguir por meio deste site, mais visibilidade para talvez encontrar estas oportunidades.</p>
                    <a href="https://jockaplay.itch.io/" target="_blank" className="hidden md:flex flex-col text-center justify-center space-y-5 border-2 rounded-lg border-dashed object-cover w-5/12 px-20">
                        <img className="object-scale-down w-50 h-50" src="https://i.postimg.cc/7L9XQHHz/store.webp" alt=""/>
                        <p>Game store</p>
                    </a>
                </div>
                    <div className="flex justify-center">
                    <ul className="flex flex-wrap justify-center">
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-python"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-html5"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-css3"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-javascript"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-react"></ion-icon>
                        </li>
                        <li className="text-4xl px-5 transition duration-500 ease-out hover:scale-125">
                            <ion-icon name="logo-docker"></ion-icon>
                        </li>
                    </ul>
                </div>
            </div>
            <img className="w-full" src="https://i.postimg.cc/QdqQqvDN/wave-2.png"/>
        </section>
    )
}

export default About;