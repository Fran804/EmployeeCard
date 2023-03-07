import { createContext } from 'react';

export interface Employee {
    id: string,
    email: string,
    join: string,
    expired: string,
};

export const EmployeeContext = createContext(({
    id: '',
    email: '',
    join: '',
    expired: '',
}));
