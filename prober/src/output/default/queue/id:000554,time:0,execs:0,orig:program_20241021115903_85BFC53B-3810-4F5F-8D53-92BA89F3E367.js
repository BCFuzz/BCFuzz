function f3(a4) {
    try { a4.search(a4); } catch (e) {}
    const o6 = {
        ...a4,
        "e": "2057584338",
        "d": "2057584338",
        "c": "function",
        __proto__: "function",
        8: "string",
        "a": "function",
        1073741825: "function",
        7: a4,
        "b": "string",
    };
    return o6;
}
f3.g = f3;
const v7 = f3("function");
f3("function");
const v9 = f3("2057584338");
function f10(a11, a12, a13) {
    const o17 = {
        "e": "function",
        get d() {
            return 15;
        },
    };
    return o17;
}
f10.e = f10;
f10("string", v9, "function");
f10("function", v7, "string");
Map.prototype = Map;
const v25 = Reflect.construct(Date, ["symbol"], Map);
try { v25.clear(); } catch (e) {}
gc();
