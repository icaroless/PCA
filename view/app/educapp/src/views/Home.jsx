import Title from '../components/Title';

export default function Home(props) {
    const tabDescription = `Learn and improve skills across business, tech, design and more.`

    return (
        <main className="main-content">
            <Title title="Home" text={tabDescription} color="#46335E"
                path="https://img.icons8.com/dusk/64/000000/work-from-home.png" alt="Home" />
        </main>
    );
}