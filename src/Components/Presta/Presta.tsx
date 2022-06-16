import React, {useState} from "react";
import {motion} from 'framer-motion';
import {useInfos} from "../../Context/InfoContext";
import {MdReadMore} from "react-icons/md";
import {TiArrowBack} from "react-icons/ti";

interface Props {
    name: string,
    pointToReach: number,
    data: string,
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
            var index = p.indexOf(props.name)
            delete p[index]
            setPrestation(p)
            setPointUse(pointUse + props.pointToReach)
            setClick(false)
        }
    }

    const swap = () => {
        if (isFront) {
            setIsFront(false)
            setAnimationFront({rotateY: 90, skewX: 45, transition: {duration: 0.5}})
        } else {
            setIsFront(true)
            setAnimationBack({rotateY: 90, skewX: 45, transition: {duration: 0.5}})
        }
    }


    return (
        <motion.div className="prestaCard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={click ? {
                        height: 196
                    } : {}}
        >
            <motion.div className={'frontCard'}
                        initial={{rotateY: 0}}
                        animate={animationFront}
                        onAnimationComplete={() => {
                            if (!isFront)
                                setAnimationBack({rotateY: 0, skewX: [-45, 0], transition: {duration: 0.5}})
                        }}
                        style={click ? {
                            background: 'rgba(255, 255, 255, 0.4)',
                            border: '5px solid #D9D9D9'
                        } : {
                            background: 'rgba(255, 255, 255, 1)',
                            border: '1px solid #D9D9D9'
                        }}

            >
                <div className="pointContainer"
                     onClick={() => {
                         swap()
                     }}>
                    <MdReadMore style={{fontSize: 35}}/>
                </div>
                <div style={{height: '100%', width: '100%'}}
                     onClick={() => {
                         handleClick()
                     }}>
                    <div className="logoContainer">
                        <img src={require('../../Images/cafe.svg').default} alt="img"/>
                    </div>
                    <div className="textContainer"
                         style={props.pointToReach > pointUse || click ? {background: '#D9D9D9'} : {}}>
                        <h2 style={props.pointToReach > pointUse || click ? {color: '#000'} : {}}>{props.name}</h2>
                    </div>
                </div>
            </motion.div>
            <motion.div className={'backCard'}
                        initial={{rotateY: 90}}
                        animate={animationBack}
                        onAnimationComplete={() => {
                            if (isFront)
                                setAnimationFront({rotateY: 0, skewX: [-45, 0], transition: {duration: 0.5}})
                        }}
                        style={click ? {
                            background: 'rgba(255, 255, 255, 0.4)',
                            border: '5px solid #D9D9D9'
                        } : {
                            background: 'rgba(255, 255, 255, 1)',
                            border: '1px solid #D9D9D9'
                        }}>
                <div className="pointContainer"
                     onClick={() => {
                         swap()
                     }}>
                    <TiArrowBack style={{fontSize: 35}}/>
                </div>
                <div style={{height: '100%', width: '100%'}} className={'backContainer'}
                     onClick={() => {
                         handleClick()
                     }}>
                    <p style={{color: "black", fontSize: 20}}>{props.data}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Presta;