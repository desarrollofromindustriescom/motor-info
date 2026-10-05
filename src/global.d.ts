interface PersonalData {
   name: string;
   bloodType: string;
   age?: number;
   height?: number;
   weight?: number;
   tatto?: boolean;
   piercing?: boolean;
   description?: string;
}

interface ContactData {
   primaryName: string;
   primaryPhone: string;
   secondaryName?: string;
   secondaryPhone?: string;
}

interface AddressData {
   city: string;
   state: string;
}

interface Register {
   id: string;
   path: string;
   slug: string;
   personal: PersonalData;
   contact: ContactData;
   address?: AddressData;
}

interface RegisterGroup {
   key: string;
   registers: Register[];
}

interface Data<T, R> {
   list: T;
   buffer: { [key: string]: R };
}
