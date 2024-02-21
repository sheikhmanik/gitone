import { useState } from 'react';

import Button from "../UI/Button.jsx";

export default function Challenges() {
    
    const [selectedButton, setSelectedButton] = useState('Task');

    return (
        <div className="container mx-auto mt-10 flex items-center justify-center gap-3 max-w-[500px]">
            <Button 
                textOnly={selectedButton !== 'Task'}
                onClick={() => setSelectedButton('Task')}
            >Task</Button>
            <Button 
                textOnly={selectedButton !== 'Completed'} 
                onClick={() => setSelectedButton('Completed')}
            >Completed</Button>
            <Button 
                textOnly={selectedButton !== 'Failed'} 
                onClick={() => setSelectedButton('Failed')}
            >Failed</Button>
        </div>
    )
}
