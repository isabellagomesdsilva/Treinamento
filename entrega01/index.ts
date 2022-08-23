interface IUser {
  id: number;
  clientName: string;
  clientLastName?: string;
  age: number;
  email: string;
  product: Product[];
}

interface IProduct {
  productName: string;
  productPrice: number;
  productQuantity: number;
}

class Product {
  productName: string;
  productPrice: number;
  productQuantity: number;

  constructor(
    productName: string,
    productPrice: number,
    productQuantity: number
  ) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }
}

class User {
  id: number;
  clientName: string;
  clientLastName?: string;
  age: number;
  email: string;
  product: Product[];

  constructor(
    id: number,
    clientName: string,
    clientLastName: string,
    age: number,
    email: string,
    product: Product[]
  ) {
    this.id = id;
    this.clientName = clientName;
    this.clientLastName = clientLastName;
    this.age = age;
    this.email = email;
    this.product = product;
  }

  userBase: Array<IUser> = [
    {
      id: 1,
      clientName: "Isabella",
      clientLastName: "Gomes",
      age: 20,
      email: "isa@email.com",
      product: [
        {
          productName: "Notebook",
          productPrice: 1000,
          productQuantity: 2,
        },
        {
          productName: "TV",
          productPrice: 2000,
          productQuantity: 3,
        },
      ],
    },
    {
      id: 2,
      clientName: "João",
      clientLastName: "Silva",
      age: 30,
      email: "joao@email.com",
      product: [
        {
          productName: "Notebook",
          productPrice: 2000,
          productQuantity: 2,
        },
        {
          productName: "Celular",
          productPrice: 2000,
          productQuantity: 5,
        },
      ],
    },
  ];

  createUser() {
    const createUser = this.userBase.push({
      id: this.id,
      clientName: this.clientName,
      clientLastName: this.clientLastName,
      age: this.age,
      email: this.email,
      product: this.product,
    });
    const findEmail = this.userBase.find((email) => email.email);
    if (this.email == findEmail?.email) {
      return console.log("Usuário duplicado");
    }
    return createUser;
  }

  removeUser() {
    const deleteUser = this.userBase.splice(0, 1);
    return deleteUser;
  }

  updateUser(
    id: number,
    age: number,
    email: string,
    clientName: string,
    clientLastName?: string
  ) {
    const userUpdate = this.userBase.findIndex((user) => user.id == id);
    const updateName = (this.userBase[userUpdate].clientName = clientName);
    const updateLastName = (this.userBase[userUpdate].clientLastName =
      clientLastName);
    const updateAge = (this.userBase[userUpdate].age = age);
    const updateEmail = (this.userBase[userUpdate].email = email);
    return userUpdate;
  }

  valueTotal(product: IProduct): number {
    return product.productPrice * product.productQuantity;
  }

  expansiveProduct() {
    let higherValue = this.product[0];
    for (let i = 0; i < this.product.length; i++) {
      if (this.valueTotal(this.product[i]) > this.valueTotal(higherValue)) {
        higherValue = this.product[i];
      }
    }
    return higherValue;
  }

  toStringNameComplete(): void {
    console.log(`${this.clientName} ${this.clientLastName}`);
  }

  showUsersAll() {
    const allUsers = this.userBase;
    return allUsers;
  }

  showClientName(name: string) {
    const filterByName = this.userBase.filter(
      (user) =>
        user.clientName.toLowerCase() ||
        user.clientLastName?.toLowerCase() === name.toLowerCase()
    );
    return filterByName;
  }
}

function main() {
  let user = new User(3, "Bianca", "Silva", 22, "isab@email.com", [
    new Product("Product 2", 200, 2),
  ]);

  let fullName = user.toStringNameComplete();

  let createUser = user.createUser();
  console.log(createUser);

  let baseAllUsers = user.showUsersAll();

  let filterByName = user.showClientName("Isabella");
  console.log(filterByName);

  let deleteUser = user.removeUser();
  console.log(deleteUser);

  let userUpdate = user.updateUser(3, 21, "rubens@email.com", "Rubens", "Reis");
  console.log(userUpdate);

  let higherValue = user.expansiveProduct();
  console.log(higherValue);

  return baseAllUsers;
}

console.log(main());
