'use client';
import styles from './color-selector.module.scss';

interface IProps {
  onSelected: (color: string) => void;
  selectedColor: string;
}

export const ColorSelector = (props: IProps) => {
  const { onSelected, selectedColor } = props;

  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-yellow-700',
  ];

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Color</label>
      <div className="flex gap-3">
        {colors.map((color, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.item} ${color} ${selectedColor === color ? styles.selected : ''}`}
            onClick={() => onSelected(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};
