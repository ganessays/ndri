<?php
$path = '../';
$thePage = 'photo';
$pageTitle = 'Photo Gallery';
require_once $path.'config/config.inc.php';
require_once HEADER;
require_once PHOTO_GALLERY;
require_once UTILS;
require_once PAGING;
$gallery = new Gallery();
$sqlGalleryList = $gallery->getGalleryListByParentIdSQL(1);
$PAGING = new PAGING($sqlGalleryList, 20, 9);
$sqlGalleryList = $PAGING->sql;
$arrGalleryList = $gallery->executeResultArray($sqlGalleryList);
define('ALBUM_PER_ROW',4);
?>



				<div class="content-col">
					<h2>Photo Gallery</h2>
					<div class="breadcrumb">
						<span><a href="<?echo $path;?>">Home</a></span> <span>Photo Gallery</span>
					</div>

					<div class="inner-article">
						<ul class="gallery">
						<?php if(count($arrGalleryList)>0) {?>
							<?php  for($i = 0; $i < count($arrGalleryList); $i++) {
								$rowGallery = $arrGalleryList[$i];
								$class = (($i+1) % ALBUM_PER_ROW == 0) ? ' class="last"' : '';

								$rowGalleryCover = $gallery->getGalleryCover($rowGallery['gallery_id']);
								if(!empty($rowGalleryCover)) {
									$imgPath = HOST.UPLOAD_PHOTO_GALLERY_PATH.'/thumbs/'.$rowGalleryCover['image'];
									$imgLargePath = HOST.UPLOAD_PHOTO_GALLERY_PATH.$rowGalleryCover['image'];
								}
								 $uri=HOST.'gallery/photos.php?g='.$rowGallery['gallery_id'];
								?>
									<li>
										<div class="a-big-pic"><a href="<?php echo $uri;?>" title="<?php echo stripslashes($rowGallery['gallery_name']);?>"><img src="<?php echo $imgLargePath;?>" <?php echo $class;?> alt="<?php echo $rowGallery['gallery_name'];?>" style="border: 0px;"/></a></div>
										<div class="g-data">
											<b><a href="<?php echo $uri;?>"><?php echo truncate(stripslashes($rowGallery['gallery_name']),2,120);?></a></b>
											<div class="a-date"><?php echo $gallery->countPhotos($rowGallery['gallery_id']).' Photos';?></div>
											<div class="a-date"><?php echo date('F d, Y',strtotime($rowGallery['gallery_date']));?></div>
											<?php //if(!empty($rowGallery['gallery_descrip'])){ echo stripslashes($rowGallery['gallery_descrip']); } ?>
										</div>
									</li>
										<?php if(($i+1) % ALBUM_PER_ROW == 0) echo ''; }?>

						</ul>

						<?php } else {
							echo 'No Gallery Available at the Moment';
						}?>


					</div>
				</div><!-- /content-col -->

<div class="pagination" style="float:right;padding:0 7px 5px 0;"><?php echo $PAGING->show_paging('index.php');?></div>
<?php require_once FOOTER;?>