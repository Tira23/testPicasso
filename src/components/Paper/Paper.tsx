import React, {FC, ReactNode} from 'react';
import * as styled from "./Paper.style"

interface IProps {
    children: ReactNode
}

const Paper: FC<IProps> = ({children}) => {
    return (
        <styled.Paper>
            {children}
        </styled.Paper>
    );
};

export default Paper;
