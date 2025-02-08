import ContactComponent from "./ContactComponent"
export default function ContactPage() {
    let contactComponentDetails = {
        phone: {
            icon: '/phone.png',
            value: "+1 (425) 221 2684"
        },
        mail: {
            icon: '/email.png',
            value: "gundarapusidhartha@gmail.com"
        }
    }

    let contactButtonDetails = {
        linkedIn: {
            icon: '/linkedIn.png',
            value: "https://www.linkedin.com/in/sidhartha-reddy-gundarapu/"
        },
        git: {
            icon: '/git.png',
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