const v3 = new Int16Array(128);
function f4() {
    const v5 = new Int8Array(128, 128, 128);
    const v7 = new Uint16Array(128);
    let v8 = v7 & v5;
    v8--;
    return v8;
}
v3.sort(f4);
gc();
