import { useForm } from 'react-hook-form';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addExpence } from '../services';
import { useState } from 'react';

const AddExpence = () => {
  const form = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const onAddNewExpence = () => {
    setShowMessage(false)
  }

  const onSubmit = async (data) => {
    try {
      const isValid = await form.trigger();
      if (isValid) {
        const response = await addExpence(data);
        setMessage(response.message)
        console.log(response.message);
        setShowMessage(true)
        form.reset();
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Sheet>
      <SheetTrigger>ADD</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add your expense</SheetTitle>
          <SheetDescription>
          {showMessage ? (
            <div >
                <p className='mb-3'>{message}</p>
                <Button onClick={onAddNewExpence}>Add new expence?</Button>
            </div>
            ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  rules={{ required: 'Expense is required' }}
                  name="expence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expense</FormLabel>
                      <FormControl>
                        <Input placeholder="Expense" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Input placeholder="Note" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sum"
                  rules={{ required: 'Expense sum is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sum</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Sum" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  rules={{ required: 'Expense date is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add Expence</Button>
              </form>
            </Form>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddExpence;
