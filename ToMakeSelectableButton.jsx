import { useContext, useState } from 'react';

import Button from "../UI/Button.jsx";

export default function Challenges() {
    
    const [selectedButton, setSelectedButton] = useState('Task');

    return (
        <div className='container mx-auto mt-10 max-w-[500px] space-y-5'>
            <div className="flex items-center justify-center gap-3">
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
        </div>
    )
}
