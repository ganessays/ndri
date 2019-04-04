/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http=//ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example=
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
         // config.stylesCombo_stylesSet = 'my_styles=/http=//serverweb/demo/nabilbank/js/styles.js';

   var jspath = '../../lib/ckeditor';
   
   config.filebrowserBrowseUrl = jspath+'/kcfinder/browse.php?opener=ckeditor&type=files';
   config.filebrowserImageBrowseUrl = jspath+'/kcfinder/browse.php?opener=ckeditor&type=images';
   config.filebrowserFlashBrowseUrl = jspath+'/kcfinder/browse.php?opener=ckeditor&type=flash';
   config.filebrowserUploadUrl = jspath+'/kcfinder/upload.php?opener=ckeditor&type=files';
   config.filebrowserImageUploadUrl = jspath+'/kcfinder/upload.php?opener=ckeditor&type=images';
   config.filebrowserFlashUploadUrl = jspath+'/kcfinder/upload.php?opener=ckeditor&type=flash';
   
    /*config.filebrowserBrowseUrl = jspath+'lib/ckeditor/ckfinder/ckfinder.html'; 
	config.filebrowserImageBrowseUrl = jspath+'lib/ckeditor/ckfinder/ckfinder.html?type=Images';
	config.filebrowserFlashBrowseUrl = jspath+'lib/ckeditor/ckfinder/ckfinder.html?type=Flash';
	config.filebrowserUploadUrl = jspath+'lib/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
	config.filebrowserImageUploadUrl = jspath+'lib/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
	config.filebrowserFlashUploadUrl =jspath+'lib/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash' ;*/
};


// path settings
   
