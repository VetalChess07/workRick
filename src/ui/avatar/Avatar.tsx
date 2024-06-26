import { FC } from 'react';
import { Avatar as AvatarMUI } from '@mui/material';
import type { AvatarProps } from './type';

const styleAvatar = {
   width: '300px',
   height: '300px',
   border: '5px solir #F2F2F7',
   borderRadius: '50%',
   '@media (max-width: 700px)': {
      width: '146px',
      height: '148px',
   },
};

const Avatar: FC<AvatarProps> = ({ img, alt }) => {
   return <AvatarMUI src={img} alt={alt} sx={styleAvatar} />;
};

export default Avatar;
