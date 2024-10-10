import { useState } from "react";
import styles from "./ScanResultCard.module.scss";
import { IoMdClose } from "react-icons/io";
import { format } from "date-fns";

const ScanResultCard = ({ id, isScanHistoryPage, ownershipData, subdomains }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const estimatedDomainAge = Math.trunc(
    ownershipData?.estimatedDomainAge / 365
  );

  console.log('ownershipdataa ----', ownershipData);
  console.log('subdomains ----', subdomains);


  return (
    <>
      {ownershipData?.parseCode === 0 ? (
        <p>No Results were found</p>
      ) : (
        <div
          className={styles.mainContainer}
        >
          <div className={styles.cardHeader}>
            <h2>
              {ownershipData?.domainName ? (
                ownershipData.domainName 
              ) : (
                <span>{id} Example.com</span>
              )}
            </h2>
            <p>Domain age: {estimatedDomainAge || '20'} years</p>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardContent}>
              <h3>Registry Info</h3>
              <div className={styles.cardRow}>
                <div>
                  <p>
                    <span> Created Date: </span>
                    { !isScanHistoryPage ? format(
                      ownershipData?.registryData?.createdDate,
                      "MMMM do, yyyy"
                    ) : "2021-11-03"}
                  </p>
                  <p>
                    <span> Expiration Date:</span>
                    { !isScanHistoryPage ? format(
                      ownershipData.registryData?.expiresDate,
                      "MMMM do, yyyy"
                    ) : "2025-11-03"}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Registrant Email:</span>
                    {ownershipData?.registrant?.email || ownershipData?.contactEmail || "email@example.com"}
                  </p>
                  <p>
                    <span>Registrant Name:</span>{" "}
                    {ownershipData?.registrarName || "domenebi.ge"}
                  </p>
                </div>
              </div>
            </div>
            {isScanHistoryPage ? (
              <div className={styles.cardContent}>
                <h3>Subdomains</h3>
                <div className={styles.cardRowWrapper}>
                  <p>subdomain.example.com</p>
                  <p>subdomain.example.com</p>
                  <p>subdomain.example.com</p>
                  <p>subdomain.example.com</p>
                  <p>subdomain.example.com</p>
                  <p>subdomain.example.com</p>
                </div>
              </div>
            ) : (
              <div className={styles.seeMoreContainer}>
                <button onClick={() => setIsModalOpen(true)}>See more</button>
              </div>
            )}
          </div>
          {isModalOpen && (
            <div className={styles.modalWrapper}>
              <div className={styles.modal}>
                <div className={styles.modalHeader}>
                  <div>
                    <h3>Subdomains</h3>
                    <p>Count: {subdomains?.count}</p>
                  </div>
                  <button
                    className={styles.close}
                    onClick={() => setIsModalOpen(false)}
                  >
                    <IoMdClose size={25} />
                  </button>
                </div>

                <div className={styles.modalContent}>
                  {subdomains.data?.map((domain, index) => (
                    <p key={`${domain}_${index}`}>{domain}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ScanResultCard;
