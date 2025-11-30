interface Type {
  content?: string;
}

export default function Explore() {
  const items: Type[] = [];
  return (
    <div className="   h-full px-9 p-5">
      <div className="  ">
        {items.length > 0 ? (
          <div className="columns-3 w-full">
            {items?.map((item, index) => (
              <div key={index} className=" w-full py-2">
                <img
                  className=" object-contain w-full h-full "
                  src={item.content}
                  alt=""
                />
              </div>
            ))}
          </div>
        ) : (
          <img
            src="./notfound.png"
            alt=""
            className=" object-contain mx-auto"
          />
        )}
      </div>
    </div>
  );
}
