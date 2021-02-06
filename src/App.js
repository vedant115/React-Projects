import React, { useState } from "react";
import Slider from "react-touch-drag-slider";
import images from "./images";
import style, { createGlobalStyle, css } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,body {
    padding: 0;
    margin: 0;
  }
`

const AppStyles = style.main`
  height: 100vh;
  width: 100vw;
`

const Button = style.button`
  font-size: 2rem;
  z-index: 10;
  position: fixed;
  top: 50%;
  border-radius: 50%;
  border: 2px solid black;
  outline: none;
  padding: 6px 16px;
  cursor: pointer;
  ${(props) =>
    props.right
      ? css`
          right: 0.5rem;
        `
      : css`
          left: 0.5rem;
        `}
`

function App() {

  const [index, setIndex] = useState(1);

  const setFinishedIndex = (i) => {
    console.log('finished', i);
    setIndex(i);
  }

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1);
  }

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Button onClick={previous} left disabled={index === 0}>
        &#8249;
        </Button>
        <Button onClick={next} right disabled={index === images.length - 1}>
        &#8250;
        </Button>
        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
            console.clear();
            console.log('started', i);
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({id, url, name }) => (
            <img src={url} key={id} alt={name} />
          ))}
        </Slider>
      </AppStyles>
    </>
  )
}

export default App;
