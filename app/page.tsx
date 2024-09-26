import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-2/5 h-80 bg-slate-200 border border-blue-700 p-4 rounded-lg shadow-lg">
        
        <div className="absolute inset-0 bg-[url('/images/gov.png')] bg-cover bg-center rounded-lg">
          <div className="absolute inset-0 bg-white/70 rounded-lg"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-start mb-4">
            <Image src="/images/download.jpg" alt="Logo" width={48} height={48} />
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900"><strong className="text-blue-600">Name:</strong> Muhammad Umair</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Roll No:</strong> 00333591</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Distance Learning:</strong> No</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">City:</strong> Karachi</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Center:</strong> Governor House Karachi</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Campus:</strong> Main</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Days/Time:</strong> Monday - 02:00 PM - 05:00 PM</p>
              <p className="text-sm text-gray-800"><strong className="text-blue-600">Batch:</strong> Batch 1</p>
            </div>
            <div>
              <Image
                src="/images/images.png" 
                alt="Profile Image"
                width={150}
                height={100}
                className="border-2 border-gray-300 ml-9"
              />
              <p className="font-bold mt-16 border border-t-black text-blue-600">Authorized Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
