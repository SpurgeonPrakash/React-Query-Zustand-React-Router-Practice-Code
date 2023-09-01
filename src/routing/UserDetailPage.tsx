import { useParams, useSearchParams, useLocation } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  // You have to pass ?name=Alice
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(params);
  console.log(searchParams.get("name"));
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
