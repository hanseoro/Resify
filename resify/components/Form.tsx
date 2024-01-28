'use client';

import NavbarHome from "@/components/NavbarHome";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z
  .object({
    addressLineOne: z.string().min(1, "Address Line 1 is required"),
    addressLineTwo: z.string().optional(), // Optional field for Address Line 2
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required").max(2, "State must be 2 characters"),
    zipCode: z.string().min(5, "ZIP Code must be 5 digits").max(5, "ZIP Code must be 5 digits"),
    ssn: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in the format XXX-XX-XXXX"),
  });

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      state: "",
      zipCode: "",
      ssn: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
        <FormField
            control={form.control}
            name="addressLineOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input placeholder="Address Line 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressLineTwo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Address Line 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input placeholder="ZIP Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ssn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Security Number</FormLabel>
                <FormControl>
                  <Input placeholder="XXX-XX-XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
