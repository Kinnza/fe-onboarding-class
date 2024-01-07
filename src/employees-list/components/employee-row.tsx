import {FC} from "react";
import {IEmployee} from "../employees-api";

export const EmployeeRow: FC<{ employee: IEmployee, onEmpRowClicked: (emp: IEmployee) => void }> = ({
                                                                                                        employee,
                                                                                                        onEmpRowClicked
                                                                                                    }) => (
    <tr key={employee.id} onClick={() => onEmpRowClicked(employee)}>
        <td className="id-container">
            {employee.id}
            <img src={employee.imageUrl} width={50} height={50} alt=""></img>
        </td>
        <td>{employee.firstName + ' ' + employee.lastName}</td>
        <td>{employee.email}</td>
        <td>{employee.contactNumber}</td>
        <td>{employee.age}</td>
        <td>{employee.dob}</td>
        <td>{employee.address}</td>
        <td>{employee.salary}</td>
    </tr>
);