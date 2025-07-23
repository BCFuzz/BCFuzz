const v0 = [-16];
const v1 = /\11a*/yg;
const v2 = /(afoo|(bar|baz)|quux)/mdygis;
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
}
const v8 = new F3(v0, F3, v0);
const v9 = new F3(v8, v2, v1);
v2.test(v1);
delete v9.a;
delete v8.a;
gc();
