import { ImageIcon } from "lucide-react";
import type { UploadStatus } from "../types";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { UploadWidget, type CloudinaryUploadResult } from "../cloudinary/UploadWidget";
import { uploadImageToCloudinary } from "../cloudinary/upload-direct";
import { cn } from "../lib/utils";

const ACCEPTED = {
    'image/jpeg': ['.jpeg'],
    'image/png': ['.png'],
    'image/webp': ['.webp'],
}

interface UploadCardProps {
    uploadStatus: UploadStatus;
    uploadError: string | null;
    onUploadStart: () => void;
    onUploadError: (error: Error) => void;
    onUploadSuccess: (result: CloudinaryUploadResult) => void;
}

export function UploadCard({
    uploadStatus,
    uploadError,
    onUploadStart,
    onUploadError,
    onUploadSuccess
}: UploadCardProps) {

    const [progress, setProgress] = useState(0)

    const uploadFile = async (file: File) => {
        onUploadStart();
        setProgress(0);
        try {
            const result = await uploadImageToCloudinary(file, setProgress);
            onUploadSuccess(result);
        } catch (error) {
            onUploadError(new Error('Upload failed. Please try again.'))
        }
    }

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) {
            onUploadError(new Error('Please upload a image file JPG, PNG, or WEBP.'))
            return;
        }
        uploadFile(acceptedFiles[0]);
    }



    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: ACCEPTED,
        maxFiles: 1,
        multiple: false,
        disabled: uploadStatus === 'uploading',
    })

    const isUploading = uploadStatus === "uploading";

    return (
        <section id="upload" className="px-4 py-12">
            <div className="mx-auto max-w-2xl">
                <h2 className="mb-2 text-center font-semibold">Upload Your Selfie</h2>
                <p className="mb-8 text-center text-white/60">
                    Drag, drop, or click to upload your image
                </p>
                <div {...getRootProps()} className="glass-card relative flex cursor-pointer flex-col items-center gap-6 p-10 transition">
                    <input {...getInputProps()} />
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl">
                        <ImageIcon className="h-10 w-10" />
                    </div>

                    <div className="text-center">
                        <p className="text-lg font-medium">Drag & drop your selfie here</p>
                        <p className="mt-1 text-sm text-white/50">or click to browse files : JPG, PNG, or WEBP</p>
                    </div>

                    {isUploading && (
                        <div>
                            <div>
                                <div>

                                </div>
                            </div>
                            <p>Uploading... {progress > 0 ? `${progress}%` : ''}</p>
                        </div>
                    )}

                    <div className="flex items-center gap-3"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    >
                        <UploadWidget
                            onUploadSuccess={onUploadSuccess}
                            onUploadError={onUploadError}
                            buttonText="Browse Files"
                            className={cn(
                                "inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white",
                                "transition hover:bg-indigo-500 disabled:cursor-wait disabled:opacity-70",
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
