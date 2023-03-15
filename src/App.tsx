import { BrowserRouter } from "react-router-dom";
import ChatView from "./views/ChatView";

function App() {
  return (
    <BrowserRouter>
      <ChatView />
    </BrowserRouter>
  );
}

export default App;
