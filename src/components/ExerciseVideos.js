import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = (exerciseVideos, name) => {
    
    if(!exerciseVideos.length) return <Loader/>;
    
    return (
        <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
            <Typography variant="h4" mb="33px">
                Take a look at these <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> videos to <br />
                improve your form.
            </Typography>
            <Stack justifyContent={"flex-start"} flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },
                    gap: { lg: '110px', xs: '0' }
                }}
            >
                {exerciseVideos?.slice(0.3).map((item, index) => {
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='blank'
                        rel="noreffer"
                    >
                        {console.log(item.video.thumbnails[0].url)}
                        <img src={item.video.thumbnails[0].url} alt={item.video.tittle}/>
                    </a>
                })}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos