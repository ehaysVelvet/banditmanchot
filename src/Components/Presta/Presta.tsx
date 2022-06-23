import React, {useState} from "react";
import {motion} from 'framer-motion';
import {useInfos} from "../../Context/InfoContext";
import {MdReadMore} from "react-icons/md";
import {TiArrowBack} from "react-icons/ti";
import {GiCheckMark} from 'react-icons/gi'

interface Props {
    name: string,
    pointToReach: number,
    url: string,
    back: string,
}

const Presta = (props: Props) => {

    const {point, setPrestation, prestation, pointUse, setPointUse} = useInfos()

    setPointUse(50000)
    const [click, setClick] = useState<boolean>(false)

    const [animationFront, setAnimationFront] = useState({})
    const [animationBack, setAnimationBack] = useState({})
    const [isFront, setIsFront] = useState(true)

    const handleClick = () => {
        console.log('click')
        if (!click && pointUse >= props.pointToReach) {
            let p = prestation
            p.push(props.name)
            setPointUse(pointUse - props.pointToReach)
            setPrestation(p)
            setClick(true)
        }
        if (click) {
            console.log('remove')
            let p = prestation
            const index = p.indexOf(props.name);
            if (index > -1) {
                p.splice(index, 1); // 2nd parameter means remove one item only
            }
            //delete p[index]
            setPrestation(p)
            setPointUse(pointUse + props.pointToReach)
            setClick(false)
        }
        console.log(prestation);
    }

    const swap = () => {
        if (isFront) {
            setIsFront(false)
            setAnimationFront({rotateY: 90,
                skewX: 45,
                scale: 1.1,
                transition: {duration: 0.5}})
        } else {
            setIsFront(true)
            setAnimationBack({rotateY: 90, skewX: 45,
                scale: 1.1,
                transition: {duration: 0.5}})
        }
    }


    return (
        <motion.div className="prestaCard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <motion.div className={'frontCard'}
                        initial={{rotateY: 0}}
                        animate={animationFront}
                        onAnimationComplete={() => {
                            if (!isFront)
                                setAnimationBack({rotateY: 0,
                                    skewX: [-45, 0],
                                    scale: 1,
                                    transition: {duration: 0.5}})
                        }}
                        onClick={() => {
                            swap()
                        }}
            >
                <motion.div className="pointContainer"
                            onClick={() => {
                                swap()
                            }}
                            initial={{scale : 0}}
                            animate={click ? {scale: 1} : {scale : 0}}>
                    <GiCheckMark style={{fontSize: 35}}/>
                </motion.div>
                <div style={{height: '100%', width: '100%'}}>
                    <div className="logoContainer">
                        <img src={props.url} alt="img"/>
                    </div>
                    <div className="textContainer">
                        <h2>{props.name}</h2>
                    </div>
                </div>
            </motion.div>
            <motion.div className={'backCard'}
                        initial={{rotateY: 90}}
                        animate={animationBack}
                        onAnimationComplete={() => {
                            if (isFront)
                                setAnimationFront({rotateY: 0,
                                    skewX: [-45, 0],
                                    scale: 1,
                                    transition: {duration: 0.5}})
                        }}
                        >
                <motion.div className="pointContainer"
                     onClick={() => {
                         swap()
                     }}
                            initial={{scale : 0}}
                            animate={click ? {scale: 1} : {scale : 0}}
                    >
                    <GiCheckMark style={{fontSize: 35}}/>
                </motion.div>
                <div style={{height: '100%', width: '100%'}} className={'backContainer'}>
                    <div className={'top'}
                         onClick={() => {
                             swap()
                         }}>
                        <img src={props.url} alt="img"/>
                        <p>{props.back}</p>
                    </div>
                    <div className={'bottom'}
                         onClick={() => {
                             handleClick()
                         }}>
                        <h3>{
                            click ? 'Supprimer ce besoin' : 'Choisir ce besoin'
                        }</h3>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Presta;