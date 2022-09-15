import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface useResponsiveProps {
  query: 'up' | 'down' | 'between' | 'only',
  key: Breakpoint;
  start?:Breakpoint | number;
  end?:Breakpoint | number
}

export default function useResponsive({query, key, start, end}:useResponsiveProps) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between' && start && end) {
    return useMediaQuery(theme.breakpoints.between(start, end));
  }

  if (query === 'only') {
    return mediaOnly;
  }
  return null;
}
