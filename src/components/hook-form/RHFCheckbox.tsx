import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox,FormControlLabel,FormControlLabelProps, FormGroup } from '@mui/material';

interface RHFCheckboxProps  extends Omit<FormControlLabelProps,"name">{
  name: string
}

export function RHFCheckbox({ name, ...other }:RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
    {...other}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
    />
  );
}

interface Option {
  value: string;
  label: string;
}

interface RHFMultiCheckboxProps extends Omit<FormControlLabelProps,"name">{
  options:Option[];
  name:string
}

// export function RHFMultiCheckbox({ name, options, ...other }:RHFMultiCheckboxProps) {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => {
//         const onSelected = (option:string) =>
//           field.value.includes(option) ? field.value.filter((value) => value !== option) : [...field.value, option];

//         return (
//           <FormGroup>
//             {options.map((option) => (
//               <FormControlLabel
//                 key={option.value}
//                 label={option.label}
//                 control={
//                   <Checkbox
//                     checked={field.value.includes(option.value)}
//                     onChange={() => field.onChange(onSelected(option.value))}
//                   />
//                 }
//                 {...other}
//               />
//             ))}
//           </FormGroup>
//         );
//       }}
//     />
//   );
// }
