const v2 = new Uint8Array();
async function f4(a5, a6, a7) {
    function f8(a9, a10) {
        function f11(a12) {
            const o15 = {
                "maxByteLength": 2312845920,
            };
            new ArrayBuffer(750704325, o15);
        }
        const v18 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        const o19 = {
            __proto__: v18,
        };
        for (let i = 0; i < 5; i++) {
            o19["some"](parseInt);
        }
        for (let v23 = 0; v23 < 5; v23++) {
            f11();
        }
        for (let v25 = 0; v25 < 25; v25++) {
            for (let v26 = 0; v26 < 100; v26++) {
            }
        }
    }
    a7.then = f8;
    for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
    }
    for (let i39 = 0, i40 = 10; i39 !== i40; i40--) {
    }
    return a7;
}
f4(f4, f4, f4);
createGlobalObject().WebAssembly.compile(v2);
gc();
