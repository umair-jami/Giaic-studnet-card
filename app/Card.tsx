import Image from "next/image";
import React from "react";
interface ObjType {
  name: string;
  distanceLearnig: string;
  city: string;
  Center: string;
  Campus: string;
  dayTime: string;
  Batch: string;
  rollNumber:Number | String
}
export default function Card(props:ObjType) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative sm:w-4/5 md:w-2/3 lg:w-2/5 h-auto bg-slate-200 border border-blue-700 p-4 rounded-lg shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/gov.png')] bg-cover bg-center rounded-lg">
          <div className="absolute inset-0 bg-white/70 rounded-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-start mb-4">
            <Image
              src="/images/download.jpg"
              alt="Logo"
              width={48}
              height={48}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">
                <strong className="text-blue-600">Name:</strong> {props.name}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Roll No:</strong> {props.rollNumber.toString()}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Distance Learning:</strong> {props.distanceLearnig}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">City:</strong> {props.city}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Center:</strong> {props.Center}
                House Karachi
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Campus:</strong> {props.Campus}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Days/Time:</strong> {props.dayTime}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-blue-600">Batch:</strong> {props.Batch}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 flex sm:flex-col items-center">
              <Image
                src="/images/images.png"
                alt="Profile Image"
                width={150}
                height={100}
                className="border-2 border-gray-300"
              />
              <p className="font-bold mt-4 sm:mt-8 border border-t-black text-blue-600">
                Authorized Signature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
