import './CarAnim.css';
import carImg from '../assets/Car1.png';

export default function CarAnim() {
    return (
        <div className="scene">
            {/* Parking Sign */}
            {/*<div className="sign">*/}
            {/*    <div className="sign-title">P</div>*/}
            {/*    <div className="sign-sub">PARK HERE</div>*/}
            {/*</div>*/}

            {/* Car */}
            <img src={carImg} className="car" alt="Car" draggable={false}/>
        </div>
    );
}