class C3 {
    c;
    static ["unicode"];
    #c;
    #o(a5, a6) {
        const v7 = this["unicode"];
        let v8;
        try { v8 = a5(v7, a5); } catch (e) {}
        try { new a5(this, v8, this, v8); } catch (e) {}
        return a5;
    }
    #d = "number";
}
let v10;
try { v10 = new C3(); } catch (e) {}
const v11 = v10?.constructor;
try { new v11(); } catch (e) {}
new C3();
const v14 = new C3();
v14.c = v14;
const v15 = new C3();
const v17 = new WeakSet();
let v18;
try { v18 = v17.add(C3); } catch (e) {}
try { v18.add(v15); } catch (e) {}
([0.0,2.9397422771981e+307,-354633.2289240371,0.4930272490835774,-2.2250738585072014e-308])[4];
[5.732645806074224e+307,-3.0,-1000000.0,-13.482673261590207,-1.154744250430157e+308,1000000.0,0.222183902062978];
([3.0])[0];
const v27 = new Uint8Array(3, 3, 3);
let v28;
try { v28 = v27.keys(); } catch (e) {}
try { v28.next(); } catch (e) {}
v27.buffer /= 3;
gc();
