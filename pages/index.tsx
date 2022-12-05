/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { H1, H2, P } from '../components/Typography';
import { Socials } from '../components/Socials';

export default function Home() {
  return (
    <Container>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          mt: '164px',
          gap: '64px',
        }}
      >
        <div sx={{ gridColumn: 1 }}>
          <H1
            sx={{
              mb: '20px',
            }}
          >
            <span sx={{ textTransform: 'uppercase', mb: '30px' }}>
              Alexandria
            </span>
            <br />
            roberts
          </H1>
          <Divider width='80%' sx={{ mt: '20px' }} />
          <P
            sx={{
              my: '20px',
            }}
          >
            Is an UI Engineer with strong skills in UI design and focus on
            usability and love learning new tech.
          </P>
          <Socials sx={{ mt: '24px' }} />
        </div>
        <div
          sx={{
            gridColumn: 2,
            display: 'grid',
            justifySelf: 'end',
            position: 'relative',
          }}
        >
          <Divider
            width='1px'
            height='130%'
            sx={{
              position: 'absolute',
              top: '-25px',
              right: '0px',
              zIndex: -1,
            }}
          />
          <Divider
            color='primary'
            width='1px'
            height='110%'
            sx={{
              position: 'absolute',
              top: '50px',
              right: '120px',
              zIndex: -1,
            }}
          />

          <div sx={{ maxWidth: '580px', height: '100%', mt: '164px' }}>
            <img
              src='../profile.jpg'
              alt='Head Shot of Lexie'
              sx={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <main sx={{ mt: '164px' }}>
        <H2>
          About{' '}
          <span sx={{ position: 'relative' }}>
            <span
              sx={{
                display: 'inline-block',
                position: 'absolute',
                top: '40%',
                left: '50%',
                width: '108px',
                height: '72px',
                transform: 'translate(-50%, -50%)',
                borderRadius: '250px 250px 0 0',
                bg: 'secondaryOrange',
                zIndex: '-1',
              }}
            />
            me
          </span>
        </H2>
        <div sx={{ maxWidth: '840px', m: '0 auto' }}>
          <P>
            Is a A UI Engineer with strong skills in UI design skills and focus
            on usability and learning new skills.
          </P>
          <P>
            Is a A UI Engineer with strong skills in UI design skills and focus
            on usability and learning new skills. Is a A UI Engineer with strong
            skills in UI design skills and focus on usability and learning new
            skills. Is a A UI Engineer with strong skills in UI design skills
            and focus on usability and learning new skills. Is a A UI Engineer
            with strong skills in UI design skills and focus on usability and
            learning new skills.
          </P>
        </div>
      </main>
    </Container>
  );
}
