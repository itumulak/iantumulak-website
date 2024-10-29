
import Image from "../../assets/me.jpg";
import Avatar from "../../components/Avatar";
import Reveal from "../../components/Reveal"
import Section from "../../components/Section"

export default () => {
    return (
        <Section>
            <div className="z-10 relative w-fit flex flex-col gap-y-6">
                <Avatar src={Image} name="Ian Tumulak" />
                <Reveal width="100%">
                    <h1 className="mx-auto lg:mx-0 text-6xl lg:text-8xl font-black color-base w-fit">Hi, I'm Ian<span className="text-brand">.</span></h1>
                </Reveal>
                <Reveal width="100%">
                    <h2 className="mx-auto lg:mx-0 w-max text-3xl lg:text-4xl">I build <span className="text-brand font-bold">awesome things</span>.</h2>
                </Reveal> 
                <Reveal width="100%">
                    <p className="font-extralight">I have been into web development since 2010. Started off my career as a WordPress developer, I transition into full stack development in the pursuit of building enterprise MERN stack applications.</p>
                </Reveal>
            </div>
        </Section>
    )
}