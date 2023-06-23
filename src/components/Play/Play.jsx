import "./Play.css";
import { Link } from "react-router-dom";
import { Quiz } from "../Quiz/Quiz";

export const Play = ({
  quiz,
  correctAnswers,
  setCorrectAnswers,
  inCorrectAnswers,
  setInCorrectAnswers,
  startTest,
  endTest,
}) => {
  return (
    <>
      <div className="Play">
        <div className="Play__quiz">
          {
            <Quiz
              quiz={quiz}
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
              inCorrectAnswers={inCorrectAnswers}
              setInCorrectAnswers={setInCorrectAnswers}
              endTest={endTest}
            />
          }
        </div>

        <div className="Play__buttons">
          <Link to="/home">
            <input
              type="button"
              className="Play__cancel Play__button button"
              value={"Cancel"}
              onClick={() => {
                setCorrectAnswers(0);
                setInCorrectAnswers(0);
              }}
            />
          </Link>
          <Link to="/finish">
            <input
              type="button"
              className="Play__finish Play__button button"
              value={"Finish"}
              onClick={endTest}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
