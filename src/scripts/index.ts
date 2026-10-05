const handlers: {
   printRegisters: (elements: RegisterGroup[]) => void;
   clearFilter: () => void;
   clearSearch: () => void;
} = {
   printRegisters: (): void => {},
   clearFilter: (): void => {},
   clearSearch: (): void => {}
}

const registers: readonly Register[] = Object.freeze([
   {
      id: '161b4cbc-77fc-4660-aa08-f58f03515140',
      name: 'Lorem Ipsum',
      path: '/lorem-ipsum',
   },
]);
const groups: Data<RegisterGroup[], Register[]> = {
   list: [],
   buffer: {}
}

for (let i = 0; i < registers.length; i++) {
   const letter: string = registers[i].name[0].toLowerCase();

   if (!groups.buffer[letter]) groups.buffer[letter] = [];

   groups.buffer[letter].push(registers[i]);
}

for (const key in groups.buffer) {
   groups.list.push({ key, registers: groups.buffer[key] });
}

groups.list.sort((a: RegisterGroup, b: RegisterGroup) => a.key.localeCompare(b.key));

export { groups, handlers }