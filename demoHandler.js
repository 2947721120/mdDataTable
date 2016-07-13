(function(){
    'use strict';

    function DemoController($scope, $sce, PageService){
        $scope.pages = PageService.getAllPages();
        $scope.selectPage = selectPage;

        //init
        selectPage($scope.pages[0]);

        function selectPage(aPage){
            $scope.selectedPage = aPage;
            $scope.examplePageUrl = $sce.trustAsResourceUrl('//codepen.io/eMaj/embed/'+aPage.codepen+'/?height=3000&theme-id=0&default-tab=result');
        }
    }

    function PageService(){
        var service = this;

        service.getAllPages = getAllPages;

        var pages = [
            {
                name: '基本',
                codepen: 'mVOKEw'
            },{
                name: '表证',
                codepen: 'bEBKgK'
            },{
                name: '可选择的行',
                codepen: 'bEBKRj'
            },{
                name: '选择行回调',
                codepen: 'OMvbMj'
            },{
                name: '可排序的列',
                codepen: 'dGOKzN'
            },{
                name: '虚拟的重复',
                codepen: 'qbxLEQ'
            },{
                name: '动画排序图标',
                codepen: 'MKbXOM'
            },{
                name: '分页',
                codepen: 'GoNGMy'
            },{
                name: 'AJAX支持',
                codepen: 'BjpNow'
            },{
                name: '搜索',
                codepen: 'bEBKYx'
            },{
                name: 'Html 支持',
                codepen: 'LGLYjZ'
            },{
                name: '可编辑字段的小对话',
                codepen: 'LNYBZX'
            },{
                name: '可编辑字段的大对话框',
                codepen: 'zqYLNj'
            }/*,{
                name: '涟漪效应',
                codepen: 'xZRzpV'
            }*/
        ];

        function getAllPages(){
            return pages;
        }
    }

    angular.module('demo', ['ngMaterial']);

    angular.module('demo').service('PageService', PageService);
    angular.module('demo').controller('DemoController', DemoController);
}());
