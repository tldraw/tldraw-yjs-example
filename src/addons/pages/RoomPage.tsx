import { useParams } from "react-router-dom";
import YjsEditor from "../widgets/YjsEditor";

const RoomPage = () => {
  const { id } = useParams();
  if (!id) return <>Требуется id</>;
  return <YjsEditor roomId={id} />;
};

export default RoomPage;
