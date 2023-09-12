type IsString<T> = T extends string ? true : false;

type StrOrNum = IsString<"hello">; // true
type StrOrBool = IsString<boolean>; // false
