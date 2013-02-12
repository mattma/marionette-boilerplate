# lib/handlebars/base.js
(->
  
  #jshint eqnull:true
  Handlebars = {}
  ((Handlebars) ->
    Handlebars.VERSION = "1.0.rc.1"
    Handlebars.helpers = {}
    Handlebars.partials = {}
    Handlebars.registerHelper = (name, fn, inverse) ->
      fn.not = inverse  if inverse
      @helpers[name] = fn

    Handlebars.registerPartial = (name, str) ->
      @partials[name] = str

    Handlebars.registerHelper "helperMissing", (arg) ->
      if arguments_.length is 2
        `undefined`
      else
        throw new Error("Could not find property '" + arg + "'")

    toString = Object::toString
    functionType = "[object Function]"
    Handlebars.registerHelper "blockHelperMissing", (context, options) ->
      inverse = options.inverse or ->

      fn = options.fn
      ret = ""
      type = toString.call(context)
      context = context.call(this)  if type is functionType
      if context is true
        fn this
      else if context is false or not context?
        inverse this
      else if type is "[object Array]"
        if context.length > 0
          Handlebars.helpers.each context, options
        else
          inverse this
      else
        fn context

    Handlebars.K = ->

    Handlebars.createFrame = Object.create or (object) ->
      Handlebars.K:: = object
      obj = new Handlebars.K()
      Handlebars.K:: = null
      obj

    Handlebars.registerHelper "each", (context, options) ->
      fn = options.fn
      inverse = options.inverse
      ret = ""
      data = undefined
      data = Handlebars.createFrame(options.data)  if options.data
      if context and context.length > 0
        i = 0
        j = context.length

        while i < j
          data.index = i  if data
          ret = ret + fn(context[i],
            data: data
          )
          i++
      else
        ret = inverse(this)
      ret

    Handlebars.registerHelper "if", (context, options) ->
      type = toString.call(context)
      context = context.call(this)  if type is functionType
      if not context or Handlebars.Utils.isEmpty(context)
        options.inverse this
      else
        options.fn this

    Handlebars.registerHelper "unless", (context, options) ->
      fn = options.fn
      inverse = options.inverse
      options.fn = inverse
      options.inverse = fn
      Handlebars.helpers["if"].call this, context, options

    Handlebars.registerHelper "with", (context, options) ->
      options.fn context

    Handlebars.registerHelper "log", (context) ->
      Handlebars.log context

  ) Handlebars
  
  #>>excludeStart('excludeHbsParser', pragmas.excludeHbsParser)
  # lib/handlebars/compiler/parser.js
  # Jison generated parser 
  handlebars = (->
    
    # Jison generated lexer 
    
    #this.yyleng -= len;
    #ignore whitespace
    Parser = ->
      @yy = {}
    parser =
      trace: trace = ->

      yy: {}
      symbols_:
        error: 2
        root: 3
        program: 4
        EOF: 5
        statements: 6
        simpleInverse: 7
        statement: 8
        openInverse: 9
        closeBlock: 10
        openBlock: 11
        mustache: 12
        partial: 13
        CONTENT: 14
        COMMENT: 15
        OPEN_BLOCK: 16
        inMustache: 17
        CLOSE: 18
        OPEN_INVERSE: 19
        OPEN_ENDBLOCK: 20
        path: 21
        OPEN: 22
        OPEN_UNESCAPED: 23
        OPEN_PARTIAL: 24
        params: 25
        hash: 26
        DATA: 27
        param: 28
        STRING: 29
        INTEGER: 30
        BOOLEAN: 31
        hashSegments: 32
        hashSegment: 33
        ID: 34
        EQUALS: 35
        pathSegments: 36
        SEP: 37
        $accept: 0
        $end: 1

      terminals_:
        2: "error"
        5: "EOF"
        14: "CONTENT"
        15: "COMMENT"
        16: "OPEN_BLOCK"
        18: "CLOSE"
        19: "OPEN_INVERSE"
        20: "OPEN_ENDBLOCK"
        22: "OPEN"
        23: "OPEN_UNESCAPED"
        24: "OPEN_PARTIAL"
        27: "DATA"
        29: "STRING"
        30: "INTEGER"
        31: "BOOLEAN"
        34: "ID"
        35: "EQUALS"
        37: "SEP"

      productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [25, 2], [25, 1], [28, 1], [28, 1], [28, 1], [28, 1], [28, 1], [26, 1], [32, 2], [32, 1], [33, 3], [33, 3], [33, 3], [33, 3], [33, 3], [21, 1], [36, 3], [36, 1]]
      performAction: anonymous = (yytext, yyleng, yylineno, yy, yystate, $$, _$) ->
        $0 = $$.length - 1
        switch yystate
          when 1
            return $$[$0 - 1]
          when 2
            @$ = new yy.ProgramNode($$[$0 - 2], $$[$0])
          when 3
            @$ = new yy.ProgramNode($$[$0])
          when 4
            @$ = new yy.ProgramNode([])
          when 5
            @$ = [$$[$0]]
          when 6
            $$[$0 - 1].push $$[$0]
            @$ = $$[$0 - 1]
          when 7
            @$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0])
          when 8
            @$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0])
          when 9
            @$ = $$[$0]
          when 10
            @$ = $$[$0]
          when 11
            @$ = new yy.ContentNode($$[$0])
          when 12
            @$ = new yy.CommentNode($$[$0])
          when 13
            @$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1])
          when 14
            @$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1])
          when 15
            @$ = $$[$0 - 1]
          when 16
            @$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1])
          when 17
            @$ = new yy.MustacheNode($$[$0 - 1][0], $$[$0 - 1][1], true)
          when 18
            @$ = new yy.PartialNode($$[$0 - 1])
          when 19
            @$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1])
          when 20, 21
            @$ = [[$$[$0 - 2]].concat($$[$0 - 1]), $$[$0]]
          when 22
            @$ = [[$$[$0 - 1]].concat($$[$0]), null]
          when 23
            @$ = [[$$[$0 - 1]], $$[$0]]
          when 24
            @$ = [[$$[$0]], null]
          when 25
            @$ = [[new yy.DataNode($$[$0])], null]
          when 26
            $$[$0 - 1].push $$[$0]
            @$ = $$[$0 - 1]
          when 27
            @$ = [$$[$0]]
          when 28
            @$ = $$[$0]
          when 29
            @$ = new yy.StringNode($$[$0])
          when 30
            @$ = new yy.IntegerNode($$[$0])
          when 31
            @$ = new yy.BooleanNode($$[$0])
          when 32
            @$ = new yy.DataNode($$[$0])
          when 33
            @$ = new yy.HashNode($$[$0])
          when 34
            $$[$0 - 1].push $$[$0]
            @$ = $$[$0 - 1]
          when 35
            @$ = [$$[$0]]
          when 36
            @$ = [$$[$0 - 2], $$[$0]]
          when 37
            @$ = [$$[$0 - 2], new yy.StringNode($$[$0])]
          when 38
            @$ = [$$[$0 - 2], new yy.IntegerNode($$[$0])]
          when 39
            @$ = [$$[$0 - 2], new yy.BooleanNode($$[$0])]
          when 40
            @$ = [$$[$0 - 2], new yy.DataNode($$[$0])]
          when 41
            @$ = new yy.IdNode($$[$0])
          when 42
            $$[$0 - 2].push $$[$0]
            @$ = $$[$0 - 2]
          when 43
            @$ = [$$[$0]]

      table: [
        3: 1
        4: 2
        5: [2, 4]
        6: 3
        8: 4
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 11]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        1: [3]
      ,
        5: [1, 16]
      ,
        5: [2, 3]
        7: 17
        8: 18
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 19]
        20: [2, 3]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        5: [2, 5]
        14: [2, 5]
        15: [2, 5]
        16: [2, 5]
        19: [2, 5]
        20: [2, 5]
        22: [2, 5]
        23: [2, 5]
        24: [2, 5]
      ,
        4: 20
        6: 3
        8: 4
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 11]
        20: [2, 4]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        4: 21
        6: 3
        8: 4
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 11]
        20: [2, 4]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        5: [2, 9]
        14: [2, 9]
        15: [2, 9]
        16: [2, 9]
        19: [2, 9]
        20: [2, 9]
        22: [2, 9]
        23: [2, 9]
        24: [2, 9]
      ,
        5: [2, 10]
        14: [2, 10]
        15: [2, 10]
        16: [2, 10]
        19: [2, 10]
        20: [2, 10]
        22: [2, 10]
        23: [2, 10]
        24: [2, 10]
      ,
        5: [2, 11]
        14: [2, 11]
        15: [2, 11]
        16: [2, 11]
        19: [2, 11]
        20: [2, 11]
        22: [2, 11]
        23: [2, 11]
        24: [2, 11]
      ,
        5: [2, 12]
        14: [2, 12]
        15: [2, 12]
        16: [2, 12]
        19: [2, 12]
        20: [2, 12]
        22: [2, 12]
        23: [2, 12]
        24: [2, 12]
      ,
        17: 22
        21: 23
        27: [1, 24]
        34: [1, 26]
        36: 25
      ,
        17: 27
        21: 23
        27: [1, 24]
        34: [1, 26]
        36: 25
      ,
        17: 28
        21: 23
        27: [1, 24]
        34: [1, 26]
        36: 25
      ,
        17: 29
        21: 23
        27: [1, 24]
        34: [1, 26]
        36: 25
      ,
        21: 30
        34: [1, 26]
        36: 25
      ,
        1: [2, 1]
      ,
        6: 31
        8: 4
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 11]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        5: [2, 6]
        14: [2, 6]
        15: [2, 6]
        16: [2, 6]
        19: [2, 6]
        20: [2, 6]
        22: [2, 6]
        23: [2, 6]
        24: [2, 6]
      ,
        17: 22
        18: [1, 32]
        21: 23
        27: [1, 24]
        34: [1, 26]
        36: 25
      ,
        10: 33
        20: [1, 34]
      ,
        10: 35
        20: [1, 34]
      ,
        18: [1, 36]
      ,
        18: [2, 24]
        21: 41
        25: 37
        26: 38
        27: [1, 45]
        28: 39
        29: [1, 42]
        30: [1, 43]
        31: [1, 44]
        32: 40
        33: 46
        34: [1, 47]
        36: 25
      ,
        18: [2, 25]
      ,
        18: [2, 41]
        27: [2, 41]
        29: [2, 41]
        30: [2, 41]
        31: [2, 41]
        34: [2, 41]
        37: [1, 48]
      ,
        18: [2, 43]
        27: [2, 43]
        29: [2, 43]
        30: [2, 43]
        31: [2, 43]
        34: [2, 43]
        37: [2, 43]
      ,
        18: [1, 49]
      ,
        18: [1, 50]
      ,
        18: [1, 51]
      ,
        18: [1, 52]
        21: 53
        34: [1, 26]
        36: 25
      ,
        5: [2, 2]
        8: 18
        9: 5
        11: 6
        12: 7
        13: 8
        14: [1, 9]
        15: [1, 10]
        16: [1, 12]
        19: [1, 11]
        20: [2, 2]
        22: [1, 13]
        23: [1, 14]
        24: [1, 15]
      ,
        14: [2, 20]
        15: [2, 20]
        16: [2, 20]
        19: [2, 20]
        22: [2, 20]
        23: [2, 20]
        24: [2, 20]
      ,
        5: [2, 7]
        14: [2, 7]
        15: [2, 7]
        16: [2, 7]
        19: [2, 7]
        20: [2, 7]
        22: [2, 7]
        23: [2, 7]
        24: [2, 7]
      ,
        21: 54
        34: [1, 26]
        36: 25
      ,
        5: [2, 8]
        14: [2, 8]
        15: [2, 8]
        16: [2, 8]
        19: [2, 8]
        20: [2, 8]
        22: [2, 8]
        23: [2, 8]
        24: [2, 8]
      ,
        14: [2, 14]
        15: [2, 14]
        16: [2, 14]
        19: [2, 14]
        20: [2, 14]
        22: [2, 14]
        23: [2, 14]
        24: [2, 14]
      ,
        18: [2, 22]
        21: 41
        26: 55
        27: [1, 45]
        28: 56
        29: [1, 42]
        30: [1, 43]
        31: [1, 44]
        32: 40
        33: 46
        34: [1, 47]
        36: 25
      ,
        18: [2, 23]
      ,
        18: [2, 27]
        27: [2, 27]
        29: [2, 27]
        30: [2, 27]
        31: [2, 27]
        34: [2, 27]
      ,
        18: [2, 33]
        33: 57
        34: [1, 58]
      ,
        18: [2, 28]
        27: [2, 28]
        29: [2, 28]
        30: [2, 28]
        31: [2, 28]
        34: [2, 28]
      ,
        18: [2, 29]
        27: [2, 29]
        29: [2, 29]
        30: [2, 29]
        31: [2, 29]
        34: [2, 29]
      ,
        18: [2, 30]
        27: [2, 30]
        29: [2, 30]
        30: [2, 30]
        31: [2, 30]
        34: [2, 30]
      ,
        18: [2, 31]
        27: [2, 31]
        29: [2, 31]
        30: [2, 31]
        31: [2, 31]
        34: [2, 31]
      ,
        18: [2, 32]
        27: [2, 32]
        29: [2, 32]
        30: [2, 32]
        31: [2, 32]
        34: [2, 32]
      ,
        18: [2, 35]
        34: [2, 35]
      ,
        18: [2, 43]
        27: [2, 43]
        29: [2, 43]
        30: [2, 43]
        31: [2, 43]
        34: [2, 43]
        35: [1, 59]
        37: [2, 43]
      ,
        34: [1, 60]
      ,
        14: [2, 13]
        15: [2, 13]
        16: [2, 13]
        19: [2, 13]
        20: [2, 13]
        22: [2, 13]
        23: [2, 13]
        24: [2, 13]
      ,
        5: [2, 16]
        14: [2, 16]
        15: [2, 16]
        16: [2, 16]
        19: [2, 16]
        20: [2, 16]
        22: [2, 16]
        23: [2, 16]
        24: [2, 16]
      ,
        5: [2, 17]
        14: [2, 17]
        15: [2, 17]
        16: [2, 17]
        19: [2, 17]
        20: [2, 17]
        22: [2, 17]
        23: [2, 17]
        24: [2, 17]
      ,
        5: [2, 18]
        14: [2, 18]
        15: [2, 18]
        16: [2, 18]
        19: [2, 18]
        20: [2, 18]
        22: [2, 18]
        23: [2, 18]
        24: [2, 18]
      ,
        18: [1, 61]
      ,
        18: [1, 62]
      ,
        18: [2, 21]
      ,
        18: [2, 26]
        27: [2, 26]
        29: [2, 26]
        30: [2, 26]
        31: [2, 26]
        34: [2, 26]
      ,
        18: [2, 34]
        34: [2, 34]
      ,
        35: [1, 59]
      ,
        21: 63
        27: [1, 67]
        29: [1, 64]
        30: [1, 65]
        31: [1, 66]
        34: [1, 26]
        36: 25
      ,
        18: [2, 42]
        27: [2, 42]
        29: [2, 42]
        30: [2, 42]
        31: [2, 42]
        34: [2, 42]
        37: [2, 42]
      ,
        5: [2, 19]
        14: [2, 19]
        15: [2, 19]
        16: [2, 19]
        19: [2, 19]
        20: [2, 19]
        22: [2, 19]
        23: [2, 19]
        24: [2, 19]
      ,
        5: [2, 15]
        14: [2, 15]
        15: [2, 15]
        16: [2, 15]
        19: [2, 15]
        20: [2, 15]
        22: [2, 15]
        23: [2, 15]
        24: [2, 15]
      ,
        18: [2, 36]
        34: [2, 36]
      ,
        18: [2, 37]
        34: [2, 37]
      ,
        18: [2, 38]
        34: [2, 38]
      ,
        18: [2, 39]
        34: [2, 39]
      ,
        18: [2, 40]
        34: [2, 40]
      ]
      defaultActions:
        16: [2, 1]
        24: [2, 25]
        38: [2, 23]
        55: [2, 21]

      parseError: parseError = (str, hash) ->
        throw new Error(str)

      parse: parse = (input) ->
        popStack = (n) ->
          stack.length = stack.length - 2 * n
          vstack.length = vstack.length - n
          lstack.length = lstack.length - n
        lex = ->
          token = undefined
          token = self.lexer.lex() or 1
          token = self.symbols_[token] or token  if typeof token isnt "number"
          token
        self = this
        stack = [0]
        vstack = [null]
        lstack = []
        table = @table
        yytext = ""
        yylineno = 0
        yyleng = 0
        recovering = 0
        TERROR = 2
        EOF = 1
        @lexer.setInput input
        @lexer.yy = @yy
        @yy.lexer = @lexer
        @yy.parser = this
        @lexer.yylloc = {}  if typeof @lexer.yylloc is "undefined"
        yyloc = @lexer.yylloc
        lstack.push yyloc
        ranges = @lexer.options and @lexer.options.ranges
        @parseError = @yy.parseError  if typeof @yy.parseError is "function"
        symbol = undefined
        preErrorSymbol = undefined
        state = undefined
        action = undefined
        a = undefined
        r = undefined
        yyval = {}
        p = undefined
        len = undefined
        newState = undefined
        expected = undefined
        loop
          state = stack[stack.length - 1]
          if @defaultActions[state]
            action = @defaultActions[state]
          else
            symbol = lex()  if symbol is null or typeof symbol is "undefined"
            action = table[state] and table[state][symbol]
          if typeof action is "undefined" or not action.length or not action[0]
            errStr = ""
            unless recovering
              expected = []
              for p of table[state]
                expected.push "'" + @terminals_[p] + "'"  if @terminals_[p] and p > 2
              if @lexer.showPosition
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + @lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (@terminals_[symbol] or symbol) + "'"
              else
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + ((if symbol is 1 then "end of input" else "'" + (@terminals_[symbol] or symbol) + "'"))
              @parseError errStr,
                text: @lexer.match
                token: @terminals_[symbol] or symbol
                line: @lexer.yylineno
                loc: yyloc
                expected: expected

          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol)  if action[0] instanceof Array and action.length > 1
          switch action[0]
            when 1
              stack.push symbol
              vstack.push @lexer.yytext
              lstack.push @lexer.yylloc
              stack.push action[1]
              symbol = null
              unless preErrorSymbol
                yyleng = @lexer.yyleng
                yytext = @lexer.yytext
                yylineno = @lexer.yylineno
                yyloc = @lexer.yylloc
                recovering--  if recovering > 0
              else
                symbol = preErrorSymbol
                preErrorSymbol = null
            when 2
              len = @productions_[action[1]][1]
              yyval.$ = vstack[vstack.length - len]
              yyval._$ =
                first_line: lstack[lstack.length - (len or 1)].first_line
                last_line: lstack[lstack.length - 1].last_line
                first_column: lstack[lstack.length - (len or 1)].first_column
                last_column: lstack[lstack.length - 1].last_column

              yyval._$.range = [lstack[lstack.length - (len or 1)].range[0], lstack[lstack.length - 1].range[1]]  if ranges
              r = @performAction.call(yyval, yytext, yyleng, yylineno, @yy, action[1], vstack, lstack)
              return r  if typeof r isnt "undefined"
              if len
                stack = stack.slice(0, -1 * len * 2)
                vstack = vstack.slice(0, -1 * len)
                lstack = lstack.slice(0, -1 * len)
              stack.push @productions_[action[1]][0]
              vstack.push yyval.$
              lstack.push yyval._$
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]]
              stack.push newState
            when 3
              return true
        true

    lexer = (->
      lexer = (
        EOF: 1
        parseError: parseError = (str, hash) ->
          if @yy.parser
            @yy.parser.parseError str, hash
          else
            throw new Error(str)

        setInput: (input) ->
          @_input = input
          @_more = @_less = @done = false
          @yylineno = @yyleng = 0
          @yytext = @matched = @match = ""
          @conditionStack = ["INITIAL"]
          @yylloc =
            first_line: 1
            first_column: 0
            last_line: 1
            last_column: 0

          @yylloc.range = [0, 0]  if @options.ranges
          @offset = 0
          this

        input: ->
          ch = @_input[0]
          @yytext += ch
          @yyleng++
          @offset++
          @match += ch
          @matched += ch
          lines = ch.match(/(?:\r\n?|\n).*/g)
          if lines
            @yylineno++
            @yylloc.last_line++
          else
            @yylloc.last_column++
          @yylloc.range[1]++  if @options.ranges
          @_input = @_input.slice(1)
          ch

        unput: (ch) ->
          len = ch.length
          lines = ch.split(/(?:\r\n?|\n)/g)
          @_input = ch + @_input
          @yytext = @yytext.substr(0, @yytext.length - len - 1)
          @offset -= len
          oldLines = @match.split(/(?:\r\n?|\n)/g)
          @match = @match.substr(0, @match.length - 1)
          @matched = @matched.substr(0, @matched.length - 1)
          @yylineno -= lines.length - 1  if lines.length - 1
          r = @yylloc.range
          @yylloc =
            first_line: @yylloc.first_line
            last_line: @yylineno + 1
            first_column: @yylloc.first_column
            last_column: (if lines then ((if lines.length is oldLines.length then @yylloc.first_column else 0)) + oldLines[oldLines.length - lines.length].length - lines[0].length else @yylloc.first_column - len)

          @yylloc.range = [r[0], r[0] + @yyleng - len]  if @options.ranges
          this

        more: ->
          @_more = true
          this

        less: (n) ->
          @unput @match.slice(n)

        pastInput: ->
          past = @matched.substr(0, @matched.length - @match.length)
          ((if past.length > 20 then "..." else "")) + past.substr(-20).replace(/\n/g, "")

        upcomingInput: ->
          next = @match
          next += @_input.substr(0, 20 - next.length)  if next.length < 20
          (next.substr(0, 20) + ((if next.length > 20 then "..." else ""))).replace /\n/g, ""

        showPosition: ->
          pre = @pastInput()
          c = new Array(pre.length + 1).join("-")
          pre + @upcomingInput() + "\n" + c + "^"

        next: ->
          return @EOF  if @done
          @done = true  unless @_input
          token = undefined
          match = undefined
          tempMatch = undefined
          index = undefined
          col = undefined
          lines = undefined
          unless @_more
            @yytext = ""
            @match = ""
          rules = @_currentRules()
          i = 0

          while i < rules.length
            tempMatch = @_input.match(@rules[rules[i]])
            if tempMatch and (not match or tempMatch[0].length > match[0].length)
              match = tempMatch
              index = i
              break  unless @options.flex
            i++
          if match
            lines = match[0].match(/(?:\r\n?|\n).*/g)
            @yylineno += lines.length  if lines
            @yylloc =
              first_line: @yylloc.last_line
              last_line: @yylineno + 1
              first_column: @yylloc.last_column
              last_column: (if lines then lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length else @yylloc.last_column + match[0].length)

            @yytext += match[0]
            @match += match[0]
            @matches = match
            @yyleng = @yytext.length
            @yylloc.range = [@offset, @offset += @yyleng]  if @options.ranges
            @_more = false
            @_input = @_input.slice(match[0].length)
            @matched += match[0]
            token = @performAction.call(this, @yy, this, rules[index], @conditionStack[@conditionStack.length - 1])
            @done = false  if @done and @_input
            if token
              return token
            else
              return
          if @_input is ""
            @EOF
          else
            @parseError "Lexical error on line " + (@yylineno + 1) + ". Unrecognized text.\n" + @showPosition(),
              text: ""
              token: null
              line: @yylineno


        lex: lex = ->
          r = @next()
          if typeof r isnt "undefined"
            r
          else
            @lex()

        begin: begin = (condition) ->
          @conditionStack.push condition

        popState: popState = ->
          @conditionStack.pop()

        _currentRules: _currentRules = ->
          @conditions[@conditionStack[@conditionStack.length - 1]].rules

        topState: ->
          @conditionStack[@conditionStack.length - 2]

        pushState: begin = (condition) ->
          @begin condition
      )
      lexer.options = {}
      lexer.performAction = anonymous = (yy, yy_, $avoiding_name_collisions, YY_START) ->
        YYSTATE = YY_START
        switch $avoiding_name_collisions
          when 0
            @begin "mu"  if yy_.yytext.slice(-1) isnt "\\"
            if yy_.yytext.slice(-1) is "\\"
              yy_.yytext = yy_.yytext.substr(0, yy_.yyleng - 1)
              @begin("emu")
            return 14  if yy_.yytext
          when 1
            return 14
          when 2
            @popState()  if yy_.yytext.slice(-1) isnt "\\"
            yy_.yytext = yy_.yytext.substr(0, yy_.yyleng - 1)  if yy_.yytext.slice(-1) is "\\"
            return 14
          when 3
            return 24
          when 4
            return 16
          when 5
            return 20
          when 6
            return 19
          when 7
            return 19
          when 8
            return 23
          when 9
            return 23
          when 10
            yy_.yytext = yy_.yytext.substr(3, yy_.yyleng - 5)
            @popState()
            return 15
          when 11
            return 22
          when 12
            return 35
          when 13
            return 34
          when 14
            return 34
          when 15
            return 37
          when 16, 17
            @popState()
            return 18
          when 18
            @popState()
            return 18
          when 19
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2).replace(/\\"/g, "\"")
            return 29
          when 20
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2).replace(/\\"/g, "\"")
            return 29
          when 21
            yy_.yytext = yy_.yytext.substr(1)
            return 27
          when 22
            return 31
          when 23
            return 31
          when 24
            return 30
          when 25
            return 34
          when 26
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2)
            return 34
          when 27
            return "INVALID"
          when 28
            return 5

      lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/]
      lexer.conditions =
        mu:
          rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
          inclusive: false

        emu:
          rules: [2]
          inclusive: false

        INITIAL:
          rules: [0, 1, 28]
          inclusive: true

      lexer
    )()
    parser.lexer = lexer
    Parser:: = parser
    parser.Parser = Parser
    new Parser
  )()
  
  # lib/handlebars/compiler/base.js
  Handlebars.Parser = handlebars
  Handlebars.parse = (string) ->
    Handlebars.Parser.yy = Handlebars.AST
    Handlebars.Parser.parse string

  Handlebars.print = (ast) ->
    new Handlebars.PrintVisitor().accept ast

  Handlebars.logger =
    DEBUG: 0
    INFO: 1
    WARN: 2
    ERROR: 3
    level: 3
    
    # override in the host environment
    log: (level, str) ->

  Handlebars.log = (level, str) ->
    Handlebars.logger.log level, str

  
  # lib/handlebars/compiler/ast.js
  (->
    Handlebars.AST = {}
    Handlebars.AST.ProgramNode = (statements, inverse) ->
      @type = "program"
      @statements = statements
      @inverse = new Handlebars.AST.ProgramNode(inverse)  if inverse

    Handlebars.AST.MustacheNode = (rawParams, hash, unescaped) ->
      @type = "mustache"
      @escaped = not unescaped
      @hash = hash
      id = @id = rawParams[0]
      params = @params = rawParams.slice(1)
      
      # a mustache is an eligible helper if:
      # * its id is simple (a single part, not `this` or `..`)
      eligibleHelper = @eligibleHelper = id.isSimple
      
      # a mustache is definitely a helper if:
      # * it is an eligible helper, and
      # * it has at least one parameter or hash segment
      @isHelper = eligibleHelper and (params.length or hash)

    
    # if a mustache is an eligible helper but not a definite
    # helper, it is ambiguous, and will be resolved in a later
    # pass or at runtime.
    Handlebars.AST.PartialNode = (id, context) ->
      @type = "partial"
      
      # TODO: disallow complex IDs
      @id = id
      @context = context

    verifyMatch = (open, close) ->
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original)  if open.original isnt close.original

    Handlebars.AST.BlockNode = (mustache, program, inverse, close) ->
      verifyMatch mustache.id, close
      @type = "block"
      @mustache = mustache
      @program = program
      @inverse = inverse
      @isInverse = true  if @inverse and not @program

    Handlebars.AST.ContentNode = (string) ->
      @type = "content"
      @string = string

    Handlebars.AST.HashNode = (pairs) ->
      @type = "hash"
      @pairs = pairs

    Handlebars.AST.IdNode = (parts) ->
      @type = "ID"
      @original = parts.join(".")
      dig = []
      depth = 0
      i = 0
      l = parts.length

      while i < l
        part = parts[i]
        if part is ".."
          depth++
        else if part is "." or part is "this"
          @isScoped = true
        else
          dig.push part
        i++
      @parts = dig
      @string = dig.join(".")
      @depth = depth
      
      # an ID is simple if it only has one part, and that part is not
      # `..` or `this`.
      @isSimple = parts.length is 1 and not @isScoped and depth is 0

    Handlebars.AST.DataNode = (id) ->
      @type = "DATA"
      @id = id

    Handlebars.AST.StringNode = (string) ->
      @type = "STRING"
      @string = string

    Handlebars.AST.IntegerNode = (integer) ->
      @type = "INTEGER"
      @integer = integer

    Handlebars.AST.BooleanNode = (bool) ->
      @type = "BOOLEAN"
      @bool = bool

    Handlebars.AST.CommentNode = (comment) ->
      @type = "comment"
      @comment = comment
  )()
  
  #>>excludeEnd('excludeHbsParser')
  # lib/handlebars/utils.js
  Handlebars.Exception = (message) ->
    tmp = Error::constructor.apply(this, arguments_)
    for p of tmp
      this[p] = tmp[p]  if tmp.hasOwnProperty(p)
    @message = tmp.message

  Handlebars.Exception:: = new Error()
  
  # Build out our basic SafeString type
  Handlebars.SafeString = (string) ->
    @string = string

  Handlebars.SafeString::toString = ->
    @string.toString()

  (->
    escape =
      "&": "&amp;"
      "<": "&lt;"
      ">": "&gt;"
      "\"": "&quot;"
      "'": "&#x27;"
      "`": "&#x60;"

    badChars = /[&<>"'`]/g
    possible = /[&<>"'`]/
    escapeChar = (chr) ->
      escape[chr] or "&amp;"

    Handlebars.Utils =
      escapeExpression: (string) ->
        
        # don't escape SafeStrings, since they're already safe
        if string instanceof Handlebars.SafeString
          return string.toString()
        else return ""  if not string? or string is false
        return string  unless possible.test(string)
        string.replace badChars, escapeChar

      isEmpty: (value) ->
        if typeof value is "undefined"
          true
        else if value is null
          true
        else if value is false
          true
        else if Object::toString.call(value) is "[object Array]" and value.length is 0
          true
        else
          false
  )()
  
  # lib/handlebars/compiler/compiler.js
  
  #jshint eqnull:true
  Handlebars.Compiler = ->

  Handlebars.JavaScriptCompiler = ->

  ((Compiler, JavaScriptCompiler) ->
    
    # the foundHelper register will disambiguate helper lookup from finding a
    # function in a context. This is necessary for mustache compatibility, which
    # requires that context functions in blocks are evaluated by blockHelperMissing,
    # and then proceed as if the resulting value was provided to blockHelperMissing.
    Compiler:: =
      compiler: Compiler
      disassemble: ->
        opcodes = @opcodes
        opcode = undefined
        out = []
        params = undefined
        param = undefined
        i = 0
        l = opcodes.length

        while i < l
          opcode = opcodes[i]
          if opcode.opcode is "DECLARE"
            out.push "DECLARE " + opcode.name + "=" + opcode.value
          else
            params = []
            j = 0

            while j < opcode.args.length
              param = opcode.args[j]
              param = "\"" + param.replace("\n", "\\n") + "\""  if typeof param is "string"
              params.push param
              j++
            out.push opcode.opcode + " " + params.join(" ")
          i++
        out.join "\n"

      guid: 0
      compile: (program, options) ->
        @children = []
        @depths = list: []
        @options = options
        
        # These changes will propagate to the other compiler components
        knownHelpers = @options.knownHelpers
        @options.knownHelpers =
          helperMissing: true
          blockHelperMissing: true
          each: true
          if: true
          unless: true
          with: true
          log: true

        if knownHelpers
          for name of knownHelpers
            @options.knownHelpers[name] = knownHelpers[name]
        @program program

      accept: (node) ->
        this[node.type] node

      program: (program) ->
        statements = program.statements
        statement = undefined
        @opcodes = []
        i = 0
        l = statements.length

        while i < l
          statement = statements[i]
          this[statement.type] statement
          i++
        @isSimple = l is 1
        @depths.list = @depths.list.sort((a, b) ->
          a - b
        )
        this

      compileProgram: (program) ->
        result = new @compiler().compile(program, @options)
        guid = @guid++
        depth = undefined
        @usePartial = @usePartial or result.usePartial
        @children[guid] = result
        i = 0
        l = result.depths.list.length

        while i < l
          depth = result.depths.list[i]
          if depth < 2
            continue
          else
            @addDepth depth - 1
          i++
        guid

      block: (block) ->
        mustache = block.mustache
        program = block.program
        inverse = block.inverse
        program = @compileProgram(program)  if program
        inverse = @compileProgram(inverse)  if inverse
        type = @classifyMustache(mustache)
        if type is "helper"
          @helperMustache mustache, program, inverse
        else if type is "simple"
          @simpleMustache mustache
          
          # now that the simple mustache is resolved, we need to
          # evaluate it by executing `blockHelperMissing`
          @opcode "pushProgram", program
          @opcode "pushProgram", inverse
          @opcode "pushLiteral", "{}"
          @opcode "blockValue"
        else
          @ambiguousMustache mustache, program, inverse
          
          # now that the simple mustache is resolved, we need to
          # evaluate it by executing `blockHelperMissing`
          @opcode "pushProgram", program
          @opcode "pushProgram", inverse
          @opcode "pushLiteral", "{}"
          @opcode "ambiguousBlockValue"
        @opcode "append"

      hash: (hash) ->
        pairs = hash.pairs
        pair = undefined
        val = undefined
        @opcode "push", "{}"
        i = 0
        l = pairs.length

        while i < l
          pair = pairs[i]
          val = pair[1]
          @accept val
          @opcode "assignToHash", pair[0]
          i++

      partial: (partial) ->
        id = partial.id
        @usePartial = true
        if partial.context
          @ID partial.context
        else
          @opcode "push", "depth0"
        @opcode "invokePartial", id.original
        @opcode "append"

      content: (content) ->
        @opcode "appendContent", content.string

      mustache: (mustache) ->
        options = @options
        type = @classifyMustache(mustache)
        if type is "simple"
          @simpleMustache mustache
        else if type is "helper"
          @helperMustache mustache
        else
          @ambiguousMustache mustache
        if mustache.escaped and not options.noEscape
          @opcode "appendEscaped"
        else
          @opcode "append"

      ambiguousMustache: (mustache, program, inverse) ->
        id = mustache.id
        name = id.parts[0]
        @opcode "getContext", id.depth
        @opcode "pushProgram", program
        @opcode "pushProgram", inverse
        @opcode "invokeAmbiguous", name

      simpleMustache: (mustache, program, inverse) ->
        id = mustache.id
        if id.type is "DATA"
          @DATA id
        else if id.parts.length
          @ID id
        else
          
          # Simplified ID for `this`
          @addDepth id.depth
          @opcode "getContext", id.depth
          @opcode "pushContext"
        @opcode "resolvePossibleLambda"

      helperMustache: (mustache, program, inverse) ->
        params = @setupFullMustacheParams(mustache, program, inverse)
        name = mustache.id.parts[0]
        if @options.knownHelpers[name]
          @opcode "invokeKnownHelper", params.length, name
        else if @knownHelpersOnly
          throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name)
        else
          @opcode "invokeHelper", params.length, name

      ID: (id) ->
        @addDepth id.depth
        @opcode "getContext", id.depth
        name = id.parts[0]
        unless name
          @opcode "pushContext"
        else
          @opcode "lookupOnContext", id.parts[0]
        i = 1
        l = id.parts.length

        while i < l
          @opcode "lookup", id.parts[i]
          i++

      DATA: (data) ->
        @options.data = true
        @opcode "lookupData", data.id

      STRING: (string) ->
        @opcode "pushString", string.string

      INTEGER: (integer) ->
        @opcode "pushLiteral", integer.integer

      BOOLEAN: (bool) ->
        @opcode "pushLiteral", bool.bool

      comment: ->

      
      # HELPERS
      opcode: (name) ->
        @opcodes.push
          opcode: name
          args: [].slice.call(arguments_, 1)


      declare: (name, value) ->
        @opcodes.push
          opcode: "DECLARE"
          name: name
          value: value


      addDepth: (depth) ->
        throw new Error("EWOT")  if isNaN(depth)
        return  if depth is 0
        unless @depths[depth]
          @depths[depth] = true
          @depths.list.push depth

      classifyMustache: (mustache) ->
        isHelper = mustache.isHelper
        isEligible = mustache.eligibleHelper
        options = @options
        
        # if ambiguous, we can possibly resolve the ambiguity now
        if isEligible and not isHelper
          name = mustache.id.parts[0]
          if options.knownHelpers[name]
            isHelper = true
          else isEligible = false  if options.knownHelpersOnly
        if isHelper
          "helper"
        else if isEligible
          "ambiguous"
        else
          "simple"

      pushParams: (params) ->
        i = params.length
        param = undefined
        while i--
          param = params[i]
          if @options.stringParams
            @addDepth param.depth  if param.depth
            @opcode "getContext", param.depth or 0
            @opcode "pushStringParam", param.string
          else
            this[param.type] param

      setupMustacheParams: (mustache) ->
        params = mustache.params
        @pushParams params
        if mustache.hash
          @hash mustache.hash
        else
          @opcode "pushLiteral", "{}"
        params

      
      # this will replace setupMustacheParams when we're done
      setupFullMustacheParams: (mustache, program, inverse) ->
        params = mustache.params
        @pushParams params
        @opcode "pushProgram", program
        @opcode "pushProgram", inverse
        if mustache.hash
          @hash mustache.hash
        else
          @opcode "pushLiteral", "{}"
        params

    Literal = (value) ->
      @value = value

    JavaScriptCompiler:: =
      
      # PUBLIC API: You can override these methods in a subclass to provide
      # alternative compiled forms for name lookup and buffering semantics
      nameLookup: (parent, name, type) ->
        if /^[0-9]+$/.test(name)
          parent + "[" + name + "]"
        else if JavaScriptCompiler.isValidJavaScriptVariableName(name)
          parent + "." + name
        else
          parent + "['" + name + "']"

      appendToBuffer: (string) ->
        if @environment.isSimple
          "return " + string + ";"
        else
          "buffer += " + string + ";"

      initializeBuffer: ->
        @quotedString ""

      namespace: "Handlebars"
      
      # END PUBLIC API
      compile: (environment, options, context, asObject) ->
        @environment = environment
        @options = options or {}
        Handlebars.log Handlebars.logger.DEBUG, @environment.disassemble() + "\n\n"
        @name = @environment.name
        @isChild = !!context
        @context = context or
          programs: []
          aliases: {}

        @preamble()
        @stackSlot = 0
        @stackVars = []
        @registers = list: []
        @compileStack = []
        @compileChildren environment, options
        opcodes = environment.opcodes
        opcode = undefined
        @i = 0
        l = opcodes.length
        while @i < l
          opcode = opcodes[@i]
          if opcode.opcode is "DECLARE"
            this[opcode.name] = opcode.value
          else
            this[opcode.opcode].apply this, opcode.args
          @i++
        @createFunctionContext asObject

      nextOpcode: ->
        opcodes = @environment.opcodes
        opcode = opcodes[@i + 1]
        opcodes[@i + 1]

      eat: (opcode) ->
        @i = @i + 1

      preamble: ->
        out = []
        unless @isChild
          namespace = @namespace
          copies = "helpers = helpers || " + namespace + ".helpers;"
          copies = copies + " partials = partials || " + namespace + ".partials;"  if @environment.usePartial
          copies = copies + " data = data || {};"  if @options.data
          out.push copies
        else
          out.push ""
        unless @environment.isSimple
          out.push ", buffer = " + @initializeBuffer()
        else
          out.push ""
        
        # track the last context pushed into place to allow skipping the
        # getContext opcode when it would be a noop
        @lastContext = 0
        @source = out

      createFunctionContext: (asObject) ->
        locals = @stackVars.concat(@registers.list)
        @source[1] = @source[1] + ", " + locals.join(", ")  if locals.length > 0
        
        # Generate minimizer alias mappings
        unless @isChild
          aliases = []
          for alias of @context.aliases
            @source[1] = @source[1] + ", " + alias + "=" + @context.aliases[alias]
        @source[1] = "var " + @source[1].substring(2) + ";"  if @source[1]
        
        # Merge children
        @source[1] += "\n" + @context.programs.join("\n") + "\n"  unless @isChild
        @source.push "return buffer;"  unless @environment.isSimple
        params = (if @isChild then ["depth0", "data"] else ["Handlebars", "depth0", "helpers", "partials", "data"])
        i = 0
        l = @environment.depths.list.length

        while i < l
          params.push "depth" + @environment.depths.list[i]
          i++
        if asObject
          params.push @source.join("\n  ")
          Function.apply this, params
        else
          functionSource = "function " + (@name or "") + "(" + params.join(",") + ") {\n  " + @source.join("\n  ") + "}"
          Handlebars.log Handlebars.logger.DEBUG, functionSource + "\n\n"
          functionSource

      
      # [blockValue]
      #
      # On stack, before: hash, inverse, program, value
      # On stack, after: return value of blockHelperMissing
      #
      # The purpose of this opcode is to take a block of the form
      # `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
      # replace it on the stack with the result of properly
      # invoking blockHelperMissing.
      blockValue: ->
        @context.aliases.blockHelperMissing = "helpers.blockHelperMissing"
        params = ["depth0"]
        @setupParams 0, params
        @replaceStack (current) ->
          params.splice 1, 0, current
          current + " = blockHelperMissing.call(" + params.join(", ") + ")"


      
      # [ambiguousBlockValue]
      #
      # On stack, before: hash, inverse, program, value
      # Compiler value, before: lastHelper=value of last found helper, if any
      # On stack, after, if no lastHelper: same as [blockValue]
      # On stack, after, if lastHelper: value
      ambiguousBlockValue: ->
        @context.aliases.blockHelperMissing = "helpers.blockHelperMissing"
        params = ["depth0"]
        @setupParams 0, params
        current = @topStack()
        params.splice 1, 0, current
        @source.push "if (!" + @lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }"

      
      # [appendContent]
      #
      # On stack, before: ...
      # On stack, after: ...
      #
      # Appends the string value of `content` to the current buffer
      appendContent: (content) ->
        @source.push @appendToBuffer(@quotedString(content))

      
      # [append]
      #
      # On stack, before: value, ...
      # On stack, after: ...
      #
      # Coerces `value` to a String and appends it to the current buffer.
      #
      # If `value` is truthy, or 0, it is coerced into a string and appended
      # Otherwise, the empty string is appended
      append: ->
        local = @popStack()
        @source.push "if(" + local + " || " + local + " === 0) { " + @appendToBuffer(local) + " }"
        @source.push "else { " + @appendToBuffer("''") + " }"  if @environment.isSimple

      
      # [appendEscaped]
      #
      # On stack, before: value, ...
      # On stack, after: ...
      #
      # Escape `value` and append it to the buffer
      appendEscaped: ->
        opcode = @nextOpcode()
        extra = ""
        @context.aliases.escapeExpression = "this.escapeExpression"
        if opcode and opcode.opcode is "appendContent"
          extra = " + " + @quotedString(opcode.args[0])
          @eat opcode
        @source.push @appendToBuffer("escapeExpression(" + @popStack() + ")" + extra)

      
      # [getContext]
      #
      # On stack, before: ...
      # On stack, after: ...
      # Compiler value, after: lastContext=depth
      #
      # Set the value of the `lastContext` compiler value to the depth
      getContext: (depth) ->
        @lastContext = depth  if @lastContext isnt depth

      
      # [lookupOnContext]
      #
      # On stack, before: ...
      # On stack, after: currentContext[name], ...
      #
      # Looks up the value of `name` on the current context and pushes
      # it onto the stack.
      lookupOnContext: (name) ->
        @pushStack @nameLookup("depth" + @lastContext, name, "context")

      
      # [pushContext]
      #
      # On stack, before: ...
      # On stack, after: currentContext, ...
      #
      # Pushes the value of the current context onto the stack.
      pushContext: ->
        @pushStackLiteral "depth" + @lastContext

      
      # [resolvePossibleLambda]
      #
      # On stack, before: value, ...
      # On stack, after: resolved value, ...
      #
      # If the `value` is a lambda, replace it on the stack by
      # the return value of the lambda
      resolvePossibleLambda: ->
        @context.aliases.functionType = "\"function\""
        @replaceStack (current) ->
          "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current


      
      # [lookup]
      #
      # On stack, before: value, ...
      # On stack, after: value[name], ...
      #
      # Replace the value on the stack with the result of looking
      # up `name` on `value`
      lookup: (name) ->
        @replaceStack (current) ->
          current + " == null || " + current + " === false ? " + current + " : " + @nameLookup(current, name, "context")


      
      # [lookupData]
      #
      # On stack, before: ...
      # On stack, after: data[id], ...
      #
      # Push the result of looking up `id` on the current data
      lookupData: (id) ->
        @pushStack @nameLookup("data", id, "data")

      
      # [pushStringParam]
      #
      # On stack, before: ...
      # On stack, after: string, currentContext, ...
      #
      # This opcode is designed for use in string mode, which
      # provides the string value of a parameter along with its
      # depth rather than resolving it immediately.
      pushStringParam: (string) ->
        @pushStackLiteral "depth" + @lastContext
        @pushString string

      
      # [pushString]
      #
      # On stack, before: ...
      # On stack, after: quotedString(string), ...
      #
      # Push a quoted version of `string` onto the stack
      pushString: (string) ->
        @pushStackLiteral @quotedString(string)

      
      # [push]
      #
      # On stack, before: ...
      # On stack, after: expr, ...
      #
      # Push an expression onto the stack
      push: (expr) ->
        @pushStack expr

      
      # [pushLiteral]
      #
      # On stack, before: ...
      # On stack, after: value, ...
      #
      # Pushes a value onto the stack. This operation prevents
      # the compiler from creating a temporary variable to hold
      # it.
      pushLiteral: (value) ->
        @pushStackLiteral value

      
      # [pushProgram]
      #
      # On stack, before: ...
      # On stack, after: program(guid), ...
      #
      # Push a program expression onto the stack. This takes
      # a compile-time guid and converts it into a runtime-accessible
      # expression.
      pushProgram: (guid) ->
        if guid?
          @pushStackLiteral @programExpression(guid)
        else
          @pushStackLiteral null

      
      # [invokeHelper]
      #
      # On stack, before: hash, inverse, program, params..., ...
      # On stack, after: result of helper invocation
      #
      # Pops off the helper's parameters, invokes the helper,
      # and pushes the helper's return value onto the stack.
      #
      # If the helper is not found, `helperMissing` is called.
      invokeHelper: (paramSize, name) ->
        @context.aliases.helperMissing = "helpers.helperMissing"
        helper = @lastHelper = @setupHelper(paramSize, name)
        @register "foundHelper", helper.name
        @pushStack "foundHelper ? foundHelper.call(" + helper.callParams + ") " + ": helperMissing.call(" + helper.helperMissingParams + ")"

      
      # [invokeKnownHelper]
      #
      # On stack, before: hash, inverse, program, params..., ...
      # On stack, after: result of helper invocation
      #
      # This operation is used when the helper is known to exist,
      # so a `helperMissing` fallback is not required.
      invokeKnownHelper: (paramSize, name) ->
        helper = @setupHelper(paramSize, name)
        @pushStack helper.name + ".call(" + helper.callParams + ")"

      
      # [invokeAmbiguous]
      #
      # On stack, before: hash, inverse, program, params..., ...
      # On stack, after: result of disambiguation
      #
      # This operation is used when an expression like `{{foo}}`
      # is provided, but we don't know at compile-time whether it
      # is a helper or a path.
      #
      # This operation emits more code than the other options,
      # and can be avoided by passing the `knownHelpers` and
      # `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: (name) ->
        @context.aliases.functionType = "\"function\""
        @pushStackLiteral "{}"
        helper = @setupHelper(0, name)
        helperName = @lastHelper = @nameLookup("helpers", name, "helper")
        @register "foundHelper", helperName
        nonHelper = @nameLookup("depth" + @lastContext, name, "context")
        nextStack = @nextStack()
        @source.push "if (foundHelper) { " + nextStack + " = foundHelper.call(" + helper.callParams + "); }"
        @source.push "else { " + nextStack + " = " + nonHelper + "; " + nextStack + " = typeof " + nextStack + " === functionType ? " + nextStack + ".apply(depth0) : " + nextStack + "; }"

      
      # [invokePartial]
      #
      # On stack, before: context, ...
      # On stack after: result of partial invocation
      #
      # This operation pops off a context, invokes a partial with that context,
      # and pushes the result of the invocation back.
      invokePartial: (name) ->
        params = [@nameLookup("partials", name, "partial"), "'" + name + "'", @popStack(), "helpers", "partials"]
        params.push "data"  if @options.data
        @context.aliases.self = "this"
        @pushStack "self.invokePartial(" + params.join(", ") + ");"

      
      # [assignToHash]
      #
      # On stack, before: value, hash, ...
      # On stack, after: hash, ...
      #
      # Pops a value and hash off the stack, assigns `hash[key] = value`
      # and pushes the hash back onto the stack.
      assignToHash: (key) ->
        value = @popStack()
        hash = @topStack()
        @source.push hash + "['" + key + "'] = " + value + ";"

      
      # HELPERS
      compiler: JavaScriptCompiler
      compileChildren: (environment, options) ->
        children = environment.children
        child = undefined
        compiler = undefined
        i = 0
        l = children.length

        while i < l
          child = children[i]
          compiler = new @compiler()
          @context.programs.push "" # Placeholder to prevent name conflicts for nested children
          index = @context.programs.length
          child.index = index
          child.name = "program" + index
          @context.programs[index] = compiler.compile(child, options, @context)
          i++

      programExpression: (guid) ->
        @context.aliases.self = "this"
        return "self.noop"  unless guid?
        child = @environment.children[guid]
        depths = child.depths.list
        depth = undefined
        programParams = [child.index, child.name, "data"]
        i = 0
        l = depths.length

        while i < l
          depth = depths[i]
          if depth is 1
            programParams.push "depth0"
          else
            programParams.push "depth" + (depth - 1)
          i++
        if depths.length is 0
          "self.program(" + programParams.join(", ") + ")"
        else
          programParams.shift()
          "self.programWithDepth(" + programParams.join(", ") + ")"

      register: (name, val) ->
        @useRegister name
        @source.push name + " = " + val + ";"

      useRegister: (name) ->
        unless @registers[name]
          @registers[name] = true
          @registers.list.push name

      pushStackLiteral: (item) ->
        @compileStack.push new Literal(item)
        item

      pushStack: (item) ->
        @source.push @incrStack() + " = " + item + ";"
        @compileStack.push "stack" + @stackSlot
        "stack" + @stackSlot

      replaceStack: (callback) ->
        item = callback.call(this, @topStack())
        @source.push @topStack() + " = " + item + ";"
        "stack" + @stackSlot

      nextStack: (skipCompileStack) ->
        name = @incrStack()
        @compileStack.push "stack" + @stackSlot
        name

      incrStack: ->
        @stackSlot++
        @stackVars.push "stack" + @stackSlot  if @stackSlot > @stackVars.length
        "stack" + @stackSlot

      popStack: ->
        item = @compileStack.pop()
        if item instanceof Literal
          item.value
        else
          @stackSlot--
          item

      topStack: ->
        item = @compileStack[@compileStack.length - 1]
        if item instanceof Literal
          item.value
        else
          item

      quotedString: (str) ->
        "\"" + str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n").replace(/\r/g, "\\r") + "\""

      setupHelper: (paramSize, name) ->
        params = []
        @setupParams paramSize, params
        foundHelper = @nameLookup("helpers", name, "helper")
        params: params
        name: foundHelper
        callParams: ["depth0"].concat(params).join(", ")
        helperMissingParams: ["depth0", @quotedString(name)].concat(params).join(", ")

      
      # the params and contexts arguments are passed in arrays
      # to fill in
      setupParams: (paramSize, params) ->
        options = []
        contexts = []
        param = undefined
        inverse = undefined
        program = undefined
        options.push "hash:" + @popStack()
        inverse = @popStack()
        program = @popStack()
        
        # Avoid setting fn and inverse if neither are set. This allows
        # helpers to do a check for `if (options.fn)`
        if program or inverse
          unless program
            @context.aliases.self = "this"
            program = "self.noop"
          unless inverse
            @context.aliases.self = "this"
            inverse = "self.noop"
          options.push "inverse:" + inverse
          options.push "fn:" + program
        i = 0

        while i < paramSize
          param = @popStack()
          params.push param
          contexts.push @popStack()  if @options.stringParams
          i++
        options.push "contexts:[" + contexts.join(",") + "]"  if @options.stringParams
        options.push "data:data"  if @options.data
        params.push "{" + options.join(",") + "}"
        params.join ", "

    reservedWords = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ")
    compilerWords = JavaScriptCompiler.RESERVED_WORDS = {}
    i = 0
    l = reservedWords.length

    while i < l
      compilerWords[reservedWords[i]] = true
      i++
    JavaScriptCompiler.isValidJavaScriptVariableName = (name) ->
      return true  if not JavaScriptCompiler.RESERVED_WORDS[name] and /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)
      false
  ) Handlebars.Compiler, Handlebars.JavaScriptCompiler
  
  #>>excludeStart('excludeHbsParser', pragmas.excludeHbsParser)
  Handlebars.precompile = (string, options) ->
    options = options or {}
    ast = Handlebars.parse(string)
    environment = new Handlebars.Compiler().compile(ast, options)
    new Handlebars.JavaScriptCompiler().compile environment, options

  Handlebars.compile = (string, options) ->
    compile = ->
      ast = Handlebars.parse(string)
      environment = new Handlebars.Compiler().compile(ast, options)
      templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, `undefined`, true)
      Handlebars.template templateSpec
    options = options or {}
    compiled = undefined
    
    # Template is only compiled on first use and cached after that point.
    (context, options) ->
      compiled = compile()  unless compiled
      compiled.call this, context, options

  
  #>>excludeEnd('excludeHbsParser')
  
  # lib/handlebars/runtime.js
  Handlebars.VM =
    template: (templateSpec) ->
      
      # Just add water
      container =
        escapeExpression: Handlebars.Utils.escapeExpression
        invokePartial: Handlebars.VM.invokePartial
        programs: []
        program: (i, fn, data) ->
          programWrapper = @programs[i]
          if data
            Handlebars.VM.program fn, data
          else if programWrapper
            programWrapper
          else
            programWrapper = @programs[i] = Handlebars.VM.program(fn)
            programWrapper

        programWithDepth: Handlebars.VM.programWithDepth
        noop: Handlebars.VM.noop

      (context, options) ->
        options = options or {}
        templateSpec.call container, Handlebars, context, options.helpers, options.partials, options.data

    programWithDepth: (fn, data, $depth) ->
      args = Array::slice.call(arguments_, 2)
      (context, options) ->
        options = options or {}
        fn.apply this, [context, options.data or data].concat(args)

    program: (fn, data) ->
      (context, options) ->
        options = options or {}
        fn context, options.data or data

    noop: ->
      ""

    invokePartial: (partial, name, context, helpers, partials, data) ->
      options =
        helpers: helpers
        partials: partials
        data: data

      if partial is `undefined`
        throw new Handlebars.Exception("The partial " + name + " could not be found")
      else if partial instanceof Function
        partial context, options
      else unless Handlebars.compile
        throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode")
      else
        partials[name] = Handlebars.compile(partial,
          data: data isnt `undefined`
        )
        partials[name] context, options

  Handlebars.template = Handlebars.VM.template
  
  # AMD Define
  define ->
    Handlebars

)()
