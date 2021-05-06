import Title from '../components/Title';
import Form from '../components/Form';
import Img from '../assets/img/img1.png';

export default function Course(props) {
    const tabDescription = `Learn and improve skills across business, tech, design and more.`

    return (
        <main className="main-content">
            <Title title="Account" color="#834070" text={tabDescription} 
                path={Img} description="Student" />
           <Form />
        </main>
    );
}