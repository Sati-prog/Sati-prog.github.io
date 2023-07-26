<?php
add_action('wp_enqueue_scripts', 'childhood_scripts');
add_action('wp_enqueue_style', 'childhood_style-page');

function childhood_scripts() {
    wp_enqueue_style( 'childhood-style', get_stylesheet_uri());

    wp_enqueue_style( 'childhood-style-page', get_stylesheet_uri() . '/assets/css/style-page.css');
    
    wp_enqueue_script( 'childhood-scripts', get_template_directory_uri() . '/assets/js/main.min.js', array(), null, true);

    wp_deregister_script( 'jquery' ); // отключаем имеющуюся библиотеку jquery
    wp_register_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' ); // подключаем библиотеку jquery, но другой версии
    wp_enqueue_script( 'jquery' ); // подключаем новую библиотеку jquery
};

add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'Main') {
        $atts['class'] = 'header__nav-item';

        if ($item->current) {
            $atts['class'] .= ' header__nav-item-active';
        }
        if ($item->ID === 183 && (in_category( 'soft_toys' ) || in_category( 'educational_toys' ))) {
            $atts['class'] .= ' header__nav-item-active';
        }
    };

    return $atts;
}

add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);

function my_acf_google_map_api( $api ){
	
	$api['key'] = 'AIzaSyD-TYb9gUIfYWdVQxSRnPtP4fyra5CQ8MI'; // Ваш ключ Google API
	
	return $api;
	
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

?>