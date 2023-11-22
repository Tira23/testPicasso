import React, {FC, ReactNode} from 'react';
import * as styled from "./List.style"

interface IProps {
    children: ReactNode
}

const List: FC<IProps> = ({children}) => {
    return (
        <styled.List draggable={false}>
            {children}
        </styled.List>
    );
};

export default List;
