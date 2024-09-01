import { styled } from "styled-components";
import TerminalIcon from '@mui/icons-material/Terminal';
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { TbDeviceImacCog } from "react-icons/tb";
import { BsTools } from "react-icons/bs";

import SubHeadline from '../../components/SubHeadline';
import Tags from '../../components/Tags';
import { languageStack, libraryStack, databaseStack, cmsStack, toolStack } from "../../constants";


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export default () => {
    return (
        <div className="flex flex-col gap-y-4">
            <SubHeadline icon={<TerminalIcon />} text={`Tech Stack`}/>
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
                <Tags tags={languageStack} label={`Languages`} icon={<IoCodeSlashSharp/>}/>
                <Tags tags={libraryStack} label={`Libraries`} icon={<SiBookstack/>}/>
                <Tags tags={databaseStack} label={`Database`} icon={<FaDatabase/>}/>
                <Tags tags={cmsStack} label={`CMS`} icon={<TbDeviceImacCog/>}/>
                <Tags tags={toolStack} label={`Tools`} icon={<BsTools/>}/>
            </div>
        </div>
    )
}