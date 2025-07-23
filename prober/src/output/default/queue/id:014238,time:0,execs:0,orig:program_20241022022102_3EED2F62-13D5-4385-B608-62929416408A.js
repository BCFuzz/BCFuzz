class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    const v9 = new Uint8Array(209);
    for (const v10 in v9) {
    }
    for (let i = 0; i < 5; i++) {
        const v12 = new ArrayBuffer(a6, C0);
        const v14 = new DataView(v12);
        const v15 = v14.__proto__;
        try { v15.setInt32(v15, v1); } catch (e) {}
    }
    return f2;
}
f2();
f2.prototype.constructor();
gc();
