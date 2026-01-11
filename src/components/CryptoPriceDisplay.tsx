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
              <p>El precio es de: <span>${result.VALUE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CryptoPriceDisplay