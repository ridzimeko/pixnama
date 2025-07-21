"use client";

import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadItemProgress,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";

import { Upload, X } from "lucide-react";
import React from "react";
import { toast, Toaster } from "sonner";
import TwibbonForm from "./partials/form";


const TwibbonPage = () => {
 
  const [files, setFiles] = React.useState<File[]>([]);

  const onFileValidate = React.useCallback(
    (file: File): string | null => {
      // Validate max files
      if (files.length >= 5) {
        return "File telah mencapai batas upload";
      }

      // Validate file type (only images)
      if (!file.type.startsWith("image/png")) {
        return "Hanya gambar format .png yang bisa diunggah";
      }

      // Validate file size (max 2MB)
      const MAX_SIZE = 2 * 1024 * 1024; // 2MB
      if (file.size > MAX_SIZE) {
        return `File Melebihi Batas Maksimal ${MAX_SIZE / (1024 * 1024)}MB`;
      }

      return null;
    },
    [files]
  );

  const onUpload = React.useCallback(
    async (
      files: File[],
      {
        onProgress,
        onSuccess,
        onError,
      }: {
        onProgress: (file: File, progress: number) => void;
        onSuccess: (file: File) => void;
        onError: (file: File, error: Error) => void;
      }
    ) => {
      try {
        // Process each file individually
        const uploadPromises = files.map(async (file) => {
          try {
            // Simulate file upload with progress
            const totalChunks = 10;
            let uploadedChunks = 0;

            // Simulate chunk upload with delays
            for (let i = 0; i < totalChunks; i++) {
              // Simulate network delay (100-300ms per chunk)
              await new Promise((resolve) =>
                setTimeout(resolve, Math.random() * 200 + 100)
              );

              // Update progress for this specific file
              uploadedChunks++;
              const progress = (uploadedChunks / totalChunks) * 100;
              onProgress(file, progress);
            }

            // Simulate server processing delay
            await new Promise((resolve) => setTimeout(resolve, 500));
            onSuccess(file);
          } catch (error) {
            onError(
              file,
              error instanceof Error ? error : new Error("Upload failed")
            );
          }
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);
      } catch (error) {
        // This handles any error that might occur outside the individual upload processes
        console.error("Unexpected error during upload:", error);
      }
    },
    []
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" ditolak`,
    });
  }, []);

  return (
    <div>
      <Toaster />
      <header className="border-b">
        <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold">Buat Template Twibbon</h1>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10">
        <FileUpload
          accept="image/*"
          value={files}
          onValueChange={setFiles}
          maxFiles={5}
          className="w-full max-w-md"
          onUpload={onUpload}
          onFileReject={onFileReject}
          onFileValidate={onFileValidate}
          multiple
        >
          <FileUploadDropzone>
            <div className="flex flex-col items-center gap-1 text-center">
              <div className="flex items-center justify-center rounded-full border p-2.5">
                <Upload className="size-6 text-muted-foreground" />
              </div>
              <p className="font-medium text-sm">
                Tarik Template Twibbon Disini
              </p>
              <p className="text-muted-foreground text-xs">
                atau klik untuk memilih gambar (maksimal 5 gambar) format .png
              </p>
            </div>
            <FileUploadTrigger asChild>
              <Button variant="outline" size="sm" className="mt-2 w-fit">
                Pilih Template
              </Button>
            </FileUploadTrigger>
          </FileUploadDropzone>
          <FileUploadList orientation="horizontal">
            {files.map((file, index) => (
              <FileUploadItem key={index} value={file} className="p-0">
                <FileUploadItemPreview className="size-20 [&>svg]:size-12">
                  <FileUploadItemProgress variant="circular" size={40} />
                </FileUploadItemPreview>
                <FileUploadItemMetadata className="sr-only" />
                <FileUploadItemDelete asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="-top-1 -right-1 absolute size-5 rounded-full"
                  >
                    <X className="size-3" />
                  </Button>
                </FileUploadItemDelete>
              </FileUploadItem>
            ))}
          </FileUploadList>
        </FileUpload>

       <TwibbonForm />
      </div>
    </div>
  );
};

export default TwibbonPage;
