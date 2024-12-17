interface IProps {
  text: string;
}

export const XBadge = (props: IProps) => {
  const { text } = props;

  return <span className="badge badge-neutral font-bold">{text}</span>;
};
