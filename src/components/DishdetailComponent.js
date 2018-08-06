import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    renderComments(dish) {
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
        return comments;
    }

    render() {
        const dish = this.props.dishDetail;

        if (dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div>
                            <h2>Comments</h2>
                            <div>{this.renderComments(dish)}</div>
                        </div>
                    </div>
                </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;
