import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, onSave, data }) => {

    const [editForm, setEditForm] = useState({
        site: "",
        username: "",
        password: ""
    });

    // Load selected password into modal
    useEffect(() => {
        if (data) {
            setEditForm(data);
        }
    }, [data]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onSave(editForm);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">

            <div className="bg-green-50 rounded-xl shadow-xl w-[90%] max-w-lg p-6 border border-green-400">

                <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Edit Password
                </h2>

                <div className="flex flex-col gap-4">
                    <input
                        name="site"
                        value={editForm.site}
                        onChange={handleChange}
                        className="rounded-full border border-green-500 w-full p-3"
                        placeholder="Website"
                    />

                    <input
                        name="username"
                        value={editForm.username}
                        onChange={handleChange}
                        className="rounded-full border border-green-500 w-full p-3"
                        placeholder="Username"
                    />

                    <input
                        name="password"
                        value={editForm.password}
                        onChange={handleChange}
                        className="rounded-full border border-green-500 w-full p-3"
                        placeholder="Password"
                    />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-5 py-2 rounded-full border border-green-700 text-green-800 hover:bg-green-200 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="cursor-pointer px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditModal;