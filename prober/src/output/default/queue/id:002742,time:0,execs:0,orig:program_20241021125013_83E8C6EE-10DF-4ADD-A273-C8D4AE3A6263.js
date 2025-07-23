const v1 = new BigInt64Array();
function f2(a3, a4) {
    class C5 {
    }
    with (C5) {
        h = BigInt64Array;
        v1.buffer;
    }
    return v1;
}
for (let v7 = 0; v7 < 25; v7++) {
    const v9 = new Uint8Array();
    v9.valueOf = f2;
    v9[9] = v9;
}
gc();
