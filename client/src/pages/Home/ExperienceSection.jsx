import Headline from "../../components/Headline"
import Section from "../../components/Section"
import Timeline from "../../components/Timeline"

const ExperienceSection = () => {
    return (
        <Section id="experience">
            <Headline text={`Experience`}/>
            <Timeline/>
        </Section>
    )
}

export default ExperienceSection;