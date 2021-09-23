import { Suspense } from "react"
import { BlitzPage, useParam, useMutation, useRouter, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import Form, { FORM_ERROR } from "app/core/components/Form"
import LabeledTextField from "app/core/components/LabeledTextField"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import { UpdatePost } from "app/posts/validations"
import updatePost from "app/posts/mutations/updatePost"
import getPost from "app/posts/queries/getPost"

const EditPost: BlitzPage = () => {
  const id = useParam("id", "string") as string
  return (
    <Suspense fallback={null}>
      <PostForm id={id} />
    </Suspense>
  )
}

const PostForm = ({ id }: { id: string }) => {
  const router = useRouter()
  const [post] = useQuery(getPost, { id })
  const [updatePostMutation] = useMutation(updatePost)
  return (
    <>
      <Form
        submitText="Update"
        schema={UpdatePost}
        initialValues={post}
        onSubmit={async (values) => {
          try {
            const post = await updatePostMutation(values)
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
    </>
  )
}

EditPost.suppressFirstRenderFlicker = true
EditPost.getLayout = (page) => <Layout>{page}</Layout>

export default EditPost
