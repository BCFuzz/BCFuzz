function f0(a1, a2) {
    const o3 = {
    };
    return o3;
}
const o4 = {
};
o4[Symbol.toPrimitive] = f0;
for (let v7 = 0; v7 < 10; v7++) {
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.hasOwnProperty(o4); } catch (e) {}
    }
    new F8(F8, Symbol);
}
gc();
