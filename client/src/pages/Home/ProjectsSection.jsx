import { styled } from "styled-components";
import Card from "../../components/Card"
import Headline from "../../components/Headline"
import Section from "../../components/Section"
import { projects } from "../../constants"

const Projects = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
        grid-template-columns: 50% 50%;

        & > div {
            &:nth-child(odd) {
                grid-column: 1;
            }

            &:nth-child(even) {
                grid-column: 2;
            }
        }
    }
`

const ProjectsSection = () => {
    return (
        <Section id="projects">
            <Headline text={`Passion Projects`} isRight={true} />
            <Projects>
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </Projects>
        </Section>
    )
}

export default ProjectsSection;