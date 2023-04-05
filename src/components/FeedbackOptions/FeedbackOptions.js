import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackOptions = [
    { value: 'good', label: 'Good' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'bad', label: 'Bad' },
  ];

  return (
    <div>
      {feedbackOptions.map((option) => (
        <Button type="button" key={option.value} onClick={() => onLeaveFeedback(option.value)}>
          {option.label}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


/*import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const feedbackOptions = [
  { value: 'good', label: 'Good' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'bad', label: 'Bad' },
];

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <Button type="button" key={option.value} onClick={() => onLeaveFeedback(option.value)}>
        {option.label}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;*/



//Cada onClick llama la funcion onLeaveFeedback con el argumento seleccionado {los props}
/* PropTypes = FeedbackOptions es funcion que define los datos de las propiedadeses requerida
Propiedad onLeaveFeedback es la funcion  que recibe las acciones de los botones evita errores */