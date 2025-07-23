const v1 = /\111/mys.toString();
const v3 = new Uint16Array();
v3.toJSON = v1;
JSON.parse(JSON.stringify([v3]));
gc();
