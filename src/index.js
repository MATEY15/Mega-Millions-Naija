// Подключение Jquery
import $ from '../../../libs/js/jquery.min';

window.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

window.jQuery = $;
window.$ = $;

window.mobileWidth = 1279;
window.mobileWidthSmall = 768;

require('../../../plugins/dynamicAdapt');