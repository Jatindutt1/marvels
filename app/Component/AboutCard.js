"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutCard({ data }) {
  const router = useRouter();
  return (
    <div>
      <div className="">
        <div className="box-item">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={{
                backgroundImage: `url(${data.img})`,
              }}
            >
              <div
                className="inner color-white"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 className="flip-box-header">{data?.head}</h3>
                &nbsp; &nbsp;
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={{
                backgroundImage: `url(${data.img})`,
              }}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header pb-4">{data?.head}</h3>
                <p>{data?.description}</p>
                <button
                  onClick={() => router.push(data.link)}
                  className="mainButton animated-button victoria-one"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
