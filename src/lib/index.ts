import { User } from "../interfaces/";
export const displayUserName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};
