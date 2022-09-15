import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box,BoxProps } from '@mui/material';

interface PageProps extends BoxProps {
  title?: string;
  meta?: any
}

const Page = forwardRef(({ children, title = '', meta, ...other }:PageProps, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
