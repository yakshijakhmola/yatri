import { useState,useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { useNavigate, useParams } from 'react-router-dom';
import { FeatureAPI } from '../APIFetch/APIFetchCompo';
const FilterFeature = () => {
    const [featurecard, setFeatureCard] = useState([]);
    const [filterfeat, setfilterfeat] = useState([]);
    const {slug} = useParams()
        const FetchFeatureAPI = async () =>{
            try{
                const FetchFeatureData = await FeatureAPI();
                setFeatureCard(FetchFeatureData?.data.products)
            }
            catch(error){
                console.error("Feature not found : ", error)
            }
        }
        useEffect(() => {
              const Filterfeat = featurecard.filter((val) =>{
                return val.category === slug
              });
              setfilterfeat(Filterfeat);
        }, [featurecard, slug]);

        useEffect(()=>{
            FetchFeatureAPI();
        },[])
        const navigate = useNavigate()
        const handleCardClick = (feature_slug) => {
            navigate(`/feature/${feature_slug}`);
          };
  return (
    <div className='py-10'>
        <div className="container">
            <div className="grid grid-cols-12">
                {filterfeat.map((featureval,ind)=>(
                    <div className="col-span-3" key={ind} onClick={() => handleCardClick(featureval.id)}>
                        <FeatureCard 
                            key={ind} 
                            feature_slug ={featureval.category}
                            feature_image={featureval.images}
                            feature_name={featureval.title}
                            feature_category={featureval.category || "Not Found Categories"}
                            feature_price ={featureval.price}
                            feature_discount ={featureval.discountPercentage}
                            feature_rating={featureval.rating}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FilterFeature