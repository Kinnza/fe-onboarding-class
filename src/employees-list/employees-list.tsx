import { useCallback, useEffect, useState } from "react";
import "./emp.css";
import { IEmployee, employeesAPI } from "./employees-api";

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
            <div className="table-container">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th>Name</th> 
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Date of birth</th>
                            <th>Address</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 'Loading...' :
                            employees.map((emp)=>(
                                <tr key={emp.id} onClick={()=>onEmpRowClicked(emp)}>
                                    <td className="id-container"> 
                                        {emp.id}
                                        <img src={emp.imageUrl} width={50} height={50} alt=""></img>
                                    </td>
                                    <td>{emp.firstName + ' ' + emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.contactNumber}</td>
                                    <td>{emp.age}</td>
                                    <td>{emp.dob}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>  
            </div>
            <div className="controllers-container">
                <button onClick={()=>onRefreshTable()} >Refresh</button>
                <button onClick={()=>onSortTable()} >Sort</button>
            </div>

        </>
    );
}