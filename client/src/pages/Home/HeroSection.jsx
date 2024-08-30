import Section from "../../components/Section"

export default () => {
    return (
        <Section>
            <div className="z-10 relative w-fit flex flex-col gap-y-6">
                <h1 className="text-8xl font-black color-base">Hi, I'm Ian<span className="text-brand">.</span></h1>
                <h2 className="text-4xl">I build <span className="text-brand font-bold">awesome things</span></h2>
                <p className="font-extralight">I have been into web development since 2010. Started off my career as a WordPress developer, I transition into full stack development in the pursuit of building enterprise MERN stack applications.</p>
            </div>
        </Section>
    )
}