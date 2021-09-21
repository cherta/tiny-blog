import { BlitzPage, useParam } from "blitz"
import Layout from "app/core/layouts/Layout"
import Form, { FORM_ERROR } from "app/core/components/Form"
import LabeledTextField from "app/core/components/LabeledTextField"
import LabeledTextArea from "app/core/components/LabeledTextArea"

const EditPost: BlitzPage = () => {
  const id = useParam("id", "string")
  return (
    <>
      <Form
        submitText="Update"
        onSubmit={async (values) => {
          try {
            console.log(values)
          } catch (error) {
            return {
              [FORM_ERROR]:
                "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
            }
          }
        }}
      >
        <LabeledTextField name="title" label="Title" placeholder="Title" fontSize="3xl" h="120%" />
        <LabeledTextArea name="body" label="Body" placeholder="Body" />
      </Form>
    </>
  )
}

EditPost.suppressFirstRenderFlicker = true
EditPost.getLayout = (page) => <Layout>{page}</Layout>

export default EditPost
