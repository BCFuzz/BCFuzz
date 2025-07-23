const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
    }
    for (let i6 = -3, i7 = 10; i6 < i7; i7--) {
    }
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v19 = 0; v19 < 5; v19++) {
            const o22 = {
                "maxByteLength": 119,
            };
            new SharedArrayBuffer(119, o22);
            Int16Array()[1];
            const v30 = new BigUint64Array(586);
            for (const v31 of v30) {
            }
        }
    }
    const v32 = [303537114,-4294967297,1000];
    const v33 = [-1,9,4294967296,65536,10,49592,10];
    const v35 = [];
    const v37 = Reflect.apply(v32.sort, v33, v35);
    v37[986] = C3;
    v37.join(Reflect).replace(F14);
`;
eval(v0);
gc();
