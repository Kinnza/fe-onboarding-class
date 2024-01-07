import { useCallback, useEffect, useState } from "react";
import "./emp.css";
import { IEmployee, employeesAPI } from "./employees-api";
import {Controllers} from "./components/controllers";
import {EmployeeTable} from "./components/employee-table";

export const EmployeesList = ()=>{
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = useCallback(()=>{
        setIsLoading(true);
        employeesAPI.getEmployees()
            .then(setEmployees)
            .finally(()=>setIsLoading(false));
    },[]);

    const onEmpRowClicked = (employee: IEmployee)=>{
        alert('You clicked on ' + employee.firstName + ' ' + employee.lastName);
    };

    const onRefreshTable = useCallback(()=>{
        loadData();
    },[loadData]);

    const onSortTable = useCallback(()=>{
        const sortedEmployees = [...employees].sort((a: IEmployee, b: IEmployee) => {
            const nameA = a.firstName + ' ' + a.lastName;
            const nameB = b.firstName + ' ' + b.lastName;
            return nameA.localeCompare(nameB)
        });

        setEmployees(sortedEmployees);
    },[employees]);

    useEffect(()=>{
        loadData();
    },[loadData]);


    return (
        <>
            <EmployeeTable
                employees={employees}
                isLoading={isLoading}
                onEmpRowClicked={onEmpRowClicked}
            />
            <Controllers
                onRefreshTable={onRefreshTable}
                onSortTable={onSortTable}
            />
        </>
    );
}