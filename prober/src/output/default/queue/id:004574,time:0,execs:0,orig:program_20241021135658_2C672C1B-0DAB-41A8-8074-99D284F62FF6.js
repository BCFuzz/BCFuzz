function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        const v6 = [303537114,-4294967297,1000];
        const v7 = [-1,9,4294967296,65536,10,49592,10];
        for (let i = 0; i < 5; i++) {
            const v13 = Date();
            const v14 = [1064440774,"toPrimitive"];
            Reflect.apply(("asyncIterator").padStart, v13, v14);
        }
        const v17 = [];
        Reflect.apply(v6.sort, v7, v17);
    }
}
const v20 = new F0(F0, F0, F0);
new F0(v20, F0, F0);
new F0(F0, v20, F0);
for (let v23 = 0; v23 < 5; v23++) {
    function F24() {
        if (!new.target) { throw 'must be called with new'; }
        const v28 = Array(v23);
        class C29 {
            [v28] = Float32Array;
        }
        const v30 = new C29();
        const t25 = v30.constructor;
        new t25(v23, v20, v23, F24);
        const v33 = `
            function F34() {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v33);
    }
    new F24();
}
gc();
