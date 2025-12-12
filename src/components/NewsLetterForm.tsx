import { useState } from "react";
import settings from "../../settings.json";
import axios from "axios";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            setStatus("loading");
            debugger;

            const body = {
                email: email,
                groups: [settings.groupId]
            }
            const jsonBody = JSON.stringify(body);
            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + settings.newsletterToken
            };

            debugger;
            const res = await axios.post((settings.baseUrl + "/subscribers"), body, { headers: headers });

            const data = await res;
            console.log(data);
            debugger;

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>

            {status === "loading" && <p>Submitting…</p>}
            {status === "success" && <p>You're subscribed!</p>}
            {status === "error" && <p>Oops, something went wrong.</p>}
        </form>
    );
}
