import { Theme } from "@mui/material";

import Card from 'src/theme/overrides/Card';
import Paper from 'src/theme/overrides/Paper';
import Input from 'src/theme/overrides/Input';
import Button from 'src/theme/overrides/Button';
import Tooltip from 'src/theme/overrides/Tooltip';
import Backdrop from 'src/theme/overrides/Backdrop';
import Typography from 'src/theme/overrides/Typography';
import CssBaseline from 'src/theme/overrides/CssBaseline';
import Autocomplete from 'src/theme/overrides/Autocomplete';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme:Theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(theme),
    Autocomplete(theme)
  );
}
