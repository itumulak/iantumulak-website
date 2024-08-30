export default ({icon, text}) => {
    return (
        <div className="flex flex-row items-center gap-3">
            <span className="text-brand">{icon}</span> <span className="text-xl font-bold">{text}</span>
        </div>
    )
}