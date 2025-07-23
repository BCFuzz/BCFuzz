const v1 = new Date();
class C2 {
    h;
    constructor(a4) {
        Object.defineProperty(this, Symbol.toStringTag, { writable: true, enumerable: true, value: Date });
        v1[this] = this;
    }
    0;
    static valueOf(a8, a9) {
        Date.prototype = this;
        return a8;
    }
    static 2 = Date;
    static #h;
    1000 = Date;
    #a = Date;
}
const v10 = new C2(v1);
const v11 = new C2(Date);
const v12 = new C2(Date);
function f13() {
    return C2;
}
const v14 = [f13];
const v15 = [Date,v10];
const v16 = [v12,v15,v12,v15];
class C17 extends C2 {
    constructor(a19, a20, a21) {
        super(v14);
        function f22() {
        }
    }
    static #p(a24, a25, a26) {
        [-2147483647,-9,-1428349468,9];
        [42276,4294967295,-128,5,-8,268435441,291327096];
        [-4294967295,536870888,-1073741824,255,9007199254740992,4294967297,268435456,1073741824];
        function F30(a32, a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a33;
            this.h = a34;
        }
        const v35 = new F30(this, v11, this);
        const v36 = new F30(C2, a24, this);
        new F30(v35, v36, C2);
        v16.slice(a26);
        C17 &&= 1978415784;
        return this;
    }
}
const v43 = ["undefined"];
function f45() {
    function f46() {
    }
    f46();
    function F48(a50) {
        if (!new.target) { throw 'must be called with new'; }
        const v51 = this.constructor;
        try { new v51(); } catch (e) {}
        this.g = a50;
        this.h = f46;
    }
    new F48();
    const v54 = new F48();
    return v54;
}
v43.valueOf = f45;
934305.379841754 ^ v43;
new C17(v14, v16, v15);
new C17(Date, v15, v16);
function f60() {
    const o64 = {
        "b": 0.0,
        "c": -2.3987554640519305e+306,
        __proto__: "replace",
        [0.0]: "replace",
        "g": 0.0,
    };
    return o64;
}
for (let v65 = 0; v65 < 100; v65++) {
    f60();
}
gc();
