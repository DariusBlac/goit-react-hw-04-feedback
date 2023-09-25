import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            value={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
