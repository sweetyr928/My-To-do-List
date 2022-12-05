import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //실수로 시작되거나 더 이상 필요 없는 비동기 작업에 대해 중단할 방법을 제공
    //fetch도 비동기 요청이기 때문에, 이 비동기 작업의 중단을 위해 사용
    const abortCont = new AbortController();

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // abort the fetch. 완료되기 전에 DOM 요청 중단
    return () => abortCont.abort();
  }, []);

  return [todos];
};

export default useFetch;
