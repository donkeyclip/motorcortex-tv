import { Effect, loadPlugin, AudioPlayback, HTMLClip, BrowserClip } from '@donkeyclip/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$q = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$9 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$8 = fails$9; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var call$4 = Function.prototype.call;
var functionCall = call$4.bind ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$3 = FunctionPrototype$1.call;
var callBind = bind && bind.bind(call$3);
var functionUncurryThis = bind ? function (fn) {
  return fn && callBind(call$3, fn);
} : function (fn) {
  return fn && function () {
    return call$3.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;
var toString$4 = uncurryThis$b({}.toString);
var stringSlice = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$4(it), 8, -1);
};

var global$p = global$q;
var uncurryThis$a = functionUncurryThis;
var fails$7 = fails$9;
var classof$4 = classofRaw$1;
var Object$4 = global$p.Object;
var split = uncurryThis$a(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$7(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$o = global$q;
var TypeError$8 = global$o.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw TypeError$8("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$n = global$q;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$n[namespace]) : global$n[namespace] && global$n[namespace][method];
};

var uncurryThis$9 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$m = global$q;
var userAgent = engineUserAgent;
var process = global$m.process;
var Deno = global$m.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$6 = fails$9; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$l = global$q;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$l.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$k = global$q;
var String$3 = global$k.String;

var tryToString$1 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$j = global$q;
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;
var TypeError$7 = global$j.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$7(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$i = global$q;
var call$2 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$6 = global$i.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  throw TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$h = global$q; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$h, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$h[key] = value;
  }

  return value;
};

var global$g = global$q;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$g[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$f = global$q;
var requireObjectCoercible$1 = requireObjectCoercible$3;
var Object$2 = global$f.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object$2(requireObjectCoercible$1(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$8({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$7 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$3 = uncurryThis$7(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
};

var global$e = global$q;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$2 = global$e.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$d = global$q;
var call$1 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TypeError$5 = global$d.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$5("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$c = global$q;
var isObject$4 = isObject$7;
var document = global$c.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document) && isObject$4(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document.createElement(it) : {};
};

var DESCRIPTORS$4 = descriptors;
var fails$5 = fails$9;
var createElement = documentCreateElement; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$4 && !fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$3 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var global$b = global$q;
var isObject$3 = isObject$7;
var String$2 = global$b.String;
var TypeError$4 = global$b.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$4(String$2(argument) + ' is not an object');
};

var global$a = global$q;
var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$1 = anObject$2;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$3 = global$a.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$1 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$6 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$6(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$9 = global$q;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$9.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$8 = global$q;
var uncurryThis$5 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$5(store.get);
  var wmhas = uncurryThis$5(store.has);
  var wmset = uncurryThis$5(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$7 = global$q;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$7) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$4 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }

  return result;
};

var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$3([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$4 = fails$9;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$4(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$6 = global$q;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var classof$3 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$3(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$5 = global$q;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var Object$1 = global$5.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$2 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var uncurryThis$2 = functionUncurryThis;
var fails$3 = fails$9;
var isCallable = isCallable$b;
var classof$1 = classof$2;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$2(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$1 = !construct || fails$3(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$4 = global$q;
var isArray$1 = isArray$2;
var isConstructor = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2 = wellKnownSymbol$6;
var SPECIES$1 = wellKnownSymbol$2('species');
var Array$1 = global$4.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$2 = fails$9;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var V8_VERSION$1 = engineV8Version;
var SPECIES = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$2(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1 = _export;
var global$3 = global$q;
var fails$1 = fails$9;
var isArray = isArray$2;
var isObject = isObject$7;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol = wellKnownSymbol$6;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$3.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$1(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$1({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var NoiseEffect = /*#__PURE__*/function (_Effect) {
  _inherits(NoiseEffect, _Effect);

  var _super = _createSuper(NoiseEffect);

  function NoiseEffect() {
    _classCallCheck(this, NoiseEffect);

    return _super.apply(this, arguments);
  }

  _createClass(NoiseEffect, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.time = 0;
      this.canvasContext = this.element.getContext("2d");
    }
  }, {
    key: "onProgress",
    value: function onProgress(fr, ms) {
      var time = Math.round(ms / 20);

      if (time === this.time) {
        return;
      }

      this.time = time;
      var imgd = this.canvasContext.createImageData(this.element.width, this.element.height);
      var pix = imgd.data;

      for (var i = 0, n = pix.length; i < n; i += 12) {
        var c = 6 + Math.sin(i / 60000 + this.time % this.element.height / 10);
        pix[i] = pix[i + 1] = pix[i + 2] = pix[i + 3] = pix[i + 4] = 40 * Math.random() * c;
        pix[i + 5] = 255;
      }

      this.canvasContext.putImageData(imgd, 0, 0);
    }
  }]);

  return NoiseEffect;
}(Effect);

var NoiseEffectDef = {
  incidents: [{
    exportable: NoiseEffect,
    name: "NoiseEffect"
  }]
};

var sound = "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BEZ5+KP6hG2ikTjROhaBMPgsISCTZGQCoZEfUShA4mUGNGIGjYgmdeoBiBtIv+/1//3uCEa1/KxRu037fM7ftmd//+12oJy/0394u9mWZ/CSjQsw/2ZqmjkgAIBOGpE4eJ0LQbD40VQSbRkBMGjPqJhiRMxToKLRjEyk6QQgukb/f7//36CENG5jYi+s3///b9v/v//y9Ilzcz3xj93H+Mm00+U/ZF3jN2zrMez2NCS6cGQf5gkaJkSsl99v83pgw4NiihbF/oWGCouOFE/80JbAzGWs0SCeCMt//mPJLGRy8nAjl6pcP/zLAqjFcpjIkOgsDYcCUzEb2Vb///MYClMeARMakJNPDtMHCQCwA9+rze////wKJBkeYRh8QZjQB5hmLRgaGQD/+pQAkaHrD2LYP1rZ6TLgWmeLWz0jXAoc8WwUkwABSyAt8pJgAIbrNbLuOOv////MTilMXTGCFeM3FtMCQCMGgbMPSmMBQyu41qHHmVb/////MRxGMSxWQLMJA9MNAfEICGCIHDoDmBgdmJQY91/73/////////iMNLgJBwxHGr/gsZraxuFGOjOf5kh4mf6Bbhr/PU7Y9XuqGCv8wKQDLqUdqP/5zfuGgGmZCSkESq7/+btfhq7CntpjQf//5hGNGRUEULMyUaSEN1ZTe7l///maCaZ9mBkpTmnA2adihg8iY1st6y////Myng0msjBABMTlQyeMrAUIONytnr8v////NWQcQDU0Y4zml5MdJE0MLTCYwMQli7S3KGU2M9f////5lcZGFwkCAmYYAZg8dGBw8Dg8YJFQEA5ICv1r//9a///////zDYaMDiwx6ODGIy/4tUxBTUUzLjkyIChhbHBoYSlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+pQA5UDrgAbNTcgGd6AA0gm5EM5wAAAAAaQcAAAAAAA0g4AAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";

var NoiseEffectPlugin = loadPlugin(NoiseEffectDef);

var TVNoise = /*#__PURE__*/function (_HTMLClip) {
  _inherits(TVNoise, _HTMLClip);

  var _super = _createSuper(TVNoise);

  function TVNoise() {
    _classCallCheck(this, TVNoise);

    return _super.apply(this, arguments);
  }

  _createClass(TVNoise, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\">\n          <canvas id=\"tv\" width=\"".concat(this.attrs.width, "\" height=\"").concat(this.attrs.height, "\"></canvas>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg{\n          background: black;\n      }\n    ";
    }
  }, {
    key: "audioSources",
    get: function get() {
      return [{
        src: sound,
        base64: true,
        id: "static"
      }];
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var duration = this.props.duration || 2000;
      var noiseEffect = new NoiseEffectPlugin.NoiseEffect({
        animatedAttrs: {
          canvasImage: "dynamic"
        }
      }, {
        selector: "#tv",
        duration: duration
      });
      this.addIncident(noiseEffect, 0);

      if (this.attrs.sound === true) {
        for (var i = 0; i < duration - 4000; i += 4000) {
          var sound = new AudioPlayback({
            selector: "~#static",
            duration: 4000
          });
          this.addIncident(sound, i * 4000);
        }

        var leftovers = duration % 4000;
        var leftoverSound = new AudioPlayback({
          selector: "~#static",
          duration: leftovers
        });
        this.addIncident(leftoverSound, this.attrs.duration - leftovers);
      }
    }
  }]);

  return TVNoise;
}(HTMLClip);

var global$2 = global$q;
var classof = classof$2;
var String$1 = global$2.String;

var toString$2 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$3;
var toString$1 = toString$2;
var whitespaces$1 = whitespaces$2;
var replace = uncurryThis$1(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var global$1 = global$q;
var fails = fails$9;
var uncurryThis = functionUncurryThis;
var toString = toString$2;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;
var $parseInt$1 = global$1.parseInt;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
|| ITERATOR && !fails(function () {
  $parseInt$1(Object(ITERATOR));
}); // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt$1(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $ = _export;
var $parseInt = numberParseInt; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

$({
  global: true,
  forced: parseInt != $parseInt
}, {
  parseInt: $parseInt
});

var ImageGlitch$1 = /*#__PURE__*/function (_BrowserClip) {
  _inherits(ImageGlitch, _BrowserClip);

  var _super = _createSuper(ImageGlitch);

  function ImageGlitch() {
    _classCallCheck(this, ImageGlitch);

    return _super.apply(this, arguments);
  }

  _createClass(ImageGlitch, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var _this = this;

      this.contextLoading(); // create a canvas

      var canvas = this.context.getElements("canvas")[0];
      var ctx = canvas.getContext("2d");
      this.setCustomEntity("canvas", ctx);
      var img = new Image();

      img.onload = function () {
        _this.context.image = img;
        ctx.drawImage(img, // image
        0, // position
        0, // position
        img.width, // original image width
        img.height, // original image height
        0, 0, canvas.width, canvas.height);

        _this.contextLoaded();
      };

      img.src = this.attrs.imgUrl;
    }
  }, {
    key: "html",
    get: function get() {
      return "<canvas width=\"".concat(parseInt(this.props.containerParams.width), "\" height=\"").concat(parseInt(this.props.containerParams.height), "\"></canvas>");
    }
  }]);

  return ImageGlitch;
}(BrowserClip);

var canvasClipPluginDefinition = {
  name: "Image Canvas Clip and various Effects",
  Clip: {
    exportable: ImageGlitch$1,
    attributesValidationRules: {
      imgUrl: {
        type: "string"
      }
    }
  }
};

var CanvasClipPlugin = loadPlugin(canvasClipPluginDefinition);

var ImageGlitch = /*#__PURE__*/function (_HTMLClip) {
  _inherits(ImageGlitch, _HTMLClip);

  var _super = _createSuper(ImageGlitch);

  function ImageGlitch() {
    _classCallCheck(this, ImageGlitch);

    return _super.apply(this, arguments);
  }

  _createClass(ImageGlitch, [{
    key: "html",
    get: function get() {
      return "<div id=\"canvasClipContainer\"></div>";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      #canvasClipContainer{\n          width: ".concat(this.props.containerParams.width, ";\n          height: ").concat(this.props.containerParams.height, ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var canvasClip = new CanvasClipPlugin.Clip({
        imgUrl: this.attrs.imgUrl
      }, {
        selector: "#canvasClipContainer",
        containerParams: this.props.containerParams
      });
      this.addIncident(canvasClip, 0);
    }
  }]);

  return ImageGlitch;
}(HTMLClip);

var name = "@donkeyclip/motorcortex-tv";
var version = "0.0.2";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: TVNoise,
    name: "TVNoise",
    attributesValidationRules: {
      width: {
        optional: false,
        type: "number",
        min: 1
      },
      height: {
        optional: false,
        type: "number",
        min: 1
      },
      sound: {
        optional: true,
        type: "boolean"
      }
    }
  }, {
    exportable: ImageGlitch,
    name: "ImageGlitch",
    attributesValidationRules: {
      imgUrl: {
        type: "string",
        optional: false
      }
    }
  }]
};

export { index as default };
