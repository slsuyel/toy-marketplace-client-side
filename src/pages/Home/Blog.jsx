import { Accordion, Container } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("blog")
    return (
        <Container>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfePrs1BpcNT1RATNEPaoEaK11w_fwGiJTg&usqp=CAU" alt="" className="img-fluid img-thumbnail rounded-2 "
                    />

                </div>


                <div className="col-md-6">

                <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
    </Accordion.Item>

   
</Accordion>




                </div>
            </div>
        </Container>

    );
};

export default Blog;