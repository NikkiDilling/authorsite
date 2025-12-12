import { useState } from "react";
import settings from "../../settings.json";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import classes from './../css/NewsLetterForm.module.scss';

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
        <form onSubmit={handleSubmit} className={classes.form}>
            <div>{status}</div>
            <TextField
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Button variant="contained" type="submit" className={classes.subscribeBtn}>Subscribe</Button>
        </form>
    );
}
