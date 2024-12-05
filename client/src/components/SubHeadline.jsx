import PropTypes from "prop-types"
import Reveal from "./Reveal"

const SubHeadline = ({icon, text}) => {
    return (
        <Reveal> 
            <div className="flex flex-row items-center gap-3">
                <span className="text-brand">{icon}</span> <span className="text-xl font-bold">{text}</span>
            </div>
        </Reveal>
    )
}

SubHeadline.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string
}

export default SubHeadline