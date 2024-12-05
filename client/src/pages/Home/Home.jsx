import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import ExperienceSection from "./ExperienceSection"
import HeroSection from "./HeroSection"
import ProjectsSection from "./ProjectsSection"

const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <ContactSection email={"ianctumulak@gmail.com"} linkedin={"https://www.linkedin.com/in/itumulak/"} />
        </>
    )
}

export default Home;