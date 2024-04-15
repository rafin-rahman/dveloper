export default function Hero() {
  const images = [
    { name: 0, text: "CRM" },
    { name: 2, text: "Dashboard" },
    { name: 3, text: "Reports" },
    { name: 4, text: "Websites" },
  ];
  return (
    <div className={"container px-10  pt-20 mx-auto text-center"}>
      <h1 className={"text-4xl font-bold  uppercase tracking-widest"}>
        Tailored software for your business
      </h1>
      <p className={"tracking-widest"}>
        We build using the latest technologies to ensure your business is
        future-proofed
      </p>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={"sm:w-1/2  items-center justify-center p-10"}
          >
            <div className={"flex flex-col items-center"}>
              <img
                src={`/images/background/${image.name}.jpg`}
                alt={`hero${image.text}`}
                className={"w-full  rounded"}
              />
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
