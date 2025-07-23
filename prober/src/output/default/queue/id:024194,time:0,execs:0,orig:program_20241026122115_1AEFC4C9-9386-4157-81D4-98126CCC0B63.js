const v5 = Uint8Array.fromHex(([]).toLocaleString()).constructor;
v5.__proto__ = Int16Array;
const v6 = new v5();
v6.slice();
gc();
