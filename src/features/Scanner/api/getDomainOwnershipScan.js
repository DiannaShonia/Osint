import { WHO_IS_SERVICE_URL } from "../../../utils/constants";
import axios from "axios";

export const getDomainOwnershipScan = async (domainUrl, setState) => {
  try {
    const response = await axios.get(
      `${WHO_IS_SERVICE_URL}apiKey=at_t0FgXyuEce3eBMR0awrpvtLA4zmWe&domainName=${domainUrl}&outputFormat=json`
    );
    setState( response.data.WhoisRecord );
  } catch (error) {
    console.error("Error fetching data from Shodan:", error);
  }
};
