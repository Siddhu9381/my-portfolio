import ProjectCard from "./ProjectCard"

export default function ProjectPage() {
    let projects = [
        { name: "CricViz", img: "./ipl.jpg", desc: "Developed CricViz, a data visualization tool for IPL player analysis. Designed an interactive bubble chart in D3.js with tooltips, search, and dynamic positioning for performance insights." },
        { name: "Traffic Flow Prediction", img: "./traffic.jpg", desc: "Developed a CNN-LSTM model for traffic flow prediction, integrating spatial-temporal data for accuracy. Used data preprocessing, MAE/RMSE evaluation, and hyperparameter tuning to optimize real-time forecasting." },
        { name: "AstroClassify", img: "./Astroclassify.jpg", desc: "Built an ML model to classify stars, galaxies, and quasars using SDSS DR17, achieving 95% accuracy. Applied data preprocessing, SMOTE balancing, ensemble learning, and hyperparameter tuning for optimization." },
        // { name: "Subject Extraction and Annotation Tool for Live Video", img: "", desc: "Developed a GMM-based system for real-time subject extraction and background masking. Enabled color-based object tracing in live video using OpenCV, optimizing for accuracy, speed, and smooth annotations." },
        { name: "Bus Ticket Booker", img: "./bus.jpg", desc: "Built a full-stack web app using React.js & Spring Boot for seamless ticket booking. Implemented RESTful APIs, Okta authentication, and AWS deployment with Jenkins CI/CD, ensuring security and scalability." }
    ]

    return (
        <>
            <main style={{
                textAlign: "center",
                width: "100%"
            }}>
                <section>
                    <header><h1 style={{ color: "white" }}>My Projects</h1></header>
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
                        {projects.map((i) =>
                            <ProjectCard details={i} />
                        )}
                    </div>
                </section>
            </main>
        </>

    )
}