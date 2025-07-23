function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = 200;
    const v5 = v4--;
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    }
    const o18 = {
        "maxByteLength": 3614,
    };
    const v20 = new SharedArrayBuffer(3614, o18);
    const v22 = new Int32Array(v20);
    const v24 = createGlobalObject();
    const v25 = v24.globalThis;
    try { v25.Int16Array(); } catch (e) {}
    v24.Atomics.waitAsync(v22, v4, v22, v5);
    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    }
}
new F0();
new F0();
for (let [i101, i102] = (() => {
        for (let v44 of [-2.0,-1.0,0.19795010264126411,1.2076363296656204e+308,229318.16947127413,1.3439790166549788,1000000.0,1000000.0,-166.13863760403774,Infinity]) {
            for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
            }
            for (let i = 0; i < 5; i++) {
                function F55(a57, a58) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v60 = v44--;
                    for (let i64 = 0, i65 = 10; i64 < i65; i65--) {
                    }
                    const o73 = {
                        "maxByteLength": 3614,
                    };
                    const v75 = new SharedArrayBuffer(3614, o73);
                    const v77 = new Int32Array(v75);
                    createGlobalObject().Atomics.waitAsync(v77, 200, v77, v60);
                    for (let i83 = 0, i84 = 0; i83 < i84;) {
                    }
                }
                new F55();
                for (let i93 = 0, i94 = 10; i93 != i94; i94--) {
                }
            }
        }
        return [0, 10];
    })();
    i101 != i102;
    i102--) {
}
gc();
