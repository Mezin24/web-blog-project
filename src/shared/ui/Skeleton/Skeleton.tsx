import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
   className?: string;
   width?: string | number;
   height?: string | number;
   borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className, borderRadius, height, width
  } = props;

  const styles: CSSProperties = useMemo(() => ({
    width,
    height,
    borderRadius
  }), [borderRadius, height, width]);

  return (
    <div style={styles} className={classNames(cls.skeleton, {}, [className])} />
  );
};
