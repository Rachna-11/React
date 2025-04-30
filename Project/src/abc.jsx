import React, { useState } from "react";
import "./App.css";

const InputForm = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [comments, setComments] = useState([]);

  const handlBtn = () => {
    if (!name || !msg) {
      alert("Both fields are required");
      return;
    }

    const newComment = {
      name: name,
      message: msg
    };

    setComments([...comments, newComment]);

    setName("");
    setMsg("");
  };

  const handlName = (e) => {
    setName(e.target.value);
  };

  const handlMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <div className="comment-box">
        <h2>Leave a Comment / Review</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handlName}
          required
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          value={msg}
          onChange={handlMsg}
          required
        />
        <button onClick={handlBtn}>Post</button>
      </div>

      <div className="allComments border-solid">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.name}</strong>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InputForm;
