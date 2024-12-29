import React, { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold text-center mb-8">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-neutral-800 p-6 rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 rounded bg-neutral-700 focus:outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded bg-neutral-700 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 rounded bg-neutral-700 focus:outline-none"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>

        <motion.button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
