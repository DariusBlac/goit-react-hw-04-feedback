import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleFeedback = event => {
    const name = event.target.name;
    onLeaveFeedback(name);
  };

  return (
    <div className={css.container}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            type="button"
            onClick={handleFeedback}
            value={option}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
