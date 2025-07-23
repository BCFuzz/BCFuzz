const o0 = {
};
function f1() {
    for (let i = 0; i < 5; i++) {
        for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
            const v16 = createGlobalObject().Atomics;
            try { v16.and(i6, undefined, -5); } catch (e) {}
            for (let v18 = 0; v18 < 50; v18++) {
            }
        }
    }
}
o0[Symbol.toPrimitive] = f1;
class C21 {
    [o0];
}
gc();
