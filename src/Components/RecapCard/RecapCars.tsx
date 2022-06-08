import React, {useState} from "react";
import {motion} from 'framer-motion';

interface Props {
    val: number;
}

const RecapCard = (props : Props) => {



    return (
        <motion.div className="recapCard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            { props.val == 1 &&
                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} className='recapLogo' alt="img"/>
            }
            { props.val == 2 &&
            <img src={require('../../Images/tirage/Logo Velvet Argent.png')}className='recapLogo' alt="img"/>
            }
            { props.val == 3 &&
            <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} className='recapLogo' alt="img"/>
            }

        </motion.div>
    );
};

export default RecapCard;