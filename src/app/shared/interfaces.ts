export interface Employee {  
    id: number;  
    name: string;  
    email: string;       
} 

export interface Address {  
    id: number;  
    addressDetails: string,
    employeeId: number     
} 