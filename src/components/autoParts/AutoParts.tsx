import {Box, Button, Grid, Typography} from "@mui/material";
import './AutoParts.scss'
import {SinglePart} from "./singlePart/SinglePart";

export const AutoParts = () => {
    return (<div className={'auto-parts'}>
            <Typography sx={{marginTop: '30px'}} variant='h3'>
                Авторазборка Запчасти б/у для авто у Райзата
            </Typography>
            <Box>
                <Grid className={'auto-parts__buttons-container'} container>
                    {
                        [...new Array(30)].map(
                            item =>
                                <Box className={'auto-parts__button'}>
                                    <Button variant='outlined'>
                                        <Typography variant='h6'>
                                            Nissan
                                        </Typography>
                                    </Button>
                                </Box>
                        )
                    }
                </Grid>
                <Grid container className={'auto-parts__part-container'}>
                    {

                        [...new Array(30)].map(
                            item =>
                                <Box className={'auto-parts__single-part'}>
                                    <SinglePart/>
                                </Box>
                        )
                    }
                </Grid>

            </Box>
        </div>
    )
}