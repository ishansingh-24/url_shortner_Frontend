import { useParams } from "react-router-dom";
import { useEffect } from "react";

function RedirectPage() {
    const API = import.meta.env.VITE_BASE_URL;

  const { code } = useParams(); // 👈 short code from URL

  useEffect(() => {
    // 🔥 BEST PRACTICE: browser-level redirect
    window.location.href = `${API}/${code}`;
  }, [code]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium">
        Redirecting...
      </p>
    </div>
  );
}

export default RedirectPage;
