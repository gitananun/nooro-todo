import Image from 'next/image';

interface IProps {
  width?: number;
}

export const XRocket = (props: IProps) => {
  const { width } = props;

  const size = width || 42;

  return (
    <Image src={'/assets/rocket.png'} alt="Rocket" className="w-auto h-auto" width={size} height={size} priority />
  );
};
