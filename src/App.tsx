import React, {useEffect, useState} from 'react';
import {useGetPostsQuery,} from "./services/postsApi";
import {Link} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ItemList from "./components/ItemList/ItemList";
import List from "./components/List/List";
import TextBody from "./components/Text/TextBody";
import TextTitle from "./components/Text/TextTitle";
import DivRow from "./components/Div/DivRow";
import * as styled from "./components/Text/Index.style"

function App() {
    const [currentPostStart, setCurrentPostStart] = useState(0)
    const [isMyFetching, setIsFetchingDown] = useState(false)
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
    const {data: posts, error, isLoading} = useGetPostsQuery({_limit: 15, _start: currentPostStart})
    const scrollHandler = (e: Event) => {
        const target = e.target as Document;
        if (target.documentElement.scrollTop < 50) {
            setIsMyFetchingUp(true)
        }
        if (target.documentElement.scrollHeight - target.documentElement.scrollTop - window.innerHeight < 50) {
            setIsFetchingDown(true)
            window.scrollTo(0, 150);
        }
        if (target.documentElement.scrollTop < 20) {
            window.scrollTo(0, 25);
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart(prev => {
                return prev < 85 ? prev + 1 : prev
            })
            setIsFetchingDown(false)

        }
    }, [isMyFetching])
    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart(prev => {
                return prev > 0 ? prev - 1 : prev
            })
            setIsMyFetchingUp(false)
        }
    }, [isMyFetchingUp])
    return (
        <List>
            {error ? (
                <>Ой, что-то пошло не так</>
            ) : isLoading ? (
                <CircularProgress color="success"/>
            ) : posts ? posts.map(data => (<ItemList key={data.id}>
                    <div>
                        <DivRow>
                            <span><styled.Text>{data.id}.</styled.Text> </span>
                            <span><TextTitle>{data.title}</TextTitle></span>
                        </DivRow>
                        <TextBody>{data.body}</TextBody>
                    </div>
                    <Link to={`posts/${data.id}`}>
                        <Button variant="contained" endIcon={<SendIcon/>}>
                            Просмотр
                        </Button>
                    </Link>
                </ItemList>
            )) : null}
        </List>
    );
}

export default App;
