import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import {useInfos} from "../../Context/InfoContext";

const Thanks = () => {

    const navigate = useNavigate()
    const {reset} = useInfos()

    useEffect(() => {
        setTimeout(function () {
            reset()
            navigate('/')
        }, 7000);
    }, [])

    return (
        <motion.div className="thanks"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/try.png')} alt="img"/>
            <div className="background2"/>
            <div className='content'>
                <img className={'logo'} src={require('../../Images/logoCouleur.png')} alt="img"/>
                <h1>Merci de votre participation !</h1>
                <h2>Nous allons vous recontacter très vite et organiser une recontre avec les équipes Velvet!</h2>
            </div>
        </motion.div>
    );
};

export default Thanks;