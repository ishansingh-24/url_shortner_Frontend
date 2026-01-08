import { Copy, ExternalLink } from "lucide-react";
import QRCode from "react-qr-code";

function ResultCard({ originalUrl, shortUrl }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5 space-y-4">
      
      {/* Original URL */}
      <div>
        <p className="text-xs text-gray-500">Original URL</p>
        <p className="text-sm break-all">{originalUrl}</p>
      </div>

      {/* Short URL */}
      <div>
        <p className="text-xs text-gray-500">Short URL</p>

        <div className="flex items-center justify-between mt-2 gap-3">
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-medium text-sm flex items-center gap-1"
          >
            {shortUrl}
            <ExternalLink size={14} />
          </a>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1.5 rounded-lg text-sm hover:bg-blue-200 transition"
          >
            <Copy size={14} />
            Copy
          </button>
        </div>
      </div>

      {/* QR Code */}
      {shortUrl && (
        <div className="flex justify-center pt-4">
          <QRCode
            value={shortUrl}
            size={160}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
          />
        </div>
      )}
    </div>
  );
}

export default ResultCard;
