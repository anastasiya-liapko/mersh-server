<?php
require_once 'ApiController.php';

class InfoApi extends ApiController
{
    public $apiName = 'info';

    /**
     * Метод GET
     * получение параметров отдельных страниц и их элементов
     * http://ДОМЕН/api/info/infoName
     */
    public function indexAction()
    {
        return $this->response('Error. Required parameter: infoName', 400);
    }

    public function viewAction()
    {
        $name = array_shift($this->requestUri);

        if($name == 'main'){
			$company = q1("SELECT title, txt, img FROM texts WHERE id='6'", []);
			$categories = q("SELECT * FROM categories ORDER BY orderby", []);
			$collections = q("SELECT * FROM collections ORDER BY orderby", []);
			if($categories||$collections||$company){
				$result = [];
				$result['info'] = $company;
				$result['categories'] = $categories;
				$result['collections'] = $collections;
				return $this->response($result, 200);
			}
        } elseif ($name == 'about'){
			$about = q1("SELECT title, txt FROM texts WHERE id='1'", []);		
			$about_images = q("SELECT img FROM about_images WHERE is_visible='1' ORDER BY orderby", []);
			if($about){
				$main_image = array_shift($about_images);
				$result = [];
				$result['info'] = $about;
				$result['main_image'] = $main_image;
				$result['images'] = $about_images;
				return $this->response($result, 200);
			}
		} elseif ($name == 'contacts'){
			$contacts = q1("SELECT * FROM contacts WHERE id='1'", []);
			if($contacts){
				return $this->response($contacts, 200);
			}
		} elseif ($name == 'privacy'){
			$privacy = q1("SELECT title, txt FROM texts WHERE id='4'", []);
			if($privacy){
				return $this->response($privacy, 200);
			}			
		} elseif ($name == 'services'){
			$payment = q1("SELECT title, txt FROM texts WHERE id='2'", []);
			$delivery = q1("SELECT title, txt FROM texts WHERE id='3'", []);
			$result = [];
			if($payment){
				$result['payment'] = $payment;
			}
			if($delivery){
				$result['delivery'] = $delivery;
			}
			if($payment || $delivery){
				return $this->response($result, 200);
			}
		} elseif ($name == 'lookbook'){
			$lookbook = q1("SELECT title, txt FROM texts WHERE id='5'", []);	
			$lookbook_images = q("SELECT img FROM lookbook_images WHERE is_visible='1' ORDER BY orderby", []);
			if($lookbook){
				$main_image = array_shift($lookbook_images);
				$result = [];
				$result['info'] = $lookbook;
				$result['main_image'] = $main_image;
				$result['images'] = $lookbook_images;
				return $this->response($result, 200);
			}			
		} elseif ($name == 'header'){
			$banner = q1("SELECT video FROM video_banner WHERE id='1'", []);
			$arItems = q("SELECT id, name, link, (CASE WHEN parent_id IS NULL THEN '0' ELSE parent_id END) AS parent_id FROM nav", []);
			
			if($arItems || $banner){
			
				function buildTreeArray($arItems, $section_id = 'parent_id', $element_id = 'id') {
					$childs = array();
					if(!is_array($arItems) || empty($arItems)) {
						return array();
					}
					foreach($arItems as &$item) {
						if(!$item[$section_id]) {
							$item[$section_id] = 0;
						}
						$childs[$item[$section_id]][] = &$item;
					}
					unset($item);
					foreach($arItems as &$item) {
						if (isset($childs[$item[$element_id]])) {
							$item['childs'] = $childs[$item[$element_id]];
						}
					}
					return $childs[0];
				}
				
				$menu = buildTreeArray($arItems);

				$result['banner'] = $banner;
				$result['nav'] = $menu;
				return $this->response($result, 200);
			}		
		} elseif ($name == 'articles'){
			$articles = q("SELECT * FROM articles ORDER BY orderby", []);
			if($articles){
				return $this->response($articles, 200);
			}			
		} elseif ($name == 'article'){
			$id = array_shift($this->requestUri);
			if($id){
				$article = q1("SELECT * FROM articles WHERE id=?", [$id]);
				
				if($article){
					return $this->response($article, 200);
				}
			}			
		} elseif ($name == 'social'){
			$social_links = q("SELECT * FROM social_links WHERE is_display='1' ORDER BY orderby",[]);	
			if($social_links){
				return $this->response($social_links, 200);
			}			
		}
        return $this->response('Data not found', 404);
    }

    public function createAction()
    {
        return $this->response("Saving error", 500);
    }

}