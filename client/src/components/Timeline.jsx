import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoGlobe } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import { experience } from "../constants";

export default () => {
    return (
        <VerticalTimeline layout="1-column-left">
            {experience.map((exp) => (
                <VerticalTimelineElement
                    key={exp.company}
                    dateClassName="!px-[40px]"
                    
                    iconStyle={{overflow: "hidden", backgroundColor: "#282c34"}}
                    icon={exp.logo ? <img src={exp.logo} alt={exp.company}/> : <IoGlobe size={40}/>}
                >
                    <h3 className="text-light-dark font-bold">{exp.company}</h3>
                    <h4 className="text-light-dark font-medium">{exp.position}</h4>
                    <h5 className="text-light-dark font-light">{`${exp.started} - ${exp.ended}`}</h5>
                    <p className="text-light-dark !font-light">{exp.description}</p>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: "#0aff9d", color: '#fff' }}
                icon={<FaStar />}
            />
        </VerticalTimeline>
    )
}