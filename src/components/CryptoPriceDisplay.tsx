import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  return (
    <div>
      {loading ? <Spinner /> : hasResult && (
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