type Role = "admin" | "user" | "guest";

interface Product {
  readonly id: number;
  name: string;
  price?: number;
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  role: Role;
  isActive: boolean;
  createdAt?: Date;
  products: Product[];
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isActive: true,
  role: "admin",
  createdAt: new Date(),
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 20,
    },
    {
      id: 1,
      name: "Product 1",
    },
  ],
};

console.log(user);

const fullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

fullName(user);

const fullNameBis = (fistName: string, lastName: string): void => {
  console.log(`${fistName} ${lastName}`);
};

fullNameBis("John", "Doe");

// interface IProps {
//   lastName: string;
//   firstName: string;
// }

// const Index = ({lastName, firstName}:IProps) => {
//     return (
//         <div>
//         <p>{ lastName } {firstName} </p>
//         </div>
//     )
// }
