const v2 = Int16Array.length;
v2 - v2;
function f5(a6, a7, a8, a9) {
    const o30 = {
        toString(a11, a12) {
            const v13 = a12?.constructor;
            try { v13(); } catch (e) {}
            const v15 = this.__proto__;
            const v16 = v15?.__lookupSetter__;
            let v17;
            try { v17 = v16(a8); } catch (e) {}
            const v18 = v15.toLocaleString();
            const v19 = v18?.trimLeft;
            try { new v19(); } catch (e) {}
            let v21;
            try { v21 = v18.trimRight(); } catch (e) {}
            const v22 = v18.constructor;
            try { v22.fromCodePoint(a9); } catch (e) {}
            let v24;
            try { v24 = new v22(); } catch (e) {}
            try { v24.normalize(v17, a7, a9, a8); } catch (e) {}
            const v26 = v18.fontsize(v21, v13, v22, a9, a6);
            try { v26.small(); } catch (e) {}
            const v28 = a12 || "8";
            try { v28.indexOf(a8); } catch (e) {}
        },
    };
    o30.toString(a9, false);
    o30.toString();
    return o30;
}
f5();
for (let i = 0; i < 5; i++) {
    -f5();
}
gc();
