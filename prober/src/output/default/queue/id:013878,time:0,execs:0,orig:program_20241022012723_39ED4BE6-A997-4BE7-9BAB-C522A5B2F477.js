function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(-1.184670302248617e+308, WeakSet);
let v7;
try { v7 = v6.hasOwnProperty(v6); } catch (e) {}
for (let v8 = 0; v8 < 5; v8++) {
    class C11 {
        static [10n] = 45373n;
    }
    try { v7(); } catch (e) {}
    -1.184670302248617e+308 == WeakSet ? -1.184670302248617e+308 : WeakSet;
    try { v7(); } catch (e) {}
}
try { Date.toString(v7, v6, -1.184670302248617e+308); } catch (e) {}
try { ("matchAll").search(); } catch (e) {}
class C20 {
}
try { C20(); } catch (e) {}
class C22 extends C20 {
}
const v23 = new C22();
const v24 = v23.constructor;
try { v24(v24); } catch (e) {}
const v26 = new C22();
const v27 = v26.constructor;
try { v27(v27); } catch (e) {}
for (let v29 = 0; v29 < 500; v29++) {
    try { v29(v29, v29, WeakSet); } catch (e) {}
}
gc();
