let v0 = "TgD4";
class C2 {
}
class C3 extends C2 {
}
const v4 = new C3();
for (let v6 = 0; v6 < 500; v6++) {
    const v7 = v6++;
    const v8 = new Int8Array();
    const v10 = new Int32Array(v7);
    function f11(a12) {
        ("cx").charAt(v6);
        let v15;
        try { v15 = Reflect.getPrototypeOf(v0); } catch (e) {}
        return v15;
    }
    v10.toString = f11;
    v10 >= v8;
}
let v17;
try { v17 = v4.m(v0, v0, C2); } catch (e) {}
v0 = v17;
gc();
