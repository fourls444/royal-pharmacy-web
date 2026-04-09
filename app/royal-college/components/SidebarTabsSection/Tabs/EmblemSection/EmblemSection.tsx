import styles from "./EmblemSection.module.css";

const UserIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7A802A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);



const CARDS = [
    { title: "งูพันด้วยถ้วยยาไฮเกีย", desc: "การศึกษาความรู้ด้าน\nเภสัชศาสตร์" },
    { title: "รวกท.", desc: '"ราชวิทยาลัยเภสัชกรรมแห่ง\nประเทศไทย"' },
    { title: "พ.ศ. ๒๕๖๗", desc: "ปี พ.ศ. ที่ก่อตั้ง" },
    { title: "RX", desc: 'สัญลักษณ์ของอักษรกรีกที่มี\nความหมายว่า "RECIPE"\n(แปลว่า "จงนำ" โดย RX\nเป็นตัวย่อที่ใช้ในใบสั่งยา)' },
    { title: "เส้นรัศมีจำนวน ๒๙ เส้น", desc: "สัญลักษณ์ที่เปรียบเสมือนดวงประทีปที่ให้\nแสงสว่าง แสดงถึงสติปัญญาโดยจำนวนเส้นคือจำนวน\nของมหาวิทยาลัย ๒๒ แห่ง และวิทยาลัยจำนวน ๗ แห่ง\nในช่วงเวลาที่ก่อตั้งราชวิทยาลัย" },
    { title: "เฉลว", desc: "ภูมิปัญญา ความรู้ ด้านยา" },
    { title: "สีเขียวมะกอก", desc: "สีประจำวิชาชีพเภสัชกรรม" },
];

export default function EmblemSection() {
    return (
        <section className={styles.section}>
            
            {/* HERO CARD */}
            <div className={styles.heroCard}>
                <div className={styles.heroLeftWrapper}>
                    <div className={styles.heroLeft}>
                        <img src="/images/emblem/logo.png" alt="Royal College Logo" className={styles.mainLogo} />
                    </div>
                    <div className={styles.quoteIcon}>”</div>
                </div>
                
                <div className={styles.heroRight}>
                    <h3 className={styles.heroTitle}>ตราสัญลักษณ์ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</h3>
                    <p className={styles.heroDesc}>
                        รูปงูพันด้วยถ้วยยาไฮเกียซ้อนบนเฉลวด้านหลัง เบื้องล่างมีอักษรย่อ &quot;รวกท.&quot;<br/>
                        มีข้อความ &quot;ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย&quot;<br/>
                        และมีตัวอักษรและตัวเลข &quot;พ.ศ. ๒๕๖๗&quot; เบื้องบนมีสัญลักษณ์ &quot;RX&quot;<br/>
                        ที่มีเส้นรัศมีจำนวน ๒๙ เส้น ล้อมรอบ
                    </p>
                </div>
            </div>

            {/* DETAILS GRID */}
            <div className={styles.detailsGrid}>
                {CARDS.map((card, index) => (
                    <div 
                        key={index} 
                        className={styles.detailCard} 
                        style={card.title === "เส้นรัศมีจำนวน ๒๙ เส้น" ? { gridColumn: "span 2" } : {}}
                    >
                        <div className={styles.iconWrapper}>
                            <UserIcon />
                        </div>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <p className={styles.cardDesc}>
                            {card.desc.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}
