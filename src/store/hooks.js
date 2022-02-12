import { useContext } from "react"
import { Context } from "./Context"

const useStore = () => {
    const [stateG_Data, dispatchG_Data] = useContext(Context)
    return [stateG_Data, dispatchG_Data]
}

const convertPrice = (num) => {
    const formatter = new Intl.NumberFormat('vi-VN',{
        style: 'currency',
        currency: 'VND'
      })
      return formatter.format(num)
}

export {useStore, convertPrice}