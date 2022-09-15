import { useMemo,PropsWithChildren } from 'react';
import { CssBaseline, ThemeOptions } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette from 'src/theme/palette';
import typography from 'src/theme/typography';
import componentsOverride from 'src/theme/overrides';
import shadows, { customShadows } from 'src/theme/shadows';

interface ThemeOptionsCustom extends Pick<ThemeOptions,"palette" |"shape" |"typography" | "shadows">{
  customShadows : typeof customShadows;
}

export default function ThemeProvider({ children }:PropsWithChildren) {
  const themeOptions :any= useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
