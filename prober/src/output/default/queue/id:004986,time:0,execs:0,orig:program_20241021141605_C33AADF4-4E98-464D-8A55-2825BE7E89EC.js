class C1 {
    o(a3) {
        const v6 = new Uint32Array(9);
        try { v6.sort(this); } catch (e) {}
        return a3;
    }
}
const v8 = new C1();
class C9 extends C1 {
}
const v10 = new C9();
const v13 = [2973 + v8];
Reflect.apply(v10.o, C9, v13).includes();
gc();
