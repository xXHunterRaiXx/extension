function Button({ removeItem, id }) {
  return (
    <>
      <div>
        <button id="button" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
    </>
  );
}

export default Button;
