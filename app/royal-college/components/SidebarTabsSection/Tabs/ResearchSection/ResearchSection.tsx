import Image from "next/image";
import Link from "next/link";
import styles from "./ResearchSection.module.css";
import { FaBookOpen, FaRegCalendarAlt, FaPills } from "react-icons/fa";

export default function ResearchSection() {
    // Mock data for Banners (1-6)
    const featuredResearch = [
        { id: 1, img: "/images/research/banner1.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
        { id: 2, img: "/images/research/banner2.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
        { id: 3, img: "/images/research/banner3.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
        { id: 4, img: "/images/research/banner4.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
        { id: 5, img: "/images/research/banner5.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
        { id: 6, img: "/images/research/banner6.png", title: "ชื่อโครงการวิจัย", date: "วันเวลาที่เผยแพร่" },
    ];

    // Mock data for Latest list (1-3)
    const latestResearch = [
        { 
            id: 1, 
            category: "เภสัชบำบัด", 
            icon: <FaPills size={16} />,
            title: "โครงการ Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future", 
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569", 
            author: "สภาเภสัชกรรม",
            img: "/images/research/last1.png" 
        },
        { 
            id: 2, 
            category: "เภสัชบำบัด", 
            icon: <FaPills size={16} />,
            title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future", 
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
            author: "สภาเภสัชกรรม",
            img: "/images/research/last2.png" 
        },
        { 
            id: 3, 
            category: "หมวดหมู่", 
            icon: <FaPills size={16} />,
            title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future", 
            date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
            author: "สภาเภสัชกรรม",
            img: "/images/research/last3.png" 
        },
    ];

    return (
        <section className={styles.sectionContainer}>
            
            {/* FEATURED RESEARCH (TOP) */}
            <div className={styles.featuredArea}>
                <div className={styles.headerBlock}>
                    <h2 className={styles.mainHeading}>งานวิจัยเด่น</h2>
                    <p className={styles.subText}>แนะนำงานวิจัยตีพิมพ์เด่นของสภาเภสัชกรรม</p>
                </div>

                <div className={styles.carouselContainer}>
                    <div className={styles.carouselTrack}>
                        {featuredResearch.map((item) => (
                            <div key={item.id} className={styles.featuredCard}>
                                <div className={styles.imageWrapper}>
                                    <Image src={item.img} alt={item.title} fill className={styles.featuredImage} />
                                    <div className={styles.linkIconOverlay}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.featuredContent}>
                                    <h3 className={styles.featuredTitle}>{item.title}</h3>
                                    <p className={styles.featuredMeta}>
                                        โดย:<br/>
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Optional dots indicator */}
                <div className={styles.carouselDots}>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>

            {/* LATEST RESEARCH (BOTTOM) */}
            <div className={styles.latestArea}>
                <div className={styles.latestHeader}>
                    <h2 className={styles.latestHeading}>งานวิจัยล่าสุด</h2>
                    <Link href="#" className={styles.viewAllLink}>
                        ดูทั้งหมด <span className={styles.arrowIcon}>&gt;</span>
                    </Link>
                </div>

                <div className={styles.latestList}>
                    {latestResearch.map((item) => (
                        <div key={item.id} className={styles.latestItemRow}>
                            
                            {/* CATEGORY */}
                            <div className={styles.categoryCol}>
                                <div className={styles.categoryBox}>
                                    {item.icon}
                                </div>
                                <span className={styles.categoryName}>{item.category}</span>
                            </div>

                            {/* DETAILS */}
                            <div className={styles.detailsCol}>
                                <h3 className={styles.latestTitle}>{item.title}</h3>
                                <div className={styles.metaCol}>
                                    <div className={styles.metaItem}>
                                        <FaRegCalendarAlt className={styles.metaIcon} />
                                        <span>วันที่เผยแพร่ : {item.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <FaBookOpen className={styles.metaIcon} />
                                        <span>โดย : </span>
                                    </div>
                                </div>
                            </div>

                            {/* THUMBNAIL */}
                            <div className={styles.thumbCol}>
                                <Image src={item.img} alt={item.title} fill className={styles.latestThumb} />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
}
