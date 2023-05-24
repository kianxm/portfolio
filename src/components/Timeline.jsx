import React from "react";

const Timeline = () => {
  const timeline = [
    {
      id: 1,
      title: "Joined Santa Clara University",
      date: "September 2019",
      description:
        "Lorem ipsum samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong",
    },
    {
      id: 2,
      title: "Learned coding",
      date: "September 2020",
      description:
        "Lorem ipsum samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong Lorem ipsum samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong",
    },
    {
      id: 3,
      title: "Started senior project",
      date: "September 2021",
      description:
        "Lorem ipsum samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong samalama ding dong Lorem ipsum samalama ding dong samalama ding dong samalama ding dong",
    },
    {
      id: 4,
      title: "Graduated College!",
      date: "June 2023",
      description:
        "Lorem ipsum samalama ding dong samalama ding dong samalama ding dong",
    },
  ];

  return (
    <div
      name="timeline"
      className="w-full h-screen text-gray-800 px-[50px] py-0 grid place-items-center"
    >
      <h2 className="font-bold text-4xl md:my-24 mt-12 mb-16">Timeline</h2>
      <div className="xl:w-[70%] lg:w-[80%] w-[90%] h-auto relative">
        <ul className="list-none after:absolute after:content-empty after:w-2 after:h-full after:top-0 md:after:left-[50%] after:left-[-44px] after:bg-gradient-to-b from-indigo-800 to-indigo-700">
          {timeline.map(({ id, title, date, description }) => (
            <li
              className={`md:w-2/4 h-auto px-[30px] py-5 bg-white shadow-xl-center rounded-md md:mb-8 mb-20 z-40 relative
              ${
                id % 2 === 0
                  ? "w-full md:float-right md:clear-left float-none clear-none md:translate-x-[30px] translate-x-0 last:mb-12 text-left"
                  : "w-full md:float-left md:clear-right float-none clear-none md:translate-x-[-30px] translate-x-0 md:text-right text-left"
              }
              `}
            >
              <h3 className="font-bold text-xl">{title}</h3>
              <span
                className={`w-[30px] h-[30px] bg-indigo-400 rounded-full absolute top-0
                ${
                  id % 2 === 0
                    ? "left-[-40px] md:left-[-26px] translate-x-[-50%] translate-y-[-50%]"
                    : "md:translate-x-[49px] translate-x-[-85px] translate-y-[-50%]"
                }
                after:content-empty after:w-[15px] after:h-[15px] after:bg-indigo-800 after:rounded-full after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]`}
              ></span>
              <p
                className={`font-semibold absolute top-[-40px] h-[35px] bg-gradient-to-r from-indigo-500 to-indigo-800 text-white rounded-md grid place-items-center text-xl px-2 py-1 left-0 md:left-auto
                ${id % 2 === 0 ? "" : "md:right-[20px]"}`}
              >
                {date}
              </p>
              <p className="text-md my-1 mx-0 leading-6">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
