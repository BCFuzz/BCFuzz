class C0 {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v6 = new BigUint64Array(586);
for (let v7 of v6) {
    const o8 = {
    };
    function f9() {
        let v10 = arguments;
        ({"b":v6,"e":C0,"f":v10,...v7} = o8);
        try { F1.call(); } catch (e) {}
        return v10;
    }
    f9();
}
gc();
