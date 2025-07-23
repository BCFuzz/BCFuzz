function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
const v6 = new F1(v5, 1000000000000.0);
const v8 = -246689.45780275227 & -246689.45780275227;
const v10 = new Uint8Array();
class C13 extends Uint8ClampedArray {
}
const v14 = `
    const o15 = {
    };
    o15.c = o15;
    o15.h = o15;
    o15.e = o15;
    Uint32Array[1] = v6;
    const t16 = "bigint";
    t16[1] = "bigint";
    const v18 = "bigint" == "bigint";
    const v19 = v18 && v18;
    const v20 = v19 && v19;
    const v22 = Array.prototype;
    v22[0] = o15;
    try { v22.slice("bigint", C13); } catch (e) {}
    Array.name = Array;
    const v24 = Array.from("bigint");
    function f25() {
        return v10;
    }
    v24.valueOf = f25;
    let v26;
    try { v26 = v24.valueOf(); } catch (e) {}
    const o27 = {
    };
    Object.defineProperty(o27, "e", { configurable: true, value: v20 });
    o27.e = o27;
    let v28;
    try { v28 = new Uint32Array(); } catch (e) {}
    try { v28.sort(F1); } catch (e) {}
    try { v28.sort(v10); } catch (e) {}
    const v31 = v28?.constructor;
    v31[0] = v8;
    try { v31(v31, v31, v5); } catch (e) {}
    let v33;
    try { v33 = v31(o27, 8, 8); } catch (e) {}
    try { v33.filter(v33); } catch (e) {}
    let v35;
    try { v35 = v28.indexOf(v28); } catch (e) {}
    ~v35;
    const v37 = v35 >> v35;
    v37 >> v37;
    const v39 = v35 >> v35;
    v39 >> v39;
    Reflect[Symbol.toPrimitive] = f25;
    let v44;
    try { v44 = Reflect.deleteProperty(C13, Reflect); } catch (e) {}
    v44 || v44;
    const v46 = [Reflect,Reflect,Reflect,Reflect];
    try { v46.shift(); } catch (e) {}
    const v48 = v46[1];
    try { v48.deleteProperty(1000000000000.0, v35); } catch (e) {}
    const v50 = v46[2];
    try { v50.set(v26, v50, Uint8Array); } catch (e) {}
    Reflect.construct(Uint32Array, v46);
    /\u{12345}/myvis;
`;
eval(v14);
gc();
