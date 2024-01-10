import React from 'react'
import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import StarIcon from '@mui/icons-material/Star';

const MuiRating = () => {

    const [value, setValue] = useState(3)
    console.log(value)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      }


  return (
    <>

    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        readOnly
        // icon = {<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}

      />
    </Stack>


    </>
  )
}

export default MuiRating