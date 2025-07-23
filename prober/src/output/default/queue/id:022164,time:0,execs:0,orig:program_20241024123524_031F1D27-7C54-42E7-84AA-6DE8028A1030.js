class C0 {
    constructor(a2) {
        function f3(a4, a5) {
            return this;
        }
        new Promise(f3);
        Reflect.construct(f3, [this], Promise);
    }
}
const v13 = new Uint32Array(127);
for (const v14 in v13) {
    Reflect.construct(C0, [v13,v13,v13,v13]);
}
gc();
