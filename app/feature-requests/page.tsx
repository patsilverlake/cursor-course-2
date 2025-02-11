"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters."
    })
    .max(25, {
      message: "Title cannot exceed 25 characters."
    }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters."
    })
    .max(500, {
      message: "Description cannot exceed 500 characters."
    }),
  type: z.string().min(1, {
    message: "Feature type is required."
  })
});

export default function FeatureRequestPage() {
  const [limitAlert, setLimitAlert] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send this to your backend
    console.log(values);
  }

  const handleInputChange = (field: string, value: string, limit: number) => {
    if (value.length >= limit) {
      setLimitAlert(`You've reached the ${limit} character limit for the ${field}`);
    } else {
      setLimitAlert(null);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">Feature Request</h1>
          <p className="text-xl text-muted-foreground">Submit your feature requests and feedback</p>
        </div>

        {limitAlert && (
          <Alert
            variant="destructive"
            className="mb-4"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{limitAlert}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief title for your request"
                      maxLength={25}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("title", e.target.value, 25);
                      }}
                    />
                  </FormControl>
                  <FormDescription>A short, descriptive title for your feature request (max 25 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your feature request in detail"
                      className="min-h-[150px]"
                      maxLength={500}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("description", e.target.value, 500);
                      }}
                    />
                  </FormControl>
                  <FormDescription>Please provide as much detail as possible (max 500 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a feature type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="enhancement">Enhancement</SelectItem>
                      <SelectItem value="new-feature">New Feature</SelectItem>
                      <SelectItem value="bug-fix">Bug Fix</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the type of feature request</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit Request</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
