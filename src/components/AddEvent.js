import React, { useState } from "react";
import { motion } from "framer-motion";

const AddEvent = ({ onAdd }) => {
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "" });

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.category) {
      onAdd(newEvent);
      setNewEvent({ title: "", date: "", category: "", location: "" });
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, type: "spring", stiffness: 100 } })
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true }} 
      className="p-6 bg-white shadow-lg rounded-lg w-96 mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Add a New Event</h2>

      {/* Title Input */}
      <motion.input
        type="text"
        placeholder="Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        custom={0}
        variants={inputVariants}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Date Input */}
      <motion.input
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        custom={1}
        variants={inputVariants}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Dropdown */}
      <motion.select
        value={newEvent.category}
        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        custom={2}
        variants={inputVariants}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Charity">Charity</option>
        <option value="Social">Social</option>
        <option value="Educational">Educational</option>
        <option value="Networking">Networking</option>
      </motion.select>

      {/* Location Input */}
      <motion.input
        type="text"
        placeholder="Location"
        value={newEvent.location}
        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        custom={3}
        variants={inputVariants}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Add Event Button */}
      <motion.button
        className="w-full px-4 py-2 mt-2 text-lg font-bold text-white bg-blue-500 rounded-md shadow-md"
        onClick={addEvent}
        animate={{ y: [0, -5, 0], transition: { repeat: Infinity, repeatType: "mirror", duration: 0.8 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Event
      </motion.button>
    </motion.div>
  );
};

export default AddEvent;
