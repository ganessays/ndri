<?php
$path = '../';
$thePage = 'Photo Gallery';
require_once $path.'config/config.inc.php';
require_once PHOTO_GALLERY;
require_once PAGING;
$galleryId = isset($_GET['g'])?intval($_GET['g']):'';
if(empty ($galleryId)) {
    header('location:'.ERROR_LOCATION);
    exit();
}
$gallery = new Gallery($galleryId);
$galleryDet=$gallery->getGalleryDetails();
$galName=stripslashes($galleryDet['gallery_name']);
$pageTitle = $galName.' | Photo Gallery ';
$sqlPhotoList = $gallery->getPhotosListSQL($galleryId);
$PAGING = new PAGING($sqlPhotoList, 20, 9);
$sqlPhotoList = $PAGING->sql;
$arrPhotosList = $gallery->executeResultArray($sqlPhotoList);
define('ALBUM_PER_ROW', 3);
include $path."includes/header.php";
?>
<link rel="stylesheet" href="<?php echo JS;?>litebox/css/prettyPhoto.css" type="text/css" media="screen" title="prettyPhoto main stylesheet" charset="utf-8" />
<script src="<?php echo JS;?>litebox/js/jquery.prettyPhoto.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
    jQuery(document).ready(function(){
        jQuery(".gallery a[rel^='prettyPhoto']").prettyPhoto({theme:'dark_rounded'});
    });
</script>



				<div class="content-col">
					<h2><?php echo $galName;?></h2>
					<div class="breadcrumb">
						<span><a href="<?echo $path;?>">Home</a></span> <span><a href="<?echo $path;?>gallery/">Photo Gallery</a></span> <span><?php echo $galName;?></span>
					</div>

					<div class="inner-article">
                        <?php if(count($arrPhotosList)>0) {?>
                        <ul class="gallery">
                                <?php  for($i = 0; $i < count($arrPhotosList); $i++) {
                                    $rowPhotos = $arrPhotosList[$i];
                                    $class = (($i+1) % ALBUM_PER_ROW == 0) ? ' class="last"' : '';
                                    $imgPath = HOST.UPLOAD_PHOTO_GALLERY_PATH.'/thumbs/'.$rowPhotos['image'];
                                    $imgLargePath = HOST.UPLOAD_PHOTO_GALLERY_PATH.$rowPhotos['image'];
                                    ?>
                            <li>
                                <a href="<?php echo $imgLargePath;?>" rel="prettyPhoto[gallery]" class="a-big-pic" title="<?php echo stripslashes($rowPhotos['caption']);?>"><img src="<?php echo $imgLargePath;?>" <?php echo $class;?> alt="<?php echo $rowPhotos['caption'];?>"/></a><br />
                                        <!--<?php if(!empty($rowPhotos['caption'])) {?>
                                <p><?php echo stripslashes($rowPhotos['caption']);?></p>
                                            <?php } ?>-->
                            </li>
                                    <?php  } ?>

                        </ul><?php } else {
                            echo 'No photos available at the moment.';
                        }?>



					</div>
				</div><!-- /content-col -->
<?php
include $path."includes/footer.php";
?>