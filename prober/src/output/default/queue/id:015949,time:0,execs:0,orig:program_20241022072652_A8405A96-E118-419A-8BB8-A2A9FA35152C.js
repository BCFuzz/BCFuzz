class C1 extends Date {
}
const v2 = new C1();
Object.defineProperty(Date, Symbol.toPrimitive, { configurable: true, value: Date });
const v5 = Date(v2);
const o6 = {
    [Date]: v5,
};
Object.defineProperty(o6, "toJSON", { writable: true, configurable: true, enumerable: true, value: v2 });
JSON.stringify(o6);
gc();
