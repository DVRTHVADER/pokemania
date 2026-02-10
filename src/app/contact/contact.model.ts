export class ContactModel {
  constructor(
    public fName?: string,
    public lName?: string,
    public email?: string,
    public message?: string,
  ) {}
  getFullName(): string {
    return `${this.fName} ${this.lName}`;
  }
}

// create an instance of Contact
const contact = new ContactModel('John', 'Doe', 'john.doe@example.com', 'Hello, I am John Doe.');
console.log(contact.getFullName);
