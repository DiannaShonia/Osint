import styles from "./ScannerSearchInput.module.scss";
import { CiSearch } from "react-icons/ci";
import { TbLoaderQuarter } from "react-icons/tb";

const ScannerSearchInput = ({ handleDomainScan, isLoading }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input />
        <button disabled={isLoading} onClick={handleDomainScan} className={styles.scanButton}>
          {isLoading ? (
            <div className={styles.loader}>
                <TbLoaderQuarter size={23}/>
            </div>

          ) : (
            <>
              <div className={styles.search}>
                <CiSearch size={25} />
              </div>
              <p>Search</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ScannerSearchInput;
