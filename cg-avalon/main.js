require.config({
    baseUrl: 'javascripts/',
    paths: {
        avalon: 'core/avalon/avalon',
        mmHistory: 'core/avalon/mmHistory',
        mmRouter: 'core/avalon/mmRouter',
        domReady: 'core/requirejs/domReady',
        jquery: 'core/jquery/jquery.min',
        ajaxFileUpload: 'core/jquery/ajaxFileUpload',
        bootstrap: 'core/bootstrap/bootstrap',
        datetimepicker: 'core/bootstrap/datetimepicker-cn',
        text: 'core/requirejs/text',
        urlMapping: '../UrlMapping',
        public: 'core/public',
        rtlPage: 'core/rtl/RtlPaging',
        rtlLoad: 'core/rtl/RtlLoading',
        rtlCalendar: 'core/rtl/RtlNoteCalendar',
        rtlDialog: 'core/rtl/RtlDialog',
        jqPrint: 'core/jquery/jquery.jqprint',
        rtlTableScroll: 'core/rtl/RtlTableScroll'
    },
    shim: {
        avalon: {
            exports: 'avalon'
        },
        mmHistory: {
            deps: ['avalon'],
            mmHistory: 'mmHistory'
        },
        mmRouter: {
            deps: ['mmHistory'],
            mmRouter: 'mmRouter'
        },
        domReady: {
            deps: ['mmRouter'],
            domReady: 'domReady'
        },
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        urlMapping: {
            exports: 'urlMapping'
        },
        rtlLoad: {
            deps: ['jquery'],
            exports: 'rtlLoad'
        },
        public: {
            exports: 'public'
        },
        rtlCalendar: {
            deps: ['jquery'],
            exports: 'rtlCalendar'
        },
        rtlPage: {
            deps: ['jquery'],
            exports: 'rtlPage'
        },
        rtlDialog: {
            deps: ['jquery'],
            exports: 'rtlDialog'
        },
        rtlTableScroll: {
            deps: ['jquery'],
            exports: 'rtlTableScroll'
        },
        datetimepicker: {
            deps: ['jquery'],
            exports: 'datetimepicker'
        }
    },
    waitSeconds: 600000
});

require(['bootstrap', 'domReady!', 'public', 'urlMapping'], function () {
    avalon.templateCache.empty = "";
    var vm = avalon.define({
        $id: 'mainBodyCtrl',
        contentPage: 'empty',
        routerParam: ['demo','add']
    });
    function urlCallback() {
        var _path = this.path;
        if (_path.indexOf("/demo") === 0) {
            require(['./modules/demo/demo'], function (nowModal) {
                nowModal.initFunc();
                vm.contentPage = './templates/demo/demo.html';
            });
        }else if (_path.indexOf("/add") === 0) {
            require(['./modules/demo/add'], function (nowModal) {
                nowModal.initFunc();
                vm.contentPage = './templates/demo/add.html';
            });
        }else {
            var local = window.location.search;
            var redirectFlag = false,
                list = vm.$model.routerParam;
            for(var i = 0;i < list.length;i ++) {
                if(local.indexOf(list[i]) === 1){
                    redirectFlag = true;
                    break;
                }
            }
            if(redirectFlag) vm.contentPage = './templates/redirect.html';
        }
    }
    avalon.router.get('/*path', urlCallback);
    avalon.history.start();
    avalon.scan(document.body);
});