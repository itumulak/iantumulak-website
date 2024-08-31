import { MdOutlineEmail } from "react-icons/md";

import Section from "../../components/Section"

export default ({email, linkedin}) => {
    return (
        <Section>
            <h4 className="text-7xl font-black text-center">Contact<span className="text-brand">.</span></h4>
            <p className="text-center text-lg font-extralight">Send me an email if you want to connect! You can also reach me on my <a href={linkedin} className="text-brand font-bold">Linkedin</a> profile.</p>
            <a
                href={`mailto:${email}`} 
                className="font-bold text-center text-2xl"
            >
                <span className="hover:text-brand flex flex-row gap-3 justify-center items-center"><MdOutlineEmail size={40}/> {email}</span>
            </a>
        </Section>
    )
}