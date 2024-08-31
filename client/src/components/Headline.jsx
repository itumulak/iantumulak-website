import { styled } from "styled-components";
import Reveal from "./Reveal";

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--text);
`

export default ({ isRight = false, text = "", size = "3rem", weight= "black", gap = 8 }) => {
    return (
        <div className={`flex flex-flex-wrap items-center gap-${gap} w-full ${isRight ? "flex-row-reverse" : "flex-row"}`}>
            <h3 style={{ fontSize: size }} className={`font-${weight} whitespace-nowrap`}>
                <Reveal>
                    {text}<span className="text-brand">.</span>
                </Reveal>
            </h3>
            <Line></Line>
        </div>
    )
}