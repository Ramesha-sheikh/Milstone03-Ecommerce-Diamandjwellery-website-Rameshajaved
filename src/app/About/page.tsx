"use client";
import Image from "next/image";
import { useState } from "react";

const AboutUs = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <main className="font-sans bg-gray-100 text-gray-900">
      <header
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-5 bg-black"
        style={{ backgroundImage: "url(bg.jpeg)" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-500">
          About Diamand Jewellery
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-5 text-gray-200">
          At Diamand Jewellery, we create exquisite jewelry that embodies luxury, elegance, and timeless beauty.
        </p>
      </header>

      <section className="py-20 px-5 md:px-20 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
          Who I Am - Ramesha Javed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-red-700 via-gray-800 to-black p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Education
            </h3>
            <p className="text-gray-300">
              I am a Front End Developer and currently enhancing my skills in IT and Artificial Intelligence through the Governor IT Initiative in Karachi, Pakistan.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-700 via-gray-800 to-black p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Achievements
            </h3>
            <p className="text-gray-300">
              Empowered by the Governor IT Initiative, I continuously strive to learn and innovate in the field of technology.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-700 via-gray-800 to-black p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Passion for Diamand Jewelry
            </h3>
            <p className="text-gray-300">
              As the founder of Gold Aura, I have a passion for creating jewelry pieces that capture elegance and grace in every detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">
          Meet My Team
        </h2>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <Image
              src="/gi1.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-300">Maha</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="/gi2.jpeg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-300">Sana</h3>
            <p className="text-gray-400">Head of Diamand  Design</p>
          </div>
          <div className="text-center">
            <Image
               src="/men1.jpeg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-300">Ali</h3>
            <p className="text-gray-400">Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-gray-100 text-black">
        <h2 className="text-3xl font-semibold text-center mb-10 text-red-800">
          Leave a Comment
        </h2>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-500 mb-5"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button
            onClick={handleAddComment}
            className="bg-red-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          >
            Add Comment
          </button>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-5 text-red-800">
            Comments
          </h3>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg">
                <p className="text-lg">{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-800 mt-2 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
