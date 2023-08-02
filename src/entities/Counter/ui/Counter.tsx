import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../selectors/getCounterValue/getCounterValue';
import { counterActions } from '../slice/counterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const decrement = () => { dispatch(counterActions.decrement()); };
  const increment = () => { dispatch(counterActions.increment()); };

  return (
    <div>
      <h1 data-testid="counter-title">
        {counterValue}
      </h1>
      <div>
        <Button
          data-testid="decrement_btn"
          theme={ButtonTheme.OUTLINE}
          onClick={decrement}
        >
          {t('уменьшить')}
        </Button>
        <Button
          data-testid="increment_btn"
          theme={ButtonTheme.OUTLINE}
          onClick={increment}
        >
          {t('увелиить')}
        </Button>
      </div>
    </div>
  );
};
