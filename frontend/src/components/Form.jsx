import CTAButton from "./CTAButton";
import DotLoader from "./BeatLoader";

const Form = ({
  className,
  title,
  description,
  handleClick,
  handleChange,
  handleSubmit,
  bool,
}) => {
  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
      <button type="button" className="btn__close-form" onClick={handleClick}>
        X
      </button>
      <label htmlFor="form__title">
        {className === "modal" && "Edit"} Task:
      </label>
      <input
        type="text"
        id="form__title"
        name="title"
        className="form__title"
        value={title}
        onChange={handleChange}
        placeholder="What do you need to get done?"
        required
      />

      <label htmlFor="form__description">
        {className === "modal" && "Edit"} Description:{" "}
        {className !== "modal" && <small>(optional)</small>}
      </label>

      <textarea
        id="form__description"
        name="description"
        className="form__description"
        value={description}
        onChange={handleChange}
        placeholder="Add details, steps, or reminders..."
      ></textarea>

      <CTAButton className="btn__submit-form" bgColor="#edecec" disabled={bool}>
        {bool ? (
          <DotLoader bool={bool} />
        ) : className === "modal" ? (
          "Edit Task"
        ) : (
          "Add Task"
        )}
      </CTAButton>
    </form>
  );
};

export default Form;
