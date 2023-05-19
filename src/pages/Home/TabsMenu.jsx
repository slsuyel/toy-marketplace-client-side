import { Tab, Tabs } from "react-bootstrap";

const TabsMenu = () => {


    return (
        <div className="my-5 mx-3">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 justify-content-center"
            >
                <Tab eventKey="home" title="Sports Cars" className="border-0">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa ipsam maxime modi necessitatibus dolor tempora inventore accusamus laboriosam sunt ut voluptatem magni ratione dolore non ipsum minus odio ex.
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Racing car" className="border-0">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa ipsam maxime modi necessitatibus dolor tempora inventore accusamus laboriosam sunt ut voluptatem magni ratione dolore non ipsum minus odio ex.
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Ambulance car" className="border-0">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa ipsam maxime modi necessitatibus dolor tempora inventore accusamus laboriosam sunt ut voluptatem magni ratione dolore non ipsum minus odio ex.
                    </div>
                </Tab>
                <Tab eventKey="classic" title="Classic car" className="border-0">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa ipsam maxime modi necessitatibus dolor tempora inventore accusamus laboriosam sunt ut voluptatem magni ratione dolore non ipsum minus odio ex.
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabsMenu;