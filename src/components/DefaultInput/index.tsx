import style from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={style.input} type={type} id={id} {...rest} />
    </>
  );
}
