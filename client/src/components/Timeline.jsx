import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoGlobe } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import { experience } from "../constants";
import Reveal from "./Reveal";
import Pill from "./Pill";

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
                    <Reveal>
                        <h3 className="font-bold">{exp.url ? <a className="text-brand-dark" href={exp.url} target="_blank" rel="noreferrer">{exp.company}</a> : <span className="text-light-dark">{exp.company}</span>}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-light-dark font-medium">{exp.position}</h4>
                    </Reveal>
                    <Reveal>
                    <h5 className="text-light-dark font-light">{`${exp.started} - ${exp.ended}`}</h5>
                    </Reveal>
                    <Reveal>
                        <p className="text-light-dark !font-light">{exp.description}</p>
                    </Reveal>
                    {
                        exp.work && (
                            <div className="flex flex-col gap-1 pt-3">
                                <Reveal>
                                    <div className="text-light-dark text-sm">Associated Work</div>
                                </Reveal>
                                <div className="flex flex-row flex-wrap gap-y-2 gap-x-3">                                    
                                    {exp.work.map((work) => (
                                        <Pill
                                            key={work.name}
                                            name={work.name}
                                            url={work.url}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                        )
                    }
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: "#0aff9d", color: '#fff' }}
                icon={<FaStar />}
            />
        </VerticalTimeline>
    )
}