function f1() {
    Uint8Array.toString = Date;
    new Uint8Array(("268435441").padEnd(29, Uint8Array));
    return 29;
}
class C7 extends Date {
}
const v8 = new C7();
v8.toString = f1;
v8.toString();
gc();
