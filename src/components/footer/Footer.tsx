import {Grid} from "@mui/material";
import './Footer.scss'

export const Footer = () => {
    return <Grid container spacing={4} className={'footer'}>
        <Grid item xs={4}>
            Индивидуальный предприниматель Галимов Райзат Фагимович
        </Grid>
        <Grid container item xs={4} justifyContent={'center'}>
            <Grid item>
                Контакты
            </Grid>
        </Grid>
        <Grid item xs={4}>Навигация</Grid>
    </Grid>
}