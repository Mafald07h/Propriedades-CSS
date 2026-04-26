import "./Main.css"
import { useState } from "react"

function Main(){

    const [valorGeral,setValorGeral] = useState(0)

    function addValue(){
        setValorGeral(valorGeral => valorGeral + 1)
    }

    function removeValue(){
        setValorGeral(valorGeral => valorGeral - 1)
        if(valorGeral < 0){
            setValorGeral(valorGeral => valorGeral + 2)
        }
    }

    return (
        <>
            <div className="container">
                <section id="border-radius" className="section-border-radius">
                <div>
                    <h1 className="title">Border Radius</h1>
                    <div className="values">
                        <div className="general-value">
                            <code>
                                <pre>border-radius: {valorGeral};</pre>
                            </code>
                            <button onClick={addValue}>Change +1 </button>
                            <button onClick={removeValue}>Change -1 </button>
                        </div>
                    </div>
                </div>
                <div className="square" style={{borderRadius: valorGeral}}>
                </div>


                </section>
                <section id="box-shadow">

                </section>
                <section id="margin">

                </section>
                <section id="padding">

                </section>
            </div>
        </>
    )
}

export default Main