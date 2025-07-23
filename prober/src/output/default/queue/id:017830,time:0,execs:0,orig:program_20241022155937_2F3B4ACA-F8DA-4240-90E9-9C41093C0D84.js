function f0() {
    const o1 = {
    };
    o1.h = o1;
    class C2 {
    }
    class C3 extends C2 {
        #m(a5, a6, a7, a8) {
        }
    }
    new C3();
    return o1;
}
const v12 = new Uint16Array(512);
v12.filter(f0);
gc();
