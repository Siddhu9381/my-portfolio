import './ContactComponent.css'
export default function ContactComponent(props) {
    return (
        <>
            <div id="contactComponent">
                <figure>
                    <img src={props.icon}></img>
                </figure>
                <p>
                    {props.value}
                </p>
            </div>
        </>
    )
}