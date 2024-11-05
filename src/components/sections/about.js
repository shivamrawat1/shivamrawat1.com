import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Flask',
    'Node.js',
    'Django',
    'MongoDB',
    'Docker',
    'Pytorch',
    'Keras',
    'R',
    'Pandas',
    'Numpy',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I grew up near the mountains in Uttarakhand, India, where I’d finish schoolwork early
              and spend the rest of the year replicating experiments from shows like{' '}
              <a href="https://en.wikipedia.org/wiki/Backyard_Science">Backyard Science</a> and{' '}
              <a href="https://www.imdb.com/title/tt2314205/">FAQ</a> . When home experiments
              weren’t enough to satistfy my curiosity, I reached out to over 100 professors at a
              nearby university, hoping to work in their labs. Surprisingly, the cold outreach
              worked, and I ended up conducting bioinformatics research and winning{' '}
              <a href="https://x.com/mygovindia/status/1485643062001172484">national</a> and{' '}
              <a href="https://abstracts.societyforscience.org/Home/FullAbstract?ISEFYears=0%2C&Category=Any%20Category&Finalist=rawat&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=20163">
                international
              </a>{' '}
              awards—and even a{' '}
              <a href="https://x.com/narendramodi/status/1485612096130002946?lang=en">tweet</a> from
              the President of India.
            </p>
            <p>
              For university, I made a last-minute decision to attend{' '}
              <a href="https://www.minerva.edu/about/">Minerva</a> , where studying in a different
              country each semester—including the US, South Korea, Taiwan, India, Argentina, the UK,
              and Germany—broadened my academic and cultural experiences. I initially pursued
              Natural Science but, after discovering wet labs weren’t for me, switched to Computer
              Science as my major.
            </p>
            <p>
              Now, I strive to become a{' '}
              <a href="https://www.urbandictionary.com/define.php?term=Cracked">cracked</a>{' '}
              developer and build products and services that can positively impact millions of
              people.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
