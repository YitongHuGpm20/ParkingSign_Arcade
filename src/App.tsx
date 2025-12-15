import './App.css';
import DebugFrame from './Components/DebugFrame';
import CarAnim from './Components/CarAnim';

//#region ---- Button Actions ---- 
function openModeSelect() {
    console.log('Open Mode Select');
}

function openSettings() {
    console.log('Open Settings');
}

function openCredits() {
    console.log('Open Credits');
}

//#endregion

function App() {
    return (
        <>
            {/*Only display debug frame in dev, hide in build*/}
            {import.meta.env.DEV && <DebugFrame/>}
            
            <div className="app-root">
                <div className="ui-layer">
                    {/* ====== Title ====== */}
                    <h1 id="title-l1" className="title">ParkingSign</h1>
                    <h1 id="title-l2" className="title">Arcade</h1>

                    {/* ====== Main Menu ====== */}
                    <div className="main-menu">
                        <button className="main-menu-btn" onClick={() => openModeSelect()}>
                            PLAY
                        </button>
                        <button className="main-menu-btn" onClick={() => openSettings()}>
                            SETTINGS
                        </button>
                        <button className="main-menu-btn" onClick={() => openCredits()}>
                            CREDITS
                        </button>
                    </div>
                </div>

                <CarAnim />
            </div>
        </>
    );
}

export default App;
