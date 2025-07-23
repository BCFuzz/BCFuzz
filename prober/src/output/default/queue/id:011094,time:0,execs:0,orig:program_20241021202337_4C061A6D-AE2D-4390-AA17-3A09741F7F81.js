for (let v0 = 0; v0 < 250; v0++) {
    const v2 = new Int16Array(v0);
    const o3 = {
    };
    function f4() {
        return ("match")["match"](/\1\2(a(?:\1(b\1\2))\2)\1/mgis);
    }
    o3.get = f4;
    const v9 = new Proxy(v2, o3);
    try { v9.filter(Proxy, v2, v9); } catch (e) {}
}
gc();
