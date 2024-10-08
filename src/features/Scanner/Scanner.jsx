import { useState } from "react";
import ScannerSearchInput from "../../components/ScannerSearchInput/ScannerSearchInput";
import styles from "./Scanner.module.scss";

const Scanner = () => {
    const [results, setResults] = useState({})
  const handleDomainScan = () => {
    
  };
  return (
    <div className={styles.mainContainer}>
      <ScannerSearchInput handleDomainScan={handleDomainScan} />
    </div>
  );
};

export default Scanner;
