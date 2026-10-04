# AI-Photo-App 📸

A sophisticated web application that leverages AI to transform user-uploaded headshots, allowing for outfit and background changes to create professional-looking photos.

[![Vite](https://img.shields.io/badge/vite-6.0.0-blue?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-19.2.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-4.3.1-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/cloudinary-v1.14.3-purple?logo=cloudinary)](https://cloudinary.com/)

## ✨ Features

*   **AI-Powered Transformations**: Utilizes advanced AI to seamlessly change outfits and replace backgrounds in headshots.
*   **Multiple Style Options**: Offers pre-defined professional styles like 'Corporate Executive', 'Outdoor Professional', and 'Urban Business'.
*   **User-Friendly Interface**: Intuitive design with drag-and-drop functionality for image uploads and clear selection for styles.
*   **Real-time Previews**: Shows a 'Before' and 'After' view of the headshot transformation.
*   **Multiple Export Options**: Allows downloading the enhanced headshot in JPG, PNG, or WEBP formats, or opening it in a new tab, or copying the URL.
*   **Cloudinary Integration**: Leverages Cloudinary for efficient image storage, manipulation, and delivery.
*   **Responsive Design**: Ensures a seamless experience across various devices.

## 🚀 Tech Stack

*   **Frontend**: React, TypeScript, Vite, Tailwind CSS
*   **Image Management**: Cloudinary SDKs (@cloudinary/react, @cloudinary/url-gen)
*   **UI Components**: lucide-react, react-dropzone
*   **Utilities**: clsx, tailwind-merge
*   **Build Tool**: Vite
*   **Linting**: ESLint

## 🛠️ Installation

Follow these steps to set up the project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ARJ99/AI-Photo-App.git
    cd AI-Photo-App
    ```

2.  **Install Node.js**: Ensure you have Node.js (v20.19.0 or higher) installed.

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your Cloudinary credentials:
    ```dotenv
    VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
    VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
    ```
    *   If you don't have a Cloudinary account, [sign up for free](https://cld.media/reactregister).
    *   Find your cloud name in your [Cloudinary dashboard](https://console.cloudinary.com/app/home/dashboard).
    *   Create an unsigned upload preset in your Cloudinary settings (Settings -> Upload -> Upload Presets -> Add Upload Preset, set to "Unsigned" mode) and use its name for `VITE_CLOUDINARY_UPLOAD_PRESET`.

## 💡 Usage

This application allows you to transform your headshots using AI. Here's how:

1.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

2.  **Upload Your Selfie**: On the app's homepage, you can either drag and drop your selfie into the designated area or click the 'Browse files' button to select an image from your device. The app supports JPG, PNG, and WEBP formats.

3.  **View Original Upload**: After uploading, your original image will be displayed.

4.  **Select an AI Headshot Style**: Browse through the available AI headshot styles (e.g., 'Corporate Executive', 'Outdoor Professional', 'Urban Business'). Each style applies specific outfit and background transformations.
    *   Note: Styles generate one at a time and may take approximately 30-60 seconds each.

5.  **Preview the Transformation**: A 'Before' and 'After' comparison will show your original photo next to the AI-enhanced version with the selected style.

6.  **Export Your Headshot**: Once you're satisfied with the result, you can:
    *   **Download**: Choose your preferred format (JPG, PNG, WEBP) and click 'Download'.
    *   **Open in Tab**: View the generated headshot directly in a new browser tab.
    *   **Copy URL**: Copy the direct URL of the generated image to your clipboard.

## 📂 Project Structure

```
AI-Photo-App/
├── public/
├── src/
│   ├── cloudinary/
│   │   ├── config.ts
│   │   ├── upload-direct.ts
│   │   └── UploadWidget.tsx
│   ├── components/
│   │   ├── ExportActions.tsx
│   │   ├── Hero.tsx
│   │   ├── ResultPreview.tsx
│   │   ├── TransformationGrid.tsx
│   │   └── UploadCard.tsx
│   ├── Hooks/
│   │   └── use-headshot.ts
│   ├── lib/
│   │   ├── transformation.ts
│   │   └── utils.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```

## 🔗 Important Links

*   **Live Demo**: https://ai-photo-app-kappa.vercel.app/
*   **Cloudinary React SDK**: [https://cloudinary.com/documentation/react_integration](https://cloudinary.com/documentation/react_integration)
*   **Vite Documentation**: [https://vite.dev](https://vite.dev)
*   **React Documentation**: [https://react.dev](https://react.dev)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some YourFeature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes tests where applicable.




## 📝 Footer

© 2026 **AI-Photo-App**. Coded with ❤️ by Luis Alejandro Rios Jaque. 

[Back to Top](#readme-top)


---
