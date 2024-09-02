import { styled, css } from "styled-components";
import Reveal from "./Reveal";

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${breakpoints[label]}) {
            ${css(...args)}
        }
    `
    return acc
}, {})

const calculateLineHeight = (fontSize) => {
    const sizeInPixels = parseFloat(fontSize);
    return `${sizeInPixels * 1.5}px`;
};

const ResponsiveText = styled.h3`
    font-size: ${(props) => props.sizes?.xs || '14px'};
    line-height: ${(props) => calculateLineHeight(props.sizes?.xs || '14px')};

    ${(props) =>
        props.sizes?.sm &&
        media.sm`
        font-size: ${props.sizes.sm}; 
        line-height: ${calculateLineHeight(props.sizes.sm)};
    `}

    ${(props) =>
        props.sizes?.md &&
        media.md`
        font-size: ${props.sizes.md}; 
        line-height: ${calculateLineHeight(props.sizes.md)};
    `}

    ${(props) =>
        props.sizes?.lg &&
        media.lg`
        font-size: ${props.sizes.lg};
        line-height: ${calculateLineHeight(props.sizes.lg)}; 
    `}

    ${(props) =>
        props.sizes?.xl &&
        media.xl`
        font-size: ${props.sizes.xl}; 
        line-height: ${calculateLineHeight(props.sizes.xl)};
    `}
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--text);
`

export default ({ isRight = false, text = "", sizes = {xs: "30px", md: "48px"}, weight= "black", gap = 8 }) => {
    return (
        <div className={`flex flex-flex-wrap items-center gap-${gap} w-full ${isRight ? "flex-row-reverse" : "flex-row"}`}>
            <ResponsiveText sizes={sizes} className={`font-${weight} whitespace-nowrap`}>
                <Reveal>
                    {text}<span className="text-brand">.</span>
                </Reveal>
            </ResponsiveText>
            <Line></Line>
        </div>
    )
}