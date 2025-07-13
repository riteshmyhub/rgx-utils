type Props<T> = {
   input: T[];
   filter?: (item: T) => boolean;
   map?: {
      matched?: (item: T) => T;
      unmatched?: (item: T) => T;
   };
   sort?: {
      matched?: (a: T, b: T) => number;
      unmatched?: (a: T, b: T) => number;
   };
};

export function pipeline<T>({ input, filter, map, sort }: Props<T>): [T[], T[]] {
   let matched: T[] = [];
   let unmatched: T[] = [];

   if (filter) {
      for (const item of input) {
         if (filter(item)) {
            matched.push(item);
         } else {
            unmatched.push(item);
         }
      }
   } else {
      matched = [...input];
      unmatched = [];
   }

   let processedMatched = matched;
   let processedUnmatched = unmatched;

   if (map?.matched) {
      processedMatched = processedMatched.map(map.matched);
   }

   if (map?.unmatched) {
      processedUnmatched = processedUnmatched.map(map.unmatched);
   }

   if (sort?.matched) {
      processedMatched = processedMatched.sort(sort.matched);
   }

   if (sort?.unmatched) {
      processedUnmatched = processedUnmatched.sort(sort.unmatched);
   }

   return [processedMatched, processedUnmatched];
}
