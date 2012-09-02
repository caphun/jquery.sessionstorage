/**
 * jQuery sessionStorage
 *
 * Copyright (c) 2012 Ca-Phun Ung <caphun at yelotofu dot com>
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 * http://github.com/caphun/jquery.sessionStorage/
 *
 * Plugin to handle sessionStorage like data.
 *
 * TODO: fallback to $.data, & dom-key attachment
 *
 */

(function($){
    // cached values
    var namespace = '.sessionStorage';

    $.fn.sessionStorage = function(options) {
        var args = arguments, values = [];

        this.each(function() {
            var widget = $.sessionStorage.getInstance(this, options);
            if (args.length === 1 && typeof args[0] === 'string') {
                values.push(widget.get(args[0]));
            } else if (args.length === 2) {
                // first try a method failing that set the value
                try {
                    widget[args[0]](args[1]);
                } catch (ex) {
                    widget.set(args[0], args[1]);
                }

            }
        });

        // there must be a better way!
        if (values.length === 1) {
            return values[0];
        } else if (values.length > 1) {
            return values;
        } else {
            return this;
        }
    }

    // wrapper for the destroy method
    $.fn.removeSessionStorage = function(options) {
        return this.each(function() {
            $(this).sessionStorage('destroy', options);
        });
    }

    $.sessionStorage = function(elem, options) {
        this.optins = $.extend(true, {}, $.sessionStorage.defaults, options);
        this.element = $(elem);
        this.init();
    }

    $.sessionStorage.getInstance = function(elem, options) {
        return ($.sessionStorage.initialized(elem))
            ? $(elem).data('widget'+namespace)
            : new $.sessionStorage(elem, options);
    }

    $.sessionStorage.initialized = function (elem) {
        var init = $( elem).data('init'+namespace);
        return init !== undefined && init !== null ? true : false;
    }

    $.sessionStorage.defaults = {
        // empty
    }

    $.sessionStorage.prototype = {
        init: function() {
        },
        set: function(k, v) {
            this._hasSessionStorage() && sessionStorage.setItem(k, JSON.stringify(v));
        },
        get: function(k) {
            return this._hasSessionStorage() ? JSON.parse(sessionStorage.getItem(k)) : null;
        },
        destroy: function(k) {
            this._hasSessionStorage() && sessionStorage.removeItem(k);
        },
        // see: http://dustindiaz.com/javascript-cache-provider
        _hasSessionStorage: function() {
            try {
                return ('sessionStorage' in window) && window['sessionStorage'] !== null;
            } catch (ex) {
                return false;
            }
        }
    }

})(jQuery);
