import {Grid, Link, Toolbar, Typography} from "@mui/material";
import batmanLogo from "../../assets/batman.png"

const sections = [
    { title: 'Запчасти', url: '#' },
    { title: 'АКПП', url: '#' },
    { title: 'Двигатели', url: '#' },
    { title: 'МКПП', url: '#' },
    { title: 'Рулевые рейки', url: '#' },
    { title: 'Топливная система', url: '#' },
    { title: 'Турбины', url: '#' },
    { title: 'О нас', url: '#' },
    { title: 'Новости', url: '#' },
    { title: 'Контакты', url: '#' },
];

export const Header = () => {
    return <>
        <Toolbar sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography>
                        Работаю 24/7. От работы дохнут кони, ну а я бессмертный пони
                    </Typography>
                </Grid>
                <Grid item xs/>
                <Grid container item xs={4}>
                    <Typography>
                        Номер Телефона для рекламы
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                        One more phone number
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            <Link
                color="inherit"
                noWrap
                key='icon'
                variant="body2"
                href='#'
                sx={{ p: 1, flexShrink: 0 }}
            >
                <img  src={batmanLogo} width={'50px'}/>
            </Link>
            {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    </>
}