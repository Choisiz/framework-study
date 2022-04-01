import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  //const router = useRouter();
  //console.log("detail:", router.query.params);
  //const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

//url정보 가져오기-서버
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
