import { Box, List } from "@mui/material";
import ReviewItem from './ReviewItem'

export default function CamperReviews({ reviews }) {
   return  (<List sx={{ display: 'flex', flexDirection: 'column', gap: 5.5, width: 631 }}>
        {reviews.map((review) => <ReviewItem review={review}/>)}
    </List>)
}
