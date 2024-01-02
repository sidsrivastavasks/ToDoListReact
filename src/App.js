import "./styles.css";
import Header from "./Component/Header/Header.js";
import Body from "./Component/Body/List.js";

export default function App() {
    const listData = [
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower",
    ];
    return (
        <div className="App">
            <Header />
            <Body data={listData} />
        </div>
    );
}
