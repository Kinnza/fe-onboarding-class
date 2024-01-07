// EmployeeTable component to render the table
import React, {FC} from "react";
import {EmployeeRow} from "./employee-row";
import {IEmployee} from "../employees-api";

export const EmployeeTable: FC<{
    employees: IEmployee[],
    isLoading: boolean,
    onEmpRowClicked: (emp: IEmployee) => void
}> = ({employees, isLoading, onEmpRowClicked}) => (
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
            {isLoading ? (
                <tr>
                    <td colSpan={8}>Loading...</td>
                </tr>
            ) : (
                employees.map((emp: IEmployee) => (
                    <EmployeeRow
                        key={emp.id}
                        employee={emp}
                        onEmpRowClicked={onEmpRowClicked}
                    />
                ))
            )}
            </tbody>
        </table>
    </div>
);
