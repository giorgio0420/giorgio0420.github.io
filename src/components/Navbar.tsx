import { Tab, Tabs } from "react-bootstrap"
import Home from "./Home";

export default function Navbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="About">
        Tab content for About
      </Tab>
      <Tab eventKey="project" title="Project">
        Tab content for Project
      </Tab>
      <Tab eventKey="skills" title="Skills">
        Tab content for Skills
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}