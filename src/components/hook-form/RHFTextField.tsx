import { useFormContext, Controller } from 'react-hook-form';
import { TextField,TextFieldProps } from '@mui/material';

export interface RHFTextFieldProps extends Omit<TextFieldProps, "name">{
    name: string;
}

export default function RHFTextField({ name, ...other }:RHFTextFieldProps) {
  const { control } = useFormContext();
  
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
