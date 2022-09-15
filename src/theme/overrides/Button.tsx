import { Theme } from "@mui/material";
import { customShadows } from "src/theme/shadows";
import { GREY } from "src/theme/palette";

export default function Button(theme:Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: GREY[800],
          boxShadow: customShadows.z8,
          '&:hover': {
            backgroundColor: GREY[400],
          },
        },
        containedPrimary: {
          boxShadow: customShadows.primary,
        },
        containedSecondary: {
          boxShadow: customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${GREY[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
