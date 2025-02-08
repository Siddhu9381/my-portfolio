import SkillsCard from "./SkillsCard"

export default function SkillsPage() {
    let skills = {
        "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
        "Frontend Frameworks": ["React.js", "Bootstrap", "Tailwind CSS"],
        "Backend Frameworks": ["Spring Boot", "Flask", "Express.js", "Node.js"],
        "Testing and DevOps": ["Unit testing", "CI/CD", "Git/GitHub", "Azure Pipelines"],
        "Data Visualization": ["D3.js"],
        "Cloud and Deployment": ["AWS (EC2, S3)", "Terraform"]
    }

    return (
        <>
            <header>
                <h1 style={{ color: "white", textAlign: "center" }}>My Skills</h1>
            </header>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "20px", justifyContent: "center", textAlign: "center" }}>
                {Object.keys(skills).map((i) =>
                    <SkillsCard title={i} skills={skills[i]} />
                )}
            </div>
        </>
    )
}