import React from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
            <div className="bg-green-50 rounded-xl shadow-xl w-[90%] max-w-md p-6 border border-green-400">

                <h2 className="text-2xl font-bold text-green-800 mb-3">
                    Confirm Delete
                </h2>

                <p className="text-green-900 mb-6">
                    Are you sure you want to delete this password?
                </p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-5 py-2 rounded-full border border-green-700 text-green-800 hover:bg-green-200 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="cursor-pointer px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DeleteModal;