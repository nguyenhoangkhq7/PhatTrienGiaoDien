export default function Button({ title, type }) {
  return (
    <>
      <button
        // style={
        //   ({ backgroundColor: "ButtonHighlight" }, { color: "ButtonHighlight" })
        // }
        className={type.toLowerCase()}
        type="button"
      >
        {title}
      </button>
    </>
  );
}
