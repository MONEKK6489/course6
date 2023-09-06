import React, { useState } from "react";

interface LoginProps {
  csrfToken: string;
}

export const LoginComponent: React.FC<LoginProps> = ({ csrfToken }) => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen  flex items-center justify-center">
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="flex flex-col gap-4"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="relative">
            <input
              className="px-4 py-2 h-10 border focus:ring-gray-500 focus:border-base w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              type="text"
              name="username"
              placeholder="ຊື່ຜູ້ໃຊ້ງານ"
            />
          </div>
          <div className="relative">
            <input
              className="px-4 py-2 h-10 border focus:ring-gray-500 focus:border-base w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder="ລະຫັດຜ່ານ"
              name="password"
            />
          </div>
          <button className="bg-primary rounded-lg text-white py-2 hover:scale-105 duration-300">
            ເຂົ້າສູ່ລະບົບ
          </button>
        </form>
      </section>
    </>
  );
};
