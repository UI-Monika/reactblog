import { useEffect, useState } from "react";
import axios from "axios";


function Cards(){
    const API_LINK = "https://dev.to/api/articles";
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(API_LINK);
        setDummyData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  console.log(dummyData);

    return(
<>
<div>
      {dummyData.map(() => (
        <>{title}</>
      ))}
    </div>
{/* 
{Cardcontent} */}
</>
    );

}

export default Cards;