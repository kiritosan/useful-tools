'use client'

import CodeDisplay from "@/app/components/CodeDisplay";


const algorithmViewer = () => {
    return (
        <div>
            <CodeDisplay
                code={"a=1"}
                language={"javascript"}
            />
        </div>
    );
};

export default algorithmViewer;