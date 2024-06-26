(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "node_modules/prismjs/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _2 = {
          manual: _self2.Prism && _self2.Prism.manual,
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            type: function(o2) {
              return Object.prototype.toString.call(o2).slice(8, -1);
            },
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            clone: function deepClone(o2, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_2.util.type(o2)) {
                case "Object":
                  id = _2.util.objId(o2);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = {};
                  visited[id] = clone;
                  for (var key in o2) {
                    if (o2.hasOwnProperty(key)) {
                      clone[key] = deepClone(o2[key], visited);
                    }
                  }
                  return clone;
                case "Array":
                  id = _2.util.objId(o2);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  o2.forEach(function(v2, i2) {
                    clone[i2] = deepClone(v2, visited);
                  });
                  return clone;
                default:
                  return o2;
              }
            },
            getLanguage: function(element) {
              while (element) {
                var m2 = lang.exec(element.className);
                if (m2) {
                  return m2[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i2 in scripts) {
                    if (scripts[i2].src == src) {
                      return scripts[i2];
                    }
                  }
                }
                return null;
              }
            },
            isActive: function(element, className, defaultActivation) {
              var no2 = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no2)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          languages: {
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            extend: function(id, redef) {
              var lang2 = _2.util.clone(_2.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            insertBefore: function(inside, before, insert, root) {
              root = root || _2.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _2.languages.DFS(_2.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            DFS: function DFS(o2, callback, type, visited) {
              visited = visited || {};
              var objId = _2.util.objId;
              for (var i2 in o2) {
                if (o2.hasOwnProperty(i2)) {
                  callback.call(o2, i2, o2[i2], type || i2);
                  var property = o2[i2];
                  var propertyType = _2.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i2, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          highlightAll: function(async, callback) {
            _2.highlightAllUnder(document, async, callback);
          },
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _2.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _2.hooks.run("before-all-elements-highlight", env);
            for (var i2 = 0, element; element = env.elements[i2++]; ) {
              _2.highlightElement(element, async === true, env.callback);
            }
          },
          highlightElement: function(element, async, callback) {
            var language = _2.util.getLanguage(element);
            var grammar = _2.languages[language];
            _2.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _2.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _2.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _2.hooks.run("after-highlight", env);
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _2.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _2.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_2.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_2.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_2.highlight(env.code, env.grammar, env.language));
            }
          },
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _2.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _2.tokenize(env.code, env.grammar);
            _2.hooks.run("after-tokenize", env);
            return Token.stringify(_2.util.encode(env.tokens), env.language);
          },
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          hooks: {
            all: {},
            add: function(name, callback) {
              var hooks = _2.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            run: function(name, env) {
              var callbacks = _2.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i2 = 0, callback; callback = callbacks[i2++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _2;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o2, language) {
          if (typeof o2 == "string") {
            return o2;
          }
          if (Array.isArray(o2)) {
            var s2 = "";
            o2.forEach(function(e2) {
              s2 += stringify(e2, language);
            });
            return s2;
          }
          var env = {
            type: o2.type,
            content: stringify(o2.content, language),
            tag: "span",
            classes: ["token", o2.type],
            attributes: {},
            language
          };
          var aliases = o2.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _2.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j2 = 0; j2 < patterns.length; ++j2) {
              if (rematch && rematch.cause == token + "," + j2) {
                return;
              }
              var patternObj = patterns[j2];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to2 = match.index + match[0].length;
                  var p2 = pos;
                  p2 += currentNode.value.length;
                  while (from >= p2) {
                    currentNode = currentNode.next;
                    p2 += currentNode.value.length;
                  }
                  p2 -= currentNode.value.length;
                  pos = p2;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to2 || typeof k2.value === "string"); k2 = k2.next) {
                    removeCount++;
                    p2 += k2.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p2);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j2,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i2 = 0; i2 < count && next !== list.tail; i2++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i2;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _2;
          }
          if (!_2.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _2;
        }
        var script = _2.util.currentScript();
        if (script) {
          _2.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _2.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_2.manual) {
            _2.highlightAll();
          }
        }
        if (!_2.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _2;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
            }
          },
          "url": {
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }
        function parseRange(range) {
          var m2 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
          if (m2) {
            var start = Number(m2[1]);
            var comma = m2[2];
            var end = m2[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, void 0];
            }
            return [start, Number(end)];
          }
          return void 0;
        }
        Prism2.hooks.add("before-highlightall", function(env) {
          env.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env) {
          var pre = env.element;
          if (pre.matches(SELECTOR)) {
            env.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            Prism2.util.setLanguage(code, language);
            Prism2.util.setLanguage(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            loadFile(src, function(text) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              var range = parseRange(pre.getAttribute("data-range"));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join("\n");
                if (!pre.hasAttribute("data-start")) {
                  pre.setAttribute("data-start", String(start + 1));
                }
              }
              code.textContent = text;
              Prism2.highlightElement(code);
            }, function(error) {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code.textContent = error;
            });
          }
        });
        Prism2.plugins.fileHighlight = {
          highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i2 = 0, element; element = elements[i2++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // node_modules/@docsearch/js/dist/esm/index.js
  function e(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function t(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var o2 = arguments[n2] != null ? arguments[n2] : {};
      n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
        r(t2, e2, o2[e2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
        Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
      });
    }
    return t2;
  }
  function n(e2) {
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, n(e2);
  }
  function r(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function o() {
    return o = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, o.apply(this, arguments);
  }
  function i(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function c(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 == null)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || n2.return == null || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || u(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return l(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || u(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u(e2, t2) {
    if (e2) {
      if (typeof e2 == "string")
        return l(e2, t2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(e2, t2) : void 0;
    }
  }
  function l(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  var s;
  var f;
  var p;
  var m;
  var v;
  var d = {};
  var y = [];
  var h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function b(e2, t2) {
    for (var n2 in t2)
      e2[n2] = t2[n2];
    return e2;
  }
  function g(e2) {
    var t2 = e2.parentNode;
    t2 && t2.removeChild(e2);
  }
  function _(e2, t2, n2) {
    var r2, o2, i2, c2 = arguments, a2 = {};
    for (i2 in t2)
      i2 == "key" ? r2 = t2[i2] : i2 == "ref" ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3)
      for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++)
        n2.push(c2[i2]);
    if (n2 != null && (a2.children = n2), typeof e2 == "function" && e2.defaultProps != null)
      for (i2 in e2.defaultProps)
        a2[i2] === void 0 && (a2[i2] = e2.defaultProps[i2]);
    return O(e2, a2, r2, o2, null);
  }
  function O(e2, t2, n2, r2, o2) {
    var i2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++s.__v : o2 };
    return s.vnode != null && s.vnode(i2), i2;
  }
  function S(e2) {
    return e2.children;
  }
  function w(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function j(e2, t2) {
    if (t2 == null)
      return e2.__ ? j(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var n2; t2 < e2.__k.length; t2++)
      if ((n2 = e2.__k[t2]) != null && n2.__e != null)
        return n2.__e;
    return typeof e2.type == "function" ? j(e2) : null;
  }
  function E(e2) {
    var t2, n2;
    if ((e2 = e2.__) != null && e2.__c != null) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
        if ((n2 = e2.__k[t2]) != null && n2.__e != null) {
          e2.__e = e2.__c.base = n2.__e;
          break;
        }
      return E(e2);
    }
  }
  function P(e2) {
    (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
  }
  function I() {
    for (var e2; I.__r = f.length; )
      e2 = f.sort(function(e3, t2) {
        return e3.__v.__b - t2.__v.__b;
      }), f = [], e2.some(function(e3) {
        var t2, n2, r2, o2, i2, c2;
        e3.__d && (i2 = (o2 = (t2 = e3).__v).__e, (c2 = t2.__P) && (n2 = [], (r2 = b({}, o2)).__v = o2.__v + 1, q(c2, o2, r2, t2.__n, c2.ownerSVGElement !== void 0, o2.__h != null ? [i2] : null, n2, i2 == null ? j(o2) : i2, o2.__h), L(n2, o2), o2.__e != i2 && E(o2)));
      });
  }
  function D(e2, t2, n2, r2, o2, i2, c2, a2, u2, l2) {
    var s2, f2, p2, m2, v2, h2, b2, g2 = r2 && r2.__k || y, _2 = g2.length;
    for (n2.__k = [], s2 = 0; s2 < t2.length; s2++)
      if ((m2 = n2.__k[s2] = (m2 = t2[s2]) == null || typeof m2 == "boolean" ? null : typeof m2 == "string" || typeof m2 == "number" ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2) != null) {
        if (m2.__ = n2, m2.__b = n2.__b + 1, (p2 = g2[s2]) === null || p2 && m2.key == p2.key && m2.type === p2.type)
          g2[s2] = void 0;
        else
          for (f2 = 0; f2 < _2; f2++) {
            if ((p2 = g2[f2]) && m2.key == p2.key && m2.type === p2.type) {
              g2[f2] = void 0;
              break;
            }
            p2 = null;
          }
        q(e2, m2, p2 = p2 || d, o2, i2, c2, a2, u2, l2), v2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (b2 || (b2 = []), p2.ref && b2.push(p2.ref, null, m2), b2.push(f2, m2.__c || v2, m2)), v2 != null ? (h2 == null && (h2 = v2), typeof m2.type == "function" && m2.__k != null && m2.__k === p2.__k ? m2.__d = u2 = k(m2, u2, e2) : u2 = C(e2, m2, p2, g2, v2, u2), l2 || n2.type !== "option" ? typeof n2.type == "function" && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = j(p2));
      }
    for (n2.__e = h2, s2 = _2; s2--; )
      g2[s2] != null && (typeof n2.type == "function" && g2[s2].__e != null && g2[s2].__e == n2.__d && (n2.__d = j(r2, s2 + 1)), U(g2[s2], g2[s2]));
    if (b2)
      for (s2 = 0; s2 < b2.length; s2++)
        H(b2[s2], b2[++s2], b2[++s2]);
  }
  function k(e2, t2, n2) {
    var r2, o2;
    for (r2 = 0; r2 < e2.__k.length; r2++)
      (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = typeof o2.type == "function" ? k(o2, t2, n2) : C(n2, o2, o2, e2.__k, o2.__e, t2));
    return t2;
  }
  function A(e2, t2) {
    return t2 = t2 || [], e2 == null || typeof e2 == "boolean" || (Array.isArray(e2) ? e2.some(function(e3) {
      A(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function C(e2, t2, n2, r2, o2, i2) {
    var c2, a2, u2;
    if (t2.__d !== void 0)
      c2 = t2.__d, t2.__d = void 0;
    else if (n2 == null || o2 != i2 || o2.parentNode == null)
      e:
        if (i2 == null || i2.parentNode !== e2)
          e2.appendChild(o2), c2 = null;
        else {
          for (a2 = i2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
            if (a2 == o2)
              break e;
          e2.insertBefore(o2, i2), c2 = i2;
        }
    return c2 !== void 0 ? c2 : o2.nextSibling;
  }
  function N(e2, t2, n2) {
    t2[0] === "-" ? e2.setProperty(t2, n2) : e2[t2] = n2 == null ? "" : typeof n2 != "number" || h.test(t2) ? n2 : n2 + "px";
  }
  function x(e2, t2, n2, r2, o2) {
    var i2;
    e:
      if (t2 === "style")
        if (typeof n2 == "string")
          e2.style.cssText = n2;
        else {
          if (typeof r2 == "string" && (e2.style.cssText = r2 = ""), r2)
            for (t2 in r2)
              n2 && t2 in n2 || N(e2.style, t2, "");
          if (n2)
            for (t2 in n2)
              r2 && n2[t2] === r2[t2] || N(e2.style, t2, n2[t2]);
        }
      else if (t2[0] === "o" && t2[1] === "n")
        i2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n2, n2 ? r2 || e2.addEventListener(t2, i2 ? R : T, i2) : e2.removeEventListener(t2, i2 ? R : T, i2);
      else if (t2 !== "dangerouslySetInnerHTML") {
        if (o2)
          t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "download" && t2 in e2)
          try {
            e2[t2] = n2 == null ? "" : n2;
            break e;
          } catch (e3) {
          }
        typeof n2 == "function" || (n2 != null && (n2 !== false || t2[0] === "a" && t2[1] === "r") ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
      }
  }
  function T(e2) {
    this.l[e2.type + false](s.event ? s.event(e2) : e2);
  }
  function R(e2) {
    this.l[e2.type + true](s.event ? s.event(e2) : e2);
  }
  function q(e2, t2, n2, r2, o2, i2, c2, a2, u2) {
    var l2, f2, p2, m2, v2, d2, y2, h2, g2, _2, O2, j2 = t2.type;
    if (t2.constructor !== void 0)
      return null;
    n2.__h != null && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, i2 = [a2]), (l2 = s.__b) && l2(t2);
    try {
      e:
        if (typeof j2 == "function") {
          if (h2 = t2.props, g2 = (l2 = j2.contextType) && r2[l2.__c], _2 = l2 ? g2 ? g2.props.value : l2.__ : r2, n2.__c ? y2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in j2 && j2.prototype.render ? t2.__c = f2 = new j2(h2, _2) : (t2.__c = f2 = new w(h2, _2), f2.constructor = j2, f2.render = F), g2 && g2.sub(f2), f2.props = h2, f2.state || (f2.state = {}), f2.context = _2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), f2.__s == null && (f2.__s = f2.state), j2.getDerivedStateFromProps != null && (f2.__s == f2.state && (f2.__s = b({}, f2.__s)), b(f2.__s, j2.getDerivedStateFromProps(h2, f2.__s))), m2 = f2.props, v2 = f2.state, p2)
            j2.getDerivedStateFromProps == null && f2.componentWillMount != null && f2.componentWillMount(), f2.componentDidMount != null && f2.__h.push(f2.componentDidMount);
          else {
            if (j2.getDerivedStateFromProps == null && h2 !== m2 && f2.componentWillReceiveProps != null && f2.componentWillReceiveProps(h2, _2), !f2.__e && f2.shouldComponentUpdate != null && f2.shouldComponentUpdate(h2, f2.__s, _2) === false || t2.__v === n2.__v) {
              f2.props = h2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && c2.push(f2);
              break e;
            }
            f2.componentWillUpdate != null && f2.componentWillUpdate(h2, f2.__s, _2), f2.componentDidUpdate != null && f2.__h.push(function() {
              f2.componentDidUpdate(m2, v2, d2);
            });
          }
          f2.context = _2, f2.props = h2, f2.state = f2.__s, (l2 = s.__r) && l2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, f2.getChildContext != null && (r2 = b(b({}, r2), f2.getChildContext())), p2 || f2.getSnapshotBeforeUpdate == null || (d2 = f2.getSnapshotBeforeUpdate(m2, v2)), O2 = l2 != null && l2.type === S && l2.key == null ? l2.props.children : l2, D(e2, Array.isArray(O2) ? O2 : [O2], t2, n2, r2, o2, i2, c2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && c2.push(f2), y2 && (f2.__E = f2.__ = null), f2.__e = false;
        } else
          i2 == null && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = M(n2.__e, t2, n2, r2, o2, i2, c2, u2);
      (l2 = s.diffed) && l2(t2);
    } catch (e3) {
      t2.__v = null, (u2 || i2 != null) && (t2.__e = a2, t2.__h = !!u2, i2[i2.indexOf(a2)] = null), s.__e(e3, t2, n2);
    }
  }
  function L(e2, t2) {
    s.__c && s.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        s.__e(e3, t3.__v);
      }
    });
  }
  function M(e2, t2, n2, r2, o2, i2, c2, a2) {
    var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, v2 = t2.type, h2 = 0;
    if (v2 === "svg" && (o2 = true), i2 != null) {
      for (; h2 < i2.length; h2++)
        if ((u2 = i2[h2]) && (u2 === e2 || (v2 ? u2.localName == v2 : u2.nodeType == 3))) {
          e2 = u2, i2[h2] = null;
          break;
        }
    }
    if (e2 == null) {
      if (v2 === null)
        return document.createTextNode(m2);
      e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", v2) : document.createElement(v2, m2.is && m2), i2 = null, a2 = false;
    }
    if (v2 === null)
      p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
    else {
      if (i2 = i2 && y.slice.call(e2.childNodes), l2 = (p2 = n2.props || d).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
        if (i2 != null)
          for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
            p2[e2.attributes[f2].name] = e2.attributes[f2].value;
        (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
      }
      if (function(e3, t3, n3, r3, o3) {
        var i3;
        for (i3 in n3)
          i3 === "children" || i3 === "key" || i3 in t3 || x(e3, i3, null, n3[i3], r3);
        for (i3 in t3)
          o3 && typeof t3[i3] != "function" || i3 === "children" || i3 === "key" || i3 === "value" || i3 === "checked" || n3[i3] === t3[i3] || x(e3, i3, t3[i3], n3[i3], r3);
      }(e2, m2, p2, o2, a2), s2)
        t2.__k = [];
      else if (h2 = t2.props.children, D(e2, Array.isArray(h2) ? h2 : [h2], t2, n2, r2, o2 && v2 !== "foreignObject", i2, c2, e2.firstChild, a2), i2 != null)
        for (h2 = i2.length; h2--; )
          i2[h2] != null && g(i2[h2]);
      a2 || ("value" in m2 && (h2 = m2.value) !== void 0 && (h2 !== e2.value || v2 === "progress" && !h2) && x(e2, "value", h2, p2.value, false), "checked" in m2 && (h2 = m2.checked) !== void 0 && h2 !== e2.checked && x(e2, "checked", h2, p2.checked, false));
    }
    return e2;
  }
  function H(e2, t2, n2) {
    try {
      typeof e2 == "function" ? e2(t2) : e2.current = t2;
    } catch (e3) {
      s.__e(e3, n2);
    }
  }
  function U(e2, t2, n2) {
    var r2, o2, i2;
    if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || H(r2, null, t2)), n2 || typeof e2.type == "function" || (n2 = (o2 = e2.__e) != null), e2.__e = e2.__d = void 0, (r2 = e2.__c) != null) {
      if (r2.componentWillUnmount)
        try {
          r2.componentWillUnmount();
        } catch (e3) {
          s.__e(e3, t2);
        }
      r2.base = r2.__P = null;
    }
    if (r2 = e2.__k)
      for (i2 = 0; i2 < r2.length; i2++)
        r2[i2] && U(r2[i2], t2, n2);
    o2 != null && g(o2);
  }
  function F(e2, t2, n2) {
    return this.constructor(e2, n2);
  }
  function B(e2, t2, n2) {
    var r2, o2, i2;
    s.__ && s.__(e2, t2), o2 = (r2 = typeof n2 == "function") ? null : n2 && n2.__k || t2.__k, i2 = [], q(t2, e2 = (!r2 && n2 || t2).__k = _(S, null, [e2]), o2 || d, d, t2.ownerSVGElement !== void 0, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? y.slice.call(t2.childNodes) : null, i2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), L(i2, e2);
  }
  function V(e2, t2) {
    B(e2, t2, V);
  }
  function K(e2, t2, n2) {
    var r2, o2, i2, c2 = arguments, a2 = b({}, e2.props);
    for (i2 in t2)
      i2 == "key" ? r2 = t2[i2] : i2 == "ref" ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3)
      for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++)
        n2.push(c2[i2]);
    return n2 != null && (a2.children = n2), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
  }
  s = { __e: function(e2, t2) {
    for (var n2, r2, o2; t2 = t2.__; )
      if ((n2 = t2.__c) && !n2.__)
        try {
          if ((r2 = n2.constructor) && r2.getDerivedStateFromError != null && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e2), o2 = n2.__d), o2)
            return n2.__E = n2;
        } catch (t3) {
          e2 = t3;
        }
    throw e2;
  }, __v: 0 }, w.prototype.setState = function(e2, t2) {
    var n2;
    n2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e2 == "function" && (e2 = e2(b({}, n2), this.props)), e2 && b(n2, e2), e2 != null && this.__v && (t2 && this.__h.push(t2), P(this));
  }, w.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
  }, w.prototype.render = S, f = [], p = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, v = 0;
  var W;
  var z;
  var J;
  var $ = 0;
  var Q = [];
  var Z = s.__b;
  var Y = s.__r;
  var G = s.diffed;
  var X = s.__c;
  var ee = s.unmount;
  function te(e2, t2) {
    s.__h && s.__h(z, e2, $ || t2), $ = 0;
    var n2 = z.__H || (z.__H = { __: [], __h: [] });
    return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
  }
  function ne(e2) {
    return $ = 1, re(pe, e2);
  }
  function re(e2, t2, n2) {
    var r2 = te(W++, 2);
    return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : pe(void 0, t2), function(e3) {
      var t3 = r2.t(r2.__[0], e3);
      r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = z), r2.__;
  }
  function oe(e2, t2) {
    var n2 = te(W++, 3);
    !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__H.__h.push(n2));
  }
  function ie(e2, t2) {
    var n2 = te(W++, 4);
    !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__h.push(n2));
  }
  function ce(e2, t2) {
    var n2 = te(W++, 7);
    return fe(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
  }
  function ae() {
    Q.forEach(function(e2) {
      if (e2.__P)
        try {
          e2.__H.__h.forEach(le), e2.__H.__h.forEach(se), e2.__H.__h = [];
        } catch (t2) {
          e2.__H.__h = [], s.__e(t2, e2.__v);
        }
    }), Q = [];
  }
  s.__b = function(e2) {
    z = null, Z && Z(e2);
  }, s.__r = function(e2) {
    Y && Y(e2), W = 0;
    var t2 = (z = e2.__c).__H;
    t2 && (t2.__h.forEach(le), t2.__h.forEach(se), t2.__h = []);
  }, s.diffed = function(e2) {
    G && G(e2);
    var t2 = e2.__c;
    t2 && t2.__H && t2.__H.__h.length && (Q.push(t2) !== 1 && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
      var t3, n2 = function() {
        clearTimeout(r2), ue && cancelAnimationFrame(t3), setTimeout(e3);
      }, r2 = setTimeout(n2, 100);
      ue && (t3 = requestAnimationFrame(n2));
    })(ae)), z = void 0;
  }, s.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(le), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || se(e4);
        });
      } catch (n2) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], s.__e(n2, e3.__v);
      }
    }), X && X(e2, t2);
  }, s.unmount = function(e2) {
    ee && ee(e2);
    var t2 = e2.__c;
    if (t2 && t2.__H)
      try {
        t2.__H.__.forEach(le);
      } catch (e3) {
        s.__e(e3, t2.__v);
      }
  };
  var ue = typeof requestAnimationFrame == "function";
  function le(e2) {
    var t2 = z;
    typeof e2.__c == "function" && e2.__c(), z = t2;
  }
  function se(e2) {
    var t2 = z;
    e2.__c = e2.__(), z = t2;
  }
  function fe(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e2[n2];
    });
  }
  function pe(e2, t2) {
    return typeof t2 == "function" ? t2(e2) : t2;
  }
  function me(e2, t2) {
    for (var n2 in t2)
      e2[n2] = t2[n2];
    return e2;
  }
  function ve(e2, t2) {
    for (var n2 in e2)
      if (n2 !== "__source" && !(n2 in t2))
        return true;
    for (var r2 in t2)
      if (r2 !== "__source" && e2[r2] !== t2[r2])
        return true;
    return false;
  }
  function de(e2) {
    this.props = e2;
  }
  (de.prototype = new w()).isPureReactComponent = true, de.prototype.shouldComponentUpdate = function(e2, t2) {
    return ve(this.props, e2) || ve(this.state, t2);
  };
  var ye = s.__b;
  s.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), ye && ye(e2);
  };
  var he = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var be = function(e2, t2) {
    return e2 == null ? null : A(A(e2).map(t2));
  };
  var ge = { map: be, forEach: be, count: function(e2) {
    return e2 ? A(e2).length : 0;
  }, only: function(e2) {
    var t2 = A(e2);
    if (t2.length !== 1)
      throw "Children.only";
    return t2[0];
  }, toArray: A };
  var _e = s.__e;
  function Oe() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Se(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__e && t2.__e(e2);
  }
  function we() {
    this.u = null, this.o = null;
  }
  s.__e = function(e2, t2, n2) {
    if (e2.then) {
      for (var r2, o2 = t2; o2 = o2.__; )
        if ((r2 = o2.__c) && r2.__c)
          return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
    }
    _e(e2, t2, n2);
  }, (Oe.prototype = new w()).__c = function(e2, t2) {
    var n2 = t2.__c, r2 = this;
    r2.t == null && (r2.t = []), r2.t.push(n2);
    var o2 = Se(r2.__v), i2 = false, c2 = function() {
      i2 || (i2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
    };
    n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
      c2(), n2.__c && n2.__c();
    };
    var a2 = function() {
      if (!--r2.__u) {
        if (r2.state.__e) {
          var e3 = r2.state.__e;
          r2.__v.__k[0] = function e4(t4, n3, r3) {
            return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
              return e4(t5, n3, r3);
            }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
          }(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    }, u2 = t2.__h === true;
    r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(c2, c2);
  }, Oe.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Oe.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = function e3(t3, n3, r3) {
          return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
            typeof e4.__c == "function" && e4.__c();
          }), t3.__c.__H = null), (t3 = me({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
            return e3(t4, n3, r3);
          })), t3;
        }(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__e && _(S, null, e2.fallback);
    return o2 && (o2.__h = null), [_(S, null, t2.__e ? null : e2.children), o2];
  };
  var je = function(e2, t2, n2) {
    if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
      for (n2 = e2.u; n2; ) {
        for (; n2.length > 3; )
          n2.pop()();
        if (n2[1] < n2[0])
          break;
        e2.u = n2 = n2[2];
      }
  };
  function Ee(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function Pe(e2) {
    var t2 = this, n2 = e2.i;
    t2.componentWillUnmount = function() {
      B(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, insertBefore: function(e3, n3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
    } }), B(_(Ee, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
  }
  function Ie(e2, t2) {
    return _(Pe, { __v: e2, i: t2 });
  }
  (we.prototype = new w()).__e = function(e2) {
    var t2 = this, n2 = Se(t2.__v), r2 = t2.o.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), je(t2, e2, r2)) : o2();
      };
      n2 ? n2(i2) : i2();
    };
  }, we.prototype.render = function(e2) {
    this.u = null, this.o = new Map();
    var t2 = A(e2.children);
    e2.revealOrder && e2.revealOrder[0] === "b" && t2.reverse();
    for (var n2 = t2.length; n2--; )
      this.o.set(t2[n2], this.u = [1, 0, this.u]);
    return e2.children;
  }, we.prototype.componentDidUpdate = we.prototype.componentDidMount = function() {
    var e2 = this;
    this.o.forEach(function(t2, n2) {
      je(e2, n2, t2);
    });
  };
  var De = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var ke = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Ae = function(e2) {
    return (typeof Symbol != "undefined" && n(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
  };
  function Ce(e2, t2, n2) {
    return t2.__k == null && (t2.textContent = ""), B(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
  }
  w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(w.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Ne = s.event;
  function xe() {
  }
  function Te() {
    return this.cancelBubble;
  }
  function Re() {
    return this.defaultPrevented;
  }
  s.event = function(e2) {
    return Ne && (e2 = Ne(e2)), e2.persist = xe, e2.isPropagationStopped = Te, e2.isDefaultPrevented = Re, e2.nativeEvent = e2;
  };
  var qe;
  var Le = { configurable: true, get: function() {
    return this.class;
  } };
  var Me = s.vnode;
  s.vnode = function(e2) {
    var t2 = e2.type, n2 = e2.props, r2 = n2;
    if (typeof t2 == "string") {
      for (var o2 in r2 = {}, n2) {
        var i2 = n2[o2];
        o2 === "value" && "defaultValue" in n2 && i2 == null || (o2 === "defaultValue" && "value" in n2 && n2.value == null ? o2 = "value" : o2 === "download" && i2 === true ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !Ae(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : ke.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i2 === null && (i2 = void 0), r2[o2] = i2);
      }
      t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = A(n2.children).forEach(function(e3) {
        e3.props.selected = r2.value.indexOf(e3.props.value) != -1;
      })), t2 == "select" && r2.defaultValue != null && (r2.value = A(n2.children).forEach(function(e3) {
        e3.props.selected = r2.multiple ? r2.defaultValue.indexOf(e3.props.value) != -1 : r2.defaultValue == e3.props.value;
      })), e2.props = r2;
    }
    t2 && n2.class != n2.className && (Le.enumerable = "className" in n2, n2.className != null && (r2.class = n2.className), Object.defineProperty(r2, "className", Le)), e2.$$typeof = De, Me && Me(e2);
  };
  var He = s.__r;
  s.__r = function(e2) {
    He && He(e2), qe = e2.__c;
  };
  var Ue = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return qe.__n[e2.__c].props.value;
  } } } };
  (typeof performance == "undefined" ? "undefined" : n(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
  function Fe(e2) {
    return !!e2 && e2.$$typeof === De;
  }
  var Be = { useState: ne, useReducer: re, useEffect: oe, useLayoutEffect: ie, useRef: function(e2) {
    return $ = 5, ce(function() {
      return { current: e2 };
    }, []);
  }, useImperativeHandle: function(e2, t2, n2) {
    $ = 6, ie(function() {
      typeof e2 == "function" ? e2(t2()) : e2 && (e2.current = t2());
    }, n2 == null ? n2 : n2.concat(e2));
  }, useMemo: ce, useCallback: function(e2, t2) {
    return $ = 8, ce(function() {
      return e2;
    }, t2);
  }, useContext: function(e2) {
    var t2 = z.context[e2.__c], n2 = te(W++, 9);
    return n2.__c = e2, t2 ? (n2.__ == null && (n2.__ = true, t2.sub(z)), t2.props.value) : e2.__;
  }, useDebugValue: function(e2, t2) {
    s.useDebugValue && s.useDebugValue(t2 ? t2(e2) : e2);
  }, version: "16.8.0", Children: ge, render: Ce, hydrate: function(e2, t2, n2) {
    return V(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (B(null, e2), true);
  }, createPortal: Ie, createElement: _, createContext: function(e2, t2) {
    var n2 = { __c: t2 = "__cC" + v++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n3, r2;
      return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n3.some(P);
      }, this.sub = function(e4) {
        n3.push(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e2) {
    return _.bind(null, e2);
  }, cloneElement: function(e2) {
    return Fe(e2) ? K.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: S, isValidElement: Fe, findDOMNode: function(e2) {
    return e2 && (e2.base || e2.nodeType === 1 && e2) || null;
  }, Component: w, PureComponent: de, memo: function(e2, t2) {
    function n2(e3) {
      var n3 = this.props.ref, r3 = n3 == e3.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : ve(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, _(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3, r2) {
      var o2 = me({}, t3);
      return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && (n(r2) != "object" || "current" in r2) ? r2 : null);
    }
    return t2.$$typeof = he, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: S, Suspense: Oe, SuspenseList: we, lazy: function(e2) {
    var t2, n2, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n2 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2)
        throw r2;
      if (!n2)
        throw t2;
      return _(n2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue };
  function Ve() {
    return Be.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Be.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function Ke() {
    return Be.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, Be.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var We = ["translations"];
  function ze() {
    return ze = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ze.apply(this, arguments);
  }
  function Je(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 == null)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || n2.return == null || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return $e(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return $e(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function $e(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Qe(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var Ze = Be.forwardRef(function(e2, t2) {
    var n2 = e2.translations, r2 = n2 === void 0 ? {} : n2, o2 = Qe(e2, We), i2 = r2.buttonText, c2 = i2 === void 0 ? "Search" : i2, a2 = r2.buttonAriaLabel, u2 = a2 === void 0 ? "Search" : a2, l2 = Je(ne(null), 2), s2 = l2[0], f2 = l2[1];
    return oe(function() {
      typeof navigator != "undefined" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2("Ctrl"));
    }, []), Be.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Be.createElement("span", { className: "DocSearch-Button-Container" }, Be.createElement(Ke, null), Be.createElement("span", { className: "DocSearch-Button-Placeholder" }, c2)), Be.createElement("span", { className: "DocSearch-Button-Keys" }, s2 !== null && Be.createElement(Be.Fragment, null, Be.createElement(Ye, { reactsToKey: s2 === "Ctrl" ? "Ctrl" : "Meta" }, s2 === "Ctrl" ? Be.createElement(Ve, null) : s2), Be.createElement(Ye, { reactsToKey: "k" }, "K"))));
  });
  function Ye(e2) {
    var t2 = e2.reactsToKey, n2 = e2.children, r2 = Je(ne(false), 2), o2 = r2[0], i2 = r2[1];
    return oe(function() {
      if (t2)
        return window.addEventListener("keydown", e3), window.addEventListener("keyup", n3), function() {
          window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n3);
        };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n3(e4) {
        e4.key !== t2 && e4.key !== "Meta" || i2(false);
      }
    }, [t2]), Be.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n2);
  }
  function Ge(e2, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
        o2[i2] = arguments[i2];
      n2 && clearTimeout(n2), n2 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function Xe(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 != null) {
        var r2, o2, i2, c2, a2 = [], u2 = true, l2 = false;
        try {
          if (i2 = (n2 = n2.call(e3)).next, t3 === 0) {
            if (Object(n2) !== n2)
              return;
            u2 = false;
          } else
            for (; !(u2 = (r2 = i2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); u2 = true)
              ;
        } catch (e4) {
          l2 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && n2.return != null && (c2 = n2.return(), Object(c2) !== c2))
              return;
          } finally {
            if (l2)
              throw o2;
          }
        }
        return a2;
      }
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return et(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return et(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function et(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function tt(e2) {
    return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, tt(e2);
  }
  function nt(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set();
    if (!e2 || tt(e2) !== "object")
      return e2;
    if (t2.has(e2))
      return "[Circular]";
    var n2 = t2.add(e2);
    return Array.isArray(e2) ? e2.map(function(e3) {
      return nt(e3, n2);
    }) : Object.fromEntries(Object.entries(e2).map(function(e3) {
      var t3 = Xe(e3, 2);
      return [t3[0], nt(t3[1], n2)];
    }));
  }
  function rt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var ot = 0;
  function it(e2) {
    return e2.collections.length === 0 ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function ct(e2, t2) {
    if (!e2)
      throw new Error("[Autocomplete] ".concat(typeof t2 == "function" ? t2() : t2));
  }
  function at(e2) {
    return e2 !== Object(e2);
  }
  function ut(e2, t2) {
    if (e2 === t2)
      return true;
    if (at(e2) || at(t2) || typeof e2 == "function" || typeof t2 == "function")
      return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length)
      return false;
    for (var n2 = 0, r2 = Object.keys(e2); n2 < r2.length; n2++) {
      var o2 = r2[n2];
      if (!(o2 in t2))
        return false;
      if (!ut(e2[o2], t2[o2]))
        return false;
    }
    return true;
  }
  var lt = function() {
  };
  var st = [{ segment: "autocomplete-core", version: "1.9.3" }];
  var ft = { current: {} };
  function pt(e2) {
    var t2 = e2.item, n2 = e2.items;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + n2.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function mt(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 != null) {
        var r2, o2, i2, c2, a2 = [], u2 = true, l2 = false;
        try {
          if (i2 = (n2 = n2.call(e3)).next, t3 === 0) {
            if (Object(n2) !== n2)
              return;
            u2 = false;
          } else
            for (; !(u2 = (r2 = i2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); u2 = true)
              ;
        } catch (e4) {
          l2 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && n2.return != null && (c2 = n2.return(), Object(c2) !== c2))
              return;
          } finally {
            if (l2)
              throw o2;
          }
        }
        return a2;
      }
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return vt(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return vt(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function vt(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  var dt = ["items"];
  var yt = ["items"];
  function ht(e2) {
    return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, ht(e2);
  }
  function bt(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return gt(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return gt(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return gt(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function gt(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function _t(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Ot(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function St(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Ot(Object(n2), true).forEach(function(t3) {
        wt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ot(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function wt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (ht(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (ht(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return ht(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function jt(e2) {
    for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, n2 = [], r2 = 0; r2 < e2.objectIDs.length; r2 += t2)
      n2.push(St(St({}, e2), {}, { objectIDs: e2.objectIDs.slice(r2, r2 + t2) }));
    return n2;
  }
  function Et(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n2 = _t(e3, dt);
      return St(St({}, n2), {}, { objectIDs: (t2 == null ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n2.objectIDs });
    });
  }
  function Pt(e2) {
    var t2, n2, r2, o2 = (t2 = mt((e2.version || "").split(".").map(Number), 2), n2 = t2[0], r2 = t2[1], n2 >= 3 || n2 === 2 && r2 >= 4 || n2 === 1 && r2 >= 10);
    function i2(t3, n3, r3) {
      if (o2 && r3 !== void 0) {
        var i3 = r3[0].__autocomplete_algoliaCredentials, c2 = { "X-Algolia-Application-Id": i3.appId, "X-Algolia-API-Key": i3.apiKey };
        e2.apply(void 0, [t3].concat(bt(n3), [{ headers: c2 }]));
      } else
        e2.apply(void 0, [t3].concat(bt(n3)));
    }
    return { init: function(t3, n3) {
      e2("init", { appId: t3, apiKey: n3 });
    }, setUserToken: function(t3) {
      e2("setUserToken", t3);
    }, clickedObjectIDsAfterSearch: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
        t3[n3] = arguments[n3];
      t3.length > 0 && i2("clickedObjectIDsAfterSearch", Et(t3), t3[0].items);
    }, clickedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
        t3[n3] = arguments[n3];
      t3.length > 0 && i2("clickedObjectIDs", Et(t3), t3[0].items);
    }, clickedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n3[r3] = arguments[r3];
      n3.length > 0 && e2.apply(void 0, ["clickedFilters"].concat(n3));
    }, convertedObjectIDsAfterSearch: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
        t3[n3] = arguments[n3];
      t3.length > 0 && i2("convertedObjectIDsAfterSearch", Et(t3), t3[0].items);
    }, convertedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
        t3[n3] = arguments[n3];
      t3.length > 0 && i2("convertedObjectIDs", Et(t3), t3[0].items);
    }, convertedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n3[r3] = arguments[r3];
      n3.length > 0 && e2.apply(void 0, ["convertedFilters"].concat(n3));
    }, viewedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
        t3[n3] = arguments[n3];
      t3.length > 0 && t3.reduce(function(e4, t4) {
        var n4 = t4.items, r3 = _t(t4, yt);
        return [].concat(bt(e4), bt(jt(St(St({}, r3), {}, { objectIDs: (n4 == null ? void 0 : n4.map(function(e5) {
          return e5.objectID;
        })) || r3.objectIDs })).map(function(e5) {
          return { items: n4, payload: e5 };
        })));
      }, []).forEach(function(e4) {
        var t4 = e4.items;
        return i2("viewedObjectIDs", [e4.payload], t4);
      });
    }, viewedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n3[r3] = arguments[r3];
      n3.length > 0 && e2.apply(void 0, ["viewedFilters"].concat(n3));
    } };
  }
  function It(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n2;
      return e3[t3.__autocomplete_indexName] = ((n2 = e3[t3.__autocomplete_indexName]) !== null && n2 !== void 0 ? n2 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function Dt(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function kt(e2) {
    return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, kt(e2);
  }
  function At(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return Ct(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return Ct(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Ct(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ct(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Nt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function xt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Nt(Object(n2), true).forEach(function(t3) {
        Tt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Nt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Tt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (kt(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (kt(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return kt(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var Rt = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js");
  var qt = Ge(function(e2) {
    var t2 = e2.onItemsChange, n2 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: It({ items: n2 }).map(function(e3) {
      return xt({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function Lt(e2) {
    var t2 = function(e3) {
      return xt({ onItemsChange: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.viewedObjectIDs.apply(t3, At(n3.map(function(e5) {
          return xt(xt({}, e5), {}, { algoliaSource: [].concat(At(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.clickedObjectIDsAfterSearch.apply(t3, At(n3.map(function(e5) {
          return xt(xt({}, e5), {}, { algoliaSource: [].concat(At(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onActive: lt }, e3);
    }(e2), n2 = t2.insightsClient, r2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, c2 = n2;
    n2 || function(e3) {
      if (typeof window != "undefined")
        e3({ window });
    }(function(e3) {
      var t3 = e3.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
      typeof n3 == "string" && (c2 = t3[n3]), c2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
        t3[n3].queue || (t3[n3].queue = []);
        for (var e4 = arguments.length, r3 = new Array(e4), o3 = 0; o3 < e4; o3++)
          r3[o3] = arguments[o3];
        t3[n3].queue.push(r3);
      }), t3[n3].version = "2.6.0", c2 = t3[n3], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n4 = e4.document.createElement("script");
          n4.async = true, n4.src = Rt, n4.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n4);
        } catch (e5) {
          console.error(t4);
        }
      }(t3));
    });
    var a2 = Pt(c2), u2 = { current: [] }, l2 = Ge(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce(function(e4, t4) {
          return [].concat(At(e4), At(t4.items));
        }, []).filter(Dt);
        ut(u2.current.map(function(e4) {
          return e4.objectID;
        }), n3.map(function(e4) {
          return e4.objectID;
        })) || (u2.current = n3, n3.length > 0 && qt({ onItemsChange: r2, items: n3, insights: a2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n3 = e3.onSelect, r3 = e3.onActive;
      c2("addAlgoliaAgent", "insights-plugin"), t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: true }, insights: a2 } }), n3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        Dt(t4) && o2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [xt({ eventName: "Item Selected" }, pt({ item: t4, items: u2.current }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        Dt(t4) && i2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [xt({ eventName: "Item Active" }, pt({ item: t4, items: u2.current }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      l2({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function Mt(e2) {
    (function(e3, t2) {
      if (!e3) {
        var n2 = t2.trim();
        ft.current[n2] || (ft.current[n2] = true, console.warn("[Autocomplete] ".concat(n2)));
      }
    })(!e2.debug, "The `debug` option is meant for development debugging and should not be used in production.");
  }
  function Ht(e2, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return Ht(e2.then(Ft(t3, n2, e2), Ft(r2, n2, e2)), n2);
    }, catch: function(t3) {
      return Ht(e2.catch(Ft(t3, n2, e2)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), Ht(e2.finally(Ft(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e2)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e3 = n2.onCancelList;
      n2.onCancelList = [], e3.forEach(function(e4) {
        e4();
      });
    }, isCanceled: function() {
      return n2.isCanceled === true;
    } };
  }
  function Ut(e2) {
    return Ht(e2, { isCanceled: false, onCancelList: [] });
  }
  function Ft(e2, t2, n2) {
    return e2 ? function(n3) {
      return t2.isCanceled ? n3 : e2(n3);
    } : n2;
  }
  function Bt(e2, t2, n2, r2) {
    if (!n2)
      return null;
    if (e2 < 0 && (t2 === null || r2 !== null && t2 === 0))
      return n2 + e2;
    var o2 = (t2 === null ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n2 ? r2 === null ? null : 0 : o2;
  }
  function Vt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Kt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Vt(Object(n2), true).forEach(function(t3) {
        Wt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Vt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Wt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (zt(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (zt(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return zt(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function zt(e2) {
    return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, zt(e2);
  }
  function Jt(e2) {
    var t2 = function(e3) {
      var t3 = e3.collections.map(function(e4) {
        return e4.items.length;
      }).reduce(function(e4, t4, n3) {
        var r3 = (e4[n3 - 1] || 0) + t4;
        return e4.push(r3), e4;
      }, []).reduce(function(t4, n3) {
        return n3 <= e3.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e3.collections[t3];
    }(e2);
    if (!t2)
      return null;
    var n2 = t2.items[function(e3) {
      for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, i2 = 0; r3 === false; ) {
        var c2 = t3.collections[o2];
        if (c2 === n3) {
          r3 = true;
          break;
        }
        i2 += c2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
  }
  var $t = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Qt(e2) {
    return Qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Qt(e2);
  }
  function Zt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Yt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (Qt(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (Qt(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return Qt(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Gt(e2, t2, n2) {
    var r2, o2 = t2.initialState;
    return { getState: function() {
      return o2;
    }, dispatch: function(r3, i2) {
      var c2 = function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3] != null ? arguments[t3] : {};
          t3 % 2 ? Zt(Object(n3), true).forEach(function(t4) {
            Yt(e3, t4, n3[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Zt(Object(n3)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
          });
        }
        return e3;
      }({}, o2);
      o2 = e2(o2, { type: r3, props: t2, payload: i2 }), n2({ state: o2, prevState: c2 });
    }, pendingRequests: (r2 = [], { add: function(e3) {
      return r2.push(e3), e3.finally(function() {
        r2 = r2.filter(function(t3) {
          return t3 !== e3;
        });
      });
    }, cancelAll: function() {
      r2.forEach(function(e3) {
        return e3.cancel();
      });
    }, isEmpty: function() {
      return r2.length === 0;
    } }) };
  }
  function Xt(e2) {
    return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Xt(e2);
  }
  function en(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function tn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? en(Object(n2), true).forEach(function(t3) {
        nn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : en(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function nn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (Xt(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (Xt(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return Xt(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function rn(e2) {
    return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, rn(e2);
  }
  function on(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return cn(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return cn(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return cn(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function cn(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function an(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? an(Object(n2), true).forEach(function(t3) {
        ln(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : an(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function ln(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (rn(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (rn(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return rn(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function sn(e2, t2) {
    var n2, r2 = typeof window != "undefined" ? window : {}, o2 = e2.plugins || [];
    return un(un({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: false, environment: r2, shouldPanelOpen: function(e3) {
      return it(e3.state) > 0;
    }, reshape: function(e3) {
      return e3.sources;
    } }, e2), {}, { id: (n2 = e2.id) !== null && n2 !== void 0 ? n2 : "autocomplete-".concat(ot++), plugins: o2, initialState: un({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e2.initialState), onStateChange: function(t3) {
      var n3;
      (n3 = e2.onStateChange) === null || n3 === void 0 || n3.call(e2, t3), o2.forEach(function(e3) {
        var n4;
        return (n4 = e3.onStateChange) === null || n4 === void 0 ? void 0 : n4.call(e3, t3);
      });
    }, onSubmit: function(t3) {
      var n3;
      (n3 = e2.onSubmit) === null || n3 === void 0 || n3.call(e2, t3), o2.forEach(function(e3) {
        var n4;
        return (n4 = e3.onSubmit) === null || n4 === void 0 ? void 0 : n4.call(e3, t3);
      });
    }, onReset: function(t3) {
      var n3;
      (n3 = e2.onReset) === null || n3 === void 0 || n3.call(e2, t3), o2.forEach(function(e3) {
        var n4;
        return (n4 = e3.onReset) === null || n4 === void 0 ? void 0 : n4.call(e3, t3);
      });
    }, getSources: function(n3) {
      return Promise.all([].concat(on(o2.map(function(e3) {
        return e3.getSources;
      })), [e2.getSources]).filter(Boolean).map(function(e3) {
        return function(e4, t3) {
          var n4 = [];
          return Promise.resolve(e4(t3)).then(function(e5) {
            return ct(Array.isArray(e5), function() {
              return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(zt(e5)), ":\n\n").concat(JSON.stringify(nt(e5), null, 2));
            }), Promise.all(e5.filter(function(e6) {
              return Boolean(e6);
            }).map(function(e6) {
              if (ct(typeof e6.sourceId == "string", "A source must provide a `sourceId` string."), n4.includes(e6.sourceId))
                throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e6.sourceId), " is not unique."));
              n4.push(e6.sourceId);
              var t4 = { getItemInputValue: function(e7) {
                return e7.state.query;
              }, getItemUrl: function() {
              }, onSelect: function(e7) {
                (0, e7.setIsOpen)(false);
              }, onActive: lt, onResolve: lt };
              Object.keys(t4).forEach(function(e7) {
                t4[e7].__default = true;
              });
              var r3 = Kt(Kt({}, t4), e6);
              return Promise.resolve(r3);
            }));
          });
        }(e3, n3);
      })).then(function(e3) {
        return rt(e3);
      }).then(function(e3) {
        return e3.map(function(e4) {
          return un(un({}, e4), {}, { onSelect: function(n4) {
            e4.onSelect(n4), t2.forEach(function(e5) {
              var t3;
              return (t3 = e5.onSelect) === null || t3 === void 0 ? void 0 : t3.call(e5, n4);
            });
          }, onActive: function(n4) {
            e4.onActive(n4), t2.forEach(function(e5) {
              var t3;
              return (t3 = e5.onActive) === null || t3 === void 0 ? void 0 : t3.call(e5, n4);
            });
          }, onResolve: function(n4) {
            e4.onResolve(n4), t2.forEach(function(e5) {
              var t3;
              return (t3 = e5.onResolve) === null || t3 === void 0 ? void 0 : t3.call(e5, n4);
            });
          } });
        });
      });
    }, navigator: un({ navigate: function(e3) {
      var t3 = e3.itemUrl;
      r2.location.assign(t3);
    }, navigateNewTab: function(e3) {
      var t3 = e3.itemUrl, n3 = r2.open(t3, "_blank", "noopener");
      n3 == null || n3.focus();
    }, navigateNewWindow: function(e3) {
      var t3 = e3.itemUrl;
      r2.open(t3, "_blank", "noopener");
    } }, e2.navigator) });
  }
  function fn(e2) {
    return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, fn(e2);
  }
  function pn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function mn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? pn(Object(n2), true).forEach(function(t3) {
        vn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : pn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function vn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (fn(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (fn(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return fn(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function dn(e2) {
    return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, dn(e2);
  }
  function yn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function hn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? yn(Object(n2), true).forEach(function(t3) {
        bn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : yn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function bn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (dn(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (dn(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return dn(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function gn(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return _n(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return _n(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _n(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _n(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function On(e2) {
    return Boolean(e2.execute);
  }
  function Sn(e2, t2, n2) {
    if (o2 = e2, Boolean(o2 == null ? void 0 : o2.execute)) {
      var r2 = e2.requesterId === "algolia" ? Object.assign.apply(Object, [{}].concat(gn(Object.keys(n2.context).map(function(e3) {
        var t3;
        return (t3 = n2.context[e3]) === null || t3 === void 0 ? void 0 : t3.__algoliaSearchParameters;
      })))) : {};
      return hn(hn({}, e2), {}, { requests: e2.queries.map(function(n3) {
        return { query: e2.requesterId === "algolia" ? hn(hn({}, n3), {}, { params: hn(hn({}, r2), n3.params) }) : n3, sourceId: t2, transformResponse: e2.transformResponse };
      }) });
    }
    var o2;
    return { items: e2, sourceId: t2 };
  }
  function wn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!On(t3))
        return e3.push(t3), e3;
      var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, c2 = e3.find(function(e4) {
        return On(t3) && On(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
      });
      if (c2) {
        var a2;
        (a2 = c2.items).push.apply(a2, gn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n2 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!On(e3))
        return Promise.resolve(e3);
      var t3 = e3, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return rt(e3);
    });
  }
  function jn(e2, t2, n2) {
    return t2.map(function(t3) {
      var r2, o2 = e2.filter(function(e3) {
        return e3.sourceId === t3.sourceId;
      }), i2 = o2.map(function(e3) {
        return e3.items;
      }), c2 = o2[0].transformResponse, a2 = c2 ? c2({ results: r2 = i2, hits: r2.map(function(e3) {
        return e3.hits;
      }).filter(Boolean), facetHits: r2.map(function(e3) {
        var t4;
        return (t4 = e3.facetHits) === null || t4 === void 0 ? void 0 : t4.map(function(e4) {
          return { label: e4.value, count: e4.count, _highlightResult: { label: { value: e4.highlighted } } };
        });
      }).filter(Boolean) }) : i2;
      return t3.onResolve({ source: t3, results: i2, items: a2, state: n2.getState() }), ct(Array.isArray(a2), function() {
        return 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(dn(a2)), ":\n\n").concat(JSON.stringify(nt(a2), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
      }), ct(a2.every(Boolean), 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t3, items: a2 };
    });
  }
  function En(e2) {
    return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, En(e2);
  }
  var Pn = ["event", "nextState", "props", "query", "refresh", "store"];
  function In(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Dn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? In(Object(n2), true).forEach(function(t3) {
        kn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : In(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function kn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (En(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (En(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return En(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function An(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var Cn;
  var Nn;
  var xn;
  var Tn = null;
  var Rn = (Cn = -1, Nn = -1, xn = void 0, function(e2) {
    var t2 = ++Cn;
    return Promise.resolve(e2).then(function(e3) {
      return xn && t2 < Nn ? xn : (Nn = t2, xn = e3, e3);
    });
  });
  function qn(e2) {
    var t2 = e2.event, n2 = e2.nextState, r2 = n2 === void 0 ? {} : n2, o2 = e2.props, i2 = e2.query, c2 = e2.refresh, a2 = e2.store, u2 = An(e2, Pn);
    Tn && o2.environment.clearTimeout(Tn);
    var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && o2.openOnFocus === false) {
      var v2, d2 = a2.getState().collections.map(function(e3) {
        return Dn(Dn({}, e3), {}, { items: [] });
      });
      m2("idle"), l2(d2), s2((v2 = r2.isOpen) !== null && v2 !== void 0 ? v2 : o2.shouldPanelOpen({ state: a2.getState() }));
      var y2 = Ut(Rn(d2).then(function() {
        return Promise.resolve();
      }));
      return a2.pendingRequests.add(y2);
    }
    m2("loading"), Tn = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var h2 = Ut(Rn(o2.getSources(Dn({ query: i2, refresh: c2, state: a2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(Dn({ query: i2, refresh: c2, state: a2.getState() }, u2))).then(function(t3) {
          return Sn(t3, e4.sourceId, a2.getState());
        });
      })).then(wn).then(function(t3) {
        return jn(t3, e3, a2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.collections, n3 = e5.props, r3 = e5.state, o3 = t3.reduce(function(e6, t4) {
            return mn(mn({}, e6), {}, vn({}, t4.source.sourceId, mn(mn({}, t4.source), {}, { getItems: function() {
              return rt(t4.items);
            } })));
          }, {}), i3 = n3.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: o3, state: r3 }).sourcesBySourceId;
          return rt(n3.reshape({ sourcesBySourceId: i3, sources: Object.values(i3), state: r3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: a2.getState() });
      });
    }))).then(function(e3) {
      var n3;
      m2("idle"), l2(e3);
      var f3 = o2.shouldPanelOpen({ state: a2.getState() });
      s2((n3 = r2.isOpen) !== null && n3 !== void 0 ? n3 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = Jt(a2.getState());
      if (a2.getState().activeItemId !== null && p3) {
        var v3 = p3.item, d3 = p3.itemInputValue, y3 = p3.itemUrl, h3 = p3.source;
        h3.onActive(Dn({ event: t2, item: v3, itemInputValue: d3, itemUrl: y3, refresh: c2, source: h3, state: a2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), Tn && o2.environment.clearTimeout(Tn);
    });
    return a2.pendingRequests.add(h2);
  }
  function Ln(e2) {
    return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Ln(e2);
  }
  var Mn = ["event", "props", "refresh", "store"];
  function Hn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Hn(Object(n2), true).forEach(function(t3) {
        Fn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Hn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Fn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (Ln(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (Ln(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return Ln(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Bn(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Vn(e2) {
    return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Vn(e2);
  }
  var Kn = ["props", "refresh", "store"];
  var Wn = ["inputElement", "formElement", "panelElement"];
  var zn = ["inputElement"];
  var Jn = ["inputElement", "maxLength"];
  var $n = ["sourceIndex"];
  var Qn = ["sourceIndex"];
  var Zn = ["item", "source", "sourceIndex"];
  function Yn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Gn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Yn(Object(n2), true).forEach(function(t3) {
        Xn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Yn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Xn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (Vn(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (Vn(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return Vn(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function er(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function tr(e2) {
    var t2 = e2.props, n2 = e2.refresh, r2 = e2.store, o2 = er(e2, Kn), i2 = function(e3, t3) {
      return t3 !== void 0 ? "".concat(e3, "-").concat(t3) : e3;
    };
    return { getEnvironmentProps: function(e3) {
      var n3 = e3.inputElement, o3 = e3.formElement, i3 = e3.panelElement;
      function c2(e4) {
        !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e4.target === n3 || [o3, i3].some(function(t3) {
          return n4 = t3, r3 = e4.target, n4 === r3 || n4.contains(r3);
          var n4, r3;
        }) === false && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
      }
      return Gn({ onTouchStart: c2, onMouseDown: c2, onTouchMove: function(e4) {
        r2.getState().isOpen !== false && n3 === t2.environment.document.activeElement && e4.target !== n3 && n3.blur();
      } }, er(e3, Wn));
    }, getRootProps: function(e3) {
      return Gn({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
    }, getFormProps: function(e3) {
      e3.inputElement;
      return Gn({ action: "", noValidate: true, role: "search", onSubmit: function(i3) {
        var c2;
        i3.preventDefault(), t2.onSubmit(Gn({ event: i3, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("submit", null), (c2 = e3.inputElement) === null || c2 === void 0 || c2.blur();
      }, onReset: function(i3) {
        var c2;
        i3.preventDefault(), t2.onReset(Gn({ event: i3, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("reset", null), (c2 = e3.inputElement) === null || c2 === void 0 || c2.focus();
      } }, er(e3, zn));
    }, getLabelProps: function(e3) {
      var n3 = e3 || {}, r3 = n3.sourceIndex, o3 = er(n3, $n);
      return Gn({ htmlFor: "".concat(i2(t2.id, r3), "-input"), id: "".concat(i2(t2.id, r3), "-label") }, o3);
    }, getInputProps: function(e3) {
      var i3;
      function c2(e4) {
        (t2.openOnFocus || Boolean(r2.getState().query)) && qn(Gn({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, o2)), r2.dispatch("focus", null);
      }
      var a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l2 = u2 === void 0 ? 512 : u2, s2 = er(a2, Jn), f2 = Jt(r2.getState()), p2 = function(e4) {
        return Boolean(e4 && e4.match($t));
      }(((i3 = t2.environment.navigator) === null || i3 === void 0 ? void 0 : i3.userAgent) || ""), m2 = f2 != null && f2.itemUrl && !p2 ? "go" : "search";
      return Gn({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && r2.getState().activeItemId !== null ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: l2, type: "search", onChange: function(e4) {
        qn(Gn({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, l2), refresh: n2, store: r2 }, o2));
      }, onKeyDown: function(e4) {
        !function(e5) {
          var t3 = e5.event, n3 = e5.props, r3 = e5.refresh, o3 = e5.store, i4 = Bn(e5, Mn);
          if (t3.key === "ArrowUp" || t3.key === "ArrowDown") {
            var c3 = function() {
              var e6 = n3.environment.document.getElementById("".concat(n3.id, "-item-").concat(o3.getState().activeItemId));
              e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
            }, a3 = function() {
              var e6 = Jt(o3.getState());
              if (o3.getState().activeItemId !== null && e6) {
                var n4 = e6.item, c4 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
                u4.onActive(Un({ event: t3, item: n4, itemInputValue: c4, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, i4));
              }
            };
            t3.preventDefault(), o3.getState().isOpen === false && (n3.openOnFocus || Boolean(o3.getState().query)) ? qn(Un({ event: t3, props: n3, query: o3.getState().query, refresh: r3, store: o3 }, i4)).then(function() {
              o3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), a3(), setTimeout(c3, 0);
            }) : (o3.dispatch(t3.key, {}), a3(), c3());
          } else if (t3.key === "Escape")
            t3.preventDefault(), o3.dispatch(t3.key, null), o3.pendingRequests.cancelAll();
          else if (t3.key === "Tab")
            o3.dispatch("blur", null), o3.pendingRequests.cancelAll();
          else if (t3.key === "Enter") {
            if (o3.getState().activeItemId === null || o3.getState().collections.every(function(e6) {
              return e6.items.length === 0;
            }))
              return void (n3.debug || o3.pendingRequests.cancelAll());
            t3.preventDefault();
            var u3 = Jt(o3.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
            if (t3.metaKey || t3.ctrlKey)
              f3 !== void 0 && (p3.onSelect(Un({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n3.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o3.getState() }));
            else if (t3.shiftKey)
              f3 !== void 0 && (p3.onSelect(Un({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n3.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o3.getState() }));
            else if (t3.altKey)
              ;
            else {
              if (f3 !== void 0)
                return p3.onSelect(Un({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), void n3.navigator.navigate({ itemUrl: f3, item: l3, state: o3.getState() });
              qn(Un({ event: t3, nextState: { isOpen: false }, props: n3, query: s3, refresh: r3, store: o3 }, i4)).then(function() {
                p3.onSelect(Un({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4));
              });
            }
          }
        }(Gn({ event: e4, props: t2, refresh: n2, store: r2 }, o2));
      }, onFocus: c2, onBlur: lt, onClick: function(n3) {
        e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || c2(n3);
      } }, s2);
    }, getPanelProps: function(e3) {
      return Gn({ onMouseDown: function(e4) {
        e4.preventDefault();
      }, onMouseLeave: function() {
        r2.dispatch("mouseleave", null);
      } }, e3);
    }, getListProps: function(e3) {
      var n3 = e3 || {}, r3 = n3.sourceIndex, o3 = er(n3, Qn);
      return Gn({ role: "listbox", "aria-labelledby": "".concat(i2(t2.id, r3), "-label"), id: "".concat(i2(t2.id, r3), "-list") }, o3);
    }, getItemProps: function(e3) {
      var c2 = e3.item, a2 = e3.source, u2 = e3.sourceIndex, l2 = er(e3, Zn);
      return Gn({ id: "".concat(i2(t2.id, u2), "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
        if (c2.__autocomplete_id !== r2.getState().activeItemId) {
          r2.dispatch("mousemove", c2.__autocomplete_id);
          var t3 = Jt(r2.getState());
          if (r2.getState().activeItemId !== null && t3) {
            var i3 = t3.item, a3 = t3.itemInputValue, u3 = t3.itemUrl, l3 = t3.source;
            l3.onActive(Gn({ event: e4, item: i3, itemInputValue: a3, itemUrl: u3, refresh: n2, source: l3, state: r2.getState() }, o2));
          }
        }
      }, onMouseDown: function(e4) {
        e4.preventDefault();
      }, onClick: function(e4) {
        var i3 = a2.getItemInputValue({ item: c2, state: r2.getState() }), u3 = a2.getItemUrl({ item: c2, state: r2.getState() });
        (u3 ? Promise.resolve() : qn(Gn({ event: e4, nextState: { isOpen: false }, props: t2, query: i3, refresh: n2, store: r2 }, o2))).then(function() {
          a2.onSelect(Gn({ event: e4, item: c2, itemInputValue: i3, itemUrl: u3, refresh: n2, source: a2, state: r2.getState() }, o2));
        });
      } }, l2);
    } };
  }
  function nr(e2) {
    return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, nr(e2);
  }
  function rr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function or(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? rr(Object(n2), true).forEach(function(t3) {
        ir(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : rr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function ir(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (nr(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (nr(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return nr(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function cr(e2) {
    var t2, n2, r2, o2, i2 = e2.plugins, c2 = e2.options, a2 = (t2 = (((n2 = c2.__autocomplete_metadata) === null || n2 === void 0 ? void 0 : n2.userAgents) || [])[0]) === null || t2 === void 0 ? void 0 : t2.segment, u2 = a2 ? ir({}, a2, Object.keys(((r2 = c2.__autocomplete_metadata) === null || r2 === void 0 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: or({ "autocomplete-core": Object.keys(c2) }, u2), ua: st.concat(((o2 = c2.__autocomplete_metadata) === null || o2 === void 0 ? void 0 : o2.userAgents) || []) };
  }
  function ar(e2) {
    var t2, n2 = e2.state;
    return n2.isOpen === false || n2.activeItemId === null ? null : ((t2 = Jt(n2)) === null || t2 === void 0 ? void 0 : t2.itemInputValue) || null;
  }
  function ur(e2) {
    return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, ur(e2);
  }
  function lr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function sr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? lr(Object(n2), true).forEach(function(t3) {
        fr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : lr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function fr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (ur(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (ur(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return ur(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var pr = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return sr(sr({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return sr(sr({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return sr(sr({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return sr(sr({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return sr(sr({}, e2), {}, { status: t2.payload });
      case "setContext":
        return sr(sr({}, e2), {}, { context: sr(sr({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n2 = sr(sr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Bt(1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return sr(sr({}, n2), {}, { completion: ar({ state: n2 }) });
      case "ArrowUp":
        var r2 = sr(sr({}, e2), {}, { activeItemId: Bt(-1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return sr(sr({}, r2), {}, { completion: ar({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? sr(sr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : sr(sr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return sr(sr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return sr(sr({}, e2), {}, { activeItemId: t2.props.openOnFocus === true ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
      case "focus":
        return sr(sr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : sr(sr({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return sr(sr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return ct(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
    }
  };
  function mr(e2) {
    return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, mr(e2);
  }
  function vr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function dr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? vr(Object(n2), true).forEach(function(t3) {
        yr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : vr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function yr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if (mr(e4) !== "object" || e4 === null)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (n3 !== void 0) {
          var r2 = n3.call(e4, t4 || "default");
          if (mr(r2) !== "object")
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t4 === "string" ? String : Number)(e4);
      }(e3, "string");
      return mr(t3) === "symbol" ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function hr(e2) {
    Mt(e2);
    var t2 = [], n2 = sn(e2, t2), r2 = Gt(pr, n2, function(e3) {
      var t3 = e3.prevState, r3 = e3.state;
      n2.onStateChange(dr({ prevState: t3, state: r3, refresh: c2, navigator: n2.navigator }, o2));
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n3 = 0, r3 = e4.map(function(e5) {
          return tn(tn({}, e5), {}, { items: rt(e5.items).map(function(e6) {
            return tn(tn({}, e6), {}, { __autocomplete_id: n3++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e4) {
        t3.dispatch("setIsOpen", e4);
      }, setStatus: function(e4) {
        t3.dispatch("setStatus", e4);
      }, setContext: function(e4) {
        t3.dispatch("setContext", e4);
      } };
    }({ store: r2 }), i2 = tr(dr({ props: n2, refresh: c2, store: r2, navigator: n2.navigator }, o2));
    function c2() {
      return qn(dr({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: c2, store: r2 }, o2));
    }
    if (e2.insights && !n2.plugins.some(function(e3) {
      return e3.name === "aa.algoliaInsightsPlugin";
    })) {
      var a2 = typeof e2.insights == "boolean" ? {} : e2.insights;
      n2.plugins.push(Lt(a2));
    }
    return n2.plugins.forEach(function(e3) {
      var r3;
      return (r3 = e3.subscribe) === null || r3 === void 0 ? void 0 : r3.call(e3, dr(dr({}, o2), {}, { navigator: n2.navigator, refresh: c2, onSelect: function(e4) {
        t2.push({ onSelect: e4 });
      }, onActive: function(e4) {
        t2.push({ onActive: e4 });
      }, onResolve: function(e4) {
        t2.push({ onResolve: e4 });
      } }));
    }), function(e3) {
      var t3, n3, r3 = e3.metadata, o3 = e3.environment;
      if ((t3 = o3.navigator) === null || t3 === void 0 || (n3 = t3.userAgent) === null || n3 === void 0 ? void 0 : n3.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), c3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), c3.appendChild(i3);
        }, 0);
      }
    }({ metadata: cr({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), dr(dr({ refresh: c2, navigator: n2.navigator }, i2), o2);
  }
  function br(e2) {
    var t2 = e2.translations, n2 = (t2 === void 0 ? {} : t2).searchByText, r2 = n2 === void 0 ? "Search by" : n2;
    return Be.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Be.createElement("span", { className: "DocSearch-Label" }, r2), Be.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Be.createElement("defs", null, Be.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Be.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Be.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Be.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Be.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Be.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function gr(e2) {
    return Be.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Be.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function _r(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = n2.selectText, o2 = r2 === void 0 ? "to select" : r2, i2 = n2.selectKeyAriaLabel, c2 = i2 === void 0 ? "Enter key" : i2, a2 = n2.navigateText, u2 = a2 === void 0 ? "to navigate" : a2, l2 = n2.navigateUpKeyAriaLabel, s2 = l2 === void 0 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = f2 === void 0 ? "Arrow down" : f2, m2 = n2.closeText, v2 = m2 === void 0 ? "to close" : m2, d2 = n2.closeKeyAriaLabel, y2 = d2 === void 0 ? "Escape key" : d2, h2 = n2.searchByText, b2 = h2 === void 0 ? "Search by" : h2;
    return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Logo" }, Be.createElement(br, { translations: { searchByText: b2 } })), Be.createElement("ul", { className: "DocSearch-Commands" }, Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: c2 }, Be.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Be.createElement("span", { className: "DocSearch-Label" }, o2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: p2 }, Be.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: s2 }, Be.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Be.createElement("span", { className: "DocSearch-Label" }, u2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: y2 }, Be.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Be.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function Or(e2) {
    var t2 = e2.hit, n2 = e2.children;
    return Be.createElement("a", { href: t2.url }, n2);
  }
  function Sr() {
    return Be.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Be.createElement("g", { fill: "none", fillRule: "evenodd" }, Be.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Be.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Be.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Be.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function wr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Be.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function jr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Er() {
    return Be.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Be.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Pr = function() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Ir(e2) {
    switch (e2.type) {
      case "lvl1":
        return Be.createElement(Pr, null);
      case "content":
        return Be.createElement(kr, null);
      default:
        return Be.createElement(Dr, null);
    }
  }
  function Dr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function kr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Ar() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Cr() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function Nr() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function xr(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = n2.titleText, o2 = r2 === void 0 ? "Unable to fetch results" : r2, i2 = n2.helpText, c2 = i2 === void 0 ? "You might want to check your network connection." : i2;
    return Be.createElement("div", { className: "DocSearch-ErrorScreen" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Cr, null)), Be.createElement("p", { className: "DocSearch-Title" }, o2), Be.createElement("p", { className: "DocSearch-Help" }, c2));
  }
  var Tr = ["translations"];
  function Rr(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return qr(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return qr(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return qr(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function qr(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Lr(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Mr(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = Lr(e2, Tr), o2 = n2.noResultsText, i2 = o2 === void 0 ? "No results for" : o2, c2 = n2.suggestedQueryText, a2 = c2 === void 0 ? "Try searching for" : c2, u2 = n2.reportMissingResultsText, l2 = u2 === void 0 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = s2 === void 0 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
    return Be.createElement("div", { className: "DocSearch-NoResults" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Nr, null)), Be.createElement("p", { className: "DocSearch-Title" }, i2, ' "', Be.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Be.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Be.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Be.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(Rr(e3), [Be.createElement("li", { key: t3 }, Be.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && Be.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), Be.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var Hr = ["hit", "attribute", "tagName"];
  function Ur(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Fr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? Ur(Object(n2), true).forEach(function(t3) {
        Br(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ur(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Br(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Vr(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Kr(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return e3 != null && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function Wr(e2) {
    var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
    return _(r2 === void 0 ? "span" : r2, Fr(Fr({}, Vr(e2, Hr)), {}, { dangerouslySetInnerHTML: { __html: Kr(t2, "_snippetResult.".concat(n2, ".value")) || Kr(t2, n2) } }));
  }
  function zr(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 == null)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || n2.return == null || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return Jr(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Jr(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Jr(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function $r() {
    return $r = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, $r.apply(this, arguments);
  }
  function Qr(e2) {
    return e2.collection && e2.collection.items.length !== 0 ? Be.createElement("section", { className: "DocSearch-Hits" }, Be.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Be.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
      return Be.createElement(Zr, $r({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
    }))) : null;
  }
  function Zr(e2) {
    var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, c2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = zr(Be.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = zr(Be.useState(false), 2), m2 = p2[0], v2 = p2[1], d2 = Be.useRef(null), y2 = u2;
    return Be.createElement("li", $r({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      d2.current && d2.current();
    } }, i2({ item: t2, source: a2.source, onClick: function(e3) {
      c2(t2, e3);
    } })), Be.createElement(y2, { hit: t2 }, Be.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && t2.type === "lvl1" && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && (t2.type === "lvl2" || t2.type === "lvl3" || t2.type === "lvl4" || t2.type === "lvl5" || t2.type === "lvl6") && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), t2.type === "content" && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), d2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), d2.current = e3;
    } }))));
  }
  function Yr(e2, t2, n2) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n2 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function Gr(e2) {
    return e2;
  }
  function Xr(e2) {
    return e2.button === 1 || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function eo() {
  }
  var to = /(<mark>|<\/mark>)/g;
  var no = RegExp(to.source);
  function ro(e2) {
    var t2, n2, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult)
      return e2.hierarchy.lvl0;
    var o2 = ((r2.__docsearch_parent ? (t2 = r2.__docsearch_parent) === null || t2 === void 0 || (t2 = t2._highlightResult) === null || t2 === void 0 || (t2 = t2.hierarchy) === null || t2 === void 0 ? void 0 : t2.lvl0 : (n2 = e2._highlightResult) === null || n2 === void 0 || (n2 = n2.hierarchy) === null || n2 === void 0 ? void 0 : n2.lvl0) || {}).value;
    return o2 && no.test(o2) ? o2.replace(to, "") : o2;
  }
  function oo() {
    return oo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, oo.apply(this, arguments);
  }
  function io(e2) {
    return Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (t2.items.length === 0)
        return null;
      var n2 = ro(t2.items[0]);
      return Be.createElement(Qr, oo({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
        var n3, r2 = e3.item, o2 = e3.index;
        return Be.createElement(Be.Fragment, null, r2.__docsearch_parent && Be.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== ((n3 = t2.items[o2 + 1]) === null || n3 === void 0 ? void 0 : n3.__docsearch_parent) ? Be.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Be.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Ir, { type: r2.type })));
      }, renderAction: function() {
        return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement(Er, null));
      } }));
    }), e2.resultsFooterComponent && Be.createElement("section", { className: "DocSearch-HitsFooter" }, Be.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var co = ["translations"];
  function ao() {
    return ao = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ao.apply(this, arguments);
  }
  function uo(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function lo(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = uo(e2, co), o2 = n2.recentSearchesTitle, i2 = o2 === void 0 ? "Recent" : o2, c2 = n2.noRecentSearchesText, a2 = c2 === void 0 ? "No recent searches" : c2, u2 = n2.saveRecentSearchButtonTitle, l2 = u2 === void 0 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = s2 === void 0 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = p2 === void 0 ? "Favorite" : p2, v2 = n2.removeFavoriteSearchButtonTitle, d2 = v2 === void 0 ? "Remove this search from favorites" : v2;
    return r2.state.status === "idle" && r2.hasCollections === false ? r2.disableUserPersonalization ? null : Be.createElement("div", { className: "DocSearch-StartScreen" }, Be.createElement("p", { className: "DocSearch-Help" }, a2)) : r2.hasCollections === false ? null : Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, Be.createElement(Qr, ao({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(wr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(Ar, null))), Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(jr, null))));
    } })), Be.createElement(Qr, ao({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Ar, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runDeleteTransition;
      return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: d2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(jr, null)));
    } })));
  }
  var so = ["translations"];
  function fo() {
    return fo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, fo.apply(this, arguments);
  }
  function po(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var mo = Be.memo(function(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = po(e2, so);
    if (r2.state.status === "error")
      return Be.createElement(xr, { translations: n2 == null ? void 0 : n2.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? o2 === false ? Be.createElement(Mr, fo({}, r2, { translations: n2 == null ? void 0 : n2.noResultsScreen })) : Be.createElement(io, r2) : Be.createElement(lo, fo({}, r2, { hasCollections: o2, translations: n2 == null ? void 0 : n2.startScreen }));
  }, function(e2, t2) {
    return t2.state.status === "loading" || t2.state.status === "stalled";
  });
  var vo = ["translations"];
  function yo() {
    return yo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, yo.apply(this, arguments);
  }
  function ho(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function bo(e2) {
    var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = ho(e2, vo), o2 = n2.resetButtonTitle, i2 = o2 === void 0 ? "Clear the query" : o2, c2 = n2.resetButtonAriaLabel, a2 = c2 === void 0 ? "Clear the query" : c2, u2 = n2.cancelButtonText, l2 = u2 === void 0 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = s2 === void 0 ? "Cancel" : s2, p2 = n2.searchInputLabel, m2 = p2 === void 0 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return Be.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), Be.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), Be.createElement(Be.Fragment, null, Be.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, Be.createElement("label", yo({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Be.createElement(Ke, null), Be.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), Be.createElement("div", { className: "DocSearch-LoadingIndicator" }, Be.createElement(Sr, null)), Be.createElement("input", yo({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Be.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Be.createElement(jr, null))), Be.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
  }
  var go = ["_highlightResult", "_snippetResult"];
  function _o(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Oo(e2) {
    return function() {
      var e3 = "__TEST_KEY__";
      try {
        return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
      } catch (e4) {
        return false;
      }
    }() === false ? { setItem: function() {
    }, getItem: function() {
      return [];
    } } : { setItem: function(t2) {
      return window.localStorage.setItem(e2, JSON.stringify(t2));
    }, getItem: function() {
      var t2 = window.localStorage.getItem(e2);
      return t2 ? JSON.parse(t2) : [];
    } };
  }
  function So(e2) {
    var t2 = e2.key, n2 = e2.limit, r2 = n2 === void 0 ? 5 : n2, o2 = Oo(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, _o(t3, go)), c2 = i2.findIndex(function(e4) {
        return e4.objectID === n3.objectID;
      });
      c2 > -1 && i2.splice(c2, 1), i2.unshift(n3), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  var wo = ["facetName", "facetQuery"];
  function jo(e2) {
    var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
      return t2 === void 0 && (t2 = e2.localStorage || window.localStorage), t2;
    }, o2 = function() {
      return JSON.parse(r2().getItem(n2) || "{}");
    }, i2 = function(e3) {
      r2().setItem(n2, JSON.stringify(e3));
    }, a2 = function() {
      var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, n3 = o2(), r3 = Object.fromEntries(Object.entries(n3).filter(function(e3) {
        return c(e3, 2)[1].timestamp !== void 0;
      }));
      if (i2(r3), t3) {
        var a3 = Object.fromEntries(Object.entries(r3).filter(function(e3) {
          var n4 = c(e3, 2)[1], r4 = new Date().getTime();
          return !(n4.timestamp + t3 < r4);
        }));
        i2(a3);
      }
    };
    return { get: function(e3, t3) {
      var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        a2();
        var t4 = JSON.stringify(e3);
        return o2()[t4];
      }).then(function(e4) {
        return Promise.all([e4 ? e4.value : t3(), e4 !== void 0]);
      }).then(function(e4) {
        var t4 = c(e4, 2), r3 = t4[0], o3 = t4[1];
        return Promise.all([r3, o3 || n3.miss(r3)]);
      }).then(function(e4) {
        return c(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var i3 = o2();
        return i3[JSON.stringify(e3)] = { timestamp: new Date().getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(i3)), t3;
      });
    }, delete: function(e3) {
      return Promise.resolve().then(function() {
        var t3 = o2();
        delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n2);
      });
    } };
  }
  function Eo(e2) {
    var t2 = a(e2.caches), n2 = t2.shift();
    return n2 === void 0 ? { get: function(e3, t3) {
      var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n3.miss(e4)]);
      }).then(function(e4) {
        return c(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve(t3);
    }, delete: function(e3) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e3, r2) {
      var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n2.get(e3, r2, o2).catch(function() {
        return Eo({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n2.set(e3, r2).catch(function() {
        return Eo({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n2.delete(e3).catch(function() {
        return Eo({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return Eo({ caches: t2 }).clear();
      });
    } };
  }
  function Po() {
    var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n2);
      if (i2 in t2)
        return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var c2 = r2(), a2 = o2 && o2.miss || function() {
        return Promise.resolve();
      };
      return c2.then(function(e3) {
        return a2(e3);
      }).then(function() {
        return c2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Io(e2) {
    for (var t2 = e2.length - 1; t2 > 0; t2--) {
      var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
      e2[t2] = e2[n2], e2[n2] = r2;
    }
    return e2;
  }
  function Do(e2, t2) {
    return t2 ? (Object.keys(t2).forEach(function(n2) {
      e2[n2] = t2[n2](e2);
    }), e2) : e2;
  }
  function ko(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
      n2[r2 - 1] = arguments[r2];
    var o2 = 0;
    return e2.replace(/%s/g, function() {
      return encodeURIComponent(n2[o2++]);
    });
  }
  var Ao = { WithinQueryParameters: 0, WithinHeaders: 1 };
  function Co(e2, t2) {
    var n2 = e2 || {}, r2 = n2.data || {};
    return Object.keys(n2).forEach(function(e3) {
      ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) === -1 && (r2[e3] = n2[e3]);
    }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
  }
  var No = { Read: 1, Write: 2, Any: 3 };
  var xo = 1;
  var To = 2;
  var Ro = 3;
  function qo(e2) {
    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xo;
    return t(t({}, e2), {}, { status: n2, lastUpdate: Date.now() });
  }
  function Lo(e2) {
    return typeof e2 == "string" ? { protocol: "https", url: e2, accept: No.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || No.Any };
  }
  var Mo = "GET";
  var Ho = "POST";
  function Uo(e2, t2) {
    return Promise.all(t2.map(function(t3) {
      return e2.get(t3, function() {
        return Promise.resolve(qo(t3));
      });
    })).then(function(e3) {
      var n2 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === xo || Date.now() - e5.lastUpdate > 12e4;
        }(e4);
      }), r2 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === Ro && Date.now() - e5.lastUpdate <= 12e4;
        }(e4);
      }), o2 = [].concat(a(n2), a(r2));
      return { getTimeout: function(e4, t3) {
        return (r2.length === 0 && e4 === 0 ? 1 : r2.length + 3 + e4) * t3;
      }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
        return Lo(e4);
      }) : t2 };
    });
  }
  function Fo(e2, n2, r2, o2) {
    var i2 = [], c2 = function(e3, n3) {
      if (e3.method === Mo || e3.data === void 0 && n3.data === void 0)
        return;
      var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n3.data);
      return JSON.stringify(r3);
    }(r2, o2), u2 = function(e3, n3) {
      var r3 = t(t({}, e3.headers), n3.headers), o3 = {};
      return Object.keys(r3).forEach(function(e4) {
        var t2 = r3[e4];
        o3[e4.toLowerCase()] = t2;
      }), o3;
    }(e2, o2), l2 = r2.method, s2 = r2.method !== Mo ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t2(n3, a2) {
      var s3 = n3.pop();
      if (s3 === void 0)
        throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Wo(i2) };
      var m3 = { data: c2, headers: u2, method: l2, url: Vo(s3, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, v2 = function(e3) {
        var t3 = { request: m3, response: e3, host: s3, triesLeft: n3.length };
        return i2.push(t3), t3;
      }, d2 = { onSuccess: function(e3) {
        return function(e4) {
          try {
            return JSON.parse(e4.content);
          } catch (t3) {
            throw function(e5, t4) {
              return { name: "DeserializationError", message: e5, response: t4 };
            }(t3.message, e4);
          }
        }(e3);
      }, onRetry: function(r3) {
        var o3 = v2(r3);
        return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", zo(o3)), e2.hostsCache.set(s3, qo(s3, r3.isTimedOut ? Ro : To))]).then(function() {
          return t2(n3, a2);
        });
      }, onFail: function(e3) {
        throw v2(e3), function(e4, t3) {
          var n4 = e4.content, r3 = e4.status, o3 = n4;
          try {
            o3 = JSON.parse(n4).message;
          } catch (e5) {
          }
          return function(e5, t4, n5) {
            return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n5 };
          }(o3, r3, t3);
        }(e3, Wo(i2));
      } };
      return e2.requester.send(m3).then(function(e3) {
        return function(e4, t3) {
          return function(e5) {
            var t4 = e5.status;
            return e5.isTimedOut || function(e6) {
              var t5 = e6.isTimedOut, n4 = e6.status;
              return !t5 && ~~n4 == 0;
            }(e5) || ~~(t4 / 100) != 2 && ~~(t4 / 100) != 4;
          }(e4) ? t3.onRetry(e4) : ~~(e4.status / 100) == 2 ? t3.onSuccess(e4) : t3.onFail(e4);
        }(e3, d2);
      });
    };
    return Uo(e2.hostsCache, n2).then(function(e3) {
      return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
    });
  }
  function Bo(e2) {
    var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
      var n2 = "; ".concat(e3.segment).concat(e3.version !== void 0 ? " (".concat(e3.version, ")") : "");
      return t2.value.indexOf(n2) === -1 && (t2.value = "".concat(t2.value).concat(n2)), t2;
    } };
    return t2;
  }
  function Vo(e2, t2, n2) {
    var r2 = Ko(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat(t2.charAt(0) === "/" ? t2.substr(1) : t2);
    return r2.length && (o2 += "?".concat(r2)), o2;
  }
  function Ko(e2) {
    return Object.keys(e2).map(function(t2) {
      return ko("%s=%s", t2, (n2 = e2[t2], Object.prototype.toString.call(n2) === "[object Object]" || Object.prototype.toString.call(n2) === "[object Array]" ? JSON.stringify(e2[t2]) : e2[t2]));
      var n2;
    }).join("&");
  }
  function Wo(e2) {
    return e2.map(function(e3) {
      return zo(e3);
    });
  }
  function zo(e2) {
    var n2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n2) }) });
  }
  var Jo = function(e2) {
    var n2 = e2.appId, r2 = function(e3, t2, n3) {
      var r3 = { "x-algolia-api-key": n3, "x-algolia-application-id": t2 };
      return { headers: function() {
        return e3 === Ao.WithinHeaders ? r3 : {};
      }, queryParameters: function() {
        return e3 === Ao.WithinQueryParameters ? r3 : {};
      } };
    }(e2.authMode !== void 0 ? e2.authMode : Ao.WithinHeaders, n2, e2.apiKey), o2 = function(e3) {
      var t2 = e3.hostsCache, n3 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, i3 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t2, logger: n3, requester: r3, requestsCache: o3, responsesCache: i3, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
        return Lo(e4);
      }), read: function(e4, t3) {
        var n4 = Co(t3, f2.timeouts.read), r4 = function() {
          return Fo(f2, f2.hosts.filter(function(e5) {
            return (e5.accept & No.Read) != 0;
          }), e4, n4);
        };
        if ((n4.cacheable !== void 0 ? n4.cacheable : e4.cacheable) !== true)
          return r4();
        var o4 = { request: e4, mappedRequestOptions: n4, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
        return f2.responsesCache.get(o4, function() {
          return f2.requestsCache.get(o4, function() {
            return f2.requestsCache.set(o4, r4()).then(function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), e5]);
            }, function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
            }).then(function(e5) {
              var t4 = c(e5, 2);
              return t4[0], t4[1];
            });
          });
        }, { miss: function(e5) {
          return f2.responsesCache.set(o4, e5);
        } });
      }, write: function(e4, t3) {
        return Fo(f2, f2.hosts.filter(function(e5) {
          return (e5.accept & No.Write) != 0;
        }), e4, Co(t3, f2.timeouts.write));
      } };
      return f2;
    }(t(t({ hosts: [{ url: "".concat(n2, "-dsn.algolia.net"), accept: No.Read }, { url: "".concat(n2, ".algolia.net"), accept: No.Write }].concat(Io([{ url: "".concat(n2, "-1.algolianet.com") }, { url: "".concat(n2, "-2.algolianet.com") }, { url: "".concat(n2, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) })), i2 = { transporter: o2, appId: n2, addAlgoliaAgent: function(e3, t2) {
      o2.userAgent.add({ segment: e3, version: t2 });
    }, clearCache: function() {
      return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
      });
    } };
    return Do(i2, e2.methods);
  };
  var $o = function(e2) {
    return function(t2, n2) {
      return t2.method === Mo ? e2.transporter.read(t2, n2) : e2.transporter.write(t2, n2);
    };
  };
  var Qo = function(e2) {
    return function(t2) {
      var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
      return Do(r2, n2.methods);
    };
  };
  var Zo = function(e2) {
    return function(n2, r2) {
      var o2 = n2.map(function(e3) {
        return t(t({}, e3), {}, { params: Ko(e3.params || {}) });
      });
      return e2.transporter.read({ method: Ho, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
    };
  };
  var Yo = function(e2) {
    return function(n2, r2) {
      return Promise.all(n2.map(function(n3) {
        var o2 = n3.params, c2 = o2.facetName, a2 = o2.facetQuery, u2 = i(o2, wo);
        return Qo(e2)(n3.indexName, { methods: { searchForFacetValues: ei } }).searchForFacetValues(c2, a2, t(t({}, r2), u2));
      }));
    };
  };
  var Go = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: Ho, path: ko("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
    };
  };
  var Xo = function(e2) {
    return function(t2, n2) {
      return e2.transporter.read({ method: Ho, path: ko("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
    };
  };
  var ei = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: Ho, path: ko("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
    };
  };
  var ti = 1;
  var ni = 2;
  var ri = 3;
  function oi(e2, n2, r2) {
    var o2, i2 = { appId: e2, apiKey: n2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
      return new Promise(function(t2) {
        var n3 = new XMLHttpRequest();
        n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
          return n3.setRequestHeader(t3, e3.headers[t3]);
        });
        var r3, o3 = function(e4, r4) {
          return setTimeout(function() {
            n3.abort(), t2({ status: 0, content: r4, isTimedOut: true });
          }, 1e3 * e4);
        }, i3 = o3(e3.connectTimeout, "Connection timeout");
        n3.onreadystatechange = function() {
          n3.readyState > n3.OPENED && r3 === void 0 && (clearTimeout(i3), r3 = o3(e3.responseTimeout, "Socket timeout"));
        }, n3.onerror = function() {
          n3.status === 0 && (clearTimeout(i3), clearTimeout(r3), t2({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
        }, n3.onload = function() {
          clearTimeout(i3), clearTimeout(r3), t2({ content: n3.responseText, status: n3.status, isTimedOut: false });
        }, n3.send(e3.data);
      });
    } }, logger: (o2 = ri, { debug: function(e3, t2) {
      return ti >= o2 && console.debug(e3, t2), Promise.resolve();
    }, info: function(e3, t2) {
      return ni >= o2 && console.info(e3, t2), Promise.resolve();
    }, error: function(e3, t2) {
      return console.error(e3, t2), Promise.resolve();
    } }), responsesCache: Po(), requestsCache: Po({ serializable: false }), hostsCache: Eo({ caches: [jo({ key: "".concat("4.19.1", "-").concat(e2) }), Po()] }), userAgent: Bo("4.19.1").add({ segment: "Browser", version: "lite" }), authMode: Ao.WithinQueryParameters };
    return Jo(t(t(t({}, i2), r2), {}, { methods: { search: Zo, searchForFacetValues: Yo, multipleQueries: Zo, multipleSearchForFacetValues: Yo, customRequest: $o, initIndex: function(e3) {
      return function(t2) {
        return Qo(e3)(t2, { methods: { search: Xo, searchForFacetValues: ei, findAnswers: Go } });
      };
    } } }));
  }
  oi.version = "4.19.1";
  var ii = ["footer", "searchBox"];
  function ci() {
    return ci = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ci.apply(this, arguments);
  }
  function ai(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function ui(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] != null ? arguments[t2] : {};
      t2 % 2 ? ai(Object(n2), true).forEach(function(t3) {
        li(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ai(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function li(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function si(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 == null)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || n2.return == null || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return fi(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return fi(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function fi(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function pi(e2, t2) {
    if (e2 == null)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function mi(e2) {
    var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = o2 === void 0 ? "Search docs" : o2, c2 = e2.searchParameters, a2 = e2.maxResultsPerGroup, u2 = e2.onClose, l2 = u2 === void 0 ? eo : u2, s2 = e2.transformItems, f2 = s2 === void 0 ? Gr : s2, p2 = e2.hitComponent, m2 = p2 === void 0 ? Or : p2, v2 = e2.resultsFooterComponent, d2 = v2 === void 0 ? function() {
      return null;
    } : v2, y2 = e2.navigator, h2 = e2.initialScrollY, b2 = h2 === void 0 ? 0 : h2, g2 = e2.transformSearchClient, _2 = g2 === void 0 ? Gr : g2, O2 = e2.disableUserPersonalization, S2 = O2 !== void 0 && O2, w2 = e2.initialQuery, j2 = w2 === void 0 ? "" : w2, E2 = e2.translations, P2 = E2 === void 0 ? {} : E2, I2 = e2.getMissingResultsUrl, D2 = e2.insights, k2 = D2 !== void 0 && D2, A2 = P2.footer, C2 = P2.searchBox, N2 = pi(P2, ii), x2 = si(Be.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = x2[0], R2 = x2[1], q2 = Be.useRef(null), L2 = Be.useRef(null), M2 = Be.useRef(null), H2 = Be.useRef(null), U2 = Be.useRef(null), F2 = Be.useRef(10), B2 = Be.useRef(typeof window != "undefined" ? window.getSelection().toString().slice(0, 64) : "").current, V2 = Be.useRef(j2 || B2).current, K2 = function(e3, t3, n3) {
      return Be.useMemo(function() {
        var r3 = oi(e3, t3);
        return r3.addAlgoliaAgent("docsearch", "3.6.0"), /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) === false && r3.addAlgoliaAgent("docsearch-react", "3.6.0"), n3(r3);
      }, [e3, t3, n3]);
    }(t2, n2, _2), W2 = Be.useRef(So({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = Be.useRef(So({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: W2.getAll().length === 0 ? 7 : 4 })).current, J2 = Be.useCallback(function(e3) {
      if (!S2) {
        var t3 = e3.type === "content" ? e3.__docsearch_parent : e3;
        t3 && W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) === -1 && z2.add(t3);
      }
    }, [W2, z2, S2]), $2 = Be.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }, [T2.context.algoliaInsightsPlugin]), Q2 = Be.useMemo(function() {
      return hr({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: k2, navigator: y2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s3 = e3.setStatus;
        if (!o3)
          return S2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
            var t3 = e4.item, n3 = e4.event;
            J2(t3), Xr(n3) || l2();
          }, getItemUrl: function(e4) {
            return e4.item.url;
          }, getItems: function() {
            return z2.getAll();
          } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
            var t3 = e4.item, n3 = e4.event;
            J2(t3), Xr(n3) || l2();
          }, getItemUrl: function(e4) {
            return e4.item.url;
          }, getItems: function() {
            return W2.getAll();
          } }];
        var p3 = Boolean(k2);
        return K2.search([{ query: o3, indexName: r2, params: ui({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, c2) }]).catch(function(e4) {
          throw e4.name === "RetryError" && s3("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], c3 = o4.hits, s4 = o4.nbHits, m3 = Yr(c3, function(e5) {
            return ro(e5);
          }, a2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s4 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n2 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n3 = e6.event;
              J2(t4), Xr(n3) || l2();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(Yr(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, a2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n3 = null, r3 = e6.find(function(e7) {
                    return e7.type === "lvl1" && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return t4.type !== "lvl1" && r3 && (n3 = r3), ui(ui({}, t4), {}, { __docsearch_parent: n3 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, c2, a2, K2, l2, z2, W2, J2, V2, i2, y2, f2, S2, k2, t2, n2]), Z2 = Q2.getEnvironmentProps, Y2 = Q2.getRootProps, G2 = Q2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      Be.useEffect(function() {
        if (n3 && r3 && o3) {
          var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, c3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", c3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", c3);
          };
        }
      }, [t3, n3, r3, o3]);
    }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      Be.useEffect(function() {
        if (t3) {
          var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
          return t3.addEventListener("keydown", o3), function() {
            t3.removeEventListener("keydown", o3);
          };
        }
        function o3(e5) {
          e5.key === "Tab" && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
        }
      }, [t3]);
    }({ container: q2.current }), Be.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), (e3 = (t3 = window).scrollTo) === null || e3 === void 0 || e3.call(t3, 0, b2);
      };
    }, []), Be.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), Be.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), Be.useEffect(function() {
      V2.length > 0 && (G2(), U2.current && U2.current.focus());
    }, [V2, G2]), Be.useEffect(function() {
      function e3() {
        if (L2.current) {
          var e4 = 0.01 * window.innerHeight;
          L2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), Be.createElement("div", ci({ ref: q2 }, Y2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", T2.status === "stalled" && "DocSearch-Container--Stalled", T2.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l2();
    } }), Be.createElement("div", { className: "DocSearch-Modal", ref: L2 }, Be.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, Be.createElement(bo, ci({}, Q2, { state: T2, autoFocus: V2.length === 0, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: C2, onClose: l2 }))), Be.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, Be.createElement(mo, ci({}, Q2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: d2, disableUserPersonalization: S2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: N2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      $2(e3), J2(e3), Xr(t3) || l2();
    } }))), Be.createElement("footer", { className: "DocSearch-Footer" }, Be.createElement(_r, { translations: A2 }))));
  }
  function vi() {
    return vi = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, vi.apply(this, arguments);
  }
  function di(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
      if (n2 == null)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || n2.return == null || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return yi(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return yi(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function yi(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function hi(e2) {
    var t2, n2, r2 = Be.useRef(null), o2 = di(Be.useState(false), 2), i2 = o2[0], c2 = o2[1], a2 = di(Be.useState((e2 == null ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l2 = a2[1], s2 = Be.useCallback(function() {
      c2(true);
    }, [c2]), f2 = Be.useCallback(function() {
      c2(false);
    }, [c2]);
    return function(e3) {
      var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      Be.useEffect(function() {
        function e4(e5) {
          var c3;
          (e5.keyCode === 27 && t3 || ((c3 = e5.key) === null || c3 === void 0 ? void 0 : c3.toLowerCase()) === "k" && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n4 = t4.tagName;
            return t4.isContentEditable || n4 === "INPUT" || n4 === "SELECT" || n4 === "TEXTAREA";
          }(e5) && e5.key === "/" && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n3, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s2, onClose: f2, onInput: Be.useCallback(function(e3) {
      c2(true), l2(e3.key);
    }, [c2, l2]), searchButtonRef: r2 }), Be.createElement(Be.Fragment, null, Be.createElement(Ze, { ref: r2, translations: e2 == null || (t2 = e2.translations) === null || t2 === void 0 ? void 0 : t2.button, onClick: s2 }), i2 && Ie(Be.createElement(mi, vi({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: e2 == null || (n2 = e2.translations) === null || n2 === void 0 ? void 0 : n2.modal, onClose: f2 })), document.body));
  }
  function bi(e2) {
    Ce(Be.createElement(hi, o({}, e2, { transformSearchClient: function(t2) {
      return t2.addAlgoliaAgent("docsearch.js", "3.6.0"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
    } })), function(e3) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof e3 == "string" ? t2.document.querySelector(e3) : e3;
    }(e2.container, e2.environment));
  }
  var esm_default = bi;

  // node_modules/plausible-tracker/build/module/lib/request.js
  function sendEvent(eventName, data, options) {
    const isLocalhost = /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname) || location.protocol === "file:";
    if (!data.trackLocalhost && isLocalhost) {
      return console.warn("[Plausible] Ignoring event because website is running locally");
    }
    try {
      if (window.localStorage.plausible_ignore === "true") {
        return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');
      }
    } catch (e2) {
      null;
    }
    const payload = {
      n: eventName,
      u: data.url,
      d: data.domain,
      r: data.referrer,
      w: data.deviceWidth,
      h: data.hashMode ? 1 : 0,
      p: options && options.props ? JSON.stringify(options.props) : void 0
    };
    const req = new XMLHttpRequest();
    req.open("POST", `${data.apiHost}/api/event`, true);
    req.setRequestHeader("Content-Type", "text/plain");
    req.send(JSON.stringify(payload));
    req.onreadystatechange = () => {
      if (req.readyState !== 4)
        return;
      if (options && options.callback) {
        options.callback();
      }
    };
  }

  // node_modules/plausible-tracker/build/module/lib/tracker.js
  function Plausible(defaults) {
    const getConfig = () => __spreadValues({
      hashMode: false,
      trackLocalhost: false,
      url: location.href,
      domain: location.hostname,
      referrer: document.referrer || null,
      deviceWidth: window.innerWidth,
      apiHost: "https://plausible.io"
    }, defaults);
    const trackEvent = (eventName, options, eventData) => {
      sendEvent(eventName, __spreadValues(__spreadValues({}, getConfig()), eventData), options);
    };
    const trackPageview = (eventData, options) => {
      trackEvent("pageview", options, eventData);
    };
    const enableAutoPageviews = () => {
      const page = () => trackPageview();
      const originalPushState = history.pushState;
      if (originalPushState) {
        history.pushState = function(data, title, url) {
          originalPushState.apply(this, [data, title, url]);
          page();
        };
        addEventListener("popstate", page);
      }
      if (defaults && defaults.hashMode) {
        addEventListener("hashchange", page);
      }
      trackPageview();
      return function cleanup() {
        if (originalPushState) {
          history.pushState = originalPushState;
          removeEventListener("popstate", page);
        }
        if (defaults && defaults.hashMode) {
          removeEventListener("hashchange", page);
        }
      };
    };
    const enableAutoOutboundTracking = (targetNode = document, observerInit = {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["href"]
    }) => {
      function trackClick(event) {
        trackEvent("Outbound Link: Click", { props: { url: this.href } });
        if (!(typeof process !== "undefined" && process && false)) {
          setTimeout(() => {
            location.href = this.href;
          }, 150);
        }
        event.preventDefault();
      }
      const tracked = new Set();
      function addNode(node) {
        if (node instanceof HTMLAnchorElement) {
          if (node.host !== location.host) {
            node.addEventListener("click", trackClick);
            tracked.add(node);
          }
        } else if ("querySelectorAll" in node) {
          node.querySelectorAll("a").forEach(addNode);
        }
      }
      function removeNode(node) {
        if (node instanceof HTMLAnchorElement) {
          node.removeEventListener("click", trackClick);
          tracked.delete(node);
        } else if ("querySelectorAll" in node) {
          node.querySelectorAll("a").forEach(removeNode);
        }
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes") {
            removeNode(mutation.target);
            addNode(mutation.target);
          } else if (mutation.type === "childList") {
            mutation.addedNodes.forEach(addNode);
            mutation.removedNodes.forEach(removeNode);
          }
        });
      });
      targetNode.querySelectorAll("a").forEach(addNode);
      observer.observe(targetNode, observerInit);
      return function cleanup() {
        tracked.forEach((a2) => {
          a2.removeEventListener("click", trackClick);
        });
        tracked.clear();
        observer.disconnect();
      };
    };
    return {
      trackEvent,
      trackPageview,
      enableAutoPageviews,
      enableAutoOutboundTracking
    };
  }

  // node_modules/plausible-tracker/build/module/index.js
  var module_default = Plausible;

  // js/app.js
  var import_prismjs = __toModule(require_prism());

  // node_modules/prismjs/components/prism-markup-templating.js
  (function(Prism2) {
    function getPlaceholder(language, index) {
      return "___" + language.toUpperCase() + index + "___";
    }
    Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
      buildPlaceholders: {
        value: function(env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return;
          }
          var tokenStack = env.tokenStack = [];
          env.code = env.code.replace(placeholderPattern, function(match) {
            if (typeof replaceFilter === "function" && !replaceFilter(match)) {
              return match;
            }
            var i2 = tokenStack.length;
            var placeholder;
            while (env.code.indexOf(placeholder = getPlaceholder(language, i2)) !== -1) {
              ++i2;
            }
            tokenStack[i2] = match;
            return placeholder;
          });
          env.grammar = Prism2.languages.markup;
        }
      },
      tokenizePlaceholders: {
        value: function(env, language) {
          if (env.language !== language || !env.tokenStack) {
            return;
          }
          env.grammar = Prism2.languages[language];
          var j2 = 0;
          var keys = Object.keys(env.tokenStack);
          function walkTokens(tokens) {
            for (var i2 = 0; i2 < tokens.length; i2++) {
              if (j2 >= keys.length) {
                break;
              }
              var token = tokens[i2];
              if (typeof token === "string" || token.content && typeof token.content === "string") {
                var k2 = keys[j2];
                var t2 = env.tokenStack[k2];
                var s2 = typeof token === "string" ? token : token.content;
                var placeholder = getPlaceholder(language, k2);
                var index = s2.indexOf(placeholder);
                if (index > -1) {
                  ++j2;
                  var before = s2.substring(0, index);
                  var middle = new Prism2.Token(language, Prism2.tokenize(t2, env.grammar), "language-" + language, t2);
                  var after = s2.substring(index + placeholder.length);
                  var replacement = [];
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]));
                  }
                  replacement.push(middle);
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]));
                  }
                  if (typeof token === "string") {
                    tokens.splice.apply(tokens, [i2, 1].concat(replacement));
                  } else {
                    token.content = replacement;
                  }
                }
              } else if (token.content) {
                walkTokens(token.content);
              }
            }
            return tokens;
          }
          walkTokens(env.tokens);
        }
      }
    });
  })(Prism);

  // node_modules/prismjs/components/prism-php.js
  (function(Prism2) {
    var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
    var constant = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: true,
        lookbehind: true
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: true,
        lookbehind: true
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ];
    var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
    var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
    var punctuation = /[{}\[\](),:;]/;
    Prism2.languages.php = {
      "delimiter": {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      "comment": comment,
      "variable": /\$+(?:\w+\b|(?=\{))/,
      "package": {
        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: true,
        inside: {
          "punctuation": /\\/
        }
      },
      "class-name-definition": {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: true,
        alias: "class-name"
      },
      "function-definition": {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: true,
        alias: "function"
      },
      "keyword": [
        {
          pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: "return-type",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: "type-declaration",
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: "type-declaration",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: true
        },
        {
          pattern: /(\byield\s+)from\b/i,
          lookbehind: true
        },
        /\bclass\b/i,
        {
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: true
        }
      ],
      "argument-name": {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: true
      },
      "class-name": [
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        }
      ],
      "constant": constant,
      "function": {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: true,
        inside: {
          "punctuation": /\\/
        }
      },
      "property": {
        pattern: /(->\s*)\w+/,
        lookbehind: true
      },
      "number": number,
      "operator": operator,
      "punctuation": punctuation
    };
    var string_interpolation = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: true,
      inside: Prism2.languages.php
    };
    var string = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: true,
        inside: {
          "delimiter": {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              "punctuation": /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: true,
        inside: {
          "delimiter": {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              "punctuation": /^<<<"?|[";]$/
            }
          },
          "interpolation": string_interpolation
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: true
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: true
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: true,
        inside: {
          "interpolation": string_interpolation
        }
      }
    ];
    Prism2.languages.insertBefore("php", "variable", {
      "string": string,
      "attribute": {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: true,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: true,
            inside: {
              "comment": comment,
              "string": string,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: true,
                  lookbehind: true
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: [
                    "class-name",
                    "class-name-fully-qualified"
                  ],
                  greedy: true,
                  lookbehind: true,
                  inside: {
                    "punctuation": /\\/
                  }
                }
              ],
              "constant": constant,
              "number": number,
              "operator": operator,
              "punctuation": punctuation
            }
          },
          "delimiter": {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    });
    Prism2.hooks.add("before-tokenize", function(env) {
      if (!/<\?/.test(env.code)) {
        return;
      }
      var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      Prism2.languages["markup-templating"].buildPlaceholders(env, "php", phpPattern);
    });
    Prism2.hooks.add("after-tokenize", function(env) {
      Prism2.languages["markup-templating"].tokenizePlaceholders(env, "php");
    });
  })(Prism);

  // node_modules/prismjs/components/prism-bash.js
  (function(Prism2) {
    var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
    var commandAfterHeredoc = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: true,
      alias: "punctuation",
      inside: null
    };
    var insideString = {
      "bash": commandAfterHeredoc,
      "environment": {
        pattern: RegExp("\\$" + envVars),
        alias: "constant"
      },
      "variable": [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            "variable": [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: true
              },
              /^\$\(\(/
            ],
            "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            "punctuation": /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            "variable": /^\$\(|^`|\)$|`$/
          }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            "punctuation": /[\[\]]/,
            "environment": {
              pattern: RegExp("(\\{)" + envVars),
              lookbehind: true,
              alias: "constant"
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    Prism2.languages.bash = {
      "shebang": {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      "comment": {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: "function"
        },
        {
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: "function"
        }
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: true
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
        inside: {
          "environment": {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: true
      },
      "parameter": {
        pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
        alias: "variable",
        lookbehind: true
      },
      "string": [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true,
          inside: {
            "bash": commandAfterHeredoc
          }
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        {
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: true,
          inside: {
            "entity": insideString.entity
          }
        }
      ],
      "environment": {
        pattern: RegExp("\\$?" + envVars),
        alias: "constant"
      },
      "variable": insideString.variable,
      "function": {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      "keyword": {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      "builtin": {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: true,
        alias: "class-name"
      },
      "boolean": {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      "operator": {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      "number": {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    };
    commandAfterHeredoc.inside = Prism2.languages.bash;
    var toBeCopied = [
      "comment",
      "function-name",
      "for-or-select",
      "assign-left",
      "parameter",
      "string",
      "environment",
      "function",
      "keyword",
      "builtin",
      "boolean",
      "file-descriptor",
      "operator",
      "punctuation",
      "number"
    ];
    var inside = insideString.variable[1].inside;
    for (var i2 = 0; i2 < toBeCopied.length; i2++) {
      inside[toBeCopied[i2]] = Prism2.languages.bash[toBeCopied[i2]];
    }
    Prism2.languages.sh = Prism2.languages.bash;
    Prism2.languages.shell = Prism2.languages.bash;
  })(Prism);

  // node_modules/prismjs/components/prism-json.js
  Prism.languages.json = {
    "property": {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    "string": {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    "comment": {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    "punctuation": /[{}[\],]/,
    "operator": /:/,
    "boolean": /\b(?:false|true)\b/,
    "null": {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  };
  Prism.languages.webmanifest = Prism.languages.json;

  // node_modules/prismjs/components/prism-json5.js
  (function(Prism2) {
    var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    Prism2.languages.json5 = Prism2.languages.extend("json", {
      "property": [
        {
          pattern: RegExp(string.source + "(?=\\s*:)"),
          greedy: true
        },
        {
          pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
          alias: "unquoted"
        }
      ],
      "string": {
        pattern: string,
        greedy: true
      },
      "number": /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    });
  })(Prism);

  // node_modules/prismjs/components/prism-javascript.js
  Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined("script", "javascript");
    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  Prism.languages.js = Prism.languages.javascript;

  // js/app.js
  function processQuery(query) {
    var parts = query.split(" ");
    parts = parts.map(function(part, index) {
      var word = part.trim();
      if (word.length >= 2 && word[0] === "-" && word[1] === "-") {
        word = '"' + word + (index === parts.length - 1 ? "" : '"');
      }
      if (word.length == 2 && word[0] === "-") {
        word = '"' + word + (index === parts.length - 1 ? "" : '"');
      }
      return word;
    });
    return parts.join(" ");
  }
  if (document.getElementById("docsearch")) {
    esm_default({
      container: "#docsearch",
      appId: "DLYN25JSFJ",
      indexName: "getcomposer",
      apiKey: "59b32c5fdb7d9198939d01eebcc4ecab",
      transformSearchClient: (searchClient) => {
        return __spreadProps(__spreadValues({}, searchClient), {
          search: (spec) => {
            let f2 = spec[0].query;
            spec[0].query = processQuery(spec[0].query);
            return searchClient.search(spec);
          }
        });
      }
    });
  }
  var plausible = module_default({
    domain: "getcomposer.org",
    apiHost: "https://getcomposer.org"
  });
  plausible.trackPageview();
})();
/*! @docsearch/js 3.6.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
//# sourceMappingURL=app.js.map
