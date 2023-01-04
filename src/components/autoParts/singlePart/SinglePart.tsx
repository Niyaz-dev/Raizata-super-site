import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import base from './base.jpeg'
import {FC} from "react";

interface SinglePartProps {
    imgSrc: string
    sparePart: string
    originNumber: string
    description: string
}

export const SinglePart: FC<SinglePartProps> = ({imgSrc, sparePart,originNumber, description}) => {
    return <Card sx={{maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="250"
                src={imgSrc}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {sparePart}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Volkswagen Jetta 6 2012г.
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Номер запчасти: {originNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                В корзину
            </Button>
        </CardActions>
    </Card>
}