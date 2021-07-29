export class Contact {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  contactStatus: 'Active' | 'Incative';
}


export class Option {
  key: string;
  value: string;
}

export class FormFieldData {
  id: string;
  labelName: string;
  fieldType: string;
  maxLength: number;
  options?: Array<Option>;
}

/*     this.data = [
      { firstName: 'Ankit', lastName: 'Gaurav', contactStatus: 'Active', emailAddress: 'akt.grv8994@gmail.com', phoneNumber: '987654321' },
      { firstName: 'awdawd', lastName: 'Gaurawdav', contactStatus: 'Active', emailAddress: 'akt.grv8awd994@gmail.com', phoneNumber: '9876awd54321' },
      { firstName: 'Anawdawdkit', lastName: 'Gaawdurav', contactStatus: 'Active', emailAddress: 'akawdt.grv8994@gmail.com', phoneNumber: '98awd7654321' },
      { firstName: 'Ankawdit', lastName: 'Gauraawdv', contactStatus: 'Active', emailAddress: 'akt.grawdv8994@gmail.com', phoneNumber: '987ad654321' }
    ] */