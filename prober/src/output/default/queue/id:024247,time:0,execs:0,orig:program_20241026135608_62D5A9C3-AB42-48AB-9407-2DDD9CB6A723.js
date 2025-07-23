const v2 = [-7.414030966927311e+307,1000.0,4.0,-1.7976931348623157e+308,0.49482746553425516,0.05152555387344038];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v6 = 0; v6 < 92; v6++) {
        const o9 = {
            "maxByteLength": 256,
        };
        const v11 = new SharedArrayBuffer(5, o9);
        v11.grow(256);
        const v14 = new DataView(v11);
        v14.setInt8(5, 15);
        try { v2.every(Int8Array); } catch (e) {}
        for (let v17 = 0; v17 < 25; v17++) {
        }
    }
}
new F3();
gc();
