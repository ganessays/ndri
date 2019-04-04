$().click(function(){
    $('#message').fadeOut(500);
});

// constants for message dispatching (same constants are defined in config.inc.php)
var ERROR   = 0;
var INFO    = 1;
var WARNING = 2;

function formatMessage(jsonMsg, msgDivId){
    msgDivId = (msgDivId == null) ? '#message' : '#'+msgDivId;

    var level = jsonMsg.level;
    var message = jsonMsg.msg;

    $(msgDivId).addClass('ui-widget');
    var msgDiv = '';

    if(level == ERROR){ //|| level == INFO || level == WARNING){
        msgDiv += '<div class="ui-state-error ui-corner-all"><p>';
        msgDiv += '<span class="ui-icon ui-icon-alert" style="float: left; margin-right: 0.3em;"/>';
        msgDiv += '<b>Alert: </b>'+message;
        msgDiv += '</p></div>';
    }else if(level == WARNING){
        msgDiv += '<div class="ui-state-warning ui-corner-all"><p>';
        msgDiv += '<span class="ui-icon ui-icon-notice" style="float: left; margin-right: 0.3em;"/>';
        msgDiv += '<b>Warning: </b>'+message;
        msgDiv += '</p></div>';
    }else if(level == INFO){
        msgDiv += '<div class="ui-state-highlight ui-corner-all"><p>';
        msgDiv += '<span class="ui-icon ui-icon-info" style="float: left; margin-right: 0.3em;"/>';
        msgDiv += '<b>Info: </b>'+message;
        msgDiv += '</p></div>';
    }
    $(msgDivId).html(msgDiv);
}

function delete_confirm_cms(id, parent_id, title, location_url){
if(confirm("Are you sure you want to delete this "+title+""))
{
location.replace(location_url+"="+id+"&parent_id="+parent_id+"&mode=delete");	
}
return false;	
}


function delete_confirm(id, title, location_url){
if(confirm("Are you sure you want to delete this "+title+""))
{
location.replace(location_url+"="+id+"&mode=delete");	
}
return false;	
}


function ClonerBkp(iElem,iTarget,cloneLimit, msgDivId){
    this.cloneLimit = cloneLimit;
    this.msgDiv = '#'+msgDivId;
    //alert(this.msgDiv);
    if($.browser.msie){//IE HAck
        iElem = iElem.replace('#','');
        this.template=innerXHTML(iElem);
    }else{
        this.template=$(iElem).html();
    }
    this.counter=0;
    this.targets=iTarget;


    this.Clone = function(paramsClone){
        //alert(this.targets);
         var cloneCount = this.counter;
        //Debug Line

        if(cloneCount <= this.cloneLimit){
        if(paramsClone!=null){
            paramsClone.unshift(this.counter);
        }else{
            var paramsClone = new Array;
            paramsClone[0] = this.counter;
        }
        //alert(paramsClone);
        var outputClone = $.format(this.template,paramsClone);
        //alert(outputClone);
        $(outputClone).appendTo(this.targets);
        this.counter++;

        regDateBox();
        }else{
            $(this.msgDiv).html('You cannot add more than '+cloneLimit+' items');
            $(this.msgDiv).fadeIn(400).fadeOut(4000);
        }
    }
    this.CRemove = function(maxValue){
        if(maxValue==null){
            maxValue = 1;
        }

        if(this.counter > 1){

        if(this.counter>parseInt(maxValue)){
            this.counter--;
            $(this.targets+' tbody[class=clone]:last').remove();
        }
    }else{
            $(this.msgDiv).html('You must add at least 1 item.');
            $(this.msgDiv).fadeIn(400).fadeOut(4000);
        }
    }
    this.CRemoveAll = function(){
        $(this.targets+' tbody[class=clone]').remove();
        this.counter=1;
    }
}

