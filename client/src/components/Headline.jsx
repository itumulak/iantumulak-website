import { styled } from "styled-components";

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--text);
`

export default ({ position = "left", text }) => {
    return (
        <div className="flex flex-row items-center gap-9">
            <h3 className="text-5xl font-black whitespace-nowrap">{text}<span className="text-brand">.</span></h3>
            <Line></Line>
        </div>
    )
}