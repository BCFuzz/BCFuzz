class C2 {
}
const v3 = new C2();
async function f4(a5, a6, a7) {
    try { a7.propertyIsEnumerable(v3, a6, -1024, a6); } catch (e) {}
    const o9 = {
    };
    try { Proxy(o9, o9); } catch (e) {}
    const v12 = new Proxy(v3, o9);
    const v13 = v12?.constructor;
    try { v13(); } catch (e) {}
    try { v12.toLocaleString(); } catch (e) {}
    let v16;
    try { v16 = v12.then(v13, v3, v12); } catch (e) {}
    function f17(a18) {
        return -1024;
    }
    class C19 extends f17 {
    }
    try { C19(); } catch (e) {}
    const v22 = (await v12)?.constructor;
    try { v22(v16); } catch (e) {}
    return f4;
}
f4();
gc();
