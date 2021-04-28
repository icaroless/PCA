import Title from '../components/Title';
import Img from '../assets/img/img1.png';

export default function Course(props) {
    const tabDescription = `Learn and improve skills across business, tech, design and more.`

    return (
        <Title title="Settings" color="#D81B60" text={tabDescription} 
            path={Img} description="Student" />
    );
}