interface EntityItem {
    [key: string]: string
    
}

interface Entities {
    [key: string]: EntityItem[];
}

const utilities: Entities = {
    testCosts_1: [
        {
            Uname: "wages",
            Cost: "B" 
        } 
    ]
}

export default utilities