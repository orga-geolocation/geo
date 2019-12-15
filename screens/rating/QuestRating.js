import React from "react"
import StarRating from 'react-native-star-rating';
 
const QuestRating =(props)=> {
 
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={props.rating}
        starSize={16}
        fullStarColor={'#d4af37'}
      />
    );
  }

 
export default QuestRating