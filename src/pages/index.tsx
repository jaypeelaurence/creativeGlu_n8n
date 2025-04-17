import React, { useEffect, useState } from 'react';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/reviews'); // Call your API route
      const data = await res.json();
      setReviews(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#1e2a45] text-white text-center py-6 px-4">
        <h1 className="text-2xl font-bold">Good morning! ☀️</h1>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-base mb-6">
          Here’s your daily email summary to help you start the day informed and organized:
        </p>

        {reviews.map((review: Record<string, never>, index) => (
          <div key={index} className="mb-6 border border-gray-200 rounded-lg p-4 shadow-sm">
            <h2 className="text-xls font-semibold text-[#1e2a45] mb-2">📬 {review.title}</h2>
            <ul className="list-disc list-inside text-gray-800 text-sm space-y-5">
              <li className="list-none text-md text-gray-500"><strong>Subject:</strong> {review.subject}</li>
              <li className="list-none text-md text-gray-500"><strong>From:</strong> {review.from}</li>
              <li className="list-none text-md text-gray-500"><strong>Sent On:</strong> {new Date(review.createdAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
              <li className="list-none text-md">
                <strong>📝 Summary:</strong> 
                <p>{review.summary}</p>
              </li>
              <li className="list-none text-md">
                <strong>📂 Required Action:</strong>
                <p>{review.action}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#1e2a45] text-white text-center py-4 px-4 text-sm italic">
        Let’s tackle today with clarity and confidence. 💪
      </div>
    </div>
  );
};

export default Home;
