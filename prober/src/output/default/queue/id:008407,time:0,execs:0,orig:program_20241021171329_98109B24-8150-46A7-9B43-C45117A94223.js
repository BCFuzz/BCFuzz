function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o10 = {
        toString(a6, a7) {
            class C8 {
            }
            class C9 extends C8 {
            }
            Object.defineProperty(C8, 6, { configurable: true, value: 3.566232640442948 });
            return C9;
        },
    };
    o10.toString(F1, o10, 3.566232640442948, F1);
}
new F1();
const v13 = [9,1024,-4294967297,4294967295,-23584,505682909,-57359,4,1343981210];
try { new BigUint64Array(v13); } catch (e) {}
gc();
