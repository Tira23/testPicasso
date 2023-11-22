import React, {FC, ReactNode} from 'react';
import * as styled from "./index.style"

interface IProps {
    children: ReactNode
}

const DivCenter: FC<IProps> = ({children}) => {
    return (
        <styled.DivCenter>
            {children}
        </styled.DivCenter>
    );
};

export default DivCenter;
