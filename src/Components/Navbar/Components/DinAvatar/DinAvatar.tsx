import React from "react";
import {Avatar} from "@mui/material";
import {motion} from "framer-motion"

const DinAvatar = () => {
    return (
        <motion.div
            onClick={() => window.open('https://www.linkedin.com/in/karim-louail-980403206/')}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 100, damping: 10}}
            animate={{
                width: "100%",
                cursor: "pointer"
            }}
        >
            <Avatar alt="karim louail" src={"assets/avatar/karim.png"} sx={{width: "50px", height: "50px"}}/>
        </motion.div>
    );
}

export default DinAvatar;