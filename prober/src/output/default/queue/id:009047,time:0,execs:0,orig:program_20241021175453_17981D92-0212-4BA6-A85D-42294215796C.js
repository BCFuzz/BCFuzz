function f0() {
    let v4 = Int8Array;
    class C6 {
        constructor(a8, a9, a10, a11) {
            for (let i = 0; i < 25; i++) {
                let v12 = 9;
                const v14 = new Uint8ClampedArray();
                let v15 = 3;
                ({"b":v15,"buffer":v15,"byteLength":v12,...v4} = v14);
                new Uint8Array(a11);
            }
        }
    }
    const v17 = new C6();
    new C6(1000, -9007199254740991, v17, 4294967296);
}
f0();
f0();
for (let v21 = 0; v21 < 10; v21++) {
    class C22 {
    }
    const v23 = new C22();
    const v24 = v23.constructor;
    const v25 = [];
    v25[Symbol.isConcatSpreadable] = v24;
    v25.concat().concat(v25);
}
for (let v30 = 0; v30 < 500; v30++) {
}
gc();
