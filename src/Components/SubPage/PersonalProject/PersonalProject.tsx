import React from "react";
import {Grid, Typography} from "@mui/material";
import DimoVR from "./Components/DimoVR";
import Sasia from "./Components/Sasia";
import ProjectCard from "./Components/ProjectCard";

const PersonalProject = () => {

    return (

        <Grid container gap={5} sx={{marginTop: "10rem"}}>
            <Grid container justifyContent={"center"}>
                <Grid container item xs={11}
                      justifyContent={"center"}
                      alignItems={"center"}
                >
                    <Grid item container
                          xs={12}
                          justifyContent={"center"}
                          alignItems={"center"}
                          columnGap={{xs: 2, sm: 2, md: 4, lg: 16}}
                          rowGap={8}
                    >
                        <Grid item container
                              xs={12}
                              alignItems={"flex-end"}
                              gap={{xs: 1, sm: 1, md: 0}}
                        >
                            <Grid item xs>
                                <Typography color={"#4A42A9"}
                                            lineHeight={1}
                                            fontFamily={"Bright"}
                                            sx={{
                                                fontSize: {
                                                    xs: "4rem",
                                                    sm: "5rem",
                                                    md: "6rem",
                                                    lg: "6rem",
                                                    xl: "6rem"
                                                }
                                            }}
                                >
                                    Personal <br/> Project
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontSize={"1rem"}
                                            color={"#4A42A9"}
                                >
                                    Feed your neighbour (Fyn), an ambitious school project, allows me to hone my skills in leadership
                                    and
                                    project management. Alongside this, I'm passionately pursuing Sasia, a personal
                                    project that lets me explore full-stack development and develop my abilities in
                                    back-end, front-end, Workflow , Product Supply and DevOps.
                                </Typography>
                            </Grid>
                        </Grid>
                        <DimoVR/>
                        <Sasia/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item
                  xs={12}
                  justifyContent={"center"}
                  alignItems={"center"}
            >
                <Grid container item
                      xs={12}
                      justifyContent={"center"}
                      alignItems={"center"}
                      columnGap={10}
                      rowGap={4}

                >
                    <Grid item xs={'auto'}>
                        <Typography fontFamily={"Bright"}
                                    fontSize={{xs: "2rem", sm: "2rem", md: "3rem"}}>
                            Other Projects
                        </Typography>
                    </Grid>

                    <Grid container item
                          xs={12}
                          justifyContent={"center"}
                          alignItems={"center"}
                    >

                        <ProjectCard stack={"REACTJS - MUI - FIGMA"}
                                     title={"My Portfolio"}
                                     img={"assets/projects/portfolio.png"}
                                     github={"assets/stack/portfolio.svg"}
                                     number={0}
                                     url={"https://github.com/karimWorldSpace/portfolioCV"}
                        />


                        <ProjectCard stack={"Javascript - Canvas"}
                                     title={"University Fighter VIII"}
                                     img={"assets/projects/uf8.png"}
                                     github={"assets/stack/uf8.svg"}
                                     number={0}
                                     url={"https://github.com/karimWorldSpace/Streetfighter"}
                        />

                        <ProjectCard stack={"Java - JavaFX"}
                                     title={"2048"}
                                     img={"assets/projects/2048.png"}
                                     github={"assets/stack/2048.svg"}
                                     number={1}
                                     url={"https://github.com/karimWorldSpace/2048p13"}
                        />
                             <ProjectCard stack={"Verse - Unreal Engine"}
                                     title={"Unreal Engine Fortnite Parkour"}
                                     img={"assets/projects/uefn.png"}
                                     github={"assets/stack/touch.svg"}
                                     number={1}
                                     url={"https://github.com/karimWorldSpace/uefn/"}
                        />
                           <ProjectCard stack={"Symfony - Drupal - Php - Twig - Javascript"}
                                     title={"NadaraCars"}
                                     img={"assets/projects/nadara.png"}
                                     github={"assets/stack/touch.svg"}
                                     number={1}
                                     url={"https://github.com/karimWorldSpace/nadara"}
                        />
                    
                 
                        <ProjectCard stack={"C - Algorithms - Data Structure"}
                                     title={"Public Transit System"}
                                     img={"assets/projects/train.png"}
                                     github={"assets/stack/touch.svg"}
                                     number={0}
                                     url={"https://github.com/karimWorldSpace/subway"}
                        />
                     
                     
                        <ProjectCard stack={"Javascript - NodeJS"}
                                     title={"YtConverter_mp4"}
                                     img={"assets/projects/youtube.png"}
                                     github={"assets/stack/touch.svg"}
                                     number={1}
                                     url={"https://github.com/karimWorldSpace/youtubemp4"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PersonalProject;