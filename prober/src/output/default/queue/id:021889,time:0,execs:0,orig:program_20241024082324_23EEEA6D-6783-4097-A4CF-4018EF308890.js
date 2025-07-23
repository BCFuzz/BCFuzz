const v1 = new Uint8Array();
function f2(a3, a4, a5, a6) {
    let v8 = a5 >>> 2147483649;
    const v9 = v8--;
    const v10 = v9 ^ v1;
    v9 - v10;
    return v10;
}
for (let v12 = 0; v12 < 10; v12++) {
    f2(Uint8Array, v1, v12, v12);
}
gc();
