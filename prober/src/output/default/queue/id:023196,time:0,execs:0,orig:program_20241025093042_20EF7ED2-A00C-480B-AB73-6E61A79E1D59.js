function f1(a2, a3, a4, a5) {
    const o14 = {
        "f": 5,
        [a5]: a2,
        "b": a4,
        o(a7, a8, a9) {
            function f10(a11, a12) {
                return a4;
            }
            f10(a2);
        },
    };
    return o14;
}
const v17 = new Int32Array(209);
const v18 = [Int32Array,Int32Array,Int32Array];
function f19() {
    function f20(a21, a22, a23, a24) {
        return a24;
    }
    const v27 = new f1(f20, f20(), f20, f20, ...[127,-5402,-1693608855,10,16,-65537,-4294967295,0,-9007199254740990,3]);
    return v27;
}
const v29 = [f19];
Reflect.apply(v18.toSorted, v17, v29);
gc();
