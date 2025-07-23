const v0 = [1000000000.0,0.771163294021184];
class C2 {
}
class C3 extends C2 {
}
Object.defineProperty(C2, 2, { value: NaN });
const t6 = Float32Array.from([C3,C3]).constructor;
new t6(v0);
gc();
