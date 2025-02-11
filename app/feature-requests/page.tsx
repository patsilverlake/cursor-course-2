"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, LightbulbIcon, Send, Upload } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  priority: z.string().min(1, "Please select a priority"),
  additionalDetails: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  attachments: z.any().optional()
});

export default function FeatureRequestPage() {
  const [limitAlert, setLimitAlert] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "",
      additionalDetails: "",
      email: "",
      attachments: undefined
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
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-2">
            <LightbulbIcon className="h-8 w-8 text-yellow-500" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Feature Request</h1>
          <p className="text-gray-600">Have an idea to improve our product? We&apos;d love to hear it!</p>
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
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a concise title for your feature"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("title", e.target.value, 100);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a short description of the feature"
                      className="min-h-[100px]"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("description", e.target.value, 500);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide any additional context or use cases"
                      className="min-h-[100px]"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("additionalDetails", e.target.value, 1000);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange("email", e.target.value, 50);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attachments (optional)</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload File
                      </Button>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Feature Request
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
