export default function Title(props) {
    const cardStyle = {
        backgroundColor: props.color || '#232342'
    }

    return (
        <div className="card" style={cardStyle} >
            <div className="card-title">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <img src={props.path} alt={props.description} />
        </div>
    );
}