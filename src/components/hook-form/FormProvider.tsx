import { FormHTMLAttributes, PropsWithChildren } from "react";

import { FormProvider as Form ,FieldValues, UseFormReturn, useForm} from 'react-hook-form';

interface FormProviderProps<T extends FieldValues> {
  formProps?: FormHTMLAttributes<HTMLFormElement>;
  methods?: UseFormReturn<T>;
  shouldPressKey?: boolean;
  onSubmit: ()=> void
}

const FormProvider =  <T extends FieldValues>({ children, onSubmit, methods }:PropsWithChildren<FormProviderProps<T>>)=> {
  const anotherMethods = useForm<T>();
  const finalMethods = methods ? methods : anotherMethods;

  return (
    <Form {...finalMethods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

export default FormProvider;
