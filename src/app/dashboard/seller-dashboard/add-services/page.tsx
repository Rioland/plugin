'use client'
import React, { useState } from "react";

export default function Page() {
        const [preview, setPreview] = useState<string | null>(null);
        const [loading, setLoading] = useState(false);
        const [form, setForm] = useState({
                title: "",
                description: "",
                category: "",
                price: "",
                previewLink: "",
        });

        const [files, setFiles] = useState<{
                zipFile: File | null;
                previewImage: File | null;
        }>({
                zipFile: null,
                previewImage: null,
        });

        const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                        setFiles(prev => ({ ...prev, previewImage: file }));
                        const reader = new FileReader();
                        reader.onloadend = () => setPreview(reader.result as string);
                        reader.readAsDataURL(file);
                }
        };

        const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) setFiles(prev => ({ ...prev, zipFile: file }));
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                setForm({ ...form, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                setLoading(true);

                const formData = new FormData();
                formData.append("title", form.title);
                formData.append("description", form.description);
                formData.append("category", form.category);
                formData.append("price", form.price);
                if (files.zipFile) formData.append("zipFile", files.zipFile);
                if (files.previewImage) formData.append("previewImage", files.previewImage);

                try {
                        const res = await fetch("/api/upload-product", {
                                method: "POST",
                                body: formData,
                        });

                        const result = await res.json();
                        if (res.ok) {
                                alert("Product uploaded successfully!");
                                setForm({ title: "", description: "", category: "", price: "" ,previewLink: ""});
                                setPreview(null);
                                setFiles({ zipFile: null, previewImage: null });
                        } else {
                                alert(result.message || "Something went wrong!");
                        }
                } catch (err) {
                        alert("Upload failed.");
                } finally {
                        setLoading(false);
                }
        };

        return (
                <div className=" w-full p-6  ">

                        <h1 className="font-bold text-3xl">Upload New Service</h1>
                        <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>
                        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
                                <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">


                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Product Title</label>
                                                        <input
                                                                name="title"
                                                                value={form.title}
                                                                onChange={handleChange}
                                                                type="text"
                                                                placeholder="Enter title"
                                                                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                                                required
                                                        />
                                                </div>

                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                                        <textarea
                                                                name="description"
                                                                value={form.description}
                                                                onChange={handleChange}
                                                                rows={4}
                                                                placeholder="Describe your product"
                                                                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                                                required
                                                        />
                                                </div>

                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                                        <select
                                                                name="category"
                                                                value={form.category}
                                                                onChange={handleChange}
                                                                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                                                required
                                                        >
                                                                <option value="">Choose category</option>
                                                                <option>Website Template</option>
                                                                <option>Mobile App</option>
                                                                <option>Plugin</option>
                                                                <option>Graphics</option>
                                                        </select>
                                                </div>
                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Preview Link</label>
                                                        <input
                                                                name="previewLink"
                                                                value={form.previewLink}
                                                                
                                                                onChange={handleChange}
                                                                type="url"
                                                                placeholder="Enter Preview Link"
                                                                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                                                required
                                                        />
                                                </div>

                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                                                        <input
                                                                name="price"
                                                                value={form.price}
                                                                onChange={handleChange}
                                                                type="number"
                                                                min="0"
                                                                placeholder="e.g. 25"
                                                                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                                                required
                                                        />
                                                </div>

                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Upload File (.zip)</label>
                                                        <input
                                                                type="file"
                                                                accept=".zip"
                                                                onChange={handleZipChange}
                                                                className="mt-1 block w-full"
                                                                required
                                                        />
                                                </div>

                                                <div>
                                                        <label className="block text-sm font-medium text-gray-700">Preview Image</label>
                                                        <input type="file" accept="image/*" onChange={handlePreviewChange} className="mt-1 block w-full" required />
                                                        {preview && (
                                                                <img src={preview} alt="Preview" className="mt-4 w-full h-48 object-cover rounded-xl" />
                                                        )}
                                                </div>

                                                <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                                                >
                                                        {loading ? "Uploading..." : "Submit Product"}
                                                </button>
                                        </form>
                                </div>
                        </div>
                </div>

        );
}
