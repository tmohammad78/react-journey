import MovingDots from "../components/movingDots";
import SpreadUpdate from "../components/spreadUpdate";
import PushToArray from "../components/pushToArray";
import RemoveFromArray from "../components/removeFromArray";
import ReverseArray from "../components/reverse";
import BucketList from "../components/updateObjectInArray";
import "../App.css"
import Accordion from "../components/liftingStateUp";
import BatchUpdate from "../components/batchUpdate";

const StatePage = () => {

    return (
        <div>
            <div className="wrapper">
                <span className="step">1. Mute a fresh object in state</span>
                <MovingDots />
            </div>
            <div className="wrapper">
                <span className="step">2. Coping object with spread</span>
                <SpreadUpdate />
            </div>
            <div className="wrapper">
                <span className="step">3. Add to array</span>
                <PushToArray />
            </div>
            <div className="wrapper">
                <span className="step">4. Remove from array</span>
                <RemoveFromArray />
            </div>
            <div className="wrapper">
                <span className="step">5. Reverse array</span>
                <ReverseArray />
            </div>
            <div className="wrapper">
                <span className="step">6. Update Object in Array List</span>
                <BucketList />
            </div>
            <div className="wrapper">
                <span className="step">7. Lifting state up in share parent component</span>
                <Accordion />
            </div>
            <div className="wrapper">
                <span className="step">8. batch in rendering</span>
                <BatchUpdate />
            </div>
        </div>
    )
}

export default StatePage;