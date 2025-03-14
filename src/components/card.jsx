// eslint-disable-next-line react/prop-types
const Card = ({title, description, url, link}) => {
    return (
        <li className="flex md:w-[30%] h-[15rem]">
            <a href={link} target="_blank" className="group overflow-hidden w-full flex h-full flex-col bg-purple-200 hover:scale-110 transition duration-500 ease-out drop-shadow-lg rounded-lg justify-end">
                <div className="absolute z-10 text-transparent group-hover:text-white pl-2">
                    <h3 className="mb-1 font-semibold drop-shadow-lg pl-2 group-hover:border-l-4 border-purple-950">{title}</h3>
                    <p className="pb-1 font-light">{description}</p>
                </div>
                <img className="absolute h-full w-full object-cover" src={url} alt="" />
                <div className="absolute inset-0 group-hover:animate-fade-up group-hover:animate-duration-300 transition group-hover:bg-gradient-to-b from-transparent to-neutral-950"></div>
            </a>
        </li>
    )
}

export default Card;
