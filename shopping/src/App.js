import { Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Product from './pages/Product';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// 쇼핑몰 프로젝트
// 1. 전체상품페이지, 로그인, 상세상품페이지(페이지 3개)
// 1-1. 네비게이션 바
// 2. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인 페이지가 나온다
// 4. 로그인이 되어있을 경우 상품 디테일 페이지를 볼수 있다.
// 5. 로그아웃 버튼을 누르면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다
// 7. 상품을 검색 할 수 있다.


function App() {
  // 로그인 
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
