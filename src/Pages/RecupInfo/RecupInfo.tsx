import React, {useState} from "react";
import {motion} from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import {db} from "../../Firebase/firebase";
import {doc, setDoc} from "firebase/firestore";
import {useInfos} from "../../Context/InfoContext";

const RecupInfo = () => {

    const navigate = useNavigate()

    const {setSurname, setName} = useInfos()
    const [civ, setCiv] = useState(0)

    const {
        email,
        point,
        name,
        surname,
        prestation,
        pointUse,
        civil,
        setCivil,
    } = useInfos()

    const [error, setError] = useState('')

    const handleSubmit = async () => {
        if (civil.length != 1) {
            setError('Veuillez renseigner votre état civile')
            return
        }
        if (surname.length <= 1) {
            setError('Veuillez renseigner votre prénom')
            return
        }
        if (name.length <= 1) {
            setError('Veuillez renseigner votre nom')
            return
        }

        await setDoc(doc(db, "players", email), {
            email, civil, surname, name, point, pointUse, prestation: prestation,
        });
        navigate('/Thanks')
    }

    const getColorMasc = () => {
        if (civ == 1)
            return 'use'
        else
            return 'none'
    }

    const getColorFem = () => {
        if (civ == 2)
            return 'use'
        else
            return 'none'
    }

    const handleMasc = () => {
        setCiv(1)
        setCivil('M')
    }

    const handleFem = () => {
        setCiv(2)
        setCivil('F')
    }

    return (
        <motion.div className="recup"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/tirage/Background/image 2.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 5.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 3.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 6.png')} alt="img"/>
            <div className='content'>
                <img className={'logo'} src={require('../../Images/logoCouleur.png')} alt="img"/>
                <h1>C'est la dernière étape !</h1>
                <h2>Parce que vous êtes unique nous aimerions avoir un peu plus d'informations sur vous</h2>
                <div className="formContainer">
                    <div className="civilContainer">
                        <button className={getColorFem()} onClick={handleFem}>Monsieur</button>
                        <button className={getColorMasc()} onClick={handleMasc}>Madame</button>
                    </div>
                    <div className={'buttonContainer'}>
                        <input type="text" placeholder='Prénom' onChange={(e) => {
                            setSurname(e.target.value)
                            console.log(e)
                        }}/>
                        <input type="text" placeholder='Nom' onChange={(e) => {
                            setName(e.target.value)
                            console.log(e)
                        }}/>
                        <button onClick={handleSubmit}>Envoyer</button>
                    </div>
                    <h2 style={{color: '#d78d8d', paddingTop: 10}}>{error}</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default RecupInfo;