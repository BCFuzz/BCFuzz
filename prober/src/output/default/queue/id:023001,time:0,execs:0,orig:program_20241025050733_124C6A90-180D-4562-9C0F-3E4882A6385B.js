const v0 = [-2147483649];
class C1 {
    m(a3, a4) {
        [a3] = a4;
    }
}
const v5 = new C1();
v5.m(v0, v0);
for (let v8 = 0; v8 < 10; v8++) {
    const v9 = new Int8Array();
    function f10(a11, a12) {
        v5["m"](v8, v9);
    }
    Object.defineProperty(v9, "toString", { writable: true, configurable: true, enumerable: true, value: f10 });
    const v16 = new Int32Array(v5, v8, v8);
    v16 >= v9;
}
gc();
