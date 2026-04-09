import Image from "next/image";
import styles from "./VisionMissionSection.module.css";
import { FaGraduationCap, FaBookOpen, FaAward, FaBalanceScale, FaRegEye, FaShieldAlt } from "react-icons/fa";

export default function VisionMissionSection() {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headerArea}>
                <h2 className={styles.mainHeading}>
                    "มุ่งสู่ความเป็นเลิศในการพัฒนาวิชาชีพเภสัชกรรม<br />
                    เพื่อสุขภาพที่ดีของประชาชนและสังคมไทยอย่างยั่งยืน"
                </h2>
                <p className={styles.subText}>
                    ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย มีวิสัยทัศน์และพันธกิจที่สอดคล้องกับการพัฒนาวิชาชีพเภสัชกรรม ดังนี้
                </p>
            </div>

            <div className={styles.contentGrid}>
                {/* LEFT COLUMN */}
                <div className={styles.leftColumn}>
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src="/images/vision/img1.png"
                            alt="Vision"
                            width={480.5}
                            height={275.25}
                            className={styles.mainImage}
                            priority
                        />
                    </div>
                    
                    <div className={styles.leftCardsRow}>
                        {/* Innovation Card (Olive) */}
                        <div className={`${styles.smallCard} ${styles.oliveCard}`}>
                            <div className={styles.smallCardIcon}><FaBookOpen size={28} /></div>
                            <h3 className={styles.smallCardTitle}>นวัตกรรม</h3>
                            <p className={styles.smallCardDesc}>บูรณาการความรู้และทักษะ</p>
                        </div>

                        {/* Evaluation Card (White) */}
                        <div className={`${styles.smallCard} ${styles.whiteCard}`}>
                            <div className={styles.smallCardIcon}><FaAward size={32} /></div>
                            <h3 className={styles.smallCardTitle}>ประเมินผล</h3>
                            <p className={styles.smallCardDesc}>รับรองคุณวุฒิวิชาชีพ</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className={styles.rightColumn}>
                    {/* Top half olive */}
                    <div className={styles.rightCardTop}>
                        <div className={styles.rightIconWrapper}>
                            <FaGraduationCap size={32} />
                        </div>
                        <div className={styles.rightCardHeader}>
                            <h3>พัฒนาหลักสูตรเฉพาะทาง</h3>
                            <p>ควบคุมและรับรองโดยมาตรฐานสากล</p>
                        </div>
                    </div>

                    {/* Bottom half white */}
                    <div className={styles.rightCardBottom}>
                        <p className={styles.rightParagraph}>
                            วิทยาลัยเภสัชกรรมแห่งอนาคต<br />
                            มุ่งเน้นการพัฒนาระบบยาและสุขภาพที่ยั่งยืน<br />
                            เสริมสร้างศักยภาพเภสัชกรให้มีความเชี่ยวชาญและสามารถตอบ<br />
                            สนองต่อความต้องการด้านสุขภาพของประชาชน
                        </p>
                        
                        <div className={styles.badgesWrapper}>
                            <div className={styles.badgeItem}>
                                <FaBalanceScale size={16} /> จริยธรรมเภสัชกรรม
                            </div>
                            <div className={styles.badgeItem}>
                                <FaRegEye size={16} /> ส่งเสริมคุณภาพ
                            </div>
                            <div className={styles.badgeItem}>
                                <FaShieldAlt size={16} /> สร้างความปลอดภัย
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
