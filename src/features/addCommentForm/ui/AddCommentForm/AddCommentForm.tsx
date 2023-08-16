import { getAddCommentFormText } from 'features/addCommentForm/model/selectors/addCommentForm';
import {
  addCommentFormActions,
  addCommentFormReducer
} from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onChangeComment = useCallback((val: string) => {
    dispatch(addCommentFormActions.setText(val));
  }, [dispatch]);

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text || '');
    dispatch(addCommentFormActions.setText(''));
  }, [dispatch, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите комментарий')}
          value={text || ''}
          onChange={onChangeComment}
          className={cls.input}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendCommentHandler}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
