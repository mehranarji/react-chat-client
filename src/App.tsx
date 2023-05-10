import { HashRouter } from "react-router-dom";
import ChatView from "./views/ChatView";

function App() {
  return (
    <HashRouter>
      <ChatView />
    </HashRouter>
  );
}

export default App;
