import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = (exerciseVideos, name) => {
    console.log(exerciseVideos.exerciseVideos);
    console.log(exerciseVideos.exerciseVideos.length);
    if (!exerciseVideos.exerciseVideos.length) return <Loader />;

    return (
        <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent={"flex-start"} flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },
                    gap: { lg: '110px', xs: '0' },
                }}
            >
                {Object.keys(exerciseVideos.exerciseVideos.slice(0, 2)).forEach((item, index) => {
                    { console.log(item, index) }
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='blank'
                        rel="noreffer"
                    >
                        {console.log(item.video.thumbnails[0].url)}
                        <img src={item.video.thumbnails[0].url} alt={item.video.tittle} />
                    </a>
                })}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos