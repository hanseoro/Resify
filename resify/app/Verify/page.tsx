"use client";

import cn from "@/components/Navbar.module.css";
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
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const formSchema = z.object({
  addressLineOne: z.string().min(1, "Address Line 1 is required"),
  addressLineTwo: z.string().optional(), // Optional field for Address Line 2
  city: z.string().min(1, "City is required"),
  state: z
    .string()
    .min(2, "State is required")
    .max(2, "State must be 2 characters"),
  zipCode: z
    .string()
    .min(5, "ZIP Code must be 5 digits")
    .max(5, "ZIP Code must be 5 digits"),
  ssn: z
    .string()
    .regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in the format XXX-XX-XXXX"),
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
  const handleContinue = () => {
    window.location.href = "/";
  };
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
    setTimeout(() => {
      window.location.href = "/Home";
    }, 3000);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "864px",
          margin: "0 auto",
        }}
      >
        <NavbarHome />
        <main className="flex items-center justify-left my-20">
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
                    <FormControl>
                      <Input
                        placeholder="Address Line 1"
                        {...field}
                        className={"text-secondary " + cn.videomedium}
                      />
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
                    <FormControl>
                      <Input
                        placeholder="Address Line 2 (Optional)"
                        {...field}
                        className={"text-secondary " + cn.videomedium}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex -mx gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  className="px-2 flex-1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="City"
                          {...field}
                          className={"text-secondary " + cn.videomedium}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  className="px-2 flex-1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="State"
                          {...field}
                          className={"text-secondary " + cn.videomedium}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  className="px-2 flex-1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="ZIP Code"
                          {...field}
                          className={"text-secondary " + cn.videomedium}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="ssn"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="SSN"
                        {...field}
                        className={"text-secondary " + cn.videomedium}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="submit"
                    className={"bg-secondary text-primary " + cn.videosemibold}
                  >
                    Submit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className={"bg-primary text-secondary " + cn.videosemibold}>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Verified!</AlertDialogTitle>
                    <AlertDialogDescription>
                      Generate Your Certificate Code on the Home Page
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              {/* <Button
                type="submit"
                className={"bg-secondary text-primary " + cn.videosemibold}
              >
                Submit
              </Button> */}
            </form>
          </Form>
        </main>
        <div
          style={{
            position: "relative", // Position the image absolutely
            left: "630px", // Adjust the distance from the right edge
            bottom: "200px", // Center vertically
            transform: "translateY(-50%)", // Adjust for vertical centering
            zIndex: -1, // Place it behind the content (if needed)
          }}
        >
          <Image
            src="/housedecal.png" // Replace with your image path
            alt="House Decal"
            width="250"
            height="250"
            layout="fixed"
          />
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
      </div>
    </>
  );
}
