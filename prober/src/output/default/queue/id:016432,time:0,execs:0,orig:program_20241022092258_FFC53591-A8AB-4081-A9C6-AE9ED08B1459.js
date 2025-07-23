let v0 = 172;
const v1 = v0--;
class C2 {
}
const v3 = new C2();
function f5() {
    return v1;
}
const v6 = f5();
const v9 = `
    const v11 = ("-13")[v6];
    const o12 = {
    };
    o12.d = o12;
    let v14;
    try { v14 = Uint32Array(v11, o12, 0.0); } catch (e) {}
    try { Reflect.getPrototypeOf(Reflect); } catch (e) {}
    const v18 = Reflect.construct(Uint32Array, []);
    try { v18.map(v0); } catch (e) {}
    const v20 = v18.reverse(v14, v6, v6, Reflect, C2);
    v14 = "-13";
    Object.defineProperty(v3, "d", { configurable: true, enumerable: true, get: f5 });
    /[]/mdyvs;
    /\u{12345}/myvis;
    const v23 = v20.indexOf();
    v23 % v23;
    class C25 {
        static #e = "-13";
        [715017292] = 7;
        static [7];
    }
`;
eval(v9);
gc();
