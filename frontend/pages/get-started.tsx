import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/get-started.module.css';
import '../styles/globals.css';
import BoxRevealDemo from '@/components/box-reveal-demo'

const GetStarted: React.FC = () => {
    return (
        <div className={styles.bodyContainer}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Description" content="" />
                <title>iHive</title>
                <link rel="icon" href="/Images/iHive.png" />
            </Head>

            

            
                <nav className={styles.navContainer}>
                    <div className={styles.logo}>
                    <Image
                        src="/Images/iHive.png"
                        alt="Logo"
                        title="Home"
                        width={35}
                        height={35}
                        className={styles.logoImage}
                    />
                    <Link href="/">iHive</Link>
                    </div>
                    <div className={styles['nav-links']}>
                        <Link href="/about">About</Link>
                        <Link href="/community">Community</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </nav>
            

            <main className={styles['main-content']}>
                <div className={styles['intro-text']}>
                    <h1>
                        WELCOME TO<br />
                        THE IHIVE.<br />
                        GET STARTED.
                    </h1>
                    <p>
                        Connect, collaborate, and create in our digital repo-system.<br />
                        Join the community of investor and entrepreneur.
                    </p>
                    <Link 
                        href="/" 
                        className={styles['cta-button']} 
                        title="login/signup"
                    >
                        Get Started
                    </Link>
                </div>
                <div className={styles['ihive-icon']}>
                    <Image 
                        src="/Images/iHive.png" 
                        alt="iHive"
                        width={300}  // Adjust
                        height={300} // Adjust
                        priority
                    />
                </div>
            </main>
        </div>
    );
};

export default GetStarted;