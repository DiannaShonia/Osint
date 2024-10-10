import { DOMAINS_SERVICE_URL } from "../../../utils/constants";
import axios from "axios";

export const getDomainsListScan = async (domainUrl, setState) => {
  const match = domainUrl.match(/(?:www\.)?([a-zA-Z0-9-]+)\.[a-z]{2,}/);
  const domainName = match[1]; 

  try {
    const response = await axios.post(DOMAINS_SERVICE_URL, {
      apiKey: "at_t0FgXyuEce3eBMR0awrpvtLA4zmWe",
      subdomains: {
        include: [`${domainName}`],
      },
    });
    console.log(response.data, 2984792187439);

    setState({
      data: response.data.domainsList.slice(0, 42),
      count: response.data.domainsCount,
    });
  } catch (error) {
    console.error("Error fetching data from Shodan:", error);
  }
};
