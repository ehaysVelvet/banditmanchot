import React, {useState} from "react";
import {motion} from 'framer-motion';
import {useInfos} from "../../Context/InfoContext";

interface Props {
    name: string,
    pointToReach: number,
    data: string,
}

const Presta = (props: Props) => {

    const {point, setPrestation, prestation, pointUse, setPointUse} = useInfos()
    const [click, setClick] = useState<boolean>(false)
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

    const test = () => {
        if (props.pointToReach > pointUse){

        }
    }

    return (
        <motion.div className="prestaCard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={props.pointToReach > pointUse && !click ? {
                        background: 'rgba(255, 255, 255, 0.4)',
                        border: '1px solid #D9D9D9'
                    } : click ? {
                        background: 'rgba(255, 255, 255, 0.4)',
                        border: '1px solid #CC29CA'
                    } : {}}
                    onClick={() => {
                        handleClick()
                    }}>
            <div className="pointContainer"
                 style={props.pointToReach > pointUse || click ? {background: '#ADADAD', border: '1px solid #000'} : {}}>
                <h2>{props.pointToReach}</h2>
            </div>
            <div className="logoContainer">
                <img src={require('../../Images/cafe.svg').default} alt="img"/>
            </div>
            <div className="textContainer" style={props.pointToReach > pointUse || click ? {background: '#D9D9D9'} : {}}>
                <h2 style={props.pointToReach > pointUse || click ? {color: '#000'} : {}}>{props.name}</h2>
            </div>
        </motion.div>
    );
};

export default Presta;