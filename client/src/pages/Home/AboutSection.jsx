import Container from "../../components/Container"
import Headline from "../../components/Headline"
import Reveal from "../../components/Reveal";
import Section from "../../components/Section"
import Sidebar from "./Sidebar";

export default () => {
    return (
        <Section id="about">
            <Headline text={`About me`}/>
            <div className="flex flex-col gap-y-6">
                <Container>
                    <Reveal>
                        <p>I am a full stack developer from <strong>Davao City, Philippines</strong>.</p>
                    </Reveal>
                    <Reveal>
                        <p>I have been actively been in the industry since 2010. Over my entire career, I have worked on a wide range of projects, from small-scale WordPress sites to <strong>large-scale enterprise projects</strong>. While I mainly worked on Wordpress my entire career, I never shy away from learning and adapting to new technologies.</p>
                    </Reveal>
                    <Reveal>
                        <p>I am actively looking for new positions where I can help <strong>build awesome things</strong> and contribute my knowledge, and I am always open to new opportunities. If you think you've got an opening for me, feel free to reach out.</p>
                    </Reveal>
                </Container>
                <Sidebar/>
            </div>
        </Section>
    )
}