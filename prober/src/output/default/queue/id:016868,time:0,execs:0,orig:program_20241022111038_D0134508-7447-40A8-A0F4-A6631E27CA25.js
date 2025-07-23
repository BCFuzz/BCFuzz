function f1(a2) {
    let v5;
    try { v5 = Uint8Array(128, a2, 128); } catch (e) {}
    const v6 = new Uint8Array();
    v6.fill(128, v5, a2);
    return f1;
}
Int16Array.valueOf = f1;
class C8 extends Int16Array {
}
const v9 = new C8();
v9.subarray(Int16Array);
gc();
