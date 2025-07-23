const v2 = new Uint8Array();
v2[Symbol.isConcatSpreadable] = v2;
class C5 {
}
C5[Symbol.isConcatSpreadable] = 512;
const v7 = new C5();
const v8 = v7.constructor;
const v11 = new Int8Array(4096);
v11[Symbol.isConcatSpreadable] = 512;
const v13 = Symbol.isConcatSpreadable;
class C16 extends ([4294967296,-1037852386,257,10,3,1,374675389,9]).constructor {
}
const v17 = C16.from(v13);
v17.constructor = Symbol;
v17.concat(v8);
const v19 = new C16();
v19.concat(v2);
v19.concat(v11);
gc();
