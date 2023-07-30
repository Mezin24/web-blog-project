import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface BugButtonProps {
   className?: string;
}
export const BugButton = ({ className }: BugButtonProps) => {
  const [bug, setBug] = useState(false);

  useEffect(() => {
    if (bug) { throw new Error(); }
  }, [bug]);

  return (
    <button
      type="button"
      onClick={() => setBug(true)}
      className={classNames('', {}, [className])}
    >
      BUG
    </button>
  );
};
