import { useMutation, useRouter, Routes } from "blitz"
import Form, { FORM_ERROR } from "app/core/components/Form"
import Layout from "app/core/layouts/Layout"
import LabeledTextField from "app/core/components/LabeledTextField"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import createPost from "app/posts/mutations/createPost"
import { CreatePost } from "app/posts/validations"

export const NewPost = () => {
  const [createPostMutation] = useMutation(createPost)
  const router = useRouter()
  return (
    <Form
      submitText="Publish"
      schema={CreatePost}
      onSubmit={async (values) => {
        try {
          const post = await createPostMutation(values)
          router.push(Routes.Post({ id: post.id }))
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
  )
}

NewPost.suppressFirstRenderFlicker = true
NewPost.getLayout = (page) => <Layout title="New Article">{page}</Layout>

export default NewPost
