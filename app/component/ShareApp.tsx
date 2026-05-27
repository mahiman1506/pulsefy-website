"use client";

import { useState } from "react";
import { Share2, X, Copy, Mail } from "lucide-react";
import Image from "next/image";

export default function ShareApp() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLink = "https://indusapp.store/48vmt1xw";

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      {/* Share Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-[#01875f]"
      >
        <Share2 size={20} />
        Share
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 sm:p-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">Pulsefy</h2>

                <p className="text-gray-500">Share this app</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex flex-wrap gap-5 sm:gap-8">
              {/* X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${shareLink}`}
                target="_blank"
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-3xl">
                  X
                </div>
                <p className="mt-2">X</p>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
                target="_blank"
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  F
                </div>

                <p className="mt-2">Facebook</p>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${shareLink}`}
                target="_blank"
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Image
                    src="/images/whatsapp.png"
                    width={34}
                    height={34}
                    alt="WhatsApp"
                    className="object-contain"
                  />
                </div>

                <p className="mt-2">WhatsApp</p>
              </a>

              {/* Email */}
              <a
                href={`mailto:?subject=Pulsefy&body=${shareLink}`}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-400 text-white flex items-center justify-center">
                  <Mail />
                </div>

                <p className="mt-2">Email</p>
              </a>
            </div>

            {/* Link box */}
            <div className="mt-8 flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="truncate">{shareLink}</span>

              <button
                onClick={copyLink}
                className="text-[#01875f] flex items-center gap-2"
              >
                {copied ? "Copied" : "Copy"}
                <Copy size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
