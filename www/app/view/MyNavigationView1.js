/*
 * File: app/view/MyNavigationView1.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyNavigationView1', {
    extend: 'Ext.navigation.View',
    alias: 'widget.navview',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        title: 'Lists!',
        id: 'listPro',
        items: [
            {
                xtype: 'list',
                title: '项目信息（test）',
                id: 'list',
                itemTpl: [
                    '<div>项目 {name}</div>'
                ],
                store: 'MyArrayStore'
            }
        ]
    }

});