export default ({ children, id = "" }) => {
    return (
        <section id={id} className="z-10 relative max-w-6xl m-auto overflow-hidden py-28 px-12 md:p-36 flex flex-col gap-y-8">
            {children}
        </section>
    )
}