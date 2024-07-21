import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Dio<br /> a Web Developer based in Indonesia.
        </SectionTitle>
        <SectionText>
          I am a passionate web developer with vast experience in creating
          creative and responsive websites.
        </SectionText>
        <a href="https://diotrier.github.io/personalportfolio.github.io/image/Resume_Dio.pdf" target="_blank" style={{ textDecoration: 'none' }} passHref>
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
