import { TableCell } from "@/components/ui/table";
import { Button } from "./components/ui/button";
import { updateExpence, deleteExpence } from "../services";
import { useState } from "react";

const TableItem = ({ expence }) => {
  
    const formattedDate = new Date(expence.date).toLocaleDateString();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedExpence, setUpdatedExpence] = useState({
        expence: expence.expence,
        note: expence.note,
        sum: expence.sum,
        date: expence.date,
    });

    const handleUpdate = async () => {
        try {
        const updatedData = await updateExpence(expence._id, updatedExpence);
        console.log('Expense updated', updatedData);
        setIsEditing(false);
        window.location.reload();
        } catch (err) {
        console.log(err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedExpence((prevExpence) => ({
        ...prevExpence,
        [name]: value,
        }));
    };

    const handleDelete = async () => {
        try {
        const isDeleted = await deleteExpence(expence._id);
        if (isDeleted) {
            window.location.reload();
        }
        } catch (err) {
        console.log(err);
        }
    };

  return (
    <>
      <TableCell className="font-medium">
        {isEditing ? (
          <input
            type="text"
            name="expence"
            value={updatedExpence.expence}
            onChange={handleInputChange}
          />
        ) : (
          expence.expence
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <input
            type="text"
            name="sum"
            value={updatedExpence.sum}
            onChange={handleInputChange}
          />
        ) : (
          `${expence.sum} $`
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <input
            type="text"
            name="note"
            value={updatedExpence.note}
            onChange={handleInputChange}
          />
        ) : (
          expence.note
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <input
            type="date"
            name="date"
            value={updatedExpence.date}
            onChange={handleInputChange}
          />
        ) : (
          formattedDate
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Button variant="outline" onClick={handleUpdate}>Save</Button>
        ) : (
          <Button variant="outline" onClick={() => setIsEditing(true)}>Update</Button>
        )}
      </TableCell>
      <TableCell>
        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
      </TableCell>
    </>
  );
};

export default TableItem;