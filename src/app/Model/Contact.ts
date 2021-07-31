export interface Contact {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  contactStatus: 'Active' | 'Inactive';
}

export interface Option {
  key: string;
  value: string;
}

export interface FormFieldData {
  id: string;
  labelName: string;
  fieldType: string;
  maxLength: number;
  options?: Array<Option>;
}

export interface ColumnData {
  id: string;
  value: string;
}
