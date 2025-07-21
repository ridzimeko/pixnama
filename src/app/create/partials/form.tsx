import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Nama Campaign harus diisi" }),
  caption: z.string().min(1, { message: "Deskripsi Campaign harus diisi" }),
  shareLink: z.string().optional(),
});

type TwibbonFormData = z.infer<typeof formSchema>;
const TwibbonForm = () => {
  const form = useForm<TwibbonFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      caption: "",
      shareLink: "",
    },
  });

  const onSubmit = React.useCallback((data: TwibbonFormData) => {
    console.log("Form data submitted:", data);
  }, []);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Nama Campaign</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nama Campaign"
                  className="w-full max-w-md"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="caption"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Caption Campaign</FormLabel>
              <FormControl>
                <Textarea
                rows={6}
                  placeholder="Caption yang menarik disini agar lebih menarik!"
                  className="w-full max-w-md"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="shareLink"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Link Campaign (optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="link-campaign"
                  className="w-full max-w-md"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Publish!</Button>
      </form>
    </Form>
  );
};

export default TwibbonForm;
