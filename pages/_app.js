//무조건 이이름 이어야함
//맨처음 랜더링 되는 페이지
//function 이름은 상관없다.
//jsx global을 사용하여 모든 글로벌하게 css를 줄수 있다.
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
