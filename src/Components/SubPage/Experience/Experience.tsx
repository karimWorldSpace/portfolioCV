import React from "react";
import {Grid, Typography} from "@mui/material";
import ExperienceCard from "../Experience/Component/ExperienceCard";

const Experience = () => {
    return (
        <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}
        >

            <Grid container item gap={4} xs={11}>
                <Grid item sx={{position: "absolute", zIndex: "-1", left: "0%"}} xs={12}>
                    <img src={"assets/snake/snake-2.svg"} alt={""} style={{width: "100%"}}/>
                </Grid>
                <Grid container item xs={12} justifyContent={{xs: "center", sm: "start"}}>
                    <Grid item xs={'auto'}>
                        <Typography
                            fontFamily={"Bright"}
                            lineHeight={1}
                            color={"#4A42A9"}
                            sx={{fontSize: {xs: "3.8rem", sm: "5rem", md: "6rem", lg: "6rem", xl: "6rem"}}}
                        >
                            Experience
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography fontSize={"1rem"} color={"#4A42A9"}>
                                I have achieved experience in software development through internships,
                                working on back-end and front-end projects in Symfony, React, VueJs.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} gap={10} justifyContent={"center"} alignItems={"center"}>
                    <ExperienceCard
                        job={1}
                        url={"assets/experience/dav.jpg"}
                        deg={10}
                        title={"Internship : Software Engineer"}
                        company={"Davidsons Consulting"}
                        date={"2024/06 - Present"}
                        description={"" +
                            "I am currently involved in the maintenance and evolution of Davidson's internal services as well as those of its clients.\n\n" +
                            "My responsibilities include implementing REST APIs and delivering updates to microservices and applications built with Symfony, Vue.js, React.js, and Drupal.\n\n"+
                            "I actively participate in code reviews and unit testing to ensure code quality. I collaborate closely with design and development teams to define, design, and implement new features for projects valued at over one million euros.\n\n" +
                            "Additionally, I have contributed to DevOps activities using Gitlab Ci."
                        }
                    />
                    <ExperienceCard
                        job={2}
                        url={"assets/experience/tkt.png"}
                        deg={-10}
                        company={"TKT Paris"}
                        date={"2022/01 - 2024/06"}
                        title={"Internship : Software Engineer"}
                        description={"During my role as a Software Developer, I contributed to the development of patches and feature enhancements for various applications, specifically Symfony\n\n" +
                            "My primary responsibilities included crafting new user interface components using ReactJs, enhancing the user experience of existing applications, and optimizing software performance.\n\n" +
                            "This experience not only honed my Php and React skills but also exposed me to the broader spectrum of software development, user-centric design."
                        }
                    />
                    <ExperienceCard
                        job={3}
                        url={"assets/experience/p13.png"}
                        deg={13}
                        company={"Universite Sorbonne Paris XIII"}
                        date={"2021/09 - 2021/12"}
                        title={"Student Tutor : Computer Science"}
                        description={"During my role as a Student Tutor, I actively engaged in fostering students' comprehension of fundamental computer science concepts.\n" +
                            "This involved mentoring students to troubleshoot technical issues, providing valuable technical support for both hardware and software problems."}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience;