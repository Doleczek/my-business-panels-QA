interface EntityItem {
    [key: string]: string
    
}

interface Entities {
    [key: string]: EntityItem[];
}

const costs: Entities = {
    testCosts_1: [
        {
            Type: "Basic Salary",
            Amount: "100" 
        } 
    ]
}

export default costs