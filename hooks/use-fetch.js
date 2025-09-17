import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);

      // ✅ show success toast if response contains a success flag/message
      if (response?.success) {
        toast.success(response.message || "Action completed successfully!");
      }

      return response;
    } catch (error) {
      setError(error);
      toast.error(error.message || "Something went wrong");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
