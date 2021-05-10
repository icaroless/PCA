import '../assets/css/Account.css';

import Title from '../components/Title';
import Form from '../components/Form';

export default function Account(props) {

    return (
        <main className="main-content">
            <Title title="Account" color="#834070" 
                path="https://img.icons8.com/dusk/64/000000/check-book.png"/>
           <Form />
        </main>
    );
}