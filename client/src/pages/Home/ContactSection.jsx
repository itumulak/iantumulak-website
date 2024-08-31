import { MdOutlineEmail } from "react-icons/md";

import Section from "../../components/Section"
import Reveal from "../../components/Reveal";

export default ({email, linkedin}) => {
    return (
        <Section id="contact">
            <h4 className="text-7xl font-black text-center">Contact<span className="text-brand">.</span></h4>
            <div className="flex flex-col gap-6 items-center">
                <Reveal>
                    <p className="text-center text-lg font-extralight">Send me an email if you want to connect! You can also reach me on my <a href={linkedin} className="text-brand font-bold">Linkedin</a> profile. <br/> I am actively looking for work and seeking full time opportunities.</p>
                </Reveal>
                <Reveal>
                    <a
                        href={`mailto:${email}`} 
                        className="font-bold text-center text-2xl"
                    >
                        <span className="hover:text-brand flex flex-row gap-3 justify-center items-center"><MdOutlineEmail size={40}/> {email}</span>
                    </a>
                </Reveal>
            </div>
        </Section>
    )
}