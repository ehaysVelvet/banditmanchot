import React, {useContext, useEffect, useMemo, useState} from 'react'
import { setEmitFlags } from 'typescript'

const InfoContext = React.createContext({})

export function useInfos(): any {
    return useContext(InfoContext)
}

export function InfoProvider({children}: any) {
    const [email, setEmail] = useState<string>('')
    const [point, setPoint] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [prestation, setPrestation] = useState<string[]>([])
    const [civil, setCivil] = useState<string>('')
    const [pointUse, setPointUse] = useState<number>(point * 10)
    const [roulette, setRoulette] = useState<any[]>([])
    const [tel, setTel] = useState<string>((''))


    const reset = () => {
        setEmail('')
        setPoint(0)
        setName('')
        setSurname('')
        setPrestation([])
        setCivil('')
        setPointUse(0)
        setRoulette([])
        setTel('')
    }

    const setAllPoint = (val : number) => {
        setPointUse(val * 10)
        setPoint(val)
    }

    const value = useMemo(() => ({
            email,
            point,
            name,
            surname,
            prestation,
            civil,
            roulette,
            pointUse,
            tel,
            setPoint,
            setTel,
            setEmail,
            setName,
            setSurname,
            setPrestation,
            setCivil,
            setPointUse,
            setRoulette,
            reset,
            setAllPoint

        }),
        [email, point, name, surname, prestation, civil, pointUse, roulette, tel]);

    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}