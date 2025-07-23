const v0 = [-2.0,-1.0,0.19795010264126411,1.2076363296656204e+308,229318.16947127413,1.3439790166549788,1000000.0,1000000.0,-166.13863760403774,Infinity];
for (const v1 of v0) {
    let v2 = 2;
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        let v17 = 200;
        const v18 = v17--;
        for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
        }
        const o31 = {
            "maxByteLength": 3614,
        };
        const v33 = new SharedArrayBuffer(3614, o31);
        const v35 = new Int32Array(v33);
        createGlobalObject().Atomics.waitAsync(v35, v17, v35, v18);
        for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
        }
    }
    new F13(v2, v0);
    for (let i53 = 0, i54 = 10; i53 != i54; i54--) {
    }
    for (let i = 0; i < 5; i++) {
        function F61(a63, a64) {
            if (!new.target) { throw 'must be called with new'; }
            const v66 = v2--;
            for (let i70 = 0, i71 = 10; i70 < i71; i71--) {
            }
            const o79 = {
                "maxByteLength": 3614,
            };
            const v81 = new SharedArrayBuffer(3614, o79);
            const v83 = new Int32Array(v81);
            createGlobalObject().Atomics.waitAsync(v83, 200, v83, v66);
            for (let i90 = 0, i91 = 10; i90 < i91; i91--) {
            }
        }
        new F61();
        for (let i101 = 0, i102 = 10; i101 != i102; i102--) {
        }
    }
}
gc();
