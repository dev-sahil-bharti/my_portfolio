import axios from 'axios';
import { useState } from 'react';

export default function EmailSubscription() {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post("/api/subscribe", { email: email });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-black text-white px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                <p className="mb-6">Get the latest news and updates from our team.</p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        name="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full sm:w-80 p-3 rounded border border-slate-700 text-black"
                        style={{
                            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 font-bold bg-[#71D9D3] text-black rounded hover:bg-white hover:text-[#C084FC] transition-colors duration-500"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
