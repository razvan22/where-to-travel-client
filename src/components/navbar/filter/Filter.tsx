import useToggle from "../../../hooks/useToggle";

function Filter() {
  const [isHappy, toggleHappy] = useToggle(true);

  return (
    <div>
      <h2 onClick={() => toggleHappy}>{isHappy ? "Happy" : "Sad"}</h2>
    </div>
  );
}

export default Filter;
