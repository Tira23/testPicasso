import React, {FC, ReactNode} from 'react';
import * as styled from "./ItemList.style"

interface IProps {
    children: ReactNode
}

const ItemList: FC<IProps> = ({children}) => {
    return (
        <styled.ItemList>
            {children}
        </styled.ItemList>
    );
};

export default ItemList;
