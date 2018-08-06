import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({ dish }) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({ dishComments }) {
        const comments = dishComments.map((comment, index) => {
            return (
                <div key={dishComments[index].id}>
                    <p className="mb-3 mt-3">
                        {comment.comment}
                    </p>
                    <p className="mb-3 mt-3">
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <div>
                    <h2>Comments</h2>
                    <div>{comments}</div>
                </div>
            </div>
        );
    }

    const Dishdetail = (props) => {

        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments dishComments={props.comments} />
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


export default Dishdetail;
