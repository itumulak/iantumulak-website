import Container from "../../components/Container"
import Headline from "../../components/Headline"
import Section from "../../components/Section"
import Sidebar from "./Sidebar";

export default () => {
    return (
        <Section>
            <Headline text={`About me`}/>
            <div className="flex flex-col gap-y-6">
                <Container>
                    <p>First off, welcome! The name is <strong className="font-bold text-brand">Ian</strong> if you haven't catch it yet. I am a full stack developer from Davao City, Philippines.</p>
                    <p>WordPress development has been my stable career since 2010 but as off late, I started moving away into WordPress and started my journey into full stack development.</p>
                    <p>I am actively looking for new positions where I can help build awesome things and contribute my knowledge, and I am always open to new opportunities. If you think you've got an opening for me, feel free to reach out.</p>
                </Container>
                <Sidebar/>
            </div>
        </Section>
    )
}