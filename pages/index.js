import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SectionWrapper from '@/components/layout/SectionWrapper';
import PageWrapper from '@/components/layout/PageWrapper';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import Link from 'next/link';
import Skill from '@/components/partials/Skill';
import Dropdown from '@/components/partials/Dropdown';
import CareerPoint from '@/components/partials/CareerPoint';
import Box from '@/components/partials/Box';

const websites = [
  {
    link: 'https://hellergrafik.ch',
    name: 'hellergrafik.ch',
    date: '09.2020'
  },
  {
    link: 'https://waterisahumanright.ch',
    name: 'waterisahumanright',
    date: '02.2020'
  },
  {
    link: 'https://kreuz-abtwil.ch',
    name: 'kreut-abtwil.ch',
    date: '06.2019'
  },
  {
    link: 'https://pomodoro-counter.ch',
    name: 'pomodoro-counter.ch',
    date: '12.2019'
  },
  {
    link: 'https://decom.ch',
    name: 'decom.ch',
    date: '06.2018'
  },
];

const npmPackages = [
  {
    link: 'https://www.npmjs.com/package/github-cube',
    name: 'github-cube',
    date: '09.2020'
  },
]


const codepens= [
  {
    link: 'https://www.npmjs.com/package/github-cube',
    name: 'github-cube',
    date: '09.2020'
  },
]



export default function Home() {

  const [websiteDropdownStatus, setWebsiteDropdownStatus] = useState(false);
  const [npmPackageDropdownStatus, setNpmPackageDropdownStatus] = useState(false);
  const [codepenDropdownStatus, setCodepenDropdownStatus] = useState(false);

  return (
    <>
      <Head>
        <title>Jérôme Haas |  Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/EBGaramond/EBGaramond-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/EBGaramond/EBGaramond-Medium.ttf" as="font" crossOrigin="" />
      </Head>
      

      <PageLayout>

        <Section id={"start"}>
          <div id={styles.intro} className={styles.section}>
            <div id={styles.introWrapper} className={styles.sectionWrapper}>
              <img id={styles.portrait} src="/images/jeromehaas.png" alt="Jérôme Haas"/>
              <div className={styles.text}>
                <h1>Jérôme Haas</h1>
                <h3>Front-End Developer</h3>
                <p>I am a passionate webdeveloper. I wrote my first line of code in 2016. Since then I have been fascinated by web development and am constantly educating myself in this area with the medium to long term goal of becoming a fullstack web developer. So far I am self-taught in HTML, CSS, JavaScript and PHP and I like nothing better than developing websites and web applications. I prefer to focus on custom-made and intelligent solutions for small and medium sized companies. In my spare time you can find me on running tracks, abroad on bagpacking trips or in front of my favorite IDE. </p>
              </div>
            </div>
          </div>
        </Section>


        <Section id={"skills"}>
          <h2>Skills</h2>
          <Skill name={"JavaScript"} value={85} />
          <Skill name={"Sass"} value={80} />
          <Skill name={"Linux"} value={75} />
          <Skill name={"React"} value={60} />
          <Skill name={"TypeScript"} value={35} />
          <Skill name={"NodeJS"} value={30} />
          <Skill name={"MongoDB"} value={25} />
          <Skill name={"PostGres"} value={20} />
        </Section>


        <Section id={"work"}>
          <h2>Work</h2>
          <Dropdown name={"Websites"}  items={websites} status={websiteDropdownStatus} open={() => setWebsiteDropdownStatus(!websiteDropdownStatus)}/>
          <Dropdown name={"NPM Packages"} items={npmPackages} status={npmPackageDropdownStatus} open={() => setNpmPackageDropdownStatus(!npmPackageDropdownStatus)} />
          <Dropdown name={"Codepens"} items={codepens} status={codepenDropdownStatus} open={() => setCodepenDropdownStatus(!codepenDropdownStatus)} />

          </Section>

        // --------------------------------------------- //
        // CAREER
        // --------------------------------------------- //
        <Section id={"career"}>
          <h2>Career</h2>
        </Section>

        <Section id={"tools"}>
          <h2>Tools</h2>
        </Section>

        <Section id={"contact"}>
          <h2>Contact</h2>
        </Section>

        <Section id={"references"}>
          <h2>References</h2>
        </Section>








      </PageLayout>
    </>
  )
}
