import { v4 as uuidv4 } from 'uuid';

const todoList = [
  { 
    id: uuidv4(), 
    task: "딥다이브 10쪽 읽기", 
    completed: true 
  },
  { 
    id: uuidv4(), 
    task: "오늘 배운 내용 블로깅 하기", 
    completed: false 
  },
  { 
    id: uuidv4(), 
    task: "프로그래머스 세 문제 풀기", 
    completed: false 
  }
]


export default todoList