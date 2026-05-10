"use client";
import { useState } from 'react';
import { User, Lock, Shield, Users } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('student');

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#064E3B] p-6 text-center rounded-b-3xl shadow-md">
          <h1 className="text-3xl font-bold text-[#F59E0B]">SWALATH TRACKER</h1>
          <p className="text-green-100 mt-2 text-sm">Darul Islam Madrasa Chirappuram</p>
        </div>

        <div className="p-8">
          {/* Role Selection Tabs */}
          <div className="flex justify-between bg-gray-100 rounded-lg p-1 mb-8">
            <button 
              onClick={() => setRole('admin')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'admin' ? 'bg-white shadow text-[#064E3B]' : 'text-gray-500'}`}
            >
              <Shield className="w-4 h-4 inline mr-1" /> Admin
            </button>
            <button 
              onClick={() => setRole('student')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'student' ? 'bg-white shadow text-[#064E3B]' : 'text-gray-500'}`}
            >
              <User className="w-4 h-4 inline mr-1" /> Student
            </button>
            <button 
              onClick={() => setRole('parent')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${role === 'parent' ? 'bg-white shadow text-[#064E3B]' : 'text-gray-500'}`}
            >
              <Users className="w-4 h-4 inline mr-1" /> Parent
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:border-transparent outline-none" 
                  placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)} Username`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:border-transparent outline-none" 
                  placeholder="********"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#064E3B] hover:bg-green-800 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-green-200"
            >
              Login to {role.charAt(0).toUpperCase() + role.slice(1)} Panel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}