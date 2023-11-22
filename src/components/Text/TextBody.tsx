import React, {FC, ReactNode} from 'react';
import * as styled from "./Index.style"

interface IProps {
    children: ReactNode
}

const TextBody: FC<IProps> = ({children}) => {
    return (
        <styled.TextBody>
            {children}
        </styled.TextBody>
    );
};

export default TextBody;
