import { Button } from "./ui/button";

const Nav = () => {
  return (
    <div className="flex flex-col gap-2">
        <Button className="btn login rounded-full p-5">Login</Button>
        <Button className="btn signup rounded-full p-5">Register</Button>
    </div>
  )
}

export default Nav