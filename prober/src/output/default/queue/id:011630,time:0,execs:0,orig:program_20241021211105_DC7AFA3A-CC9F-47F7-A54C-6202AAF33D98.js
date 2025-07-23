class C1 extends WeakSet {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = 0;
    do {
        v6++;
    } while ((() => {
            function f9(a10) {
            }
            const o15 = {
                valueOf(a12, a13, a14) {
                    return f9;
                },
            };
            return v6 < 45830;
        })())
}
new F2(C1);
new F2();
gc();
