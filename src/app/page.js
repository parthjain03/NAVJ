export default function HoldingPage() {
    return (
        <div className="min-h-screen bg-[#0A192F] flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl w-full text-center space-y-6">
                <p className="text-[#C5A059] tracking-[0.2em] text-sm uppercase">
                    Chartered Accountants
                </p>

                <h1 className="text-5xl md:text-7xl font-serif text-[#FDFCF0]">
                    NAVJ & Co.
                </h1>

                <div className="w-16 h-[1px] bg-[#C5A059] mx-auto my-8"></div>

                <p className="text-slate-300 text-lg">
                    Office No. 204 & 205, 4262/3<br />
                    Ansari Road, Old Delhi<br />
                    New Delhi, 110002
                </p>

                <p className="text-slate-400 mt-8 text-sm">
                    contact@navjco.com
                </p>
            </div>
        </div>
    );
}
