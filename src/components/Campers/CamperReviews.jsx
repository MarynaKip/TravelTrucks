import { Box } from "@mui/material";
import ReviewItem from './ReviewItem'

export default function CamperReviews({ reviews }) {
   return  (<Box>
        {reviews.map((review) => <ReviewItem review={review}/>)}
    </Box>)
}
