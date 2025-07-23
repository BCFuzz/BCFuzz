function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F0();
const v11 = [[v9]];
try { ("symbol").match(v11); } catch (e) {}
class C15 {
}
const v18 = new BigUint64Array();
const v19 = v18.every(Date);
const v20 = `
    function f21() {
    }
    for (let v22 = 0; v22 < 5; v22++) {
        const v23 = (a24, a25) => {
            return arguments;
        };
        try { v23("buffer", v19); } catch (e) {}
        for (let v28 = 0; v28 < 32; v28++) {
        }
    }
    let v29 = 0;
    while (v29 < 10) {
        v29++;
    }
`;
eval(v20);
gc();
