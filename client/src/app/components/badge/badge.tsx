interface IProps {
  text: string;
}

export const XBadge = (props: IProps) => {
  const { text } = props;

  return <div className="badge badge-neutral font-bold">{text}</div>;
};
