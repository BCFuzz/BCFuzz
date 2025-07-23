function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = new F0();
const o28 = {
    toString(a5, a6) {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            --v2;
            for (let i15 = 1902242302, i16 = 10; i16 !== i16;) {
                let v22 = 1e-15;
                ({"length":v22,} = arguments);
            }
            const v25 = new BigUint64Array(586);
            for (const v26 of v25) {
            }
        }
        new F7(F0, a6, F7);
        return a5;
    },
};
o28.toString(o28, o28, F0, o28);
gc();
