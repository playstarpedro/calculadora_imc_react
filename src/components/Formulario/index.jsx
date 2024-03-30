
import { useEffect, useState } from "react"

import styles from './Formulario.module.css'

function Formulario() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [classeIMC, setClasseIMC] = useState(0);

    useEffect(() => {
        setImc(calculaIMC(altura, peso))
        setClasseIMC(classificaIMC(parseInt(imc)))
    }, [altura, peso, imc])

    function calculaIMC(a, p) {
        return (p / (a ** 2))
    }

    function classificaIMC(x) {
        if(x < 18) {
            return 1;
        }
        else if (x >= 18 && x <= 24) {
            return 2;
        }
        else if (x >= 25 && x <= 29) {
            return 3;
        }
        else if (x >= 30 && x <= 34) {
            return 4;
        }
        else if (x >= 35 && x <= 39) {
            return 5;
        }
        else if (x >= 40) {
            return 6;
        } else {return 0}
    }

    return (
        <>
            <div className="container">
                <form className="">
                    <h2>Calcule seu IMC:</h2>
                    <div>
                        <label>Digite sua altura(com vírgula):</label>
                        <input type="number" placeholder="altura" onChange={(e) => setAltura(e.target.value)} />
                    </div>
                    <div>
                        <label>Digite seu peso:</label>
                        <input type="number" placeholder="peso" onChange={(e) => setPeso(e.target.value)} />
                    </div>
                </form>
                <h2>Seu IMC é:{imc.toFixed(2)}</h2>
                <h2>Sua classificação está em: {classeIMC}</h2>
                <ul>
                    <li style={{ fontWeight: classeIMC === 1 ? 'bold' : 'normal' }}>
                        1- Menor que 18.5 - Abaixo do peso ;
                    </li>
                    <li style={{ fontWeight: classeIMC === 2 ? 'bold' : 'normal' }}>
                        2- Entre 18.5 e 24.9 - Peso normal ;
                    </li>
                    <li style={{ fontWeight: classeIMC === 3 ? 'bold' : 'normal' }}>
                        3- Entre 25.0 e 29.9 - Pré-obesidade ;
                    </li>
                    <li style={{ fontWeight: classeIMC === 4 ? 'bold' : 'normal' }}>
                        4- Entre 30.0 e 34.9 - Obesidade Grau 1 ;
                    </li>
                    <li style={{ fontWeight: classeIMC === 5 ? 'bold' : 'normal' }}>
                        5- Entre 35.0 e 39.9 - Obesidade Grau 2 ;
                    </li>
                    <li style={{ fontWeight: classeIMC === 6 ? 'bold' : 'normal' }}>
                        6- Acima de 40 - Obesidade Grau 3 
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Formulario
