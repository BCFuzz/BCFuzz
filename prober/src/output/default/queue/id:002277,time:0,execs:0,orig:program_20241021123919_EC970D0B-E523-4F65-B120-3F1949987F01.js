const v2 = new Uint16Array();
const v4 = [v2,v2,v2];
Reflect.apply(("valueOf").toLowerCase, v2, v4);
gc();
