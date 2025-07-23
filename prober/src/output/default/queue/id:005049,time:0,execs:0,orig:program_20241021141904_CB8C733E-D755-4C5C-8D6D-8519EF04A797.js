function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(a9, F6); } catch (e) {}
    a8.g;
    a9.g = a9;
    this.a = v3;
}
new F6(v4, v5);
new F6(v5, v3);
~(F0-- >>> 1073741824);
for (let v20 = 0; v20 < 5; v20++) {
    ("p").codePointAt("p");
    Date["p" + v20] = v20;
}
class C24 {
}
class C25 {
}
class C26 extends C25 {
}
class C27 extends C25 {
}
for (let v28 = 0; v28 < 25; v28++) {
    v28++;
    v28--;
}
const v31 = Date();
v31.replace(v31);
for (let v33 = 0; v33 < 250; v33++) {
}
gc();