function Cloner(iElem,iTarget,cloneLimit, msgDivId){
	/*
    if($.browser.msie){//IE HAck
		iElem = iElem.replace('#','');
		this.template=innerXHTML(iElem);
	}else{
		this.template=$(iElem).html();
	}	*/
      this.cloneLimit = cloneLimit;
    this.msgDiv = '#'+msgDivId;
   // alert(cloneLimit);
    this.template=$(iElem).html();
	this.counter=1;
    this.targets=iTarget;

    //Methods
    this.setClone = function (iElem){
        this.template=$(iElem).html();
    }


    this.Clone = function(paramsClone){
        //alert(this.targets);
		//Debug Line
                  var cloneCount = this.counter;
                  if(cloneCount <= this.cloneLimit){
        if(paramsClone!=null){
            paramsClone.unshift(this.counter);
        }else{
            var paramsClone = new Array;
            paramsClone[0] = this.counter;
        }
        //alert(paramsClone);
        var outputClone = $.format(this.template,paramsClone);
        //alert(outputClone);
        $(outputClone).appendTo(this.targets);
        this.counter++;

        regDateBox();
    }else{
            $(this.msgDiv).html('You cannot add more than '+cloneLimit+' items');
            $(this.msgDiv).fadeIn(400).fadeOut(4000);
        } }
    
     this.CRemove = function(maxValue){
        if(maxValue==null){
            maxValue = 2;
        }

        if(this.counter > 1){

        if(this.counter>parseInt(maxValue)){
            this.counter--;
            $(this.targets+' tbody[class=clone]:last').remove();
        }
    }else{
            $(this.msgDiv).html('You must add at least 1 item.');
            $(this.msgDiv).fadeIn(400).fadeOut(4000);
        }
    }
    this.CRemoveAll = function(){
        $(this.targets+' tbody[class=clone]').remove();
        this.counter=1;
    }
}

function regDateBox(dtFormat,dateBox){
    if(dtFormat==null){
        dtFormat="yy-mm-dd";
    }
    if(dateBox==null){
        dateBox=".dateBox";
    }
    $(dateBox).datepicker({
        dateFormat:dtFormat,
        minDate:'-20Y',
        maxDate:'+20Y',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        showAnim:'slideDown'
    });
}

function redirect(url){
    window.location = url;
}



function alterFontSize(target, factor){
    var oldFontSize = parseInt(target.css('font-size'));
    
    if(factor < 0 && oldFontSize > 13 && oldFontSize <= 20){
        target.css('font-size', (oldFontSize + factor)+'px');
    }else if(factor > 0 && oldFontSize >= 13 && oldFontSize < 20){
        target.css('font-size', (oldFontSize + factor)+'px');
    }    
}



/*Ajaxify Non-Paged Validate as well [Form]-------------------*/
function AjaxForm(grid,frm_name,frm_div,resp_div,frmType){
	if(resp_div==null){
		resp_div = '#results';
	}

    var reloadState = function(ops){
        if(resp_div=='#results'){
			if(undefined(frmType)){
				$(frm_div).empty();
			}
			if(!undefined(frm_div)){
				$(frm_div).hide();
			}
			if(!undefined(grid)){
				$(grid+"Div").show();
			}
			$("#tables").show(); //if tab exists
            //$('#results').html(ops);
			if(ops!='c'){
				$('#results').dialog('open');
			}
			$('#results').dialog('option', 'title','Task Status' );
			$('#results').dialog('option', 'buttons', {
				"OK": function() {
					$(this).dialog('close');
				}
			});
		}else{
			$(resp_div).show();
		}
        if(!undefined(grid)){
			$(grid).trigger("reloadGrid");
		}

    }
    $('.closer').click(function(){//Cancel Button Action
        reloadState('c');
    });

    var subs = function(){
            $(frm_name).ajaxSubmit({
                async:false,
                target: resp_div,
                resetForm:false,
                success: reloadState
            });
    }
    var v = $(frm_name).validate({
        onkeyup:false,
        onblur:false,
        submitHandler:subs
    });

}

$.fn.disable = function() {
    return this.each(function() {
        if (typeof this.disabled != "undefined") this.disabled = true;
    });
}

$.fn.enable = function() {
    return this.each(function() {
        if (typeof this.disabled != "undefined") this.disabled = false;
    });
}

$.fn.splitUp=function(splitBy,wrapper){
    $all= $(this).find('>*');
    var fragment=Math.ceil($all.length/splitBy);
    for (i=0;i<fragment;i++)
        $all.slice(splitBy*i,splitBy*(i+1)).wrapAll(wrapper);
    return $(this);
}
