import { useState, type ChangeEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import type { Pair } from "../types";

const initialState = {
  currency: "",
  criptocurrency: "",
}

function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
  const [pair, setPair] = useState<Pair>(initialState)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name] : e.target.value
    })
  }

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.NAME} value={crypto.SYMBOL}>
              {crypto.NAME}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}

export default CriptoSearchForm;
