import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  margin: 30px 0;
`;
const Container = styled.div`
  position: absolute;
  top: 5%;
  background: lightblue;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  text-align: center;
  background: #1a2e5b;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  h2 {
    font-size: 18px;
    padding: 10px;
    margin-left: 10px;
  }

  span {
    margin-right: 10px;
  }
`;
const Dropdown = styled.div`
  color: #555;
  font-size: 20px;
  border-bottom: 1px solid #1a2e5b;
`;

const Lists = [
  {
    question: "How much is your plate of rice?",
    answer: "#1500"
  },
  {
    question: "How much is a bottle of Pepsi?",
    answer: "#500"
  },
  {
    question: "Do you sell bottle water?, if yes, how much?",
    answer: "Of course we do and it goes for #400."
  }
];

function Accordion() {
  const [clicked, setClicked] = useState(false);
  const toggleIcon = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ style: { fontSize: "25px" } }}>
      <Wrapper>
        <Container>
          {Lists.map((list, index) => {
            return (
              <>
                <Wrap onClick={() => toggleIcon(index)} key={index}>
                  <h2>{list.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{list.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </Wrapper>
    </IconContext.Provider>
  );
}

export default Accordion;
