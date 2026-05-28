"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ScreenshotCarousel() {
  const screenshots = [
    "/images/screenshots/first.png",
    "/images/screenshots/second.png",
    "/images/screenshots/third.png",
    "/images/screenshots/forth.png",
    "/images/screenshots/fifth.png",
    "/images/screenshots/seventh.png",
    "/images/screenshots/sixth.png",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage((prev) =>
      prev === screenshots.length - 1 ? 0 : prev! + 1,
    );
  };

  const prevImage = () => {
    if (selectedImage === null) return;

    setSelectedImage((prev) =>
      prev === 0 ? screenshots.length - 1 : prev! - 1,
    );
  };

  return (
    <>
      {/* Carousel */}
      <div className="flex items-center justify-start gap-4 overflow-x-auto px-6 py-8 sm:px-10 lg:justify-center lg:gap-5 lg:px-20 lg:py-10">
        {screenshots.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className="min-w-fit cursor-pointer transition hover:scale-105"
          >
            <Image
              src={src}
              width={166}
              height={296}
              alt={`Screenshot ${index + 1}`}
              className="h-auto w-36 rounded-2xl border border-gray-200 shadow-sm sm:w-41.5"
              priority
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Preview */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-white sm:right-6 sm:top-6"
          >
            <X size={36} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-2 text-white sm:left-6"
          >
            <ChevronLeft size={42} />
          </button>

          {/* Image */}
          <Image
            src={screenshots[selectedImage]}
            width={400}
            height={800}
            alt="Fullscreen Screenshot"
            className="h-auto max-h-[90vh] max-w-[78vw] rounded-3xl object-contain"
            priority
          />

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-2 text-white sm:right-6"
          >
            <ChevronRight size={42} />
          </button>
        </div>
      )}
    </>
  );
}
