import {
  FC, MutableRefObject, UIEvent, useRef
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiSliceActions } from 'features/UI';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   onScrollCb?: () => void
}
export const Page: FC<PageProps> = ({ children, className, onScrollCb }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const position = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    callback: onScrollCb,
    wrapperRef,
    triggerRef
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = position;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiSliceActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop
    }));
  }, 500);

  return (
    <section
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
