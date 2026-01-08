import { useState } from "react";
import axios from "axios";
import { Link, Copy } from "lucide-react";
import ResultCard from "./ResultCard";

function UrlForm() {
  const API = import.meta.env.VITE_BASE_URL;
  const [form, setForm] = useState({ url: "" });
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.url) {
      setError("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post( `${API}/shorten`,
        form
      );

      setOriginalUrl(form.url);
      setShortUrl(res.data.shortUrl);
      setForm({ url: "" });
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Paste your long URL and get a short link instantly
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <Link size={18} className="text-gray-400" />

              <input
                placeholder="https://example.com/very-long-url"
                type="text"
                id="url"
                name="url"
                value={form.url}
                onChange={handleChange}
                className="w-full outline-none text-sm"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </form>
        </div>

        {/* Result */}
        {shortUrl && (
          <div className="mt-6">
            <ResultCard
              originalUrl={originalUrl}
              shortUrl={shortUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlForm;
