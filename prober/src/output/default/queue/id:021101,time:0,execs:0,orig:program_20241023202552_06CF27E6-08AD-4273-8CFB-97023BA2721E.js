function f1() {
    Uint8Array.toString = Date;
    const v5 = ("268435441").padEnd(29, Uint8Array);
    v5.toLocaleUpperCase().split(v5);
    return Date;
}
class C8 extends Date {
}
const v9 = new C8();
v9.toString = f1;
v9.toString();
gc();
