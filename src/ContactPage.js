import ContactComponent from "./ContactComponent"
import phoneIcon from './assets/phone.png'
import mailIcon from './assets/email.png'
import linkedInIcon from './assets/linkedIn.png'
import gitIcon from './assets/git.png'
export default function ContactPage() {
    let contactComponentDetails = {
        phone: {
            icon: phoneIcon,
            value: "+1 (425) 221 2684"
        },
        mail: {
            icon: mailIcon,
            value: "gundarapusidhartha@gmail.com"
        }
    }

    let contactButtonDetails = {
        linkedIn: {
            icon: linkedInIcon,
            value: "https://www.linkedin.com/in/sidhartha-reddy-gundarapu/"
        },
        git: {
            icon: gitIcon,
            value: "https://github.com/Siddhu9381"
        }
    }
    return (
        <>
            <main style={{ textAlign: "center", color: "white" }}>
                <section>
                    <header>
                        <h1>My Contact Details</h1>
                    </header>
                </section>
                <section>
                    {
                        Object.keys(contactComponentDetails).map((i) =>
                            <ContactComponent icon={contactComponentDetails[i].icon} value={contactComponentDetails[i].value} />
                        )
                    }
                </section>
                <section style={{ display: "flex", width: "100%", justifyContent: "center", padding: "20px", boxSizing: "border-box" }}>
                    {
                        Object.keys(contactButtonDetails).map((i) =>
                            <a href={contactButtonDetails[i].value} target="blank"><figure><img src={contactButtonDetails[i].icon}></img></figure></a>
                        )
                    }
                </section>
            </main>
        </>
    )
}