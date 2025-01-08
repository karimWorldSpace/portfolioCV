import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import StackIcon from "../../../../StackIcon";
import {getSvgPath} from "figma-squircle";
import theme from "../../../../../theme";
import {motion} from "framer-motion";

interface EducationCardProps {
    title: string,
    description: string,
    deg: number,
    url: string,
    job: number,
    company: string,
    date: string,

}

const svgPath = getSvgPath({
    width: 400,
    height: 400,
    cornerRadius: 80,
    cornerSmoothing: 1,
})

const svgPathLittle = getSvgPath({
    width: 64,
    height: 64,
    cornerRadius: 14,
    cornerSmoothing: 1,
})

const ExperienceCard = (props: EducationCardProps) => {
    const isScreenLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const stack = () => {
        switch (props.job) {
            case 1:
                return (
                    <Grid item container xs={12} gap={2} alignItems={"center"}
                          justifyContent={{xs: "center", sm: "center", md: "start"}}>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/php.svg"}/>
                        </Grid>
                      
                       
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/vuejs.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/react.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/jira.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/symfony.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/git.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/docker.svg"}/>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid item container xs={12} gap={2} alignItems={"center"}
                          justifyContent={{xs: "center", sm: "center", md: "start"}}>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/symfony.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/vuejs.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/react.svg"}/>
                        </Grid>
    
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/bash.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/touch.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/docker.svg"}/>
                        </Grid>
                    </Grid>
                );
            case 3:
                return (
                    <Grid item container xs={12} gap={2} alignItems={"center"}
                          justifyContent={{xs: "center", sm: "center", md: "start"}}>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/c.png"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/java.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/js.png"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/bash.svg"}/>
                        </Grid>
                    </Grid>
                );
        }

    }

    return (
        <Grid container item xs={12} gap={{xs: 4, sm: 4, md: 10}} justifyContent={"center"} alignItems={"center"}>
            <Grid item container
                  order={props.job === 2 ? 2 : 1}
                  xs={12} sm={11} md={5}
                  sx={{
                      padding: "2rem",
                      borderRadius: "3rem",
                      border: "0.5px solid #e5e7ff",
                      background: "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)",
                      backdropFilter: "blur(12.699999809265137px)"
                  }}
                  gap={2}
            >
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            transition={{type: "spring", stiffness: 50, damping: 20}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}>
                    <Grid item container xs={12} sx={{marginBottom: "2rem"}}>
                        <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item xs={9}>
                                <Typography lineHeight={1.1} fontSize={"1.3rem"} fontWeight={"bold"}>
                                    {props.title}
                                </Typography>
                            </Grid>
                            {isScreenLowerThanMD &&
                                <Grid container item xs={'auto'} direction="row-reverse">
                                    <Grid item xs={'auto'}>
                                        <Box component="img"
                                             src={props.url}
                                             sx={{
                                                 objectFit: "cover",
                                                 clipPath: `path('${svgPathLittle}')`,
                                                 width: "4rem",
                                                 height: "4rem",
                                             }}/>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>

                        <Grid item xs={12}>
                            <Typography lineHeight={1.1} fontSize={"0.9rem"} fontWeight={"bold"}>
                                {props.company}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography lineHeight={1.1} fontSize={"0.7rem"} fontStyle={"italic"} fontWeight={"bold"}>
                                {props.date}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography fontSize={"1rem"} sx={{whiteSpace: "break-spaces"}}>
                            {props.description}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{marginTop: "1rem"}}>
                        {stack()}
                    </Grid>
                </motion.div>

            </Grid>
            {
                !isScreenLowerThanMD &&

                <Grid item xs={'auto'} order={props.job === 2 ? 1 : 2}>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{type: "spring", stiffness: 260, damping: 20}}
                                variants={{
                                    visible: {scale: 1, rotate: props.deg},
                                    hidden: {scale: 0, rotate: 0}
                                }}>
                        <Box component="img"
                             src={props.url}
                             alt={""}
                             sx={{
                                 objectFit: "cover",
                                 clipPath: `path('${svgPath}')`,
                                 height: 400,
                                 width: 400
                             }}/>
                    </motion.div>

                </Grid>
            }
        </Grid>
    );
}

export default ExperienceCard;