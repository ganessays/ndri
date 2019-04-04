<?php
 $root = $_SERVER['DOCUMENT_ROOT'];
//
// jQuery File Tree PHP Connector
//
// Version 1.01
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 24 March 2008
//
// History:
//
// 1.01 - updated to work with foreign characters in directory/file names (12 April 2008)
// 1.00 - released (24 March 2008)
//
// Output a list of files for jQuery File Tree
//
//function scandir($dir) {
//    $files = array(); // added to initialize variable
//    $dh = opendir($dir);
//    while(false !== ($filename = readdir($dh))) {
//    if($filename == '.' || $filename == '..')
//    continue; // no need to get the . or .. references, right?
//    else
//    $files[] = $filename;
//    }
//    return $files;
//}


$_POST['dir'] = urldecode($_POST['dir']);
//echo "tes:1".$_POST['dir'];
if(file_exists($root.$_POST['dir']) ) {
    //echo "test:2".$root.$_POST['dir'];
    $files = scandir($root . $_POST['dir']);
    //print_r($files);
    //exit();
	 natcasesort($files);
     //echo count($files);
	if( count($files) >= 1 ) { /* The 2 accounts for . and .. */
		echo "<ul class=\"jqueryFileTree\" style=\"display: none;\">";
		// All dirs
		foreach( $files as $file ) {
			if( file_exists($root . $_POST['dir'] . $file) && $file != '.' && $file != '..' && is_dir($root . $_POST['dir'] . $file) ) {
				echo "<li class=\"directory collapsed\"><a href=\"#\" rel=\"" . htmlentities($_POST['dir'] . $file) . "/\">" . htmlentities($file) . "</a></li>";
			}
		}
		// All files
		foreach( $files as $file ) {
			if( file_exists($root . $_POST['dir'] . $file) && $file != '.' && $file != '..' && !is_dir($root . $_POST['dir'] . $file) ) {
				$ext = preg_replace('/^.*\./', '', $file);
				echo "<li class=\"file ext_$ext\"><a href=\"#\" rel=\"" . htmlentities($_POST['dir'] . $file) . "\">" . htmlentities($file) . "</a></li>";
			}
		}
		echo "</ul>";	
	}
}

?>