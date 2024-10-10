import { useState } from "react";
import styles from "./ScannerSearchInput.module.scss";
import { CiSearch } from "react-icons/ci";
import { TbLoaderQuarter } from "react-icons/tb";

const ScannerSearchInput = ({ handleDomainScan, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state with the input value
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input placeholder="example.com" onChange={handleInputChange} />
        <button
          disabled={isLoading || !inputValue}
          onClick={() => handleDomainScan(inputValue)}
          className={styles.scanButton}
        >
          {isLoading ? (
            <div className={styles.loader}>
              <TbLoaderQuarter size={23} />
            </div>
          ) : (
            <>
              <div className={styles.search}>
                <CiSearch size={25} />
              </div>
              <p>Scan</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ScannerSearchInput;
