const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const o2 = {
};
const v4 = new Proxy(v1, o2);
class C5 {
}
class C6 extends C5 {
    constructor(a8, a9) {
        super();
        v4.__proto__ = [this];
    }
}
new C6();
gc();
