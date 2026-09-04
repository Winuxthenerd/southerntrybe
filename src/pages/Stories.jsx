import { useSearchParams } from "react-router-dom";
import Pictorial from "../components/Pictorial";
import EditorialList from "../components/EditorialList";
import "./Stories.css";

function Stories() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "editorial";

  return (
    <div className="page stories-page">
      {type === "pictorial" ? <Pictorial /> : <EditorialList />}
    </div>
  );
}

export default Stories;