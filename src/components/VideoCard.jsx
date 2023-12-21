import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Card, CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../Utilis/Constant';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card>
        <Link>
        
        </Link>
    </Card>
  )
}

export default VideoCard