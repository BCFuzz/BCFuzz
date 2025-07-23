function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
const v5 = [45560,479618047,1,-13,-4294967295,-9007199254740991,65535];
const v6 = [-268435456];
const v9 = [];
const v10 = v6.keys;
const v11 = Reflect.apply(v10, "object", v9);
let v12;
try { v12 = v11.next(v11, v10); } catch (e) {}
[-9007199254740992,57695,-1943190220,3,4,2012193949,5,536870888];
class C14 {
}
const v15 = new C14(v4, v4);
class C16 {
    constructor(a18, a19) {
        let v21 = undefined;
        v21 = delete a19.g;
        delete this.h;
    }
    h;
    static #d;
    [C14];
    #a = C14;
    g;
    static 6 = v3;
    d = v12;
    static g;
    #f = v5;
    static #g;
}
const v24 = new C16(v2, v2);
new C16(v15, v24);
gc();
