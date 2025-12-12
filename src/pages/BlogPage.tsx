
import { use, useEffect } from 'react';
import classes from './../css/MainPage.module.scss';
import settings from "../../settings.json";
import axios from "axios";

export default function BlogPage() {

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      document.title = "Blog - Nicole's Author Site";
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + settings.newsletterToken
      };
      const res = await axios.get((settings.baseUrl + "/campaigns"), { headers: headers });
      debugger;

    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
  }
  return (
    <div className={classes.container}>

      <div>Read about writer advice and other experiences I deemed worthy of sharing </div>

    </div>
  );
}