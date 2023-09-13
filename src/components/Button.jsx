const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " bg-violet-600  text-white border-violet-900"
      } rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="iconURL"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
