import { useMemo } from "react"
import { useCryptoStore } from "../store"

function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result)
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotización</h2>


          <div className="result">
            <div>
              <p>Precio: <span className="currency">$ {result.VALUE}</span></p>
              <p>Precio más alto: <span className="currency">$ {result.CURRENT_DAY_HIGH}</span></p>
              <p>Precio más bajo: <span className="currency">$ {result.CURRENT_DAY_LOW}</span></p>
            </div>

            
            <span className={`flag-${result.VALUE_FLAG}`}></span>
          </div>
        </>
      )}
    </div>
  )
}

export default CryptoPriceDisplay