import footerData from '../../../data/footer.json';

export const Footer = () => {
  return (
    <div className="flex gap-36 px-8 sm:flex bottom-0 left-0 w-full">
      {footerData.map((data, index) => {
        return (
          <div key={index}>
            <h3>{data.title}</h3>
            <p>{data.links.text}</p>
          </div>
        );
      })}
    </div>
  );
};
