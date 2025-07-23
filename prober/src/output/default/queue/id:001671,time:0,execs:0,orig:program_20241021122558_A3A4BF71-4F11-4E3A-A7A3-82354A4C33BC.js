class C0 {
}
class C1 extends C0 {
}
const v3 = Date();
class C4 extends Date {
    static [v3];
}
const v5 = new C4();
try { v5.toLocaleTimeString(); } catch (e) {}
const v7 = new C4();
try { v7.toString(); } catch (e) {}
class C9 {
}
class C10 extends C9 {
}
class C11 {
}
const v12 = new C11();
const v13 = v12?.constructor;
try { v13(); } catch (e) {}
class C15 extends C11 {
}
class C16 extends C11 {
}
function f18(a19, a20) {
    return v5;
}
class C21 extends f18 {
}
const v22 = new WeakSet();
try { v22.has(); } catch (e) {}
for (let v24 = 0; v24 < 500; v24++) {
}
gc();
