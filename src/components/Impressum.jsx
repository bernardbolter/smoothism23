import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'

const Impressum = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    return (
        <motion.section 
            initial={{ translateX: 0}}
            animate={{ translateX: smooth.viewImpressum ? 0 : '-100%' }}
            exit={{ translateX: 0 }}
            transition={{ duration: 1 }} 
            className="impressum-container"
            style={{ 
                color: smooth.secondaryDark, 
                backgroundColor: smooth.secondaryLight,
                display: smooth.viewFooterItems ? 'block' : 'none'
            }}    
        >
            <div className="impressum-gradient" />
            <div className="impressum-content">
                <h1>IMPRESSUM</h1>
                <h2>AUTOR DIESES INTERNETANGEBOTES UND INHABER VON SMOOTHISM</h2>
                <h5>Bernard John Bolter IV</h5>
                <h5>Cuvry Strasse 32</h5>
                <h5>10997 Berlin</h5>
                <h4>email: bernardbolter@gmail.com</h4>
                <h5>DE: +49 (0)151 4749 1553</h5>
                <h5>US: +1 415 490 7702 <span>what's app, telegram, and signal</span></h5>
                <h4>Steuer Nr. 15/235/05740</h4>
            </div>
            <div
                className="impressium-close"
                onClick={() => setSmooth(state => ({ ...state, viewImpressum: false }))}
            >
                <svg viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,.2)"/>
                    <path d="M19.881 38.5018L38.5964 19.7863L40.2099 21.3998L21.4945 40.1153L19.881 38.5018Z" fill="black"/>
                    <path d="M19.881 21.3999L21.4945 19.7864L40.2099 38.5019L38.5964 40.1154L19.881 21.3999Z" fill="black"/>
                    <path d="M30.0467 50.0001C24.7299 49.9998 19.6311 47.8875 15.8715 44.1282C12.1119 40.3686 10 35.2695 10 29.9531C10 24.6366 12.1119 19.5375 15.8712 15.778C19.6394 12.0596 24.7252 9.98249 30.0192 10.0001C35.3129 10.0174 40.3851 12.1284 44.1284 15.8716C47.8716 19.6149 49.9824 24.6869 49.9999 29.9808C50.0175 35.2745 47.9404 40.3607 44.222 44.1288C42.3648 45.9961 40.1555 47.4764 37.7223 48.4845C35.2893 49.4922 32.6805 50.0076 30.0468 50.0009L30.0467 50.0001ZM30.0467 12.192C26.5311 12.1892 23.0937 13.2297 20.1697 15.1821C17.2459 17.1342 14.9673 19.9104 13.6227 23.1584C12.2778 26.4066 11.927 29.9807 12.615 33.428C13.3032 36.8757 14.9989 40.0415 17.4876 42.525C20.8201 45.8556 25.3396 47.7263 30.0515 47.725C34.7634 47.7238 39.2819 45.8508 42.6123 42.518C45.9432 39.1855 47.8139 34.666 47.8123 29.9541C47.8111 25.2422 45.9381 20.7237 42.6056 17.3933C40.9597 15.7395 39.0024 14.4283 36.8468 13.5351C34.691 12.6423 32.3799 12.1857 30.0467 12.1915V12.192Z" fill="black"/>
                </svg>
            </div>
        </motion.section>
    )
}

export default Impressum