import { Button } from '@mui/material';
import { ButtonRefetchProps } from './type';
import { FC } from 'react';

const styleButtonGoBack = {
   color: 'red',
   background: '#fff',
   marginTop: '10px',
   padding: '4px 12px',
   justifyContent: 'center',
};

const ButtonRefetch: FC<ButtonRefetchProps> = ({ reFetch, children }) => {
   return (
      <Button
         sx={styleButtonGoBack}
         onClick={reFetch}
         color="primary"
         aria-label="reFetch"
      >
         {children}
      </Button>
   );
};

export default ButtonRefetch;
