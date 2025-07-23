function f0() {
    const o1 = {
    };
    o1[Symbol.toPrimitive] = f0;
    return o1;
}
const v4 = f0();
for (let i8 = 0, i9 = 10 + 10; i9--, i9;) {
}
const v17 = new Int16Array(63);
const v19 = this.Atomics;
try { v19.xor(v17, v17, v4); } catch (e) {}
gc();
