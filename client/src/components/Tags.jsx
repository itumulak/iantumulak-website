import PropTypes from "prop-types"
import Reveal from "./Reveal"

const Tags = ({tags, icon, label}) => {
    return (
        <div className="flex flex-col gap-4">
            <Reveal>
                <p className="flex flex-row gap-x-2 items-center">{icon} {label}</p>
            </Reveal>
            <Reveal>
                <div className="flex flex-row gap-x-2">
                    {tags.map(tag => (
                        <span key={tag.name} title={tag.name} className="text-brand">{tag.icon}</span>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.array,
    icon: PropTypes.node,
    label: PropTypes.string
}

export default Tags