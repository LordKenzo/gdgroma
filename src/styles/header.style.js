import background from '../assets/images/banner.jpg';

export const headerStyle = `
  position: relative;
  clip-path: polygon(0 0, 100% 1%, 100% 85%, 50% 100%, 0 85%);
  height: 70vh;
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

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 80%;
    position: relative;

    .banner {
      border: 1px solid red;
    }

    h1 {
      transform: translateX(-20px) rotate(-2deg);
      font-size: 62px;
      
      span {
        border-radius:5px;
        background-color: rgba(32,23,22,.9);
      }
    }
    h2 {
      transform: translate(190px, 10px) rotate(-2deg);
      font-size: 48px;
      strong {
        border-radius:5px;
        color: #def248;
      }
      span {
        border-radius:5px;
        background-color: rgba(32,23,22,.9);
      }
    }
    h3 {
      transform: translate(-20px, 20px) rotate(-2deg);
      font-size: 42px;
      span {
        background-color: rgba(32,23,22,.9);
      }
    }
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
