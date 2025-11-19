import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center bg-base-300 p-3">
      <p className="bg-secondary text-white px-3 py-1.5">Latest</p>
      <Marquee className="flex gap-10" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lionel Scaloni: The caretaker who became a World Cup winner and
          facilitator of Messi’s dreams.
        </p>
        <p className="font-semibold ml-10">
          Nine killed in accidental blast at police station in
          Indian-administered Kashmir, officials say.
        </p>
        <p className="font-semibold">
          US justice department investigates Epstein's alleged ties to Clinton
          and banks after Trump request.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
