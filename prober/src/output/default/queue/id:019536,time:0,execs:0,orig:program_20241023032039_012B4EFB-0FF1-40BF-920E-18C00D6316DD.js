class C0 {
    m(a2, a3) {
        [a2] = a3;
    }
}
const v4 = new C0();
for (let v6 = 0; v6 < 100; v6++) {
    const v7 = new Int8Array();
    function f8(a9, a10) {
        v4["m"](v6, v7);
    }
    Object.defineProperty(v7, "toString", { writable: true, configurable: true, enumerable: true, value: f8 });
    const v14 = new Int32Array();
    v14 >= v7;
}
gc();
