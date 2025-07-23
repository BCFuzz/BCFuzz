const v0 = `
    async function* f1(a2, a3) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        const v17 = ([BigInt64Array]).pop().cause;
        try { v17(); } catch (e) {}
        try { v17(); } catch (e) {}
        try { v17(); } catch (e) {}
        const v22 = new Int8Array();
        const v24 = new Uint32Array();
        let {...v25} = v24;
        if (!(v25 >= v22)) {
        }
    }
    f1();
`;
const v29 = eval(v0);
v29.next(eval, v0, v29, eval, v29);
gc();
