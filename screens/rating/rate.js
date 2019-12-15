import React,{useState} from "react"
import StarRating from 'react-native-star-rating';
 
const Rating =(props)=> {
 
const [rate,setRate]=useState(3.5)

 const onStarRatingPress=(rating)=> {
    setRate(rating)
  }
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rate}
        selectedStar={(rating) => onStarRatingPress(rating)}
        fullStarColor={'#d4af37'}
      />
    );
  }

 
export default Rating