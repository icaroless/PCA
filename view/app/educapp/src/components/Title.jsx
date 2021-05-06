export default function Title(props) {
    const cardStyle = {
        backgroundColor: props.color || '#6C4360'
    }

    return (
        <div className="wrapper">
            <div className="card" style={cardStyle} >
                <div className="card-title">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
                <img src={props.path} alt={props.description} />
            </div>
        </div>
    );
}