// This is a functional-style component
export default function Greeting(props) {
    return (
        <div>
            <h1>{props.greetingText}</h1>
            <p>Welcome to our React app, {props.name}</p>
        </div>
    );
}