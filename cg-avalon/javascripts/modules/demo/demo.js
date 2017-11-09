/**
 * Created by chaoge on 2017/11/09.
 */
define(['avalon','public','ajaxFileUpload'],function(avalon,public,ajaxFileUpload) {
    var vm = avalon.define({
        $id: 'textBenchCtrl',
        initFunc: function() {
            public.rtlTableScroll({
                elId:"tableScrollId",
                isFixed:1
            });
        }
    });
    return vm;
});
