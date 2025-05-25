import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";


const useProductStore = create((set, get) => ({
    products: [], 
    loding: true,


    createProduct: async (formData) => {
        set({ loding: true })
        try {
            const product = await axios.post("http://localhost:8000/api/product/create",  formData )
            set((prevData) => ({
                products: [...prevData.products, product]
                , loding: false
            }))
        } catch (error) {
            toast.error(error.message ,)
        }
    }

}))


export default useProductStore;