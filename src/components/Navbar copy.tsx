import { Button } from "react-bootstrap"

export default function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-around align-content-center p-5">
        <Button variant="primary">Home</Button>
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Project</Button>
        <Button variant="secondary">Skills</Button>
        <Button variant="secondary">Contact</Button>
      </div>
    </>
  )
}