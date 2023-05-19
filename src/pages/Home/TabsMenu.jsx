import { useContext, useEffect, useState } from "react";
import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TabsMenu = () => {
    const { setLoading ,user} = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("Ambulances Cars");
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

            <Card style={{ width: '18rem' }} className="border-0  shadow-lg" key={index}>
                <Card.Body>
                    <Card.Img variant="top" src={toy?.pictureUrl} className="img-fluid" />
                    <Card.Title className="my-2 text-center text-danger">Car Name : {toy.name || "No toys found"}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <p>  Price : $ {toy?.price}</p>
                        <p> Rating : ☆ {toy?.rating}</p>
                    </div>
                    <div className="text-center w-100">

                    <Link to={`/toydetails/${toy._id}`}>
                    {user ? (
                      <Button variant="primary">View Details</Button>
                    ) : (
                      <Button variant="primary" onClick={() => Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You have to log in first to view details',
                        showConfirmButton: false,
                        timer: 1000
                      })}>
                        View Details
                      </Button>
                    )}
                  </Link>


                    </div>
                </Card.Body>
            </Card>
        ));
    };

    return (
        <div className="mx-2 py-4">
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
