const v0 = [-1000.0,3.0,Infinity,0.0,-4.0,-8.789781892979784];
class C1 {
}
const v2 = new C1();
function f3() {
    const v6 = Date();
    const o7 = {
        [Math]: v6,
    };
    o7.d = v0;
    o7.f = o7;
    JSON.stringify(o7);
    return v6;
}
v2.constructor = f3;
const v10 = v2.constructor;
try { v10(); } catch (e) {}
gc();
