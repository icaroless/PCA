import Title from '../components/Title';
import Img from '../assets/img/img1.png';

export default function Course(props) {
    const tabDescription = `Learn and improve skills across business, tech, design and more.`

    return (
        <main className="main-content">
            <Title title="Log Out" color="#AA0F30" text={tabDescription} 
                path={Img} description="Student" />
        </main>
    );
}