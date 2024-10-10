import { Button } from "../components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
        <Button className="btn login rounded-full p-5">Login</Button>
        <Button className="btn signup rounded-full p-5">Register</Button>
    </div>
  )
}

export default page