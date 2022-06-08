import React, {useState} from "react";
import {animate, motion, useAnimation} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import {useInfos} from "../../Context/InfoContext";
import useWindowDimensions from "../../Utils/UseWindowsDimension";

const Tirage = () => {

    const navigate = useNavigate()
    const {setAllPoint, setRoulette} = useInfos()
    const {height, width} = useWindowDimensions()

    const [img1, setImg1] = useState<number>(0)
    const [img2, setImg2] = useState<number>(0)
    const [img3, setImg3] = useState<number>(0)

    const [click, setClick] = useState(false)

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getCouple(v1: number, v2: number, v3: number) {
        let list = [v1, v2, v3];
        var res: any = []
        for (var i = 1; i <= 3; i++) {
            var count = 0
            for (var j = 0; j <= list.length; j++) {
                if (list[j] == i)
                    count++;
            }
            res.push(count)
        }
        let maxx = Math.max(...res)
        let index = res.indexOf(maxx)
        return [index + 1, res[index]]
    }

    const calculatePoint = (v1: number, v2: number, v3: number) => {
        const res = getCouple(v1, v2, v3)
        if (res[1] == 3) {
            if (res[0] == 3)
                return 7
            if (res[0] == 2)
                return 6
            if (res[0] == 1)
                return 5
        } else if (res[1] == 2) {
            if (res[0] == 3)
                return 4
            if (res[0] == 2)
                return 3
            if (res[0] == 1)
                return 2
        } else {
            return 1
        }
    }

    const [animation, setAnimation] = useState<any>({})
    const [animation2, setAnimation2] = useState<any>({})


    const handleSubmit = () => {
        if (click){
            return
        }
        let var1 = getRandomInt(1, 3)
        let var2 = getRandomInt(1, 3)
        let var3 = getRandomInt(1, 3)
        setImg1(var1)
        setImg2(var2)
        setImg3(var3)
        setRoulette([var1, var2, var3])
        Anim(var1)
        Anim2(var2)
        Anim3(var3)
        setClick(true)
        console.log('res = ' + calculatePoint(var1, var2, var3))
        setTimeout(function () {
            setAllPoint(calculatePoint(var1, var2, var3))
            navigate('/resume')
        }, 5100);
    }

    const controls = useAnimation()

    function Anim(val : number) {

        controls.start({
            y: -86 * (27 + val + 1),
        })
    }

    const controls2 = useAnimation()

    function Anim2(val : number) {

        controls2.start({
            y: -86 * (30 + val + 1),
        })
    }

    const controls3 = useAnimation()

    function Anim3(val : number) {

        controls3.start({
            y: -86 * (33 + val + 1),
        })
    }

    return (
        <motion.div className="tirage"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <img className={'background'} src={require('../../Images/tirage/Background/image 2.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 5.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 3.png')} alt="img"/>
            <img className={'background'} src={require('../../Images/tirage/Background/image 6.png')} alt="img"/>
            <div className='content'>
                <h1>Tirage</h1>
                <h2>Aligner les logos de même valeur</h2>
                <div className={"tirageBack"}>
                    <img src={require('../../Images/tirage/Background.svg').default} alt="img" className="background"/>
                    <img src={require('../../Images/tirage/VectorLeft.svg').default} alt="img" className="left"/>
                    <div className="containerLeft">
                        <motion.div className="logoContainer"
                                    initial={{y: 0}}
                                    animate={controls}
                                    transition={{ease: "easeOut", duration: 3, stiffness: 2000, damping: 3}}>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                        </motion.div>
                    </div>

                    <img src={require('../../Images/tirage/VectorMiddle.svg').default} alt="img" className="middle"/>
                    <img src={require('../../Images/tirage/VectorRight.svg').default} alt="img" className="right"/>
                    <img src={require('../../Images/tirage/contourLeft.svg').default} alt="img"
                         className="contourLeft"/>
                    <img src={require('../../Images/tirage/topLeft.svg').default} alt="img" className="topLeft"/>
                    <img src={require('../../Images/tirage/bottomLeft.svg').default} alt="img" className="bottomLeft"/>
                    <img src={require('../../Images/tirage/topMiddle.svg').default} alt="img" className="topMiddle"/>
                    <img src={require('../../Images/tirage/bottomMiddle.svg').default} alt="img"
                         className="bottomMiddle"/>
                    <img src={require('../../Images/tirage/bottomRight.svg').default} alt="img" className="topRight"/>
                    <img src={require('../../Images/tirage/bottomRight.svg').default} alt="img"
                         className="bottomRight"/>
                    <img src={require('../../Images/tirage/contourRight.svg').default} alt="img"
                         className="contourRight"/>
                    <div className="containerMiddle">
                        <motion.div className="logoContainer"
                                    initial={{y: 0}}
                                    animate={controls2}
                                    transition={{ease: "easeOut", duration: 3.33, stiffness: 1000}}>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                        </motion.div>
                    </div>
                    <div className="containerRight">
                        <motion.div className="logoContainer"
                                    initial={{y: 0}}
                                    animate={controls3}
                                    transition={{ease: "easeOut", duration: 3.66, stiffness: 1000}}>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Bronze.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet Argent.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                            <div className="velvetLogo">
                                <img src={require('../../Images/tirage/Logo Velvet OrEXE 1.png')} style={{width: 76, height: 76}} alt="img"/>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className={'buttonContainer'}>
                    <button onClick={handleSubmit}>je tente ma chance</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Tirage;