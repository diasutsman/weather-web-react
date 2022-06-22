import React from "react"
export default function ErrorComponent({ error }) {
    return (
        <div className="card shadow-0 border mb-3">
            <div className="card-body p-4">

                <h4 className="mb-1 sfw-normal">{error}</h4>

            </div>
        </div>
    )
}