import {Avatar, Grid, Typography, useMediaQuery} from "@mui/material";
import StackIcon from "../../../../StackIcon";
import React from "react";
import theme from "../../../../../theme";

const AboutMeInfo = () => {
    const isScreenLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid container item xs={12} gap={2}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <Typography fontWeight={"bold"} fontSize={"2rem"} color={"#2e2e2e"}>Hola ! 
                        👋🏻</Typography>
                    </Grid>
                    {isScreenLowerThanMD &&
                        <Grid item xs={'auto'}>
                            <Avatar alt="karim louail" src={"assets/avatar/xavatario.png"}
                                    sx={{width: "50px", height: "50px"}}/>
                        </Grid>
                    }
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1rem"} color={"#2e2e2e"}>
                            <strong>I am Karim Louail, a 25-year-old </strong>driven by an insatiable passion
                            for
                            technology and
                            innovation. I have embraced a journey filled with challenges,
                            fueled
                            by a deep belief in the power of technological progress to transform the
                            world. <br/><br/>
                            <strong>Currently honing my skills and gaining valuable experience</strong>, I work as an
                            apprentice
                            back-end
                            developer at Davidson Consulting.
                            <br/><br/>
                            <strong>Beyond the technological realm,</strong> I am an enthusiastic traveler, captivated
                            by the richness of
                            cultures in the World 🌏.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm gap={1}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                        Skills
                    </Typography>
                </Grid>
                <Grid container item xs={12} gap={1} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/php.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/java.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/react.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/vuejs.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/postgresql.svg"}/>
                    </Grid>
                
                  
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jira.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/docker.svg"}/>
                    </Grid>

                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jenkins.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/figma.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/git.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/bash.svg"}/>
                    </Grid>
                  
              
                </Grid>
            </Grid>
            <Grid container item xs={12} gap={1}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}
                                fontWeight={"bold"}
                    >
                        Languages
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.9rem"}>
                        French - English
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMeInfo;