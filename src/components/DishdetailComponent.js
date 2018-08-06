import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

    function RenderComments({ dish }) {
        const comments = dish.comments.map((comment, index) => {
            return (
                <div key={dish.comments[index].id}>
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

        const dish = props.dishDetail;

        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={dish} />
                        <RenderComments dish={dish} />
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
