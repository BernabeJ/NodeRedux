import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { getIsLogged } from "../../store/selectors";


const PrivateRoute = ({isLogged, ...props }) => {
   
    return isLogged ? (
        <Route{...props} />
    ) : (
        <Route>
            {({ location }) => (
                <Redirect to={{ pathname: "/login", state: { from: location } }} />
                
            )}
        </Route>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: getIsLogged(state),
    }
}
    

export default connect(mapStateToProps)(PrivateRoute);