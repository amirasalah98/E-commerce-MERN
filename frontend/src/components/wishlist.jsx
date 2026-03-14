import {BsHeart} from "react-icons/bs";

function Wishlist() {
    return(
         <div  className="text-center">
                    <BsHeart size={50} className="my-5"/>
                <h2>Your Wishlist is Empty</h2>
                <p>Start adding artworks you love to your wishlist. They'll appear here for easy access later.
                   </p>
                   <button>Explore Gallery</button>
                </div>
    )
}
export default Wishlist;