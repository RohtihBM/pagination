import { useEffect, useState } from "react";
import Page from "./Page";
export default function Post() {
  const [data, setData] = useState([]);
  const [pgNo, setPgNo] = useState(7);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pgNo}&limit=5`)
      .then((resp) => resp.json()) // Convert response to JSON
      .then((posts) => {
        setData(posts); // Logs the actual fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [pgNo]);
  return (
    <div>
      I am Post
      <div className="post-container">
        {data.map((item, index) => {
          return <img src={item.download_url} />;
        })}
      </div>
      <Page pgNo={pgNo} setPgNo={setPgNo} />
    </div>
  );
}
