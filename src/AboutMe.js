import asu from '../src/assets/asu.png'
import pwc from '../src/assets/pwc.png'
import griet from './assets/griet.png'
export default function AboutMe() {

    return (
        <>
            <main id="about">
                <section>
                    <figure><img src={asu}></img></figure>
                    <p>Results-driven Fullstack Software Engineer with experience in Software Development, React.js, UI/UX design, and agile
                        development. Passionate about creating scalable, intuitive, and high-performance web applications. Experienced in test-driven
                        development, project management, and troubleshooting to ensure high-quality and maintainable code. Committed to accessibility
                        (ADA), responsive design, and modern web technologies to build innovative and efficient digital solutions.</p>
                </section>
                <section>
                    <p>Results-driven Fullstack Software Engineer with experience in Software Development, React.js, UI/UX design, and agile
                        development. Passionate about creating scalable, intuitive, and high-performance web applications. Experienced in test-driven
                        development, project management, and troubleshooting to ensure high-quality and maintainable code. Committed to accessibility
                        (ADA), responsive design, and modern web technologies to build innovative and efficient digital solutions.</p>
                    <figure><img src={pwc}></img></figure>
                </section>
                <section>
                    <figure><img src={griet}></img></figure>
                    <p>Results-driven Fullstack Software Engineer with experience in Software Development, React.js, UI/UX design, and agile
                        development. Passionate about creating scalable, intuitive, and high-performance web applications. Experienced in test-driven
                        development, project management, and troubleshooting to ensure high-quality and maintainable code. Committed to accessibility
                        (ADA), responsive design, and modern web technologies to build innovative and efficient digital solutions.</p>
                </section>
            </main>
        </>
    )
}