const v3 = new Uint8Array(16);
const v5 = ["o","o","o"];
Reflect.apply(("o").trimEnd, v3, v5);
gc();
