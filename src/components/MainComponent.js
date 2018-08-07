import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    
    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const MenuDishes = () => {
            return (
                <Menu dishes={this.props.dishes} />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                    <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                        />
            );
        }

        const AboutUs = () => {
            return (
                <About leaders={this.props.leaders} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={MenuDishes} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter((connect(mapStateToProps)(Main)));
