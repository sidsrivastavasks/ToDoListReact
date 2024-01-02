import "./styles.css";
import Header from "./Component/Header/Header.js";
import Body from "./Component/Body/List.js";

export default function App() {
    const listData = [];
    return (
        <div className="App">
            <Header />
            <Body data={listData} />
        </div>
    );
}
