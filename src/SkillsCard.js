export default function SkillsCard(props) {
    return (
        <>
            <article>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <section>
                    {props.skills.map((i) =>
                        <p style={{ padding: "2px 5px", background: "rgba(255, 255, 255, 0.3)" }}>{i}</p>
                    )}
                </section>
            </article>
        </>
    )
}