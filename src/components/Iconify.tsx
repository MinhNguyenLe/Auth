import { Icon } from '@iconify/react';
import { Box ,BoxProps} from '@mui/material';

interface IconifyProps extends BoxProps{
  icon:string
}

export default function Iconify({ icon, sx,...props}: IconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...props} />;
}
