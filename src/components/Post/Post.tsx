import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {useGetPostByIdQuery} from "../../services/postsApi";
import {Alert, Button, Card, CardActionArea, CardActions, CardContent, Skeleton, Typography} from "@mui/material";
import DivCenter from "../Div/DivCenter";

const Post = () => {
    const {pathname} = useLocation();
    const curId = pathname.split('/')[2]
    const {data, error, isLoading} = useGetPostByIdQuery(+curId)

    return (
        <DivCenter>
            {error ? (
                <Card sx={{width: 545, height: 200}}>
                    <CardActionArea>
                        <CardContent>
                            <Alert severity="error" sx={{width: '100%'}}>
                                Ой, что-то пошло не так
                            </Alert>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{justifyContent: 'center'}}>
                        <Link to={'/'}>
                            <Button variant="outlined" color="error">
                                Назад
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            ) : isLoading ? (
                <Card sx={{width: 545, height: 200}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Skeleton animation={'pulse'}/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Skeleton animation={'pulse'}/>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : data ?
                <>
                    <Card sx={{maxWidth: 545}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.id}. {data.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {!error && <Link to={'/'}>
                                <Button variant="outlined" color="success">
                                    Назад
                                </Button>
                            </Link>}
                        </CardActions>
                    </Card>
                </>
                : null}
        </DivCenter>
    );
};

export default Post;
