"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export default function Ratings() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [review, setReview] = useState("");

  const [reviews, setReviews] = useState([
    {
      name: "Alex",
      rating: 5,
      text: "Amazing music experience 🔥",
    },
  ]);

  const averageRating =
    reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length;

  const roundedRating = averageRating.toFixed(1);

  const totalReviews = reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((item) => item.rating === star).length;

    const percentage = (count / reviews.length) * 100;

    return {
      star,
      percentage,
    };
  });

  const submitReview = () => {
    if (rating === 0 || review.trim() === "") return;

    const newReview = {
      name: "Anonymous User",
      rating,
      text: review,
    };

    setReviews([newReview, ...reviews]);

    setRating(0);
    setReview("");
  };

  return (
    <section id="reviews" className="px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Rating Summary */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-14 lg:gap-20">
          {/* Left */}
          <div className="min-w-0 sm:min-w-[10.625rem]">
            <h1 className="text-6xl font-normal leading-none text-[#202124] sm:text-[88px]">
              {roundedRating}
            </h1>

            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={20}
                  className={`${
                    item <= Math.round(averageRating)
                      ? "fill-[#01875f] text-[#01875f]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-[#5f6368] mt-4 text-sm">
              {totalReviews} reviews
            </p>
          </div>

          {/* Rating Bars */}
          <div className="flex w-full flex-1 flex-col gap-4 pt-2 sm:pt-4">
            {ratingCounts.map((item) => (
              <div key={item.star} className="flex items-center gap-4">
                <span className="text-sm text-[#5f6368] w-3">{item.star}</span>

                <div className="flex-1 h-3 bg-[#e0e3e7] rounded-full overflow-hidden">
                  <div
                    style={{
                      width: `${item.percentage}%`,
                    }}
                    className="h-full bg-[#01875f] rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BIG SPACE */}
        <div className="h-14 sm:h-20" />

        {/* Rate App Section */}
        <div>
          <h1 className="text-2xl font-medium text-[#202124] sm:text-[28px]">
            Rate this app
          </h1>

          <p className="text-[#5f6368] mt-2">Tell others what you think</p>

          {/* Stars */}
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="transition hover:scale-110"
              >
                <Star
                  size={46}
                  className={`transition-colors duration-200 ${
                    star <= (hover || rating)
                      ? "fill-[#01875f] text-[#01875f]"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Review Input */}
          <div className="mt-10">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Describe your experience..."
              className="w-full h-40 border border-gray-300 rounded-3xl p-6 outline-none resize-none focus:border-[#01875f] focus:ring-2 focus:ring-[#01875f]/20 transition"
            />

            <div className="mt-5 flex justify-stretch sm:justify-end">
              <button
                onClick={submitReview}
                disabled={rating === 0 || review.trim() === ""}
                className={`w-full rounded-full px-8 py-3 font-medium transition sm:w-auto ${
                  rating > 0 && review.trim() !== ""
                    ? "bg-[#01875f] text-white hover:bg-[#0b6e4f]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Submit review
              </button>
            </div>
          </div>
          {/* Reviews List */}
          <div className="mt-12 flex flex-col gap-8">
            {reviews.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#01875f] text-white flex items-center justify-center font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-medium text-[#202124]">{item.name}</h2>

                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={
                            star <= item.rating
                              ? "fill-[#01875f] text-[#01875f]"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-[#5f6368] leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
