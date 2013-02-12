
(function() {
  var Handlebars, handlebars;
  Handlebars = {};
  (function(Handlebars) {
    var functionType, toString;
    Handlebars.VERSION = "1.0.rc.1";
    Handlebars.helpers = {};
    Handlebars.partials = {};
    Handlebars.registerHelper = function(name, fn, inverse) {
      if (inverse) {
        fn.not = inverse;
      }
      return this.helpers[name] = fn;
    };
    Handlebars.registerPartial = function(name, str) {
      return this.partials[name] = str;
    };
    Handlebars.registerHelper("helperMissing", function(arg) {
      if (arguments_.length === 2) {
        return undefined;
      } else {
        throw new Error("Could not find property '" + arg + "'");
      }
    });
    toString = Object.prototype.toString;
    functionType = "[object Function]";
    Handlebars.registerHelper("blockHelperMissing", function(context, options) {
      var fn, inverse, ret, type;
      inverse = options.inverse || function() {};
      fn = options.fn;
      ret = "";
      type = toString.call(context);
      if (type === functionType) {
        context = context.call(this);
      }
      if (context === true) {
        return fn(this);
      } else if (context === false || !(context != null)) {
        return inverse(this);
      } else if (type === "[object Array]") {
        if (context.length > 0) {
          return Handlebars.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });
    Handlebars.K = function() {};
    Handlebars.createFrame = Object.create || function(object) {
      var obj;
      Handlebars.K.prototype = object;
      obj = new Handlebars.K();
      Handlebars.K.prototype = null;
      return obj;
    };
    Handlebars.registerHelper("each", function(context, options) {
      var data, fn, i, inverse, j, ret;
      fn = options.fn;
      inverse = options.inverse;
      ret = "";
      data = void 0;
      if (options.data) {
        data = Handlebars.createFrame(options.data);
      }
      if (context && context.length > 0) {
        i = 0;
        j = context.length;
        while (i < j) {
          if (data) {
            data.index = i;
          }
          ret = ret + fn(context[i], {
            data: data
          });
          i++;
        }
      } else {
        ret = inverse(this);
      }
      return ret;
    });
    Handlebars.registerHelper("if", function(context, options) {
      var type;
      type = toString.call(context);
      if (type === functionType) {
        context = context.call(this);
      }
      if (!context || Handlebars.Utils.isEmpty(context)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });
    Handlebars.registerHelper("unless", function(context, options) {
      var fn, inverse;
      fn = options.fn;
      inverse = options.inverse;
      options.fn = inverse;
      options.inverse = fn;
      return Handlebars.helpers["if"].call(this, context, options);
    });
    Handlebars.registerHelper("with", function(context, options) {
      return options.fn(context);
    });
    return Handlebars.registerHelper("log", function(context) {
      return Handlebars.log(context);
    });
  })(Handlebars);
  handlebars = (function() {
    var Parser, anonymous, lexer, parse, parseError, parser, trace;
    Parser = function() {
      return this.yy = {};
    };
    parser = {
      trace: trace = function() {},
      yy: {},
      symbols_: {
        error: 2,
        root: 3,
        program: 4,
        EOF: 5,
        statements: 6,
        simpleInverse: 7,
        statement: 8,
        openInverse: 9,
        closeBlock: 10,
        openBlock: 11,
        mustache: 12,
        partial: 13,
        CONTENT: 14,
        COMMENT: 15,
        OPEN_BLOCK: 16,
        inMustache: 17,
        CLOSE: 18,
        OPEN_INVERSE: 19,
        OPEN_ENDBLOCK: 20,
        path: 21,
        OPEN: 22,
        OPEN_UNESCAPED: 23,
        OPEN_PARTIAL: 24,
        params: 25,
        hash: 26,
        DATA: 27,
        param: 28,
        STRING: 29,
        INTEGER: 30,
        BOOLEAN: 31,
        hashSegments: 32,
        hashSegment: 33,
        ID: 34,
        EQUALS: 35,
        pathSegments: 36,
        SEP: 37,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        14: "CONTENT",
        15: "COMMENT",
        16: "OPEN_BLOCK",
        18: "CLOSE",
        19: "OPEN_INVERSE",
        20: "OPEN_ENDBLOCK",
        22: "OPEN",
        23: "OPEN_UNESCAPED",
        24: "OPEN_PARTIAL",
        27: "DATA",
        29: "STRING",
        30: "INTEGER",
        31: "BOOLEAN",
        34: "ID",
        35: "EQUALS",
        37: "SEP"
      },
      productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [25, 2], [25, 1], [28, 1], [28, 1], [28, 1], [28, 1], [28, 1], [26, 1], [32, 2], [32, 1], [33, 3], [33, 3], [33, 3], [33, 3], [33, 3], [21, 1], [36, 3], [36, 1]],
      performAction: anonymous = function(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0;
        $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
          case 2:
            return this.$ = new yy.ProgramNode($$[$0 - 2], $$[$0]);
          case 3:
            return this.$ = new yy.ProgramNode($$[$0]);
          case 4:
            return this.$ = new yy.ProgramNode([]);
          case 5:
            return this.$ = [$$[$0]];
          case 6:
            $$[$0 - 1].push($$[$0]);
            return this.$ = $$[$0 - 1];
          case 7:
            return this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0]);
          case 8:
            return this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0]);
          case 9:
            return this.$ = $$[$0];
          case 10:
            return this.$ = $$[$0];
          case 11:
            return this.$ = new yy.ContentNode($$[$0]);
          case 12:
            return this.$ = new yy.CommentNode($$[$0]);
          case 13:
            return this.$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1]);
          case 14:
            return this.$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1]);
          case 15:
            return this.$ = $$[$0 - 1];
          case 16:
            return this.$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1]);
          case 17:
            return this.$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1], true);
          case 18:
            return this.$ = new yy.PartialNode($$[$0 - 1]);
          case 19:
            return this.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1]);
          case 20:
          case 21:
            return this.$ = [[$$[$0 - 2]].concat($$[$0 - 1]), $$[$0]];
          case 22:
            return this.$ = [[$$[$0 - 1]].concat($$[$0]), null];
          case 23:
            return this.$ = [[$$[$0 - 1]], $$[$0]];
          case 24:
            return this.$ = [[$$[$0]], null];
          case 25:
            return this.$ = [[new yy.DataNode($$[$0])], null];
          case 26:
            $$[$0 - 1].push($$[$0]);
            return this.$ = $$[$0 - 1];
          case 27:
            return this.$ = [$$[$0]];
          case 28:
            return this.$ = $$[$0];
          case 29:
            return this.$ = new yy.StringNode($$[$0]);
          case 30:
            return this.$ = new yy.IntegerNode($$[$0]);
          case 31:
            return this.$ = new yy.BooleanNode($$[$0]);
          case 32:
            return this.$ = new yy.DataNode($$[$0]);
          case 33:
            return this.$ = new yy.HashNode($$[$0]);
          case 34:
            $$[$0 - 1].push($$[$0]);
            return this.$ = $$[$0 - 1];
          case 35:
            return this.$ = [$$[$0]];
          case 36:
            return this.$ = [$$[$0 - 2], $$[$0]];
          case 37:
            return this.$ = [$$[$0 - 2], new yy.StringNode($$[$0])];
          case 38:
            return this.$ = [$$[$0 - 2], new yy.IntegerNode($$[$0])];
          case 39:
            return this.$ = [$$[$0 - 2], new yy.BooleanNode($$[$0])];
          case 40:
            return this.$ = [$$[$0 - 2], new yy.DataNode($$[$0])];
          case 41:
            return this.$ = new yy.IdNode($$[$0]);
          case 42:
            $$[$0 - 2].push($$[$0]);
            return this.$ = $$[$0 - 2];
          case 43:
            return this.$ = [$$[$0]];
        }
      },
      table: [
        {
          3: 1,
          4: 2,
          5: [2, 4],
          6: 3,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          1: [3]
        }, {
          5: [1, 16]
        }, {
          5: [2, 3],
          7: 17,
          8: 18,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 19],
          20: [2, 3],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          5: [2, 5],
          14: [2, 5],
          15: [2, 5],
          16: [2, 5],
          19: [2, 5],
          20: [2, 5],
          22: [2, 5],
          23: [2, 5],
          24: [2, 5]
        }, {
          4: 20,
          6: 3,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 4],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          4: 21,
          6: 3,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 4],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          5: [2, 9],
          14: [2, 9],
          15: [2, 9],
          16: [2, 9],
          19: [2, 9],
          20: [2, 9],
          22: [2, 9],
          23: [2, 9],
          24: [2, 9]
        }, {
          5: [2, 10],
          14: [2, 10],
          15: [2, 10],
          16: [2, 10],
          19: [2, 10],
          20: [2, 10],
          22: [2, 10],
          23: [2, 10],
          24: [2, 10]
        }, {
          5: [2, 11],
          14: [2, 11],
          15: [2, 11],
          16: [2, 11],
          19: [2, 11],
          20: [2, 11],
          22: [2, 11],
          23: [2, 11],
          24: [2, 11]
        }, {
          5: [2, 12],
          14: [2, 12],
          15: [2, 12],
          16: [2, 12],
          19: [2, 12],
          20: [2, 12],
          22: [2, 12],
          23: [2, 12],
          24: [2, 12]
        }, {
          17: 22,
          21: 23,
          27: [1, 24],
          34: [1, 26],
          36: 25
        }, {
          17: 27,
          21: 23,
          27: [1, 24],
          34: [1, 26],
          36: 25
        }, {
          17: 28,
          21: 23,
          27: [1, 24],
          34: [1, 26],
          36: 25
        }, {
          17: 29,
          21: 23,
          27: [1, 24],
          34: [1, 26],
          36: 25
        }, {
          21: 30,
          34: [1, 26],
          36: 25
        }, {
          1: [2, 1]
        }, {
          6: 31,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          5: [2, 6],
          14: [2, 6],
          15: [2, 6],
          16: [2, 6],
          19: [2, 6],
          20: [2, 6],
          22: [2, 6],
          23: [2, 6],
          24: [2, 6]
        }, {
          17: 22,
          18: [1, 32],
          21: 23,
          27: [1, 24],
          34: [1, 26],
          36: 25
        }, {
          10: 33,
          20: [1, 34]
        }, {
          10: 35,
          20: [1, 34]
        }, {
          18: [1, 36]
        }, {
          18: [2, 24],
          21: 41,
          25: 37,
          26: 38,
          27: [1, 45],
          28: 39,
          29: [1, 42],
          30: [1, 43],
          31: [1, 44],
          32: 40,
          33: 46,
          34: [1, 47],
          36: 25
        }, {
          18: [2, 25]
        }, {
          18: [2, 41],
          27: [2, 41],
          29: [2, 41],
          30: [2, 41],
          31: [2, 41],
          34: [2, 41],
          37: [1, 48]
        }, {
          18: [2, 43],
          27: [2, 43],
          29: [2, 43],
          30: [2, 43],
          31: [2, 43],
          34: [2, 43],
          37: [2, 43]
        }, {
          18: [1, 49]
        }, {
          18: [1, 50]
        }, {
          18: [1, 51]
        }, {
          18: [1, 52],
          21: 53,
          34: [1, 26],
          36: 25
        }, {
          5: [2, 2],
          8: 18,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 2],
          22: [1, 13],
          23: [1, 14],
          24: [1, 15]
        }, {
          14: [2, 20],
          15: [2, 20],
          16: [2, 20],
          19: [2, 20],
          22: [2, 20],
          23: [2, 20],
          24: [2, 20]
        }, {
          5: [2, 7],
          14: [2, 7],
          15: [2, 7],
          16: [2, 7],
          19: [2, 7],
          20: [2, 7],
          22: [2, 7],
          23: [2, 7],
          24: [2, 7]
        }, {
          21: 54,
          34: [1, 26],
          36: 25
        }, {
          5: [2, 8],
          14: [2, 8],
          15: [2, 8],
          16: [2, 8],
          19: [2, 8],
          20: [2, 8],
          22: [2, 8],
          23: [2, 8],
          24: [2, 8]
        }, {
          14: [2, 14],
          15: [2, 14],
          16: [2, 14],
          19: [2, 14],
          20: [2, 14],
          22: [2, 14],
          23: [2, 14],
          24: [2, 14]
        }, {
          18: [2, 22],
          21: 41,
          26: 55,
          27: [1, 45],
          28: 56,
          29: [1, 42],
          30: [1, 43],
          31: [1, 44],
          32: 40,
          33: 46,
          34: [1, 47],
          36: 25
        }, {
          18: [2, 23]
        }, {
          18: [2, 27],
          27: [2, 27],
          29: [2, 27],
          30: [2, 27],
          31: [2, 27],
          34: [2, 27]
        }, {
          18: [2, 33],
          33: 57,
          34: [1, 58]
        }, {
          18: [2, 28],
          27: [2, 28],
          29: [2, 28],
          30: [2, 28],
          31: [2, 28],
          34: [2, 28]
        }, {
          18: [2, 29],
          27: [2, 29],
          29: [2, 29],
          30: [2, 29],
          31: [2, 29],
          34: [2, 29]
        }, {
          18: [2, 30],
          27: [2, 30],
          29: [2, 30],
          30: [2, 30],
          31: [2, 30],
          34: [2, 30]
        }, {
          18: [2, 31],
          27: [2, 31],
          29: [2, 31],
          30: [2, 31],
          31: [2, 31],
          34: [2, 31]
        }, {
          18: [2, 32],
          27: [2, 32],
          29: [2, 32],
          30: [2, 32],
          31: [2, 32],
          34: [2, 32]
        }, {
          18: [2, 35],
          34: [2, 35]
        }, {
          18: [2, 43],
          27: [2, 43],
          29: [2, 43],
          30: [2, 43],
          31: [2, 43],
          34: [2, 43],
          35: [1, 59],
          37: [2, 43]
        }, {
          34: [1, 60]
        }, {
          14: [2, 13],
          15: [2, 13],
          16: [2, 13],
          19: [2, 13],
          20: [2, 13],
          22: [2, 13],
          23: [2, 13],
          24: [2, 13]
        }, {
          5: [2, 16],
          14: [2, 16],
          15: [2, 16],
          16: [2, 16],
          19: [2, 16],
          20: [2, 16],
          22: [2, 16],
          23: [2, 16],
          24: [2, 16]
        }, {
          5: [2, 17],
          14: [2, 17],
          15: [2, 17],
          16: [2, 17],
          19: [2, 17],
          20: [2, 17],
          22: [2, 17],
          23: [2, 17],
          24: [2, 17]
        }, {
          5: [2, 18],
          14: [2, 18],
          15: [2, 18],
          16: [2, 18],
          19: [2, 18],
          20: [2, 18],
          22: [2, 18],
          23: [2, 18],
          24: [2, 18]
        }, {
          18: [1, 61]
        }, {
          18: [1, 62]
        }, {
          18: [2, 21]
        }, {
          18: [2, 26],
          27: [2, 26],
          29: [2, 26],
          30: [2, 26],
          31: [2, 26],
          34: [2, 26]
        }, {
          18: [2, 34],
          34: [2, 34]
        }, {
          35: [1, 59]
        }, {
          21: 63,
          27: [1, 67],
          29: [1, 64],
          30: [1, 65],
          31: [1, 66],
          34: [1, 26],
          36: 25
        }, {
          18: [2, 42],
          27: [2, 42],
          29: [2, 42],
          30: [2, 42],
          31: [2, 42],
          34: [2, 42],
          37: [2, 42]
        }, {
          5: [2, 19],
          14: [2, 19],
          15: [2, 19],
          16: [2, 19],
          19: [2, 19],
          20: [2, 19],
          22: [2, 19],
          23: [2, 19],
          24: [2, 19]
        }, {
          5: [2, 15],
          14: [2, 15],
          15: [2, 15],
          16: [2, 15],
          19: [2, 15],
          20: [2, 15],
          22: [2, 15],
          23: [2, 15],
          24: [2, 15]
        }, {
          18: [2, 36],
          34: [2, 36]
        }, {
          18: [2, 37],
          34: [2, 37]
        }, {
          18: [2, 38],
          34: [2, 38]
        }, {
          18: [2, 39],
          34: [2, 39]
        }, {
          18: [2, 40],
          34: [2, 40]
        }
      ],
      defaultActions: {
        16: [2, 1],
        24: [2, 25],
        38: [2, 23],
        55: [2, 21]
      },
      parseError: parseError = function(str, hash) {
        throw new Error(str);
      },
      parse: parse = function(input) {
        var EOF, TERROR, a, action, errStr, expected, len, lex, lstack, newState, p, popStack, preErrorSymbol, r, ranges, recovering, self, stack, state, symbol, table, vstack, yyleng, yylineno, yyloc, yytext, yyval;
        popStack = function(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          return lstack.length = lstack.length - n;
        };
        lex = function() {
          var token;
          token = void 0;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
            token = self.symbols_[token] || token;
          }
          return token;
        };
        self = this;
        stack = [0];
        vstack = [null];
        lstack = [];
        table = this.table;
        yytext = "";
        yylineno = 0;
        yyleng = 0;
        recovering = 0;
        TERROR = 2;
        EOF = 1;
        this.lexer.setInput(input);
        this.lexer.yy = this.yy;
        this.yy.lexer = this.lexer;
        this.yy.parser = this;
        if (typeof this.lexer.yylloc === "undefined") {
          this.lexer.yylloc = {};
        }
        yyloc = this.lexer.yylloc;
        lstack.push(yyloc);
        ranges = this.lexer.options && this.lexer.options.ranges;
        if (typeof this.yy.parseError === "function") {
          this.parseError = this.yy.parseError;
        }
        symbol = void 0;
        preErrorSymbol = void 0;
        state = void 0;
        action = void 0;
        a = void 0;
        r = void 0;
        yyval = {};
        p = void 0;
        len = void 0;
        newState = void 0;
        expected = void 0;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol === "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            errStr = "";
            if (!recovering) {
              expected = [];
              for (p in table[state]) {
                if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              }
              if (this.lexer.showPosition) {
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
              } else {
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol === 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, {
                text: this.lexer.match,
                token: this.terminals_[symbol] || symbol,
                line: this.lexer.yylineno,
                loc: yyloc,
                expected: expected
              });
            }
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    lexer = (function() {
      var begin, lex, popState, _currentRules;
      lexer = {
        EOF: 1,
        parseError: parseError = function(str, hash) {
          if (this.yy.parser) {
            return this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function(input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function() {
          var ch, lines;
          ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function(ch) {
          var len, lines, oldLines, r;
          len = ch.length;
          lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
          this.offset -= len;
          oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: (lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len)
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
        },
        more: function() {
          this._more = true;
          return this;
        },
        less: function(n) {
          return this.unput(this.match.slice(n));
        },
        pastInput: function() {
          var past;
          past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function() {
          var next;
          next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function() {
          var c, pre;
          pre = this.pastInput();
          c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        next: function() {
          var col, i, index, lines, match, rules, tempMatch, token;
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          token = void 0;
          match = void 0;
          tempMatch = void 0;
          index = void 0;
          col = void 0;
          lines = void 0;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          rules = this._currentRules();
          i = 0;
          while (i < rules.length) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (!this.options.flex) {
                break;
              }
            }
            i++;
          }
          if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) {
              this.yylineno += lines.length;
            }
            this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: (lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length)
            };
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
              this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input) {
              this.done = false;
            }
            if (token) {
              return token;
            } else {
              return;
            }
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: lex = function() {
          var r;
          r = this.next();
          if (typeof r !== "undefined") {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: begin = function(condition) {
          return this.conditionStack.push(condition);
        },
        popState: popState = function() {
          return this.conditionStack.pop();
        },
        _currentRules: _currentRules = function() {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        },
        topState: function() {
          return this.conditionStack[this.conditionStack.length - 2];
        },
        pushState: begin = function(condition) {
          return this.begin(condition);
        }
      };
      lexer.options = {};
      lexer.performAction = anonymous = function(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE;
        YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            if (yy_.yytext.slice(-1) !== "\\") {
              this.begin("mu");
            }
            if (yy_.yytext.slice(-1) === "\\") {
              yy_.yytext = yy_.yytext.substr(0, yy_.yyleng - 1);
              this.begin("emu");
            }
            if (yy_.yytext) {
              return 14;
            }
            break;
          case 1:
            return 14;
          case 2:
            if (yy_.yytext.slice(-1) !== "\\") {
              this.popState();
            }
            if (yy_.yytext.slice(-1) === "\\") {
              yy_.yytext = yy_.yytext.substr(0, yy_.yyleng - 1);
            }
            return 14;
          case 3:
            return 24;
          case 4:
            return 16;
          case 5:
            return 20;
          case 6:
            return 19;
          case 7:
            return 19;
          case 8:
            return 23;
          case 9:
            return 23;
          case 10:
            yy_.yytext = yy_.yytext.substr(3, yy_.yyleng - 5);
            this.popState();
            return 15;
          case 11:
            return 22;
          case 12:
            return 35;
          case 13:
            return 34;
          case 14:
            return 34;
          case 15:
            return 37;
          case 16:
          case 17:
            this.popState();
            return 18;
          case 18:
            this.popState();
            return 18;
          case 19:
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2).replace(/\\"/g, "\"");
            return 29;
          case 20:
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2).replace(/\\"/g, "\"");
            return 29;
          case 21:
            yy_.yytext = yy_.yytext.substr(1);
            return 27;
          case 22:
            return 31;
          case 23:
            return 31;
          case 24:
            return 30;
          case 25:
            return 34;
          case 26:
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
            return 34;
          case 27:
            return "INVALID";
          case 28:
            return 5;
        }
      };
      lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
      lexer.conditions = {
        mu: {
          rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
          inclusive: false
        },
        emu: {
          rules: [2],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 28],
          inclusive: true
        }
      };
      return lexer;
    })();
    parser.lexer = lexer;
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
  })();
  Handlebars.Parser = handlebars;
  Handlebars.parse = function(string) {
    Handlebars.Parser.yy = Handlebars.AST;
    return Handlebars.Parser.parse(string);
  };
  Handlebars.print = function(ast) {
    return new Handlebars.PrintVisitor().accept(ast);
  };
  Handlebars.logger = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,
    log: function(level, str) {}
  };
  Handlebars.log = function(level, str) {
    return Handlebars.logger.log(level, str);
  };
  (function() {
    var verifyMatch;
    Handlebars.AST = {};
    Handlebars.AST.ProgramNode = function(statements, inverse) {
      this.type = "program";
      this.statements = statements;
      if (inverse) {
        return this.inverse = new Handlebars.AST.ProgramNode(inverse);
      }
    };
    Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
      var eligibleHelper, id, params;
      this.type = "mustache";
      this.escaped = !unescaped;
      this.hash = hash;
      id = this.id = rawParams[0];
      params = this.params = rawParams.slice(1);
      eligibleHelper = this.eligibleHelper = id.isSimple;
      return this.isHelper = eligibleHelper && (params.length || hash);
    };
    Handlebars.AST.PartialNode = function(id, context) {
      this.type = "partial";
      this.id = id;
      return this.context = context;
    };
    verifyMatch = function(open, close) {
      if (open.original !== close.original) {
        throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
      }
    };
    Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
      verifyMatch(mustache.id, close);
      this.type = "block";
      this.mustache = mustache;
      this.program = program;
      this.inverse = inverse;
      if (this.inverse && !this.program) {
        return this.isInverse = true;
      }
    };
    Handlebars.AST.ContentNode = function(string) {
      this.type = "content";
      return this.string = string;
    };
    Handlebars.AST.HashNode = function(pairs) {
      this.type = "hash";
      return this.pairs = pairs;
    };
    Handlebars.AST.IdNode = function(parts) {
      var depth, dig, i, l, part;
      this.type = "ID";
      this.original = parts.join(".");
      dig = [];
      depth = 0;
      i = 0;
      l = parts.length;
      while (i < l) {
        part = parts[i];
        if (part === "..") {
          depth++;
        } else if (part === "." || part === "this") {
          this.isScoped = true;
        } else {
          dig.push(part);
        }
        i++;
      }
      this.parts = dig;
      this.string = dig.join(".");
      this.depth = depth;
      return this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;
    };
    Handlebars.AST.DataNode = function(id) {
      this.type = "DATA";
      return this.id = id;
    };
    Handlebars.AST.StringNode = function(string) {
      this.type = "STRING";
      return this.string = string;
    };
    Handlebars.AST.IntegerNode = function(integer) {
      this.type = "INTEGER";
      return this.integer = integer;
    };
    Handlebars.AST.BooleanNode = function(bool) {
      this.type = "BOOLEAN";
      return this.bool = bool;
    };
    return Handlebars.AST.CommentNode = function(comment) {
      this.type = "comment";
      return this.comment = comment;
    };
  })();
  Handlebars.Exception = function(message) {
    var p, tmp;
    tmp = Error.prototype.constructor.apply(this, arguments_);
    for (p in tmp) {
      if (tmp.hasOwnProperty(p)) {
        this[p] = tmp[p];
      }
    }
    return this.message = tmp.message;
  };
  Handlebars.Exception.prototype = new Error();
  Handlebars.SafeString = function(string) {
    return this.string = string;
  };
  Handlebars.SafeString.prototype.toString = function() {
    return this.string.toString();
  };
  (function() {
    var badChars, escape, escapeChar, possible;
    escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
    badChars = /[&<>"'`]/g;
    possible = /[&<>"'`]/;
    escapeChar = function(chr) {
      return escape[chr] || "&amp;";
    };
    return Handlebars.Utils = {
      escapeExpression: function(string) {
        if (string instanceof Handlebars.SafeString) {
          return string.toString();
        } else {
          if (!(string != null) || string === false) {
            return "";
          }
        }
        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      },
      isEmpty: function(value) {
        if (typeof value === "undefined") {
          return true;
        } else if (value === null) {
          return true;
        } else if (value === false) {
          return true;
        } else if (Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }
    };
  })();
  Handlebars.Compiler = function() {};
  Handlebars.JavaScriptCompiler = function() {};
  (function(Compiler, JavaScriptCompiler) {
    var Literal, compilerWords, i, l, reservedWords;
    Compiler.prototype = {
      compiler: Compiler,
      disassemble: function() {
        var i, j, l, opcode, opcodes, out, param, params;
        opcodes = this.opcodes;
        opcode = void 0;
        out = [];
        params = void 0;
        param = void 0;
        i = 0;
        l = opcodes.length;
        while (i < l) {
          opcode = opcodes[i];
          if (opcode.opcode === "DECLARE") {
            out.push("DECLARE " + opcode.name + "=" + opcode.value);
          } else {
            params = [];
            j = 0;
            while (j < opcode.args.length) {
              param = opcode.args[j];
              if (typeof param === "string") {
                param = "\"" + param.replace("\n", "\\n") + "\"";
              }
              params.push(param);
              j++;
            }
            out.push(opcode.opcode + " " + params.join(" "));
          }
          i++;
        }
        return out.join("\n");
      },
      guid: 0,
      compile: function(program, options) {
        var knownHelpers, name;
        this.children = [];
        this.depths = {
          list: []
        };
        this.options = options;
        knownHelpers = this.options.knownHelpers;
        this.options.knownHelpers = {
          helperMissing: true,
          blockHelperMissing: true,
          each: true,
          "if": true,
          unless: true,
          "with": true,
          log: true
        };
        if (knownHelpers) {
          for (name in knownHelpers) {
            this.options.knownHelpers[name] = knownHelpers[name];
          }
        }
        return this.program(program);
      },
      accept: function(node) {
        return this[node.type](node);
      },
      program: function(program) {
        var i, l, statement, statements;
        statements = program.statements;
        statement = void 0;
        this.opcodes = [];
        i = 0;
        l = statements.length;
        while (i < l) {
          statement = statements[i];
          this[statement.type](statement);
          i++;
        }
        this.isSimple = l === 1;
        this.depths.list = this.depths.list.sort(function(a, b) {
          return a - b;
        });
        return this;
      },
      compileProgram: function(program) {
        var depth, guid, i, l, result;
        result = new this.compiler().compile(program, this.options);
        guid = this.guid++;
        depth = void 0;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        i = 0;
        l = result.depths.list.length;
        while (i < l) {
          depth = result.depths.list[i];
          if (depth < 2) {
            continue;
          } else {
            this.addDepth(depth - 1);
          }
          i++;
        }
        return guid;
      },
      block: function(block) {
        var inverse, mustache, program, type;
        mustache = block.mustache;
        program = block.program;
        inverse = block.inverse;
        if (program) {
          program = this.compileProgram(program);
        }
        if (inverse) {
          inverse = this.compileProgram(inverse);
        }
        type = this.classifyMustache(mustache);
        if (type === "helper") {
          this.helperMustache(mustache, program, inverse);
        } else if (type === "simple") {
          this.simpleMustache(mustache);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          this.opcode("pushLiteral", "{}");
          this.opcode("blockValue");
        } else {
          this.ambiguousMustache(mustache, program, inverse);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          this.opcode("pushLiteral", "{}");
          this.opcode("ambiguousBlockValue");
        }
        return this.opcode("append");
      },
      hash: function(hash) {
        var i, l, pair, pairs, val, _results;
        pairs = hash.pairs;
        pair = void 0;
        val = void 0;
        this.opcode("push", "{}");
        i = 0;
        l = pairs.length;
        _results = [];
        while (i < l) {
          pair = pairs[i];
          val = pair[1];
          this.accept(val);
          this.opcode("assignToHash", pair[0]);
          _results.push(i++);
        }
        return _results;
      },
      partial: function(partial) {
        var id;
        id = partial.id;
        this.usePartial = true;
        if (partial.context) {
          this.ID(partial.context);
        } else {
          this.opcode("push", "depth0");
        }
        this.opcode("invokePartial", id.original);
        return this.opcode("append");
      },
      content: function(content) {
        return this.opcode("appendContent", content.string);
      },
      mustache: function(mustache) {
        var options, type;
        options = this.options;
        type = this.classifyMustache(mustache);
        if (type === "simple") {
          this.simpleMustache(mustache);
        } else if (type === "helper") {
          this.helperMustache(mustache);
        } else {
          this.ambiguousMustache(mustache);
        }
        if (mustache.escaped && !options.noEscape) {
          return this.opcode("appendEscaped");
        } else {
          return this.opcode("append");
        }
      },
      ambiguousMustache: function(mustache, program, inverse) {
        var id, name;
        id = mustache.id;
        name = id.parts[0];
        this.opcode("getContext", id.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        return this.opcode("invokeAmbiguous", name);
      },
      simpleMustache: function(mustache, program, inverse) {
        var id;
        id = mustache.id;
        if (id.type === "DATA") {
          this.DATA(id);
        } else if (id.parts.length) {
          this.ID(id);
        } else {
          this.addDepth(id.depth);
          this.opcode("getContext", id.depth);
          this.opcode("pushContext");
        }
        return this.opcode("resolvePossibleLambda");
      },
      helperMustache: function(mustache, program, inverse) {
        var name, params;
        params = this.setupFullMustacheParams(mustache, program, inverse);
        name = mustache.id.parts[0];
        if (this.options.knownHelpers[name]) {
          return this.opcode("invokeKnownHelper", params.length, name);
        } else if (this.knownHelpersOnly) {
          throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
        } else {
          return this.opcode("invokeHelper", params.length, name);
        }
      },
      ID: function(id) {
        var i, l, name, _results;
        this.addDepth(id.depth);
        this.opcode("getContext", id.depth);
        name = id.parts[0];
        if (!name) {
          this.opcode("pushContext");
        } else {
          this.opcode("lookupOnContext", id.parts[0]);
        }
        i = 1;
        l = id.parts.length;
        _results = [];
        while (i < l) {
          this.opcode("lookup", id.parts[i]);
          _results.push(i++);
        }
        return _results;
      },
      DATA: function(data) {
        this.options.data = true;
        return this.opcode("lookupData", data.id);
      },
      STRING: function(string) {
        return this.opcode("pushString", string.string);
      },
      INTEGER: function(integer) {
        return this.opcode("pushLiteral", integer.integer);
      },
      BOOLEAN: function(bool) {
        return this.opcode("pushLiteral", bool.bool);
      },
      comment: function() {},
      opcode: function(name) {
        return this.opcodes.push({
          opcode: name,
          args: [].slice.call(arguments_, 1)
        });
      },
      declare: function(name, value) {
        return this.opcodes.push({
          opcode: "DECLARE",
          name: name,
          value: value
        });
      },
      addDepth: function(depth) {
        if (isNaN(depth)) {
          throw new Error("EWOT");
        }
        if (depth === 0) {
          return;
        }
        if (!this.depths[depth]) {
          this.depths[depth] = true;
          return this.depths.list.push(depth);
        }
      },
      classifyMustache: function(mustache) {
        var isEligible, isHelper, name, options;
        isHelper = mustache.isHelper;
        isEligible = mustache.eligibleHelper;
        options = this.options;
        if (isEligible && !isHelper) {
          name = mustache.id.parts[0];
          if (options.knownHelpers[name]) {
            isHelper = true;
          } else {
            if (options.knownHelpersOnly) {
              isEligible = false;
            }
          }
        }
        if (isHelper) {
          return "helper";
        } else if (isEligible) {
          return "ambiguous";
        } else {
          return "simple";
        }
      },
      pushParams: function(params) {
        var i, param, _results;
        i = params.length;
        param = void 0;
        _results = [];
        while (i--) {
          param = params[i];
          if (this.options.stringParams) {
            if (param.depth) {
              this.addDepth(param.depth);
            }
            this.opcode("getContext", param.depth || 0);
            _results.push(this.opcode("pushStringParam", param.string));
          } else {
            _results.push(this[param.type](param));
          }
        }
        return _results;
      },
      setupMustacheParams: function(mustache) {
        var params;
        params = mustache.params;
        this.pushParams(params);
        if (mustache.hash) {
          this.hash(mustache.hash);
        } else {
          this.opcode("pushLiteral", "{}");
        }
        return params;
      },
      setupFullMustacheParams: function(mustache, program, inverse) {
        var params;
        params = mustache.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (mustache.hash) {
          this.hash(mustache.hash);
        } else {
          this.opcode("pushLiteral", "{}");
        }
        return params;
      }
    };
    Literal = function(value) {
      return this.value = value;
    };
    JavaScriptCompiler.prototype = {
      nameLookup: function(parent, name, type) {
        if (/^[0-9]+$/.test(name)) {
          return parent + "[" + name + "]";
        } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
          return parent + "." + name;
        } else {
          return parent + "['" + name + "']";
        }
      },
      appendToBuffer: function(string) {
        if (this.environment.isSimple) {
          return "return " + string + ";";
        } else {
          return "buffer += " + string + ";";
        }
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      namespace: "Handlebars",
      compile: function(environment, options, context, asObject) {
        var l, opcode, opcodes;
        this.environment = environment;
        this.options = options || {};
        Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
          programs: []
        };
        ({
          aliases: {}
        });
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.registers = {
          list: []
        };
        this.compileStack = [];
        this.compileChildren(environment, options);
        opcodes = environment.opcodes;
        opcode = void 0;
        this.i = 0;
        l = opcodes.length;
        while (this.i < l) {
          opcode = opcodes[this.i];
          if (opcode.opcode === "DECLARE") {
            this[opcode.name] = opcode.value;
          } else {
            this[opcode.opcode].apply(this, opcode.args);
          }
          this.i++;
        }
        return this.createFunctionContext(asObject);
      },
      nextOpcode: function() {
        var opcode, opcodes;
        opcodes = this.environment.opcodes;
        opcode = opcodes[this.i + 1];
        return opcodes[this.i + 1];
      },
      eat: function(opcode) {
        return this.i = this.i + 1;
      },
      preamble: function() {
        var copies, namespace, out;
        out = [];
        if (!this.isChild) {
          namespace = this.namespace;
          copies = "helpers = helpers || " + namespace + ".helpers;";
          if (this.environment.usePartial) {
            copies = copies + " partials = partials || " + namespace + ".partials;";
          }
          if (this.options.data) {
            copies = copies + " data = data || {};";
          }
          out.push(copies);
        } else {
          out.push("");
        }
        if (!this.environment.isSimple) {
          out.push(", buffer = " + this.initializeBuffer());
        } else {
          out.push("");
        }
        this.lastContext = 0;
        return this.source = out;
      },
      createFunctionContext: function(asObject) {
        var alias, aliases, functionSource, i, l, locals, params;
        locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) {
          this.source[1] = this.source[1] + ", " + locals.join(", ");
        }
        if (!this.isChild) {
          aliases = [];
          for (alias in this.context.aliases) {
            this.source[1] = this.source[1] + ", " + alias + "=" + this.context.aliases[alias];
          }
        }
        if (this.source[1]) {
          this.source[1] = "var " + this.source[1].substring(2) + ";";
        }
        if (!this.isChild) {
          this.source[1] += "\n" + this.context.programs.join("\n") + "\n";
        }
        if (!this.environment.isSimple) {
          this.source.push("return buffer;");
        }
        params = (this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"]);
        i = 0;
        l = this.environment.depths.list.length;
        while (i < l) {
          params.push("depth" + this.environment.depths.list[i]);
          i++;
        }
        if (asObject) {
          params.push(this.source.join("\n  "));
          return Function.apply(this, params);
        } else {
          functionSource = "function " + (this.name || "") + "(" + params.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
          Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
          return functionSource;
        }
      },
      blockValue: function() {
        var params;
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        params = ["depth0"];
        this.setupParams(0, params);
        return this.replaceStack(function(current) {
          params.splice(1, 0, current);
          return current + " = blockHelperMissing.call(" + params.join(", ") + ")";
        });
      },
      ambiguousBlockValue: function() {
        var current, params;
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        params = ["depth0"];
        this.setupParams(0, params);
        current = this.topStack();
        params.splice(1, 0, current);
        return this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
      },
      appendContent: function(content) {
        return this.source.push(this.appendToBuffer(this.quotedString(content)));
      },
      append: function() {
        var local;
        local = this.popStack();
        this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
        if (this.environment.isSimple) {
          return this.source.push("else { " + this.appendToBuffer("''") + " }");
        }
      },
      appendEscaped: function() {
        var extra, opcode;
        opcode = this.nextOpcode();
        extra = "";
        this.context.aliases.escapeExpression = "this.escapeExpression";
        if (opcode && opcode.opcode === "appendContent") {
          extra = " + " + this.quotedString(opcode.args[0]);
          this.eat(opcode);
        }
        return this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + extra));
      },
      getContext: function(depth) {
        if (this.lastContext !== depth) {
          return this.lastContext = depth;
        }
      },
      lookupOnContext: function(name) {
        return this.pushStack(this.nameLookup("depth" + this.lastContext, name, "context"));
      },
      pushContext: function() {
        return this.pushStackLiteral("depth" + this.lastContext);
      },
      resolvePossibleLambda: function() {
        this.context.aliases.functionType = "\"function\"";
        return this.replaceStack(function(current) {
          return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
        });
      },
      lookup: function(name) {
        return this.replaceStack(function(current) {
          return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, "context");
        });
      },
      lookupData: function(id) {
        return this.pushStack(this.nameLookup("data", id, "data"));
      },
      pushStringParam: function(string) {
        this.pushStackLiteral("depth" + this.lastContext);
        return this.pushString(string);
      },
      pushString: function(string) {
        return this.pushStackLiteral(this.quotedString(string));
      },
      push: function(expr) {
        return this.pushStack(expr);
      },
      pushLiteral: function(value) {
        return this.pushStackLiteral(value);
      },
      pushProgram: function(guid) {
        if (guid != null) {
          return this.pushStackLiteral(this.programExpression(guid));
        } else {
          return this.pushStackLiteral(null);
        }
      },
      invokeHelper: function(paramSize, name) {
        var helper;
        this.context.aliases.helperMissing = "helpers.helperMissing";
        helper = this.lastHelper = this.setupHelper(paramSize, name);
        this.register("foundHelper", helper.name);
        return this.pushStack("foundHelper ? foundHelper.call(" + helper.callParams + ") " + ": helperMissing.call(" + helper.helperMissingParams + ")");
      },
      invokeKnownHelper: function(paramSize, name) {
        var helper;
        helper = this.setupHelper(paramSize, name);
        return this.pushStack(helper.name + ".call(" + helper.callParams + ")");
      },
      invokeAmbiguous: function(name) {
        var helper, helperName, nextStack, nonHelper;
        this.context.aliases.functionType = "\"function\"";
        this.pushStackLiteral("{}");
        helper = this.setupHelper(0, name);
        helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        this.register("foundHelper", helperName);
        nonHelper = this.nameLookup("depth" + this.lastContext, name, "context");
        nextStack = this.nextStack();
        this.source.push("if (foundHelper) { " + nextStack + " = foundHelper.call(" + helper.callParams + "); }");
        return this.source.push("else { " + nextStack + " = " + nonHelper + "; " + nextStack + " = typeof " + nextStack + " === functionType ? " + nextStack + ".apply(depth0) : " + nextStack + "; }");
      },
      invokePartial: function(name) {
        var params;
        params = [this.nameLookup("partials", name, "partial"), "'" + name + "'", this.popStack(), "helpers", "partials"];
        if (this.options.data) {
          params.push("data");
        }
        this.context.aliases.self = "this";
        return this.pushStack("self.invokePartial(" + params.join(", ") + ");");
      },
      assignToHash: function(key) {
        var hash, value;
        value = this.popStack();
        hash = this.topStack();
        return this.source.push(hash + "['" + key + "'] = " + value + ";");
      },
      compiler: JavaScriptCompiler,
      compileChildren: function(environment, options) {
        var child, children, compiler, i, index, l, _results;
        children = environment.children;
        child = void 0;
        compiler = void 0;
        i = 0;
        l = children.length;
        _results = [];
        while (i < l) {
          child = children[i];
          compiler = new this.compiler();
          this.context.programs.push("");
          index = this.context.programs.length;
          child.index = index;
          child.name = "program" + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          _results.push(i++);
        }
        return _results;
      },
      programExpression: function(guid) {
        var child, depth, depths, i, l, programParams;
        this.context.aliases.self = "this";
        if (guid == null) {
          return "self.noop";
        }
        child = this.environment.children[guid];
        depths = child.depths.list;
        depth = void 0;
        programParams = [child.index, child.name, "data"];
        i = 0;
        l = depths.length;
        while (i < l) {
          depth = depths[i];
          if (depth === 1) {
            programParams.push("depth0");
          } else {
            programParams.push("depth" + (depth - 1));
          }
          i++;
        }
        if (depths.length === 0) {
          return "self.program(" + programParams.join(", ") + ")";
        } else {
          programParams.shift();
          return "self.programWithDepth(" + programParams.join(", ") + ")";
        }
      },
      register: function(name, val) {
        this.useRegister(name);
        return this.source.push(name + " = " + val + ";");
      },
      useRegister: function(name) {
        if (!this.registers[name]) {
          this.registers[name] = true;
          return this.registers.list.push(name);
        }
      },
      pushStackLiteral: function(item) {
        this.compileStack.push(new Literal(item));
        return item;
      },
      pushStack: function(item) {
        this.source.push(this.incrStack() + " = " + item + ";");
        this.compileStack.push("stack" + this.stackSlot);
        return "stack" + this.stackSlot;
      },
      replaceStack: function(callback) {
        var item;
        item = callback.call(this, this.topStack());
        this.source.push(this.topStack() + " = " + item + ";");
        return "stack" + this.stackSlot;
      },
      nextStack: function(skipCompileStack) {
        var name;
        name = this.incrStack();
        this.compileStack.push("stack" + this.stackSlot);
        return name;
      },
      incrStack: function() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) {
          this.stackVars.push("stack" + this.stackSlot);
        }
        return "stack" + this.stackSlot;
      },
      popStack: function() {
        var item;
        item = this.compileStack.pop();
        if (item instanceof Literal) {
          return item.value;
        } else {
          this.stackSlot--;
          return item;
        }
      },
      topStack: function() {
        var item;
        item = this.compileStack[this.compileStack.length - 1];
        if (item instanceof Literal) {
          return item.value;
        } else {
          return item;
        }
      },
      quotedString: function(str) {
        return "\"" + str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n").replace(/\r/g, "\\r") + "\"";
      },
      setupHelper: function(paramSize, name) {
        var foundHelper, params;
        params = [];
        this.setupParams(paramSize, params);
        foundHelper = this.nameLookup("helpers", name, "helper");
        return {
          params: params,
          name: foundHelper,
          callParams: ["depth0"].concat(params).join(", "),
          helperMissingParams: ["depth0", this.quotedString(name)].concat(params).join(", ")
        };
      },
      setupParams: function(paramSize, params) {
        var contexts, i, inverse, options, param, program;
        options = [];
        contexts = [];
        param = void 0;
        inverse = void 0;
        program = void 0;
        options.push("hash:" + this.popStack());
        inverse = this.popStack();
        program = this.popStack();
        if (program || inverse) {
          if (!program) {
            this.context.aliases.self = "this";
            program = "self.noop";
          }
          if (!inverse) {
            this.context.aliases.self = "this";
            inverse = "self.noop";
          }
          options.push("inverse:" + inverse);
          options.push("fn:" + program);
        }
        i = 0;
        while (i < paramSize) {
          param = this.popStack();
          params.push(param);
          if (this.options.stringParams) {
            contexts.push(this.popStack());
          }
          i++;
        }
        if (this.options.stringParams) {
          options.push("contexts:[" + contexts.join(",") + "]");
        }
        if (this.options.data) {
          options.push("data:data");
        }
        params.push("{" + options.join(",") + "}");
        return params.join(", ");
      }
    };
    reservedWords = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
    compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    i = 0;
    l = reservedWords.length;
    while (i < l) {
      compilerWords[reservedWords[i]] = true;
      i++;
    }
    return JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
      if (!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
        return true;
      }
      return false;
    };
  })(Handlebars.Compiler, Handlebars.JavaScriptCompiler);
  Handlebars.precompile = function(string, options) {
    var ast, environment;
    options = options || {};
    ast = Handlebars.parse(string);
    environment = new Handlebars.Compiler().compile(ast, options);
    return new Handlebars.JavaScriptCompiler().compile(environment, options);
  };
  Handlebars.compile = function(string, options) {
    var compile, compiled;
    compile = function() {
      var ast, environment, templateSpec;
      ast = Handlebars.parse(string);
      environment = new Handlebars.Compiler().compile(ast, options);
      templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, true);
      return Handlebars.template(templateSpec);
    };
    options = options || {};
    compiled = void 0;
    return function(context, options) {
      if (!compiled) {
        compiled = compile();
      }
      return compiled.call(this, context, options);
    };
  };
  Handlebars.VM = {
    template: function(templateSpec) {
      var container;
      container = {
        escapeExpression: Handlebars.Utils.escapeExpression,
        invokePartial: Handlebars.VM.invokePartial,
        programs: [],
        program: function(i, fn, data) {
          var programWrapper;
          programWrapper = this.programs[i];
          if (data) {
            return Handlebars.VM.program(fn, data);
          } else if (programWrapper) {
            return programWrapper;
          } else {
            programWrapper = this.programs[i] = Handlebars.VM.program(fn);
            return programWrapper;
          }
        },
        programWithDepth: Handlebars.VM.programWithDepth,
        noop: Handlebars.VM.noop
      };
      return function(context, options) {
        options = options || {};
        return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
      };
    },
    programWithDepth: function(fn, data, $depth) {
      var args;
      args = Array.prototype.slice.call(arguments_, 2);
      return function(context, options) {
        options = options || {};
        return fn.apply(this, [context, options.data || data].concat(args));
      };
    },
    program: function(fn, data) {
      return function(context, options) {
        options = options || {};
        return fn(context, options.data || data);
      };
    },
    noop: function() {
      return "";
    },
    invokePartial: function(partial, name, context, helpers, partials, data) {
      var options;
      options = {
        helpers: helpers,
        partials: partials,
        data: data
      };
      if (partial === undefined) {
        throw new Handlebars.Exception("The partial " + name + " could not be found");
      } else if (partial instanceof Function) {
        return partial(context, options);
      } else if (!Handlebars.compile) {
        throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      } else {
        partials[name] = Handlebars.compile(partial, {
          data: data !== undefined
        });
        return partials[name](context, options);
      }
    }
  };
  Handlebars.template = Handlebars.VM.template;
  return define(function() {
    return Handlebars;
  });
})();
