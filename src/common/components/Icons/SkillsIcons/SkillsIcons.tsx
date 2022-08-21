import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';

export const SkillsIcons: React.FC<SkillsIconsPropsType> = (
    {logoComponent}
) => {
    return <>
        <IconContext.Provider value={{color: '#f26c4f', size: '3.5rem'}}>
                    {logoComponent}
        </IconContext.Provider>
    </>;
};

//types
type SkillsIconsPropsType = {
    logoComponent: ReactElement
}
