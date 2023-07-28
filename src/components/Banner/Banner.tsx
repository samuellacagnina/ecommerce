export const Banner = () => {
  const textBanner = 'Next cohort starts August 7, 2023';
  const counter = 30;

  const testArray = new Array(counter).fill(textBanner);

  return (
    <div className="border-green-400 p-8 scroll-text">
      <div className="flex gap-8 text-center">
        {testArray.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </div>
    </div>
  );
};
