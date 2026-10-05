interface Register {
   id: string;
   name: string;
   path: string;
}

interface RegisterGroup {
   key: string;
   registers: Register[];
}

interface Data<T, R> {
   list: T;
   buffer: { [key: string]: R };
}
