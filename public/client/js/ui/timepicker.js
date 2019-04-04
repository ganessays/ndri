/*!
 * jQuery UI Timepicker 0.1.2
 *
 * Copyright (c) 2009 Martin Milesich (http://milesich.com/)
 *
 * $Id: timepicker.js 7 2009-07-03 21:49:21Z majlo $
 *
 * Depends:
 *  ui.core.js
 *  ui.datepicker.js
 *  ui.slider.js
 */
(function($) {

/**
 * Datepicker does not have an onShow event so I need to create it.
 * What I actually doing here is copying original _showDatepicker
 * method to _showDatepickerOverload method. Simple overloading.
 */
$.datepicker._showDatepickerOverload = $.datepicker._showDatepicker;
$.datepicker._showDatepicker = function (input) {
    // Call the original method which will show the datepicker
    $.datepicker._showDatepickerOverload(input);

    input = input.target || input;

    // find from button/image trigger
    if (input.nodeName.toLowerCase() != 'input') input = $('input', input.parentNode)[0];

    // Do not show timepicker if datepicker is disabled
    if ($.datepicker._isDisabledDatepicker(input)) return;

    // Get instance to datepicker
    var inst = $.datepicker._getInst(input);

    // I introduced a new property "showTime"
    // Add to the datepicker options property "showTime" with value "True"
    var showTime = $.datepicker._get(inst, 'showTime');

    // If showTime = True show the timepicker
    if (showTime) $.timepicker.show(input);
}

/**
 * Same as above. Here I need to extend the _checkExternalClick method
 * because I don't want to close the datepicker when the sliders get focus.
 */
$.datepicker._checkExternalClickOverload = $.datepicker._checkExternalClick;
$.datepicker._checkExternalClick = function (event) {
    // This is part of the original method
    if (!$.datepicker._curInst) return;

    var $target = $(event.target);

    // Do not close the datepicker when clicked on timepicker
    if ($target.parents('#' + $.timepicker._mainDivId).length == 0) {
        $.datepicker._checkExternalClickOverload(event);
    }
}

/**
 * Datepicker has onHide event but I just want to make it simple for you
 * so I hide the timepicker when datepicker hides.
 */
$.datepicker._hideDatepickerOverload = $.datepicker._hideDatepicker;
$.datepicker._hideDatepicker = function(input, duration) {
    // Some lines from the original method
    var inst = this._curInst;

    if (!inst || (input && inst != $.data(input, PROP_NAME))) return;

    // Get the value of showTime property
    var showTime = this._get(inst, 'showTime');

    // Hide the datepicker
    $.datepicker._hideDatepickerOverload(input, duration);

    // Hide the timepicker if enabled
    if (showTime) {
        $.timepicker.hide(this._formatDate(inst));
    }
}

/**
 * We need to resize the timepicker when the datepicker has been changed.
 */
$.datepicker._updateDatepickerOverload = $.datepicker._updateDatepicker;
$.datepicker._updateDatepicker = function(inst) {
    $.datepicker._updateDatepickerOverload(inst);
    $.timepicker.resize();
}

function Timepicker() {}

Timepicker.prototype = {
    init: function()
    {
        this._mainDivId = 'ui-timepicker-div';
        this._inputId   = null;
        this._orgValue  = null;
        this._orgHour   = null;
        this._orgMinute = null;
        this._colonPos  = -1;
        this._visible   = false;
        this.tpDiv      = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible" style="width: 100px; display: none; position: absolute;"></div>');
        this._generateHtml();
    },

    show: function (input)
    {
        this._inputId = input.id;

        if (!this._visible) {
            this._parseTime();
            this._orgValue = $('#' + this._inputId).val();
        }

        this.resize();

        $('#' + this._mainDivId).show();

        this._visible = true;

        var dpDiv     = $('#' + $.datepicker._mainDivId);
        var dpDivPos  = dpDiv.position();

        var viewWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + $(document).scrollLeft();
        var tpRight   = this.tpDiv.offset().left + this.tpDiv.outerWidth();

        if (tpRight > viewWidth) {
            dpDiv.css('left', dpDivPos.left - (tpRight - viewWidth) - 5);
            this.tpDiv.css('left', dpDiv.offset().left + dpDiv.outerWidth() + 'px');
        }
    },

    hide: function (fd)
    {
        var curTime = $('#' + this._mainDivId + ' span.fragHours').text()
                    + ':'
                    + $('#' + this._mainDivId + ' span.fragMinutes').text();

        var curDate = $('#' + this._inputId).val();

        var write = false;

        if (this._orgValue != curDate
                || $('#hourSlider').slider('value')   != this._orgHour
                || $('#minuteSlider').slider('value') != this._orgMinute) {
            write = true;
        }

        this._visible = false;

        if (write) {
            $('#' + this._inputId).val(fd + ' ' + curTime);
        }

        $('#' + this._mainDivId).hide();
    },

    resize: function ()
    {
        var dpDiv = $('#' + $.datepicker._mainDivId);
        var dpDivPos = dpDiv.position();

        var hdrHeight = $('#' + $.datepicker._mainDivId +  ' > div.ui-datepicker-header:first-child').height();

        $('#' + this._mainDivId + ' > div.ui-datepicker-header:first-child').css('height', hdrHeight);

        this.tpDiv.css({
            'height': dpDiv.height(),
            'top'   : dpDivPos.top,
            'left'  : dpDivPos.left + dpDiv.outerWidth() + 'px'
        });

        $('#hourSlider').css('height',   this.tpDiv.height() - (3.5 * hdrHeight));
        $('#minuteSlider').css('height', this.tpDiv.height() - (3.5 * hdrHeight));
    },

    _generateHtml: function ()
    {
        var html = '';

        html += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">';
        html += '<div class="ui-datepicker-title" style="margin:0">';
        html += '<span class="fragHours">08</span><span class="delim">:</span><span class="fragMinutes">45</span></div></div><table>';
        html += '<tr><th>Hour</th><th>Minute</th></tr>';
        html += '<tr><td align="center"><div id="hourSlider" class="slider"></div></td><td align="center"><div id="minuteSlider" class="slider"></div></td></tr>';
        html += '</table>';

        this.tpDiv.empty().append(html);
        $('body').append(this.tpDiv);

        var self = this;

        $('#hourSlider').slider({
            orientation: "vertical",
            range: 'min',
            min: 0,
            max: 23,
            step: 1,
            slide: function(event, ui) {
                self._writeTime('hour', ui.value);
            },
            stop: function(event, ui) {
                $('#' + self._inputId).focus();
            }
        });

        $('#minuteSlider').slider({
            orientation: "vertical",
            range: 'min',
            min: 0,
            max: 59,
            step: 1,
            slide: function(event, ui) {
                self._writeTime('minute', ui.value);
            },
            stop: function(event, ui) {
                $('#' + self._inputId).focus();
            }
        });

        $('#hourSlider > a').css('padding', 0);
        $('#minuteSlider > a').css('padding', 0);
    },

    _writeTime: function (type, fragment)
    {
        if (type == 'hour') {
            if (fragment < 10) fragment = '0' + fragment;
            $('#' + this._mainDivId + ' span.fragHours').text(fragment);
        }

        if (type == 'minute') {
            if (fragment < 10) fragment = '0' + fragment;
            $('#' + this._mainDivId + ' span.fragMinutes').text(fragment);
        }
    },

    _parseTime: function ()
    {
        var dt = $('#' + this._inputId).val();

        this._colonPos = dt.search(':');

        var m = 0, h = 0;

        if (this._colonPos != -1) {
            h = parseInt(dt.substr(this._colonPos - 2, 2));
            m = parseInt(dt.substr(this._colonPos + 1, 2));
        }

        this._setTime('hour',   h);
        this._setTime('minute', m);

        this._orgHour   = h;
        this._orgMinute = m;
    },

    _setTime: function (type, fragment)
    {
        if (isNaN(fragment)) fragment = 0;
        if (fragment < 0)    fragment = 0;
        if (fragment > 23 && type == 'hour')   fragment = 23;
        if (fragment > 59 && type == 'minute') fragment = 59;

        if (type == 'hour') {
            $('#hourSlider').slider('value', fragment);
        }

        if (type == 'minute') {
            $('#minuteSlider').slider('value', fragment);
        }

        this._writeTime(type, fragment);
    }
};

$.timepicker = new Timepicker();
$('document').ready(function () {$.timepicker.init()});

})(jQuery);
