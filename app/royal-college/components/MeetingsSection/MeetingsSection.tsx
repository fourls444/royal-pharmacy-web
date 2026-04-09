import styles from "./MeetingsSection.module.css";

const MEETINGS = [
    {
        day: "2",
        month: "พ.ค.",
        title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้นการบริบาลทางเภสัชกรรม(สาขาปฐมภูมิ) รุ่นที่ 5",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        dateRange: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
        participants: (
            <>ผู้เข้าร่วม : <span className={styles.spacing}>บุคคลทั่วไป</span> <span className={styles.tagGreen}>เภสัชกร</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></>
        ),
        category: "หมวดหมู่ : ราชวิทยาลัย",
        image: "/images/meeting/img1.png",
    },
    {
        day: "1",
        month: "มี.ค.",
        title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        dateRange: "วันที่จัดประชุม : 02 มี.ค. 2569 - 13 มี.ค. 2569",
        participants: (
            <>ผู้เข้าร่วม : <span className={styles.tagGreen}>เภสัชกร</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></>
        ),
        category: "หมวดหมู่ : ราชวิทยาลัย",
        image: "/images/meeting/img2.png",
    },
    {
        day: "13",
        month: "ก.พ.",
        title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สุขภาพ(ไทย) รุ่นที่ 3",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        dateRange: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
        participants: (
            <>ผู้เข้าร่วม : <span className={styles.spacing}>บุคคลทั่วไป</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></>
        ),
        category: "หมวดหมู่ : ราชวิทยาลัย",
        image: "/images/meeting/img3.png",
    },
];

export default function MeetingsSection() {
    return (
        <section className={styles.meetingsSection}>
            <div className={styles.meetingsHeader}>
                <h2>การประชุมราชวิทยาลัยเภสัชกรรม</h2>
                <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
            </div>

            <div className={styles.meetingsList}>
                {MEETINGS.map((meeting, index) => (
                    <div key={index} className={styles.meetingItem}>
                        <div className={styles.dateBoxWrapper}>
                            <div className={styles.dateBox}>
                                <h3>{meeting.day}</h3>
                                <span>{meeting.month}</span>
                            </div>
                            <div className={styles.verticalDivider}></div>
                        </div>

                        <div className={styles.meetingContent}>
                            <h4>{meeting.title}</h4>

                            <div className={styles.meetingDetail}>
                                <div className={styles.detailRow}>
                                    <img src="/images/meeting/MapPin.png" alt="location" className={styles.iconImg} />
                                    <span>{meeting.location}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/meeting/Calendar.png" alt="calendar" className={styles.iconImg} />
                                    <span>{meeting.dateRange}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/meeting/Users.png" alt="users" className={styles.iconImg} />
                                    <span>{meeting.participants}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/meeting/Tag.png" alt="tag" className={styles.iconImg} />
                                    <span>{meeting.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.meetingImage}>
                            <img src={meeting.image} alt={meeting.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
