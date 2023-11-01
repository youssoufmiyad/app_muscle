import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import ExerciseCard from './ExerciseCard';
import YoutubeWindow from './YoutubeWindow';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (exerciseVideos == "") {
        console.log("canceled");
        return <Loader />;
    } else {
        return (
            <Box sx={{ mt: { lg: '203px', xs: '20px' } }} p="20px">
                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                    Watch <span style={{ color: '#CB8DEC', textTransform: 'capitalize' }}>{name}</span> tutorials
                </Typography>
                <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                    {exerciseVideos.slice(0, 3).map((item) => (
                        <YoutubeWindow videoId={item.video.videoId} />
                    ))}
                </Stack>
            </Box>
        );
    };


};

export default ExerciseVideos;