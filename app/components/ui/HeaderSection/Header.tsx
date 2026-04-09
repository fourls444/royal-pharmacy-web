"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [lang, setLang] = useState("TH");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ThaiFont`}>
      <div className={styles.left}>
        <img src="/favicon.ico" alt="Logo" className={styles.logo} />
        <div className={styles.textContainer}>
          <h1>ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</h1>
          <p>The Royal College of Pharmacy of Thailand</p>
        </div>
      </div>

      <div className={styles.actionsArea}>
        {/* Language Switcher */}
        <div className={styles.langDropdownContainer} ref={dropdownRef}>
          <div 
            className={styles.langSwitch} 
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          >
            <svg
              className={styles.langSwitchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className={styles.langSwitchText}>{lang}</span>
            <svg
              className={`${styles.langSwitchArrow} ${isLangDropdownOpen ? styles.rotate180 : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {isLangDropdownOpen && (
            <div className={`${styles.langDropdown} ThaiFont`}>
              <button 
                className={`${styles.langDropdownItem} ${lang === "TH" ? styles.langDropdownItemActive : ""}`}
                onClick={() => {
                  setLang("TH");
                  setIsLangDropdownOpen(false);
                }}
              >
                <div className={styles.langSelectedText}>
                  <span>ภาษาไทย</span>
                  <span className={styles.langEngName}>Thai</span>
                </div>
                <span>TH</span>
              </button>
              <button 
                className={`${styles.langDropdownItem} ${lang === "EN" ? styles.langDropdownItemActive : ""}`}
                onClick={() => {
                  setLang("EN");
                  setIsLangDropdownOpen(false);
                }}
              >
                <div className={styles.langSelectedText}>
                  <span>English</span>
                  <span className={styles.langEngName}>อังกฤษ</span>
                </div>
                <span>EN</span>
              </button>
            </div>
          )}
        </div>

        {/* Login Button */}
        <button className={styles.loginBtn}>
          เข้าสู่ระบบสำหรับเภสัชกร
        </button>
      </div>
    </header>
  );
}