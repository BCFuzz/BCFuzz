class C0 {
    m(a2, a3) {
        [a2] = a3;
        [-16,-665715216,-997811457,-51819,536870888,-268435456,856838800];
    }
}
const v5 = new C0();
for (let v7 = 0; v7 < 100; v7++) {
    const v8 = new Int8Array(v5);
    function f9(a10, a11) {
        v5["m"](v7, v8);
    }
    Object.defineProperty(v8, "toString", { writable: true, configurable: true, enumerable: true, value: f9 });
    const v15 = new Int32Array(v8, v7, v7);
    v15 >= v8;
}
gc();
