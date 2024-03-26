import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css';
import { createContext, useState } from "react";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const[money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * Create a context and export it
 * Add provider for the context with a value.Value could be anything
 * useContext to access value in the context API
 */