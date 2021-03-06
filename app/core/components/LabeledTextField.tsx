import { FormControl, FormErrorMessage, FormLabel, Input, InputProps, Box } from "@chakra-ui/react"
import { ForwardedRef, forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<InputProps> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = forwardRef<InputProps, LabeledTextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse: props.type === "number" ? Number : undefined,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <Box w="full" {...outerProps}>
        <FormControl id={name} isInvalid={touched && normalizedError}>
          <FormLabel fontSize="xl">{label}</FormLabel>
          <Input
            {...input}
            borderRadius="sm"
            _focus={{ outline: "none" }}
            borderColor={touched && normalizedError ? "coral" : "rosewater"}
            disabled={submitting}
            {...props}
            ref={ref as ForwardedRef<HTMLInputElement>}
          />
          {touched && normalizedError && (
            <FormErrorMessage color="coral">{normalizedError}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    )
  }
)

export default LabeledTextField
