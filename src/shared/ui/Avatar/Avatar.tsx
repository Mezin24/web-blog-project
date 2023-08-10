import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
   className?: string;
   src?: string,
   size?: number,
   alt?: string
}
export const Avatar = ({
  className, size, alt, src
}: AvatarProps) => {
  const mods: Mods = {};
  const styles: CSSProperties = useMemo(() => ({
    width: size || 100,
    height: size || 100
  }), [size]);

  return (
    <img style={styles} alt={alt} src={src} className={classNames(cls.avatar, mods, [className])} />
  );
};
