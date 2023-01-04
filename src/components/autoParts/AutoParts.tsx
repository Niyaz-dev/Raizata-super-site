import {Box, Button, Grid, Typography} from "@mui/material";
import './AutoParts.scss'
import {SinglePart} from "./singlePart/SinglePart";
import {useEffect, useState} from "react";
import {getDetails} from "../../api/api";

export const AutoParts = () => {
    const [details, setDetails] = useState<Array<{
        sparePart: string
        originNumber: string
        img: Array<string>
        description: string
    }>>([]);

    useEffect(() => {
        (async function (){
            const detailsResponse = await getDetails();
            setDetails(detailsResponse.data.rows);
        })()
    },[])

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

                        details.map(
                            item =>
                                <Box className={'auto-parts__single-part'}>
                                    <SinglePart
                                        sparePart={item.sparePart}
                                        imgSrc={item.img[0]}
                                        originNumber={item.originNumber}
                                        description={item.description}
                                    />
                                </Box>
                        )
                    }
                </Grid>

            </Box>
        </div>
    )
}