import axios from "axios"

export const FeatureAPI = async () =>{
    try{
        const FeatureAPIData = await axios.get("https://dummyjson.com/products")
        return FeatureAPIData
    }
    catch(error){
        console.error("Feature not found:", error)
    }
}

export const FeatureDetail = async (data) =>{
    try{
        const FeatureAPIData = await axios.get(`https://dummyjson.com/products/${data}`)
        return FeatureAPIData
    }
    catch(error){
        console.error("Feature not found:", error)
    }
}