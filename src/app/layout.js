"use client";
import { useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "./features/store";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  const router=useRouter();
  useEffect(()=>{
    if(navigator.online === false){
      router.push('/offline')
    }
  },[router])
  return (
    <html lang="en">
      <Provider store={store}>
      <body>
        
      <Navbar/>
        {children}
      </body>
      </Provider>
    </html>
  );
}
