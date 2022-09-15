import { Theme } from "@mui/material";
import { customShadows } from "src/theme/shadows";

export default function Autocomplete(theme:Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: customShadows.z20,
        },
      },
    },
  };
}
