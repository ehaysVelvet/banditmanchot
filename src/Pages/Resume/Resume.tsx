import React, {useState} from "react";
import {motion} from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import {db} from "../../Firebase/firebase";
import {doc, setDoc} from "firebase/firestore";
import {useInfos} from "../../Context/InfoContext";
import RecapCard from "../../Components/RecapCard/RecapCars";

const Resume = () => {

    const navigate = useNavigate()

    const {point, roulette} = useInfos()


    const handleSubmit = async () => {
        navigate('/Prestations')
    }
    return (
        <motion.div className="resume"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/tirage/Background/image 2.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 5.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 3.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 6.png')} alt="img"/>
            <div className='content'>
                <h1>Bravo !</h1>
                <div className="container">
                    <img className={'logo'} src={require('../../Images/logo-velvet_big.png')} alt="img"/>
                    <div className="textContainer">
                        <h2>Vous avez gagné !</h2>
                        <h1>{`${point * 10}`} Points</h1>
                        <div className="recap">
                            <h3>récapitulatif:</h3>
                            <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                            {
                                roulette.map((res: number) =>(
                                    <RecapCard val={res}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testing2">
                    <div className={'buttonContainer'}>
                        <button onClick={handleSubmit}>Voir les prestations</button>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Resume;