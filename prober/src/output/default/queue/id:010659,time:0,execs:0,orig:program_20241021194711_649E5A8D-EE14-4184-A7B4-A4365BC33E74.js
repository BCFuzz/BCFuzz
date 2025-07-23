function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const o5 = {
};
const v7 = new WeakMap();
const v10 = new BigInt64Array(v7);
const v11 = `
    v7[6] = 1992522195;
    v10.length;
    const v14 = new Int16Array(o5, 257);
    --F0;
    Array(127);
    257 !== 257;
    const v20 = [257,257,257,257];
    const v22 = v20.entries()?.next;
    for (let i25 = 0; i25 < 4; i25++) {
        v2.d;
        [-16,-45345,1,-268435456];
        [0,35020,2063102978,12,2147483647,-8346,3435];
        [3,3,9007199254740990,4294967296,65536,-22625386,-1024,9,4,1024];
    }
    const v35 = new Float32Array(v20, v22, 257);
    v35?.forEach;
    let v37 = 0;
    while ((() => {
            let v39 = ~5;
            v39--;
            return v37 < 5;
        })()) {
        const v42 = v37++;
        [[v22,v22],v42];
        [1.5901649189861278,v14,v3];
    }
    /\u{12345}/myvis;
`;
eval(v11);
gc();
