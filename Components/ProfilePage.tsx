"use client";

import { useState } from "react";
import { User, MapPin, Heart, ShoppingBag, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import BottomFeatures from "./BottomFeatures";

function ProfilePage() {
  const [showLogout, setShowLogout] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.dispatchEvent(new Event("logout-success"));
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-10 relative">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
            G
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Gulshan Kumar</h2>
            <p className="text-gray-500">gulshan@email.com</p>
            <p className="text-sm text-gray-400">Member since Jan 2024</p>
          </div>
          <button className="px-5 py-2 bg-[#28a879] text-white rounded-full text-sm">
            Edit Profile
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Orders", icon: ShoppingBag },
            { label: "Wishlist", icon: Heart },
            { label: "Addresses", icon: MapPin },
            { label: "Account", icon: User },
            { label: "Logout", icon: LogOut, danger: true },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => item.label === "Logout" && setShowLogout(true)}
              className={`bg-white rounded-xl shadow p-4 flex flex-col items-center gap-2 cursor-pointer transition
                ${item.danger ? "hover:shadow-red-300" : "hover:shadow-lg"}`}
            >
              <item.icon className={`w-6 h-6 ${item.danger ? "text-red-500 animate-pulse" : "text-[#28a879]"}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Account Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-lg px-4 py-2" placeholder="Full Name" />
            <input className="border rounded-lg px-4 py-2" placeholder="Email" />
            <input className="border rounded-lg px-4 py-2" placeholder="Phone" />
            <input className="border rounded-lg px-4 py-2" placeholder="Birthday" />
          </div>
          <button className="mt-4 px-6 py-2 bg-[#28a879] text-white rounded-full text-sm">
            Save Changes
          </button>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {["#1023", "#1024", "#1025"].map((id) => (
              <div
                key={id}
                className="flex justify-between items-center border-b pb-2 text-sm"
              >
                <span>{id}</span>
                <span className="text-gray-500">Delivered</span>
                <button className="text-[#28a879] text-sm">View</button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LOGOUT MODAL */}
      {showLogout && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm text-center animate-scaleIn">

            <LogOut className="w-12 h-12 text-red-500 mx-auto animate-bounce" />

            <h3 className="text-xl font-semibold mt-3">Logout?</h3>
            <p className="text-gray-500 text-sm mt-1">Are you sure you want to logout?</p>

            <div className="flex gap-4 mt-6">
              <button
                className="flex-1 py-2 rounded-full border text-gray-600 hover:bg-gray-100"
                onClick={() => setShowLogout(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scale animation */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <BottomFeatures/>
    </div>
  );
}

export default ProfilePage;
