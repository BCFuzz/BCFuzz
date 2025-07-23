const v0 = [-7.414030966927311e+307,1000.0,4.0,-1.7976931348623157e+308,0.49482746553425516,0.05152555387344038];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 92; v4++) {
        const o7 = {
            "maxByteLength": 256,
        };
        const v9 = new SharedArrayBuffer(5, o7);
        v9.grow(256);
        const v12 = new DataView(v9);
        v12.setInt8(5, 5);
        try { v0.every(a3); } catch (e) {}
        for (let v15 = 0; v15 < 25; v15++) {
        }
    }
}
new F1(v0);
gc();
