import React, {useState} from "react";
import {motion} from 'framer-motion';
import {useInfos} from "../../Context/InfoContext";



const Flip = () => {

    const [animationFront, setAnimationFront] = useState({})
    const [animationBack, setAnimationBack] = useState({})
    const [isFront, setIsFront] = useState(true)



    return (
        <motion.div className="flip"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

            <motion.div className={'frontCard'}
                        initial={{rotateY: 0}}
                        animate={animationFront}
                        onAnimationComplete={() => {
                            if (!isFront)
                                setAnimationBack({rotateY: 0, skewX:[-45, 0],  transition: { duration: 0.5 }})
                        }}
                        onClick={() => {
                            setIsFront(false)
                            setAnimationFront({rotateY: 90, skewX: 45, transition: { duration: 0.5 }})
                        }}
            >
                Front
            </motion.div>
            <motion.div className={'backCard'}
                        initial={{rotateY: 90}}
                        animate={animationBack}
                        onAnimationComplete={() => {
                            if (isFront)
                                setAnimationFront({rotateY: 0, skewX: [-45, 0], transition: { duration: 0.5 }})
                        }}
                        onClick={() => {
                            setIsFront(true)
                            setAnimationBack({rotateY: 90, skewX: 45, transition: { duration: 0.5 }})
                        }}>
                Back
            </motion.div>
        </motion.div>
    );
};

export default Flip;