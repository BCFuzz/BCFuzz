let v1;
try { v1 = WeakSet(); } catch (e) {}
class C3 extends Set {
}
const v6 = Reflect.construct(C3, [v1,v1,v1]);
let v7;
try { v7 = v6.difference(Reflect, v6, v1, Set); } catch (e) {}
class C8 {
    constructor(a10, a11, a12) {
        class C13 {
        }
        C13.name = C13;
    }
}
const t14 = C8.constructor;
t14(v7);
try { new C8(); } catch (e) {}
gc();
