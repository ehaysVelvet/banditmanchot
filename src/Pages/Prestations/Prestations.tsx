import React, {useState} from "react";
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
import {useInfos} from "../../Context/InfoContext";
import Presta from "../../Components/Presta/Presta";
import prestationInfo from "../../Constant/prestationInfo";
import Flip from "../../Components/Flip/flip";

const Prestations = () => {
    const navigate = useNavigate()

    const {email,
        point, 
        pointUse,
        prestation,} = useInfos()


    const handleSubmit = async () => {
        await setDoc(doc(db, "players", email), {
            email, point, pointUse, prestation,
        }).catch((error)=>{
            console.log(error);
        });
        navigate('/info')
    }


    return (
        <motion.div className="presta"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/tirage/Background/image 2.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 5.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 3.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 6.png')} alt="img"/>
            <div className='content'>
                <h1>Les prestations Velvet</h1>
                <h2>Choisissez votre prestation avec vos <b>{point * 10} points gagnés</b></h2>
                <div className="mainContainerCard">
                    <div className="cardContainer">
                        {prestationInfo.prestationInfo.map((res) => (
                            <div style={{width: 164, marginLeft: 40, marginTop: 40}}>
                                <Presta name={res.name} pointToReach={res.point} data={res.data} url={res.url}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'buttonContainer'}>
                    <button onClick={handleSubmit}>Valider la prestation</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Prestations;