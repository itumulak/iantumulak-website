import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import ExperienceSection from "./ExperienceSection"
import HeroSection from "./HeroSection"
import ProjectsSection from "./ProjectsSection"

export default () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <ContactSection email={"edden87@gmail.com"} linkedin={"https://www.linkedin.com/in/itumulak/"} />
        </>
    )
}