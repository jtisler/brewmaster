<?php

class Index extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() {
		//echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['index/js/index.js'];
        $this->view->title = 'Production planning';


        $this->view->render('index/index');
	}

}