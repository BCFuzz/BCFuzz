function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F3();
let v7 = -16;
v7--;
const v9 = new F3(v6);
const v11 = /Nfoo|(bar|baz)|quux/dgi;
const v13 = new BigUint64Array();
const v15 = `
    const v18 = new WeakMap();
    const v20 = 2 + 2;
    if (v18 >= ~16) {
    } else {
        try { v18.set(2, BigUint64Array); } catch (e) {}
        const v26 = Symbol.iterator;
        v2[v26];
        const v28 = v26[2175];
        const v29 = [v11,v13,v20];
        try { v29.slice(v29, v15); } catch (e) {}
        let v31;
        try { v31 = v29.findIndex(v28, v26); } catch (e) {}
        v18.g;
        v29[v9] = v20;
        const v33 = v7 >> v6;
        try { v28(v33, v33, v31, v26); } catch (e) {}
        [BigInt64Array,[2],2];
    }
`;
eval(v15);
gc();
