const v1 = new Int32Array();
function f5(a6, a7, a8) {
    a6--;
    function f10(a11) {
        return 4.0;
    }
    Object.defineProperty(v1, "toString", { writable: true, enumerable: true, value: f10 });
    const v14 = ("DVVte").big();
    function f15(a16) {
        return a7;
    }
    Object.defineProperty(f15, "toString", { value: f15 });
    const t12 = f15.toString;
    const v18 = t12();
    const v19 = this.constructor;
    try { a6.hasOwn(); } catch (e) {}
    const v23 = Uint8ClampedArray.from(-15);
    for (const v24 in v14) {
    }
    const v25 = v19();
    function f26(a27, a28) {
        return v23;
    }
    v25.valueOf = f26;
    try {
    const t0 = -10;
    t0(4.0, -15, v18, a7);
    } catch (e) {}
    const v32 = new Uint32Array(1000);
    for (const v33 in v32) {
    }
    return Uint32Array;
}
for (let v34 = 0; v34 < 5; v34++) {
    f5();
}
gc();
