import { css } from 'styled-components';

const Typography = css`
  :root {
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --body-height: 150%;
    --heading-height: 110%;
  }

  * {
    --text-12: 12px;
    --text-14: 14px;
    --text-16: 16px;
    --text-18: 18px;
    --text-20: 20px;
    --text-24: 24px;
    --text-28: 28px;
    --text-32: 32px;
    --text-40: 40px;
    --text-48: 48px;
    --text-64: 64px;
  }

  body {
    font-family: var(--font-primary);
    font-weight: 400;
    font-style: normal;
    line-height: var(--body-height);
    color: var(--neutral-500);
    font-size: var(--text-16);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--heading-height);
    font-weight: 700;
    color: var(--black);
    letter-spacing: -0.5px;
  }
`;

export default Typography;
