import { BeatLoader } from 'react-spinners';

interface IProps {
  primary?: boolean;
  size?: string;
}

export const LoadingIndicator = (props: IProps) => {
  const { primary } = props;

  const color = primary ? '#00a7c7' : 'white';
  const size = props.size || '24';

  return <BeatLoader color={color} size={size} />;
};
