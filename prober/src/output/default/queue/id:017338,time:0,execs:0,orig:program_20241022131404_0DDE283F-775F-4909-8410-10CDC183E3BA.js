class C3 extends Date {
}
const v4 = new C3();
const v6 = v4["toISOString"]();
let v7 = 10;
for (; v7--;) {
    const v9 = Date.parse(v6);
    v4.__proto__;
    try { v9(); } catch (e) {}
}
gc();
