import Headline from "../../components/Headline"
import Section from "../../components/Section"
import Timeline from "../../components/Timeline"

export default () => {
    return (
        <Section id="experience">
            <Headline text={`Experience`}/>
            <Timeline/>
        </Section>
    )
}