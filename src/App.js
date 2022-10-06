import "./App.css";
import { useState } from "react";

function App() {
  const [postList, setPostList] = useState([]);
  const [postTitle, setPostTitle] = useState("");

  const [modalOpen, setModalOpen] = useState(null);

  const likeAction = (id) => {
    const result = postList.map((post) => {
      if (post.id === id) {
        return { ...post, like: post.like + 1 };
      } else {
        return post;
      }
    });

    setPostList(result);
  };

  return (
    <div>
      <div className="App">
        <div className="black-nav">
          <h1>솧디blog</h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            setPostList([
              ...postList,
              {
                id: postList[postList.length - 1]?.id + 1 || 1,
                title: postTitle,
                like: 0,
              },
            ]);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />

          <button>글발행</button>
        </form>

        <ul className="list">
          {postList.map((item) => {
            return (
              <li
                className="list-item"
                key={item.id}
                onClick={() => setModalOpen(modalOpen ? null : item.id)}
              >
                제목:{item.title} <br /> 좋아요:{item.like}
                <button
                  className="add-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    likeAction(item.id);
                  }}
                >
                  👍
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
