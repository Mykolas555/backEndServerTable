import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import TableItem from "./TableItem"
import { getAllExpences } from "../services" 
import { useState, useEffect } from "react"

const TableC = () => {
  const [exData, setExData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllExpences();
        setExData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <Table>
      <TableCaption>Expences</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Expence</TableHead>
          <TableHead className="text-center">Sum</TableHead>
          <TableHead className="text-center">Note</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Update</TableHead>
          <TableHead className="text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
         {exData.map((expence) => (
          <TableRow key={expence._id}>
            <TableItem expence={expence}/> 
          </TableRow>
         ))}
      </TableBody>
    </Table>
  )
}

export default TableC
