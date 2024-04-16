export default function Hero() {
  const images = [
    { name: 0, text: "CRM" },
    { name: 2, text: "Dashboard" },
    { name: 3, text: "Reports" },
    { name: 4, text: "Websites" },
  ];

  const text = "Tailored software for your business";

  return (
    <div className={"container px-10  pt-20 mx-auto text-center"}>
      <div className={"outline outline-1 p-2 border-b-2 border-black"}>
        <h1 className="text-4xl font-bold uppercase tracking-widest">
          {
            // @ts-ignore
            [...text].map((letter, index) =>
              letter === " " ? (
                " "
              ) : (
                <span
                  key={index}
                  className="inline-block transform transition-all duration-500 hover:-translate-y-3"
                >
                  {letter}
                </span>
              )
            )
          }
        </h1>
        <p className={"tracking-widest"}>
          We build using the latest technologies to ensure your business is
          future-proofed
        </p>
      </div>
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
              <p className={"pt-2 tracking-wide"}>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
