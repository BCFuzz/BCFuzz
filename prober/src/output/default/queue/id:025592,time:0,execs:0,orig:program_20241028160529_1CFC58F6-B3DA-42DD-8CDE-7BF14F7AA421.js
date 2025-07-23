const v0 = [-Infinity,7.129472913931579,-334147.8317910491,-1.2372902400372266e+308,3.0,-928277.2393823598,1.7046160605160619e+308];
class C1 {
}
let v2 = new C1();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = this;
    class C6 {
        constructor(a8) {
            ({"a":v4,"length":a8,...v2} = v0);
            (v4 + "c") + a8;
        }
    }
    return C6;
}
class C11 extends F3 {
}
const v12 = new C11();
const v16 = 129 <= Int32Array ? 129 : Int32Array;
class C17 {
    get c() {
        new v12();
    }
}
const v20 = new C17();
const v22 = new v16(586);
for (const v23 of v22) {
    v20.c;
}
gc();
