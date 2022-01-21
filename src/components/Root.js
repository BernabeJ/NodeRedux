import { Provider , connect, useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = ({ children, store }) => (
   <Provider store={store}>
      <Router>
         {children}
      </Router>
   </Provider>
);

export default Root;