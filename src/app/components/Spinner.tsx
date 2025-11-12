import React from 'react'

export const Spinner = () => {
    return (
        <div>
            <div
            role='status'
            className="flex items-center text-white font-medium px-4 py-2 rounded-lg opacity-80 cursor-not-allowed"
            >
                <svg
                    className="mr-2 w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    ></circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}
