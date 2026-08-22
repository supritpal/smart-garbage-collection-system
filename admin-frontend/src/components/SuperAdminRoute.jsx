"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";

export default function SuperAdminRoute({ children }) {
  const router = useRouter();
  const { user, isSuperAdmin, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/");
      } else if (!isSuperAdmin) {
        toast.error("Access denied: Super Admin privileges required");
        router.replace("/dashboard");
      }
    }
  }, [user, isSuperAdmin, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user || !isSuperAdmin) {
    return null;
  }

  return children;
}
