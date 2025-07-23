function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
new Int16Array(v2);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
class C7 extends F5 {
}
const v8 = new C7();
const t11 = v8.constructor;
new t11();
"y" == "y";
const v13 = ("y").fontsize();
try { v13.toLocaleLowerCase(); } catch (e) {}
gc();
