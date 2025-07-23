const v1 = new Uint8Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    const v9 = a7.constructor;
    let v10;
    try { v10 = new v9(a8); } catch (e) {}
    a8.subarray(f4, v10, v1, a8, a5);
    return f4;
}
try { f4(Uint8Array, Uint8Array, v1, v1); } catch (e) {}
gc();
