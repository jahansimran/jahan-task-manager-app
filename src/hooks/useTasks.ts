import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { Task } from "@/types/task";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await api.get<Task[]>("/todos");
      return res.data;
    },
  });
};