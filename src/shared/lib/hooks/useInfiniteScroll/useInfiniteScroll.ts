import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollPorps {
  callback?: () => void;
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollPorps) => {
  const { callback, triggerRef, wrapperRef } = props;
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '50px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observer.current?.observe(triggerRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
