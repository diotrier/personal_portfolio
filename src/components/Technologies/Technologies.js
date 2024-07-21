import React from 'react';
import { DiFirebase, DiReact, DiMongodb, DiMysql } from 'react-icons/di';
import { RiTailwindCssLine } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb"
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <ListParagraph>
          Experiece with
        </ListParagraph>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <picture>
          <DiReact size="3rem" />
          <RiTailwindCssLine size="3rem" />
          < TbBrandFramerMotion size="3rem" />
          <RiNextjsFill size="3rem" />
        </picture>
      </ListItem>
      <ListItem>
        <ListParagraph>
          Experience with
        </ListParagraph>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>
        <picture>
          <DiMongodb size="3rem" />
          <DiMysql size="3rem" />
          <SiExpress size="3rem" />
        </picture>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;