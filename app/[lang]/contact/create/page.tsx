import CreateForm from "@/components/Contact/create-form"
const CreateContactPage = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
        <CreateForm />
    </div>
  )
}

export default CreateContactPage