const handlers: {
   printRegisters: (elements: RegisterGroup[]) => void;
   clearFilter: () => void;
   clearSearch: () => void;
} = {
   printRegisters: (): void => {},
   clearFilter: (): void => {},
   clearSearch: (): void => {},
};

const registers: readonly Register[] = Object.freeze([
   {
      id: '161b4cbc-77fc-4660-aa08-f58f03515140',
      path: '/lorem-ipsum',
      slug: 'lorem_ipsum',
      personal: {
         name: 'Lorem Ipsum',
         bloodType: 'o+',
         age: 30,
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio lectus. Proin aliquet purus et neque cursus, a lobortis tortor consequat.',
         height: 1.78,
         weight: 77.4,
         piercing: true,
         tatto: true,
      },
      contact: {
         primaryName: 'lorem contact',
         primaryPhone: '0987896767',
         secondaryName: 'lorem contact2',
         secondaryPhone: '0987896769',
      },
      address: {
         city: 'Actopan',
         state: 'Hidalgo',
      },
   },
] as Register[]);
const groups: Data<RegisterGroup[], Register[]> = {
   list: [],
   buffer: {},
};

for (let i = 0; i < registers.length; i++) {
   const letter: string = registers[i].personal.name[0].toLowerCase();

   if (!groups.buffer[letter]) groups.buffer[letter] = [];

   groups.buffer[letter].push(registers[i]);
}

for (const key in groups.buffer) {
   groups.list.push({ key, registers: groups.buffer[key] });
}

groups.list.sort((a: RegisterGroup, b: RegisterGroup) => a.key.localeCompare(b.key));

export { groups, handlers };
