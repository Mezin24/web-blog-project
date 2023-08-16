import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
type UseHoverReturnType = [ boolean, UseHoverBind]

export const useHover = (): UseHoverReturnType => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo(() => [isHovered, {
    onMouseEnter,
    onMouseLeave
  }], [isHovered, onMouseEnter, onMouseLeave]);
};
