function f0() {
    return f0;
}
function f1() {
    for (let v2 = 0; v2 < 10; v2++) {
        const v4 = new Set();
        const v5 = v4.isSupersetOf(v4);
        const v6 = v4.union(v4);
        function f7(a8, a9, a10) {
            const v11 = a9.has(v5);
            const v12 = v11 && v11;
            for (let v13 = 0; v13 < 25; v13++) {
                for (let v14 = 0; v14 < 5; v14++) {
                    for (let i = 0; i < 5; i++) {
                    }
                }
            }
            return v12;
        }
        f7(f7, v6);
    }
}
f0[Symbol.toPrimitive] = f1;
const o18 = {
    __proto__: f0,
};
Math.f16round(o18);
gc();
