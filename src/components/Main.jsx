import "./Main.css";
import { useState } from "react";

function Main() {
    // 1. Estados agrupados por contexto
    const [borderRadius, setBorderRadius] = useState(0);
    const [colors, setColors] = useState({ r: 0, g: 0, b: 0 });

    // 2. Função genérica para alterar valores numéricos com limite mínimo de 0
    const updateValue = (setter, currentVal, delta) => {
        setter(Math.max(0, currentVal + delta));
    };

    // 3. Função genérica para as cores
    const addColor = (channel) => {
        setColors(prev => ({
            ...prev,
            [channel]: Math.min(prev[channel] + 10, 255) // Incremento de 10 em 10, máx 255
        }));
    };

    return (
        <div className="container">
            <section className="section-border-radius">
                <div>
                    <h1 className="title">Border Radius</h1>
                    <div className="values">
                        <code>border-radius: {borderRadius}px;</code>
                        <div className="controls">
                            <button onClick={() => updateValue(setBorderRadius, borderRadius, 1)}>+1</button>
                            <button onClick={() => updateValue(setBorderRadius, borderRadius, -1)}>-1</button>
                        </div>
                    </div>
                </div>
                <div 
                    className="square" 
                    style={{ borderRadius: `${borderRadius}px` }}
                ></div>
            </section>

            <section className="section-background-color">
                <div 
                    className="square" 
                    style={{ backgroundColor: `rgb(${colors.r}, ${colors.g}, ${colors.b})` }}
                ></div>
                <div className="controls">
                    <button onClick={() => addColor('r')}>Red +10</button>
                    <button onClick={() => addColor('g')}>Green +10</button>
                    <button onClick={() => addColor('b')}>Blue +10</button>
                </div>
                <p>RGB({colors.r}, {colors.g}, {colors.b})</p>
            </section>
        </div>
    );
}

export default Main;