import { css } from 'lit';

export const componentStyles = css`
.video-slot-container {
  width: 320px;
  height: 180px;
  background-color: #e0f2f1;
  border-radius: 4px;
  box-shadow: 0 5px 0 #1c181d,
              0 -5px 0 #1c181d,
              7px -5px 0 #1c181d,
              -7px 5px 0 #1c181d,
              7px 0 0 #1c181d,
              -7px 0 0 #1c181d,
              -7px -5px 0 #1c181d,
              7px 5px 0 #1c181d;

}

.video-slot {
  display: block;
  height: 100%;
  width: 100%;
  opacity: 0.6;
}
`;
