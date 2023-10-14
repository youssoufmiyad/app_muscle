import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartPNG from "../assets/icons/body-part.png"
import TargetPNG from "../assets/icons/target.png"
import EquipmentPNG from "../assets/icons/equipment.png"

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, equipment, gifUrl, id, name, target } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartPNG,
            name: bodyPart,
        },
        {
            icon: TargetPNG,
            name: target,
        },
        {
            icon: EquipmentPNG,
            name: equipment,
        },
    ];
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" variant='h3'>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} variant='h6'>
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> is a pretty descent exercise to target your {target}.<br/> It will help you strengthen your {bodyPart}.
                </Typography>
                {extraDetail.map((item) => {
                    <Stack key={item.name} gap="30px" direction={'column'} alignItems={"center"}>
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }} variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                })}
            </Stack>
        </Stack>
    )
}

export default Detail