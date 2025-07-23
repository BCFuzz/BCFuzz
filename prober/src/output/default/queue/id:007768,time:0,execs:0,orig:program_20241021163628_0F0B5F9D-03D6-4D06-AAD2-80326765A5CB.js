function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 5; i++) {
        const v6 = new Int32Array();
        function f7() {
            return v6.byteLength;
        }
        v6[Symbol.toPrimitive] = f7;
        v6[0] = v6;
    }
}
new F0(F0, F0, F0);
gc();
