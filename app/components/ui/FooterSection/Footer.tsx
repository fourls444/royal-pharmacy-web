"use client";

import styles from "./Footer.module.css";
import {
    FaGlobe,
    FaFacebookF,
    FaLine,
    FaEnvelope,
    FaTiktok,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <h3>ติดต่อสภาเภสัชกรรม</h3>

                    <p>
                        สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร์ ชั้น 8
                        กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 ถนนติวานนท์
                        ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                    </p>

                    <p><b>โทรศัพท์ :</b> 0 2591 9992 (คู่สายอัตโนมัติ)</p>
                    <p><b>โทรสาร :</b> 0 2591 9996</p>
                    <p><b>Email :</b> pharthai@pharmacycouncil.org</p>

                    <p className={styles.subTitle}>ช่องทางการติดต่อสภาเภสัชกรรม</p>

                    <div className={styles.icons}>
                        <span><FaGlobe /></span>
                        <span><FaFacebookF /></span>
                        <span><FaLine /></span>
                        <span><FaEnvelope /></span>
                        <span><FaTiktok /></span>
                        <span><FaYoutube /></span>
                        <span><FaMapMarkerAlt /></span>
                        <span><FaPhoneAlt /></span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    {/* PHONE MENU */}
                    <div>
                        <h4>หมายเลขทางโทรศัพท์</h4>

                        <div className={styles.phoneGrid}>
                            <ul>
                                <li>กด 1 ฝ่ายกลาง</li>
                                <li>กด 2 ฝ่ายการศึกษา</li>
                                <li>กด 3 ฝ่ายกฎหมาย</li>
                                <li>กด 4 ศูนย์บริการสมาชิก</li>
                            </ul>

                            <ul>
                                <li>กด 5 ศูนย์องค์ความรู้</li>
                                <li>กด 6 สำนักงานรับรองระบบยา</li>
                                <li>กด 7 วิทยาลัยเภสัชกรรม</li>
                                <li>กด 0 ประชาสัมพันธ์</li>
                            </ul>
                        </div>
                    </div>

                    {/* OTHER SERVICES */}
                    <div className={styles.services}>
                        <h4>บริการอื่น ๆ</h4>
                        <p>คำถามที่พบบ่อย  งานการศึกษา  มุมดาวน์โหลด</p>
                    </div>

                </div>

            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                <p>
                    ท่านสามารถศึกษารายละเอียดการดำเนินการตาม พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                    <span className={styles.link}> ได้ที่นี่</span>
                </p>
                <p>© 2012-2025</p>
            </div>

        </footer>
    );
}