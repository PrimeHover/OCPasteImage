<?php namespace PrimeHover\PasteImage;

use Backend;
use Backend\Widgets\MediaManager;
use System\Classes\PluginBase;

/**
 * PasteImage Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'PasteImage',
            'description' => 'Upload an image into your media manager using the paste command',
            'author'      => 'PrimeHover',
            'icon'        => 'icon-paste'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

        /* Adding the new JS file to upload a pasted image */
        MediaManager::extend(function ($manager) {
            $manager->addJs('/plugins/primehover/pasteimage/assets/js/mediamanager-paste.js');
        });
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

}
