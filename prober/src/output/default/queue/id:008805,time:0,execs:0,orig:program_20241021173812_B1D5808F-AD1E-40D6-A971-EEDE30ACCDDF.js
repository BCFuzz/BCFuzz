for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
}
class C11 {
}
class C12 extends C11 {
    constructor(a14, a15, a16) {
        super();
        const v18 = new ArrayBuffer(a16, C10);
        const v20 = new Float32Array(v18);
        for (let v21 = 0; v21 < 250; v21++) {
            v20[Symbol.hasInstance] = C10;
        }
    }
}
new C12(C10, C12, C11);
gc();
