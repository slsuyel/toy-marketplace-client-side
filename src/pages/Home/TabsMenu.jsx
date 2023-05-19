import { useContext, useEffect, useState } from "react";
import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProviders";

const TabsMenu = () => {
    const { setLoading } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("classic");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("https://ass-server-slsuyel.vercel.app/alltoys")
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
                setLoading(false);
            });
    }, []);

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const filteredToys = toys.filter((toy) => toy.subCategory === activeTab);

    const generateCards = () => {
        return filteredToys.slice(0, 2).map((toy, index) => (

            <Card style={{ width: '18rem' }} key={index}>
                <Card.Body>
                    <Card.Img variant="top" src={toy?.pictureUrl} className="img-fluid" />
                    <Card.Title>{toy.name || "No toys found"}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <p>  Price : $ {toy?.price}</p>
                        <p> Rating : $ {toy?.rating}</p>
                    </div>
                    <div className="text-center w-100"> <Button variant="primary">Go somewhere</Button></div>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <div className="mx-2">
            <Tabs
                id="car-tabs"
                activeKey={activeTab}
                onSelect={handleTabSelect}
                className="mb-3 justify-content-center"
            >
                <Tab eventKey="Classic Cars" title="Classic Car" className="border-0">
                    <div className="d-flex justify-content-center gap-3 flex-wrap">{generateCards()}</div>
                </Tab>

                <Tab eventKey="Ambulances Cars" title="Ambulance Car" className="border-0">
                    <div className="d-flex justify-content-center gap-3 flex-wrap">{generateCards()}</div>
                </Tab>

                <Tab eventKey="Racing Cars" title="Racing Car" className="border-0">
                    <div className="d-flex justify-content-center gap-3 flex-wrap">{generateCards()}</div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabsMenu;