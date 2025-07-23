class C0 {
    constructor(a2) {
        function f3(a4, a5) {
            return C0;
        }
        const v7 = new Promise(f3);
        v7.finally();
    }
}
const v11 = new Uint32Array(127);
for (const v12 in v11) {
    Reflect.construct(C0, [v12,v12]);
}
gc();
