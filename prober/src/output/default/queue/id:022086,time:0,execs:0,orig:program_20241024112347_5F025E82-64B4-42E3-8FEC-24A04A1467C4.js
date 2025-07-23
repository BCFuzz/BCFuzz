function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 5; v3++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
            }
            for (let i21 = 0, i22 = 10; i21 <= i22; i22--) {
                function f29(a30, a31) {
                    async function* f32(a33, a34) {
                    }
                    return arguments;
                }
                f29();
            }
        }
        new F4();
    }
}
new F0();
gc();
