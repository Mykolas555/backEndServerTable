import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./components/ui/input";
import { useForm } from 'react-hook-form';
import { getExpencesByDate } from "../services";
import { useState } from "react";

const Filter = () => {
  const form = useForm();
  const [totalExpence, setTotalExpence] = useState(null);
  const [sortedExpence, setSortedExpence] = useState(null);

  const onSubmit = async (data) => {
    console.log('Form data submitted:', data);
    const expensesData = await getExpencesByDate(data.firstDate, data.secondDate);
    setTotalExpence(expensesData?.data?.totalExpenses);
    setSortedExpence(expensesData.data.itemsInDateRange);
    console.log(expensesData);
  };

  return (
    <Sheet>
      <SheetTrigger>Filter</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter expenses by date</SheetTitle>
          <SheetDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="firstDate"
                  rules={{ required: 'Expense date is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date 1</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondDate"
                  rules={{ required: 'Expense date is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date 2</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Filter Expenses</Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
        <p className="mt-4">Total: {totalExpence} $</p>
        {sortedExpence?.map((expe, index) => (
          <div key={index} className="mt-2">
            <p>{expe.expence} {expe.sum} $</p>
            
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
