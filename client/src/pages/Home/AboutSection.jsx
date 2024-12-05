import Container from "../../components/Container"
import Headline from "../../components/Headline"
import Reveal from "../../components/Reveal";
import Section from "../../components/Section"
import Sidebar from "./Sidebar";

const AboutSection = () => {
    return (
        <Section id="about">
            <Headline text={`About me`}/>
            <div className="flex flex-col gap-y-6">
                <Container>
                    <Reveal>
                        <p>First off, welcome to my personal website! My name is <strong className="italic text-brand">Ian</strong> if you haven't catch it yet. I am a full stack developer from Davao City, Philippines.</p>
                    </Reveal>
                    <Reveal>
                        <p>WordPress development has been my stable career since 2010 but I started expanding outside of WordPress due to the lack of opportunities and further mass layoffs in 2024. I decided to explore other tech stacks and commited to further honing my craft in web development.</p>
                    </Reveal>
                    <Reveal>
                        <p>I am actively looking for new positions where I can help build awesome things and contribute my knowledge, and I am always open to new opportunities. If you think you've got an opening for me, feel free to reach out.</p>
                    </Reveal>
                </Container>
                <Sidebar/>
            </div>
        </Section>
    )
}

export default AboutSection