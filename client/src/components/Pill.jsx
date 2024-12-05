import PropTypes from "prop-types"
import Reveal from "./Reveal"

const Pill = ({name, url}) => {
    return (
        <Reveal>
            <a 
                key={name}
                className="bg-brand-dark px-3 text-sm" 
                href={url} 
                target="_blank" 
                rel="noreferrer"
            >
                {name}
            </a>
        </Reveal>
    )
}

Pill.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Pill