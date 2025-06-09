import { Box } from "@mui/material";
import ReviewItem from './ReviewItem'

export default function CamperReviews({ reviews }) {
    console.log('in CamperReviews' )
   return  (<Box>
        {reviews.map((review) => <ReviewItem review={review}/>)}
    </Box>)
}
