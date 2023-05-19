import { Accordion, Container } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
    useTitle("blog")

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);


    return (
        <Container data-aos="zoom-in-up">
            <div className="row" >
                <div className="col-md-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfePrs1BpcNT1RATNEPaoEaK11w_fwGiJTg&usqp=CAU" alt="" className="img-fluid img-thumbnail rounded-2 "
                    />

                </div>


                <div className="col-md-6">

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                            </Accordion.Header>
                            <Accordion.Body>
                                An access token and a refresh token are two types of tokens used in authentication systems. An access token is granted to a client application after successful authentication and is used to access protected resources on a server. It contains information about the users identity and permissions. When making requests to protected resources, the client includes the access token in the request headers for authentication.

                                A refresh token, on the other hand, is a long-lived credential issued alongside the access token. Its purpose is to obtain a new access token when the current one expires. While access tokens have a short lifespan, refresh tokens are typically valid for a longer duration. When the access token expires, the client can use the refresh token to request a new access token without the user needing to re-authenticate.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Compare SQL and NoSQL databases?</Accordion.Header>
                            <Accordion.Body>
                                SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems with distinct characteristics. SQL databases follow a relational model, organizing data into tables with predefined schemas, while NoSQL databases offer flexibility in data modeling and support various models like key-value, document, columnar, or graph. SQL databases scale vertically by adding resources to a single server, while NoSQL databases scale horizontally by distributing data across multiple servers or clusters. SQL databases use SQL as the query language, providing a standardized way to query and manipulate data, while NoSQL databases have their own query languages specific to their data model. SQL databases prioritize strong ACID properties, ensuring data integrity and transactional consistency, while NoSQL databases may relax ACID constraints for scalability and performance benefits. SQL databases are suitable for complex querying and applications requiring strict consistency, while NoSQL databases excel in handling large-scale data, unstructured data, and scenarios where flexibility and scalability are crucial. The choice between SQL and NoSQL depends on the specific requirements of the application and the nature of the data being stored.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is express js? What is Nest JS</Accordion.Header>
                            <Accordion.Body>
                                Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs. Express.js allows developers to create server-side applications efficiently by providing an easy-to-use interface for handling HTTP requests, routing, middleware, and view rendering.

                                Express.js simplifies the process of building web applications by providing a lightweight and unopinionated framework. It offers a wide range of middleware modules that can be easily integrated into the applications request-response cycle. Developers can leverage these middleware functions for tasks such as parsing request bodies, handling cookies, logging, and authentication.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is MongoDB aggregate and how does it work</Accordion.Header>
                            <Accordion.Body>
                                In MongoDB, the aggregate function is a powerful feature that allows you to perform advanced data processing operations on collections. It provides a way to perform complex data transformations, aggregations, and computations directly within the database.

                                The aggregate function in MongoDB works by taking an array of stages as input. Each stage represents a step in the data processing pipeline, where documents pass through each stage sequentially, and the output of one stage becomes the input of the next stage. The pipeline stages can perform various operations like filtering, grouping, sorting, transforming, and computing.
                            </Accordion.Body>
                        </Accordion.Item>


                    </Accordion>




                </div>
            </div>
        </Container>

    );
};

export default Blog;