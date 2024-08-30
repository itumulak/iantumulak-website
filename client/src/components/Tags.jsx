export default ({tags, icon, label}) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="flex flex-row gap-x-2 items-center">{icon} {label}</p>
            <div className="flex flex-row gap-x-2">
                {tags.map(tag => (
                    <span key={tag.name} title={tag.name} className="text-brand">{tag.icon}</span>
                ))}
            </div>
        </div>
    )
}