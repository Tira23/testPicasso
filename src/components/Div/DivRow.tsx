import React, {FC, ReactNode} from 'react';
import * as styled from "./index.style"

interface IProps {
    children: ReactNode
}

const DivRow: FC<IProps> = ({children}) => {
    return (
        <styled.DivRow>
            {children}
        </styled.DivRow>
    );
};

export default DivRow;
