import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-6 font-extralight">
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;