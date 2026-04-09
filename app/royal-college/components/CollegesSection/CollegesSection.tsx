import styles from "./Colleges.module.css";

const COLLEGES_DATA = [
    { title: "วิทยาลัย\nเภสัชบำบัด", bg: "/images/colleges/bg1.png", logo: "/images/colleges/logo1.png", link: "https://pharmacotherapy-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nคุ้มครองผู้บริโภคด้านยา", bg: "/images/colleges/bg2.png", logo: "/images/colleges/logo2.png", link: "https://consumer-protection-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nเภสัชกรรมอุตสาหการ", bg: "/images/colleges/bg3.png", logo: "/images/colleges/logo3.png", link: "https://industrial-pharmacy-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nเภสัชกรรมชุมชน", bg: "/images/colleges/bg4.png", logo: "/images/colleges/logo4.png", link: "https://community-pharmacy-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nบริหารเภสัชกิจ", bg: "/images/colleges/bg5.png", logo: "/images/colleges/logo5.png", link: "https://pharmaceutical-admin-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nเภสัชพันธุศาสตร์", bg: "/images/colleges/bg6.png", logo: "/images/colleges/logo6.png", link: "https://pharmacogenomics-web-feedback1.vercel.app/" },
    { title: "วิทยาลัย\nเภสัชกรรมสมุนไพร", bg: "/images/colleges/bg7.png", logo: "/images/colleges/logo7.png", link: "https://herbal-pharmacy-web-feedback1.vercel.app/" },
];

export default function CollegesSection() {
    return (
        <section className={styles.collegesSection}>
            <div className={styles.collegesHeader}>
                <h2>วิทยาลัยเภสัชกรรมทั้ง 7 วิทยาลัย</h2>
                <p>
                    เป็นองค์กรภายใต้สภาเภสัชกรรม ที่มุ่งเน้นการส่งเสริมและพัฒนาศักยภาพทางวิชาชีพเภสัชกรรมอย่างต่อเนื่อง<br />
                    และสร้างมาตรฐานการศึกษาภายหลังปริญญา ทั้งในระดับประกาศนียบัตรวิชาชีพเภสัชกรรม หนังสืออนุมัติและวุฒิบัตรฯ<br />
                    สาขาความเชี่ยวชาญเฉพาะทางต่างๆ เพื่อยกระดับองค์ความรู้วิชาชีพให้เป็นมาตรฐานสากล
                </p>
            </div>

            <div className={styles.collegesGrid}>
                {COLLEGES_DATA.map((college, index) => (
                    <a
                        key={index}
                        href={college.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.collegeCard}
                        style={{ backgroundImage: `url('${college.bg}')` }}
                    >
                        <div className={styles.collegeOverlay}>
                            <div className={styles.logoWrapper}>
                                <img src={college.logo} alt="logo" />
                            </div>
                            <div className={styles.textWrapper}>
                                <div className={styles.accentLine}></div>
                                <p>{college.title}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
