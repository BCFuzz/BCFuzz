const v1 = [-9223372036854775808,10,61747,4,1073741824,-529233463,-4,-11];
const v3 = [Reflect,Reflect,Reflect];
Reflect.apply(v1.slice, "9007199254740992", v3);
gc();
