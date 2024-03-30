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
        if (x > 0 && x < 18) {
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
        } else { return 0 }
    }

    return (
        <>
            <div className="container">
                <form className="">
                    <div className={styles.inputArea}>
                        <label>Digite sua altura(em metros):</label>
                        <input type="number" placeholder="altura" onChange={(e) => setAltura(e.target.value)} />
                        <label>Digite seu peso(em kilos):</label>
                        <input type="number" placeholder="peso" onChange={(e) => setPeso(e.target.value)} />
                    </div>
                </form>
                <div className={styles.resultado}>
                    <div>
                        <h2>Seu IMC é:{imc.toFixed(2)}</h2>
                        <h2>Sua classificação está em: {classeIMC}</h2>
                    </div>
                    <ul>
                        {/* classe 1 */}
                        <li> 
                            <p style={{ fontWeight: classeIMC === 1 ? 'bold' : 'normal', color: classeIMC === 1 ? 'orange' : 'black' }}>
                                1- Menor que 18.5 - Abaixo do peso:
                            </p>
                            <p style={{display: classeIMC === 1 ? 'block' : 'none'}}>
                                É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.
                            </p>
                        </li>
                        {/* classe 2 */}
                        <li>
                            <p style={{ fontWeight: classeIMC === 2 ? 'bold' : 'normal', color: classeIMC === 2 ? 'green' : 'black' }}>
                                2- IMC ≥18,5 até 24,9kg/m2: peso adequado:
                            </p>
                            <p style={{display: classeIMC === 2 ? 'block' : 'none'}}>
                                Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado. Algumas pessoas apresentam IMC dentro da normalidade, mas têm circunferência abdominal maior que a recomendada e/ou quantidade de massa gorda acima do ideal.
                            </p>
                        </li>
                        {/* classe 3 */}
                        <li>
                            <p style={{ fontWeight: classeIMC === 3 ? 'bold' : 'normal', color: classeIMC === 3 ? '#FFD23F' : 'black' }}>
                                3- IMC ≥25 até 29,9kg/m2: sobrepeso:
                            </p>
                            <p style={{display: classeIMC === 3 ? 'block' : 'none'}}>
                                O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. Também é importante avaliar outros parâmetros, como a circunferência abdominal.
                            </p>
                        </li>
                        {/* classe 4 */}
                        <li>
                            <p style={{ fontWeight: classeIMC === 4 ? 'bold' : 'normal', color: classeIMC === 4 ? '#FFC700' : 'black' }}>
                                4- IMC de 30,0- 34,9kg/m2: obesidade grau 4:
                            </p>
                            <p style={{display: classeIMC === 4 ? 'block' : 'none'}}>
                                É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames (colesterol e glicemia, por exemplo) estejam normais.
                            </p>
                        </li>
                        {/* classe 5 */}
                        <li>
                            <p style={{ fontWeight: classeIMC === 5 ? 'bold' : 'normal', color: classeIMC === 5 ? 'orange' : 'black' }}>
                                5- IMC de 35,0- 39,9kg/m2: obesidade grau 2:
                            </p>
                            <p style={{display: classeIMC === 5 ? 'block' : 'none'}}>
                                Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação
                            </p>
                        </li>
                        {/* classe 6 */}
                        <li>
                            <p style={{ fontWeight: classeIMC === 6 ? 'bold' : 'normal', color: classeIMC === 6 ? 'red' : 'black' }}>
                                6- IMC ≥ 40,0kg/m2: obesidade grau 3:
                            </p>
                            <p style={{display: classeIMC === 6 ? 'block' : 'none'}}>
                                Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Formulario
