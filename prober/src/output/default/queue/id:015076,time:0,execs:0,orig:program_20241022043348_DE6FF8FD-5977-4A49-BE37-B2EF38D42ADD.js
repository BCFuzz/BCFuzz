const v1 = new WeakMap();
class C2 extends WeakMap {
    o(a4, a5) {
        for (let i = 0; i < 5; i++) {
            const v7 = [this];
            const v8 = v1.set;
            try { v8(v7, v8); } catch (e) {}
            const v10 = Reflect.apply(v8, a4, v7);
            try { v10.o(); } catch (e) {}
        }
    }
}
const v12 = new C2();
v12.o(v12);
const v14 = new C2();
v14.o(v14);
gc();
