import React, {ReactElement} from 'react';
import {IconContext} from 'react-icons';

export const ButtonsIcons: React.FC<ButtonsIconsPropsType> = (
    {logoComponent}
) => {
    return <>
        <IconContext.Provider value={{size: '1.5rem'}}>
                    {logoComponent}
        </IconContext.Provider>
    </>;
};

//types
type ButtonsIconsPropsType = {
    logoComponent?: ReactElement
}
