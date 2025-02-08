import './ProjectCard.css'

export default function ProjectCard(props) {
    console.log(props.details.img)
    return (
        <>
            <article>
                <header>
                    <h2>{props.details.name}</h2>
                </header>
                <figure>
                    <img src={props.details.img}></img>
                </figure>
                <section>
                    <p>{props.details.desc}</p>
                </section>
                {/* <footer>
                    <button><a></a></button>
                </footer> */}
            </article>
        </>
    )
}

