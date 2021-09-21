import {
  Textarea,
  TextareaProps,
  Box,
  InputProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react"
import { ForwardedRef, forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextAreaProps extends PropsWithoutRef<TextareaProps> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextArea = forwardRef<InputProps, LabeledTextAreaProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <Box w="full" {...outerProps}>
        <FormControl id={name} isInvalid={touched && normalizedError}>
          <FormLabel fontSize="xl">{label}</FormLabel>
          <Textarea
            {...input}
            borderRadius="sm"
            _focus={{ outline: "none" }}
            borderColor={touched && normalizedError ? "coral" : "rosewater"}
            disabled={submitting}
            rows={10}
            {...props}
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
          />
          {touched && normalizedError && (
            <FormErrorMessage color="coral">{normalizedError}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    )
  }
)

export default LabeledTextArea
