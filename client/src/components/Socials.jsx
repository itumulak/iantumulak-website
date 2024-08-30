import { styled } from "styled-components";

export default ({ data }) => {
    const Social = styled.a`
        & > svg {
            &:hover {
                fill: var(--brand);
            }
        }
    `
    return (
        <div className="flex flex-row items-center justify-center gap-6">
            {data.map(social => (
                <Social 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    key={social.name}
                    className="w-6 h-6 cursor-pointer"
                >
                    {social.icon}
                </Social>
            ))}
        </div>
    )
}