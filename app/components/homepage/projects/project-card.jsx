// @flow strict
"use client";

import * as React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function ProjectCard({ project }) {
  const [previewImg, setPreviewImg] = React.useState(null);

  const closePreview = () => setPreviewImg(null);

  return (
    <>
      <div className="from-[#0d1224] border-[#1b2c68a0] relative flex h-full w-full flex-col rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

      {/* TITLE */}
        <div className="relative px-4 lg:px-8 py-3 lg:py-5">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 left-4 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center pl-10 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 scrollbar-hide">


         {/* 🔥 SLIDER GAMBAR */}
          {project.images && (
            <div className="w-full mb-6 relative">
              <div className="relative w-full aspect-[1812/870] rounded-md overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <button
                        type="button"
                        onClick={() => setPreviewImg(img)}
                        className="relative block h-full w-full focus:outline-none"
                        aria-label={`Perbesar gambar ${project.name}`}
                      >
                        <Image
                          src={img}
                          alt={`${project.name}-${i}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}


          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>

            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))}
              <span className="text-gray-400">{"],"}</span>
            </div>

            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>

            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
      </div>

      {previewImg && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Tutup pratinjau gambar"
              onClick={closePreview}
              className="absolute -top-10 right-0 rounded-md bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20"
            >
              Close
            </button>
            <div className="relative w-full rounded-lg bg-black/30">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <Image
                  src={previewImg}
                  alt="Project preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
