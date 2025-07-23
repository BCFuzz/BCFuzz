const v2 = new Int32Array();
Object.defineProperty(v2, "c", { writable: true, enumerable: true, value: 2522 });
delete v2.c;
gc();
