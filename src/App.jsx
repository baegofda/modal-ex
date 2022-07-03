import classNames from "classnames";
import { useRef, useState } from "react";
import "./App.css";

const skills = [
  { name: "React", isAble: true },
  { name: "Vue", isAble: true },
  { name: "Angular", isAble: true },
  { name: "Svelte", isAble: true },
  { name: "Solid", isAble: true },
  { name: "Preact", isAble: true },
  { name: "Remix", isAble: true },
  { name: "Next.js", isAble: true },
  { name: "Nuxt.js", isAble: true },
];

function App() {
  const modalRef = useRef(null);
  const [currentSkill, setCurrentSkill] = useState("React");
  const [isToggle, setIsToggle] = useState(false);

  const toggleModal = () => {
    setIsToggle(!isToggle);
  };

  const onClickSkill = (skill) => {
    setCurrentSkill(skill);
    setIsToggle(false);
  };

  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={() => toggleModal()}
        aria-haspopup="dialog"
        title="스킬 선택 창"
      >
        {currentSkill}
      </button>
      {isToggle && (
        <div
          ref={modalRef}
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={() => toggleModal()}
        >
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <strong className="modal-title">스킬 선택</strong>
              <button
                className="modal-btn"
                type="button"
                onClick={() => toggleModal()}
              >
                닫기
              </button>
            </div>
            <ul className="modal-items">
              {skills.map((skill, idx) => (
                <li
                  className={classNames(
                    "modal-item",
                    {
                      active: currentSkill === skill.name,
                    },
                    { disable: !skill.isAble }
                  )}
                  key={idx}
                  onClick={() => onClickSkill(skill.name)}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
