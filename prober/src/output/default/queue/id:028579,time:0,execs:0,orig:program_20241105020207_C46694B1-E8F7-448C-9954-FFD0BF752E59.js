const v0 = [3.7506325744442994e+307,-1.0,5.0,1000.0,1.0,-0.0,3.0,931.9331766013704,0.28391040973119575];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Int32Array(v0);
    const v11 = new Uint32Array(1003);
    const v13 = new ArrayBuffer();
    new Uint16Array(v13);
    const o20 = {
        n(a17, a18, a19) {
            return v13;
        },
    };
    o20.n.call().transferToFixedLength();
    for (const v24 in v11) {
        for (let v25 = 0; v25 < 5; v25++) {
            v8[v25 + 3943] = v25;
        }
    }
}
new F1();
gc();
