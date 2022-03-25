//파일의 이름을 uri 주소로 작성해준다.
//반면 컴포넌트의 이름은 중요하지 않다.
//router의 기능을 가능케 해준다.
//export default 필수
//파일이름과 다른 uri를 입력하면 404페이지를 로드

import Seo from "../components/Seo";
export default function Potato() {
  return (
    <div>
      <Seo title="about/" />
      <h1>about</h1>
    </div>
  );
}
