const v1 = new WeakMap();
const v2 = [v1];
class C4 {
    constructor(a6) {
        function f7(a8, a9) {
            return Reflect.construct(WeakMap, [v2], Int8Array);
        }
        a6[Symbol.toPrimitive] = f7;
        `match${C4}getUint32`;
    }
}
try { new C4(C4); } catch (e) {}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
