const React = require('react');
const ReactRouter = require('react-router');
const transparentBg = require('../styles').transparentBg;
const Link = ReactRouter.Link;
const Home = React.createClass({
   render: function () {
       return (
         <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
         <h1>Github Battle</h1>
             <p className="lead">Face motto</p>
             <Link to="/playerOne">
                 <button type="button" className="btn btn-lrg btn-success">Get Started</button>
             </Link>
         </div>
       )
   }
});
module.exports = Home;