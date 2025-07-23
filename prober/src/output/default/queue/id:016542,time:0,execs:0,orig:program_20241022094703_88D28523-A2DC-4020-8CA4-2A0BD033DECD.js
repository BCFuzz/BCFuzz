class C1 {
}
const v2 = new C1();
Object.defineProperty(v2, "enumerable", { enumerable: true, value: 1000000000000.0 });
Reflect.defineProperty(Uint8Array, undefined, v2);
gc();
