import { useState, useEffect } from 'react'

//states, hook = useEffect
export default () => {

    let [altura, setAltura] = useState(0)
    let [peso, setPeso] = useState(0)

    useEffect(()=>{

    }, [peso])

    const mostraImc = () => {
        let imc = peso / (altura * altura)

        if (imc <= 0 ){
            return <p>seu imc é de 0, Digite sua altura e peso</p>
        }else if (imc <= 18.5){
            return <p>seu imc é de {imc}, Abaixo do peso</p>
        }else if(imc > 18.5 && imc < 24.9){
            return <p>seu imc é de {imc}, Peso ideal. Parabéns</p>
        }else if (imc >= 24.9  && imc < 30){
            return <p>seu imc é de {imc}, Levemente acima do peso</p>
        }else if (imc >= 30  && imc < 34.9){
            return <p>seu imc é de {imc}, Obesidade grau 1</p>
        }else if (imc >= 34.9  && imc < 39.9){
            return <p>seu imc é de {imc}, Obesidade grau 2 (severa)</p>
        }else if (imc >= 39.9){
            return <p>seu imc é de {imc}, Obesidade grau 3 (mórbida)</p>
        }
    }

    return(
        <>
            <form>
                <input placeholder="altura" onChange={evento => setAltura(parseInt(evento.target.value))}/>
                <input placeholder="peso" onChange={evento => setPeso(parseInt(evento.target.value))}/>
            </form>
            {mostraImc()}

        </>
    )
}