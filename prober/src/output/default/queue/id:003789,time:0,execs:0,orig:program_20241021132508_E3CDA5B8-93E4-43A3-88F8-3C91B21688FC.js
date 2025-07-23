class C1 {
}
Object.defineProperty(C1, Symbol.match, { writable: true, value: Symbol });
const v4 = ("copyWithin")[8];
try { v4.startsWith(C1); } catch (e) {}
gc();
