export default function Input({
  inputType,
  className,
  register,
  registerName,
  placeHolder,
}) {
  return (
    <div>
      <input
        {...register(registerName, { required: true })}
        className={`${className}`}
        type={inputType}
        placeholder={placeHolder}
      />
    </div>
  );
}
