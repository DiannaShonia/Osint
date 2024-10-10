import { useState } from "react";
import ScannerSearchInput from "../../components/ScannerSearchInput/ScannerSearchInput";
import styles from "./Scanner.module.scss";
import { getDomainOwnershipScan } from "./api/getDomainOwnershipScan";
import { getDomainsListScan } from "./api/getDomainsListScan";
import ScanResultCard from "../../components/ScanResultCard/ScanResultCard";
import {DOMAIN_URL_PATTERN} from '../../utils/constants'

const Scanner = () => {
  const [domainOwnershipData, setDomainOwnershipData] = useState(null);
  const [subdomainData, setSubdomainData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleDomainScan = async (domainUrl) => {
    if (DOMAIN_URL_PATTERN.test(domainUrl)) {
      setIsLoading(true);
      try {
        await Promise.all([
          getDomainOwnershipScan(
            domainUrl,
            setDomainOwnershipData,
            domainOwnershipData
          ),
          getDomainsListScan(domainUrl, setSubdomainData, subdomainData),
        ]);
      } catch (error) {
        console.error("Error in API calls:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Scan Your Domain</h1>
      <ScannerSearchInput
        isLoading={isLoading}
        handleDomainScan={handleDomainScan}
      />
      <div className={styles.scanResultCardWrapper}>
        {!!domainOwnershipData && !isLoading && (
          <ScanResultCard
            subdomains={subdomainData}
            ownershipData={domainOwnershipData}
          />
        )}
      </div>
    </div>
  );
};

export default Scanner;
