import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import {db} from "../../Firebase/firebase";
import {collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import {useInfos} from "../../Context/InfoContext";

const Intro = () => {

    const navigate = useNavigate()
    const {email, setEmail, prestation} = useInfos()

    const validateEmail = (mail : string) => {
        return String(mail)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const [error, setError] = useState('')

    const handleSubmit = async () => {
        const docRef = doc(db, "players", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setError('E-mail déjà utilisé')
            return
        }
        if (!validateEmail(email)) {
            setError('E-mail non valide')
            return
        }
        await setDoc(doc(db, "players", email), {
            email,
        }).catch((error)=>{
            console.log(error);
        });
        navigate('/Tirage')
    }
    return (
        <motion.div className="intro"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/imageback.png')} alt="img"/>
             <div className="background2"/>
            <div className='content'>
                <img className={'logo'} src={require('../../Images/logoCouleur.png')} alt="img"/>
                <h1>Gagnez une prestation Velvet</h1>
                <div className={'container1'}>
                    <p className="style1">Lancez le tirage et aligner les logos Velvet.</p>
                    <p className="style2">Plus ils sont rares et plus la prestation sera conséquente et il n'y a pas de perdants.</p>
                    <p className="style1"> Aucun perdants !</p>
                </div>
                <p className="style2">Saisissez votre e-mail professionel</p>
                <p className="style2">pour tenter de gagner une préstation Velvet</p>
                <div className={'buttonContainer'}>
                    <input type="text" placeholder='Mon e-mail professionel' onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    <button onClick={handleSubmit}>Go</button>
                </div>
                <h2 style={{color: '#d78d8d', paddingTop: 10}}>{error}</h2>
            </div>
        </motion.div>
    );
};

export default Intro;