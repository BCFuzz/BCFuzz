let v1 = ([1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733]).__proto__;
class C3 {
}
const v4 = new C3();
const t4 = v4.constructor;
let v6 = new t4();
[v6,,v1] = "toString";
function f8(a9, a10) {
    return v1;
}
Object.defineProperty(ArrayBuffer, "toString", { writable: true, value: f8 });
const v11 = ArrayBuffer.toString();
for (let i15 = 0, i16 = 10 + 10; i16--, i16;) {
    const v23 = createGlobalObject();
    try { v23.load(v11); } catch (e) {}
}
gc();
