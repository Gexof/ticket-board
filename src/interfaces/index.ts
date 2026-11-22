import type { Priority, Status } from "../types";

export interface Ticket {
  id: number;
  title: string;
  customer: string;
  priority: Priority;
  status: Status;
  updatedAt: string;
}
