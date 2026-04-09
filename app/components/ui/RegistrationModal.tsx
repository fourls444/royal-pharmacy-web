"use client";

import { useState, useEffect } from "react";
import styles from "./RegistrationModal.module.css";

const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [triedSubmit, setTriedSubmit] = useState(false);

  {/* popup หลอก*/}

  useEffect(() => {
    // Always show modal on refresh/mount and clear existing data
    localStorage.removeItem("user_registration_info");
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);

    if (!firstName.trim() || !lastName.trim()) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วนก่อนเข้าใช้งาน");
      return;
    }

    const userInfo = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("user_registration_info", JSON.stringify(userInfo));
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>กรุณากรอก ชื่อ-นามสกุล<br />เพื่อเข้าสู่เว็บไซต์</h2>
        <p className={styles.subtitle}>
          ⚠️ เนื้อหาต่อไปนี้คือข้อมูลตัวอย่าง ห้ามนำไปเผยแพร่
        </p>
        <p className={styles.desktopWarning}>
          กรุณาเปิดบนคอมพิวเตอร์
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="firstName">
              ชื่อ (First Name)
            </label>
            <input
              type="text"
              id="firstName"
              className={`${styles.input} ${triedSubmit && !firstName.trim() ? styles.inputError : ""}`}
              placeholder="กรอกชื่อของคุณ"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="lastName">
              นามสกุล (Last Name)
            </label>
            <input
              type="text"
              id="lastName"
              className={`${styles.input} ${triedSubmit && !lastName.trim() ? styles.inputError : ""}`}
              placeholder="กรอกนามสกุลของคุณ"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          {error && (
            <div className={styles.error}>
              ⚠️ {error}
            </div>
          )}

          <button type="submit" className={styles.submitButton}>
            ตกลง
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
