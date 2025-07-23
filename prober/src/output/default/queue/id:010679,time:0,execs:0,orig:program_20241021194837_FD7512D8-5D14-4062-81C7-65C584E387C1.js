function f0() {
}
function f1() {
    for (let v2 = 0; v2 < 10; v2++) {
        const v4 = new Set();
        const v5 = v4.union(v4);
        class C6 {
        }
        const v7 = new C6();
        async function f8(a9, a10, a11) {
            const v12 = a10.has(a11, v7, f8);
            v12 && v12;
            const o14 = {
            };
            const v16 = new Proxy(v7, o14);
            return await v16;
        }
        f8(f8, v5);
    }
}
f0[Symbol.toPrimitive] = f1;
const o21 = {
    __proto__: f0,
};
Math.f16round(o21);
gc();
