import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (exerciseVideos == "") {
        console.log("canceled");
        return <Loader />;
    } else {
        return (
            <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                    Watch <span style={{ color: '#CB8DEC', textTransform: 'capitalize' }}>{name}</span> exercise videos
                </Typography>
                <Stack justifyContent={"flex-start"} flexWrap="wrap" alignItems="center"
                    sx={{
                        flexDirection: { lg: "row" },
                        gap: { lg: '110px', xs: '0' },
                    }}
                >
                    {console.log("videos found")}
                    {exerciseVideos.slice(0, 3).map((item, index) => {
                        { console.log(item, index) }
                        <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">

                            {console.log(item.video.thumbnails[0].url)}
                            {console.log("Lien : " + `https://www.youtube.com/watch?v=${item.video.videoId}`)}
                            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Box>
                                <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                                    {item.video.title}
                                </Typography>
                                <Typography fontSize="14px" color="#000">
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    })}
                </Stack>

            </Box>
        );
    };


};

export default ExerciseVideos;