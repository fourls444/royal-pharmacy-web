"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import ResearchSection from "../ResearchSection/ResearchSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./SidebarTabsSection.module.css";
import HistorySection from "../HistorySection/HistorySection";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการราชวิทยาลัยเภสัชกรรม",
    "ตราสัญลักษณ์",
    "งานวิจัยตีพิมพ์",
    "สถานที่ตั้งราชวิทยาลัยเภสัชกรรม",
];





export default function SidebarTabsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>จากมาตรฐานวิชาชีพ<br></br>สู่คุณค่าที่ส่งต่อถึงผู้ป่วยและสังคม</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && <HistorySection />}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}

                {activeTab === 3 && <EmblemSection />}
                {activeTab === 4 && <ResearchSection/>}

                {activeTab === 5 && <LocationSection />}

            </div>

        </section>
    );
}
