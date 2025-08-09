type Props<T> = {
   array: T[];
   searchTerm: string;
   key?: string; // optional, can be deep path e.g. "data.id"
};

export function withSearch<T>({ array, searchTerm, key }: Props<T>): T[] {
   const normalize = (str: string) =>
      str
         .toLowerCase()
         .normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "")
         .trim()
         .replace(/\s+/g, " ");

   const normalizedSearch = normalize(searchTerm || "");
   if (!normalizedSearch) return array;

   const getValueByPath = (obj: any, path: string): any => path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);

   return array.filter((item) => {
      let value: any;

      if (typeof item === "string" || typeof item === "number") {
         // Primitive array
         value = item;
      } else if (key) {
         // Object with path
         value = getValueByPath(item, key);
      } else {
         return false; // If object but no key provided, can't search
      }

      if (value == null) return false;
      return normalize(String(value)).includes(normalizedSearch);
   });
}
 