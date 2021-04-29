import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


export default function Tab(props) {
    return (
        <Link to={props.tab} className={"opt"}>
             <FontAwesomeIcon icon={props.fa} />
            {props.text}
        </Link>
    );
}