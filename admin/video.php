<?php
	include "engine/core.php";
	include "master-include.php";
	if(!in_array($_SESSION['user'][''], array (
  0 => '',
)) || $GLOBALS['unauthorized_access']==1){
			include "menu.php";
			foreach($menu as $m)
			{
				$rls = [];
				foreach(explode(",", $m["roles"]) as $r)
				{
					$rls[] = trim($r);
				}
				if($m["unauthorized_access"]==1)
				{
					header("Location: {$m['link']}");
					die("");
				}
			}

			die("У вас нет доступа");
		}

	class GLOBAL_STORAGE
	{
	   static $parent_object;
	}
	

	$action = $_REQUEST['action'];
	$actions = [];





	


	$actions[''] = function()
	{
		$id = "1";
		if(isset($id))
		{
			$item = q("SELECT * FROM video_banner WHERE id=?",[$id]);
			$item = $item[0];
		}
		else
		{
			die("Ошибка. Редактирование несуществующей записи (вы не указали id)");
		}

		
		$media_file = "<video style='max-width:300px; max-height:300px;' controls><source src='".$item["video"]."'></video>";

		$html = '
			
		<style>
			html body.concept, html body.concept header, body.concept .table
			{
				background-color:#F2E9E2;
				color:;
			}

			#tableMain tr:nth-child(even)
			{
  				background-color: ;
			}
		</style>
			<h1 style="line-height: 30px"><small>'."Видео на главной".'</small></h1>
			
			<form class="form" enctype="multipart/form-data" method="POST">
				<input type="hidden" name="back" value="'.$_SERVER['HTTP_REFERER'].'">
				<fieldset>'.
					(isset($id)?
					'<input type="hidden" name="id" value="'.$id.'">
					<input type="hidden" name="action" value="edit_execute">'
					:
					'<input type="hidden" name="action" value="create_execute">'
					)
					.'

					
								<div class="form-group">
									<label class="control-label" for="video">Медиафайл</label>
									<div class="">
										'. ($item["video"]?'<p>'.$media_file.'</p>':"<p><span class=\"not-editable\">Файл не загружен</span></p>") .' <br/><label style="margin-left: 0;" for="video" class="file"> Выберите файл <input type="file" name="video" id="video" /></label></div>
								</div>

							

				</fieldset>
				<div>
					<button type="button" class="btn blue-inline" id="edit_page_save">Сохранить</a>
				</div>
			</form>
			

		';

		if(function_exists("processPage"))
		{
			$html = processPage($html);
		}
		return $html;
	};





	$actions['edit_execute'] = function()
	{
		$skip = false;
		if(function_exists("allowUpdate"))
		{
			if(!allowUpdate())
			{
				$skip = true;
			}
		}
		if(!$skip)
		{
			$id = $_REQUEST['id'];
			$set = [];

			

									$video = $_FILES['video'];
									if(isset($_FILES['video']) && $video['name']!=="")
									{
										$ignore=0;
										@mkdir($_SERVER['DOCUMENT_ROOT'].'/uploads');
										chmod($_SERVER['DOCUMENT_ROOT'].'/uploads',0777);
		                if(!file_exists($_SERVER['DOCUMENT_ROOT'].'/uploads'))
		                {
		                  die ("Не удается создать папку uploads в корневой директории. Создайте ее самостоятельно и предоставьте системе доступ к ней.");
		                }
		                $tm = time();
		                $ext = ".".pathinfo($video['name'], PATHINFO_EXTENSION);
										$target_file = $_SERVER['DOCUMENT_ROOT']."/uploads/".$tm."_".md5($video['name']).$ext;
										if(move_uploaded_file($video['tmp_name'], $target_file))
		                {
										    $set[] = "`video`='".("/uploads/".$tm."_".md5($video['name'])).$ext."'";
		                }
		                else
		                {
		                    $set[] = "`video`=''";
		                    buildMsg("Не удается загрузить изображение. Попробуйте отправить файл меньшего размера.", "danger");
		                }
									}
		              else {
		                $video = "";
		              }

									

			if(count($set)>0)
			{
				$set = implode(", ", $set);
				$sql = "UPDATE video_banner SET $set WHERE id=?";
				if(function_exists("processUpdateQuery"))
				{
					$sql = processUpdateQuery($sql);
				}

				qi($sql, [$id]);
				if(function_exists("afterUpdate"))
				{
					afterUpdate();
				}
			}
		}

		if(isset($_REQUEST['back']))
		{
			header("Location: {$_REQUEST['back']}");
		}
		else
		{
			header("Location: ".$_SERVER['HTTP_REFERER']);
		}
		die("");
	};







	

	$content = $actions[$action]();
	echo masterRender("Видео на главной", $content, 2);
