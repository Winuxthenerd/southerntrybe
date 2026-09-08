import { useSearchParams } from "react-router-dom";
import PictorialEvents from "../components/PictorialEvents";
import EditorialList from "../components/EditorialList";
import "./Stories.css";

function Stories() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "editorial";

  return (
    <div className="page stories-page">
      {type === "pictorial" ? <PictorialEvents /> : <EditorialList />}
    </div>
  );
}

export default Stories;