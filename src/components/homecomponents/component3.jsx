import React from "react";
import images from "../../assets/images";
import { motion } from "framer-motion";

const Component3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="bg-[rgb(245,245,245)] w-full flex items-center justify-center px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-pink-600 cinzel-heading">
              Balancing Project Constraints
            </h2>
            <p className="mb-4 leading-relaxed text-[rgb(69,44,72)] cinzel-body">
              Navigating the software development landscape profitably is
              challenging. It’s tough to juggle the triple constraints of
              delivering high-quality software, meeting deadlines, and staying
              within budget.
            </p>
            <p className="mb-4 leading-relaxed text-[rgb(69,44,72)] cinzel-body">
              Too often, project delays, cost overruns, and subpar deliverables
              from vendors prevent teams from hitting key milestones.
              Efficiently managing project timelines, controlling costs, and
              mitigating risks empowers your development team to perform and
              scale effectively.
            </p>
            <p className="font-semibold text-[rgb(69,44,72)] cinzel-body">
              Sounds familiar? You're in the right place.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={images.Component3.solve}
              alt="Project Management"
              className="h-[300px] w-full object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Component3;
