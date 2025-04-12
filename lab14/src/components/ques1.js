import React from 'react';
const DisplayImages = () => {
    return (
        <div className="flex flex-col items-center gap-6 p-6">
            <h1 className="text-2xl font-bold">Image Display</h1>
            <div className="p-4 bg-gray-100 rounded shadow">
                <h2 className="text-xl">Image from public folder</h2>
                <img
                    src="/Images/img1.jpg"
                    alt="Public Folder"
                    className="w-64 h-64 object-cover rounded"
                />
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
                <h2 className="text-xl">Image from src folder</h2>
                <img
                    src={require('../Images/img2.jpg')}
                    alt="Src Folder"
                    className="w-64 h-64 object-cover rounded"
                />
            </div>
        </div>
    );
};
export default DisplayImages;

/*
import DisplayImages from './components/DisplayImages';
function App() {
    return (
        <div>
            <DisplayImages />
        </div>
    );
}
export default App;
 */