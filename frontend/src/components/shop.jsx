import {useEffect,useState,useContext} from 'react'
import axios from 'axios'
import style from './home.module.css'
import { DarkModeContext } from "../DarkModeContext";
import { CartContext } from '../cartContext';

function Shop() {
    const [artworks,setArtworks]=useState([])
    const {darkMode}=useContext(DarkModeContext)
    const { addToCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchArt=async()=>{
            try{
                setLoading(true);
                const response= await axios.get(`${import.meta.env.VITE_API_URL}/api/art`,{ withCredentials: true })
                setArtworks(response.data)
            }catch(error){
                setError("Failed to fetch products");
                console.log('Error fetching data:',error)
            }finally{
                setLoading(false);
            }
        }
        fetchArt()
    },[])
    return(

        <div className={`py-5 container ${darkMode? style.containerDark:style.containerLight} `}>
        
            <div className='pb-5'>
                        <span>Welcome to my enchanted world</span>
                        <h2>Where dreamy <i>landscapes bloom</i></h2>
                        <p>
                           "Hand-painted landscapes that capture nature's whispered secrets through delicate ink strokes,
                            soft oil pastels, and dreamy acrylics. Each piece is a love letter to the quiet moments and
                             wild adventures that make our hearts flutter."
                        </p>
                       
                        <div className='d-flex'>
                        <button>Explore My Gallery</button>
                        <button>Meet the Dreamer</button>
                        </div>
                    </div>
                    {/* filter + gallery items  */}
                                        <div className='container d-flex flex-wrap flex-column flex-md-row justify-content-center'>
{loading ? (
  <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
    <div className={style.spinner}></div>
  </div>
) : (
                    artworks.map((art) => (
        <div key={art._id} className={`col-md-3 text-center p-4 m-1 ${style.shopCardsCard}`}>
          <img src={art.image} alt={art.title} width="200" />
          <h5>{art.title}</h5>
          <p>${art.price}</p>
          <p>{art.category}</p>
          <p>{art.size}</p>
        <button className={`my-2 ${style.gradientBtn}`}  onClick={() => addToCart(art)}>Add to cart</button>
          
        </div>
      ))
    )}
              </div>

        </div>
    
    )
}
export default Shop
