import background from '../assets/images/banner.jpg';

export const headerStyle = `
  position: relative;
  clip-path: polygon(0 0, 100% 1%, 100% 70%, 50% 100%, 0 70%);
  height: 50vh;
  white-space: nowrap;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    animation-name: test;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out; 
    z-index: -100; 
    
  }

  @keyframes test {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1
    }
  }
  
`;
