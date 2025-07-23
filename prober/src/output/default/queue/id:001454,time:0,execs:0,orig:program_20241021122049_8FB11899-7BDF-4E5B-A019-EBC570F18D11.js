[1,949388479,2147483647,2147483649];
[10000,1799608808];
new WeakSet();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F12();
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a22;
}
const v23 = new F17(v16);
const v25 = Date();
class C26 extends Date {
    static [v25];
}
const v27 = new C26();
v27.toLocaleTimeString();
new C26();
const v30 = new C26();
v30.toString();
-2147483647n - -2147483647n;
class C34 {
}
new C34();
("getUTCMinutes").toLocaleLowerCase(v23);
class C38 {
}
new C38();
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
}
class C46 extends C38 {
}
const v49 = new C46();
v49.constructor;
for (let v51 = 0; v51 < 500; v51++) {
    v51++;
    v51--;
}
gc();
