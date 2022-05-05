import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between inset-0 p-4 text-xl font-bold z-10 text-white bg-gradient-to-b from-neutral-900">
      <div className="font-Lobster">Prakhar Agarwal</div>
      <div>
        <ul className="hidden md:flex space-x-5">
          <l1>Blog</l1>
          <l1>Top</l1>
          <l1>About Me</l1>
          <l1>Projects</l1>
          <l1>Skill Set</l1>
          <l1>Open Source</l1>
          <l1>My Journey</l1>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
