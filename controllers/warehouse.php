<?php

class Warehouse extends Controller
{

    function __construct()
    {
        parent::__construct();
    }

    function index()
    {
        //echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['warehouse/js/index.js'];
        $this->view->title = 'Warehouse - dashboard';

        $this->view->render('warehouse/index');
    }

    function beer()
    {
        //echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['warehouse/js/chart.js'];
        $this->view->title = 'Warehouse - beer';

        $this->view->render('warehouse/beer');
    }

    function ingredients()
    {
        //echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['warehouse/js/chart.js'];
        $this->view->title = 'Warehouse - ingredients';

        $this->view->render('warehouse/ingredients');
    }
}