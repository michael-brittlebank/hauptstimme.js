(function(){

    this.applyHelpers = function(){
        //compare
        Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
            //https://gist.github.com/doginthehat/1890659
            if (arguments.length !== 3) {
                throw new Error('Handlebars Helper \'compare\' needs 3 parameters');
            }
            var operator = options.hash.operator || '==',
                operators = {
                '==':		function(l,r) { return l == r; },
                '===':	function(l,r) { return l === r; },
                '!=':		function(l,r) { return l != r; },
                '!==':	function(l,r) { return l !== r; },
                '<':		function(l,r) { return l < r; },
                '>':		function(l,r) { return l > r; },
                '<=':		function(l,r) { return l <= r; },
                '>=':		function(l,r) { return l >= r; },
                '&&':		function(l,r) { return l && r; },
                '||':		function(l,r) { return l || r; },
                'typeof':	function(l,r) { return typeof l == r; }
            };
            if (!operators[operator]) {
                throw new Error('Handlebars Helper \'compare\' doesn\'t know the operator ' + operator);
            }
            var result = operators[operator](lvalue,rvalue);
            if(result) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        //debug
        Handlebars.registerHelper('debug', function(optionalValue) {
            console.log('Current Context');
            console.log('====================');
            console.log(this);
            if (optionalValue) {
                console.log('Value');
                console.log('====================');
                console.log(optionalValue);
            }
        });
        
        //join
        Handlebars.registerHelper('join', function(values, delimiter) {
            return values.join(delimiter);
        });
        
        //map
        Handlebars.registerHelper('map', function(values){
            return values.map(function(value){
                return _chorus.layout.html.htmlFilter(value);
            }).join(', ');
        });

    };

}).apply(_chorus.handlebars);