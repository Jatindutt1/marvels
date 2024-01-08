"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutUsNew = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <div className="cards">
        <div className="card">
          <span className="close"></span>
          <span className="arrow"></span>
          <article>
            <h2>{data?.head}</h2>
            <div className="pic">
              <img src={data.img} alt="Elijah Green's bug collection" />
            </div>
            <div className="desc">{data?.description}</div>
          </article>
          <div className="actions">
            <button className="btn" onClick={() => router.push(data.link)}>
              <span> View Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsNew;
