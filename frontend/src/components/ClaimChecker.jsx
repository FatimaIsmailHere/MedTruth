import { useState } from 'react'

export default function ClaimChecker() {
    const [claim, setClaim] = useState('')
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setResult(null)

        try {
            const response = await fetch('http://127.0.0.1:5000/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ claim })
            })

            const data = await response.json()
            
            if (response.ok) {
                setResult(data)
            } else {
                setError(data.error || 'Error processing claim')
            }
        } catch (err) {
            setError('Backend not running. Make sure backend.py is running on port 5000')
        }
        
        setLoading(false)
    }

    const getLabelColor = (label) => {
        switch(label) {
            case 'myth': return 'bg-red-500'
            case 'uncertain': return 'bg-yellow-500'
            case 'reliable': return 'bg-green-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">MedTruth</h1>
            
            <form onSubmit={handleSubmit} className="mb-6">
                <textarea
                    value={claim}
                    onChange={(e) => setClaim(e.target.value)}
                    placeholder="Enter a health claim to verify..."
                    className="w-full p-4 border rounded-lg mb-4"
                    rows="4"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:bg-gray-400"
                >
                    {loading ? 'Checking...' : 'Check Claim'}
                </button>
            </form>

            {error && (
                <div className="bg-red-100 p-4 rounded-lg text-red-800 mb-4">
                    {error}
                </div>
            )}

            {result && (
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="mb-4"><strong>Claim:</strong> {result.claim}</p>
                    <p className="mb-4">
                        <strong>Classification:</strong>
                        <span className={`${getLabelColor(result.label)} text-white px-4 py-2 rounded ml-2`}>
                            {result.label.toUpperCase()}
                        </span>
                    </p>
                    <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
                </div>
            )}
        </div>
    )
}