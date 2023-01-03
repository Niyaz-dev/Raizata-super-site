import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import base from './base.jpeg'

export const SinglePart = () => {
    return <Card sx={{maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                src={base}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Топливная Рампа
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Volkswagen Jetta 6 2012г.
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Номер запчасти: 06K133317H
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Доставка в любой Город. Поставки из Японии и Швеции. Гарантия. Аналоги (Совместимость с ДВС): , CPLA, CPPA. 2.0 TSI. 155 kBт 210 л/с.
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