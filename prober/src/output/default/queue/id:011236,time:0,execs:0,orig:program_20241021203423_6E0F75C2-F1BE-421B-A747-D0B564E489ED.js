for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    return f10;
}
class C11 extends f10 {
    constructor(a13, a14) {
        super();
        const t8 = createGlobalObject().Float16Array;
        const v18 = new t8();
        const o19 = {
            ...v18,
        };
    }
}
new C11();
gc();
