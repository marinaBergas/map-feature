
import { useLocation } from 'react-router-dom';

const SchoolCard = ({props}) => {
    const location = useLocation();
    const myparam = location.state.params;
  

    return (
        <div>
             <h1>{myparam}</h1> 
        </div>
    )
}

export default SchoolCard
