import { styled } from "styled-components";

import { socials } from "../constants";  
import Socials from "./Socials";
import Menu from "./Menu";

export default () => {
    const Header = styled.header`
        background: var(--bg-opaque);
        backdrop-filter: blur(12px);
    `

    return (
        <Header className="flex items-center justify-between sticky top-0 z-20 px-9 h-16">
            <Socials data={socials}/>
            <Menu/>
        </Header>
    )
}