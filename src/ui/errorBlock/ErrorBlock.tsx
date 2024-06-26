import { FC, useState } from 'react';
import TitleCard from '../typography/titleCard/TitleCard';
import DescriptionCard from '../typography/descriptionCard/descriptionCard';
import { Box, Card, CardContent } from '@mui/material';
import ButtonRefetch from '../buttons/buttonRefetch/ButtonRefetch';

import type { ErrorBlockProps } from './type';

const styleCard = {
   padding: '10px',
   position: 'relative',
   boxShadow: '-2px 2px 5px rgba(0,0,0,.5)',
   width: '100%',
   height: '100%',
   maxWidth: '404px',
   borderRadius: '4px',
   backgroundColor: 'red',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   '@media (max-width: 500px)': {
      maxWidth: '312px',
   },
};
const styleCardContent = {
   textAlign: 'center',
   padding: '20px',
   ' &:last-child ': {
      paddingBottom: '20px',
   },
};

const styleErrorBlockCloseButton = {
   position: 'absolute',
   right: '10px',
   top: '10px',
};

const styleErrorText = {
   color: '#fff',
};

const ErrorBlock: FC<ErrorBlockProps> = ({ message, name, refetch }) => {
   const [open, setOPen] = useState<boolean>(true);

   const onClickButtonClose = () => {
      setOPen(false);
   };

   return (
      <>
         {open && (
            <Card sx={styleCard}>
               <Box
                  onClick={onClickButtonClose}
                  sx={styleErrorBlockCloseButton}
               >
                  <img src="/image/close.svg" alt="close" />
               </Box>
               <CardContent sx={styleCardContent}>
                  <TitleCard sx={styleErrorText}>Error! {name}</TitleCard>
                  <DescriptionCard sx={styleErrorText}>
                     {message}
                  </DescriptionCard>
                  <DescriptionCard sx={styleErrorText}>soryy(</DescriptionCard>
                  <ButtonRefetch reFetch={refetch}>refetch</ButtonRefetch>
               </CardContent>
            </Card>
         )}
      </>
   );
};

export default ErrorBlock;
