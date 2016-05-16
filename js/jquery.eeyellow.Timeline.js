; (function ($, window, document, undefined) {
    //'use strict';
    var pluginName = 'vivaTimeline';//Plugin名稱

    //Timeline建構式
    var Timeline = function (element, opt) {
        //私有變數
        this.target = element;
        
        //初始化
        var initResult = this._init(opt);
        if (initResult) {
            this._style();
            this._event();
        }
    }

    //ImportKML2D預設參數
    Timeline.options = {
        
    }

    //Timeline私有方法
    Timeline.prototype = {
        //初始化
        _init: function (_opt) {
            //合併自訂參數與預設參數
            this.options = $.extend(true, {}, Timeline.options, _opt);
            return true;
        },
        //樣式
        _style: function () {
            var self = this;
            
        },
        //綁定事件
        _event: function () {
            var self = this;
            self.target
                .find('.events-heading')
                .click(function(){
                    $(this).next().slideToggle();
                });
        },
        
    }

    //公開方法
    $.fn[pluginName] = function (options, args) {
        var timeline;
        this.each(function () {
            timeline = new Timeline($(this), options);
        });
        return this;
    }
})(jQuery, window, document);