const v2 = new Int16Array(15);
function f4() {
    const v5 = new Int8Array(15, 15, 15);
    const v7 = new Uint16Array();
    const v8 = v7 & v5;
    v8 + v8;
    return v8;
}
v2.sort(f4);
gc();
