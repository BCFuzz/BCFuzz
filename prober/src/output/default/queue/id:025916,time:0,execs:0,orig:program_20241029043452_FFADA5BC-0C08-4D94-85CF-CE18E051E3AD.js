const v0 = [589636.6642133389,-1000.0,-1000000.0,NaN,1000.0];
const v3 = [-7.414030966927311e+307,1000.0,4.0,-1.7976931348623157e+308,0.49482746553425516,0.05152555387344038];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v7 = 0; v7 < 92; v7++) {
        const o10 = {
            "maxByteLength": 256,
        };
        const v12 = new SharedArrayBuffer(5, o10);
        v12.grow(256);
        const v15 = new DataView(v12);
        v15.setInt8(v7, 15);
        try { v3.every(Int8Array); } catch (e) {}
        v0.g = DataView;
        for (let v18 = 0; v18 < 25; v18++) {
        }
    }
}
new F4(15);
gc();
