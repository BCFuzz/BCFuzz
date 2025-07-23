for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
function f11(a12, a13) {
    class C14 {
    }
    with (C14) {
        h = BigInt64Array;
    }
    for (let v15 = 0; v15 < 100; v15++) {
    }
    function f16(a17, a18, a19, a20) {
        return a18;
    }
    const v21 = new BigInt64Array(a13, a13, a13);
    v21.constructor = f16;
}
for (let v22 = 0; v22 < 25; v22++) {
    const v24 = new Uint8Array(v22);
    v24.valueOf = f11;
    v24[9] = v24;
}
gc();
