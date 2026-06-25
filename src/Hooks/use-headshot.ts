import { useState } from "react"
import type { UploadStatus } from "../types"


export const useHeadshot = () => {
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
    const [uploadError, setuploadError] = useState<string | null>(null);

    const handleUploadStart = () => {
        setUploadStatus('uploading');
        setuploadError(null);
    }

    const handleUploadError = (error: Error) => {
        setUploadStatus('error');
        setuploadError(error.message);
    }

    return {
        uploadStatus,
        uploadError,
        handleUploadStart,
        handleUploadError
    }
}
