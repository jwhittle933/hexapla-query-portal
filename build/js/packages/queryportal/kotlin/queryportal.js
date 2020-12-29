(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-router-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'queryportal'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'queryportal'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'queryportal'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'queryportal'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy' is loaded prior to 'queryportal'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'queryportal'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'queryportal'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'queryportal'.");
    }root.queryportal = factory(typeof queryportal === 'undefined' ? {} : queryportal, kotlin, this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var Unit = Kotlin.kotlin.Unit;
  var margin = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var rgba = $module$kotlin_css.kotlinx.css.rgba_gb4hak$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var boxShadowInset = $module$kotlin_css.kotlinx.css.properties.boxShadowInset_x2br9$;
  var boxShadow = $module$kotlin_css.kotlinx.css.properties.boxShadow_x2br9$;
  var set_minHeight = $module$kotlin_css.kotlinx.css.set_minHeight_n8chyh$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var set_padding = $module$kotlin_css.kotlinx.css.set_padding_krvuuu$;
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var Cursor = $module$kotlin_css.kotlinx.css.Cursor;
  var set_cursor = $module$kotlin_css.kotlinx.css.set_cursor_hrkqtc$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var css = $module$kotlin_css.kotlinx.css;
  var route = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.route_9tkfd6$;
  var switch_0 = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.switch_jg12zk$;
  var hashRouter = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.hashRouter_tj5j28$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_1klik0$;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var createContext = $module$react.createContext;
  var useState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.useState_mh5how$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var I_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var P_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var SPAN_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var useContext = $module$react.useContext;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  QueryPortalStyles.prototype = Object.create(StyleSheet.prototype);
  QueryPortalStyles.prototype.constructor = QueryPortalStyles;
  function WelcomeStyles() {
    WelcomeStyles_instance = this;
    StyleSheet.call(this, 'WelcomeStyles', true);
    this.textContainer_felub4$_0 = this.css_wopuc9$([], WelcomeStyles$textContainer$lambda);
    this.textInput_7s4gnt$_0 = this.css_wopuc9$([], WelcomeStyles$textInput$lambda);
  }
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(WelcomeStyles.prototype, 'textContainer', {
    configurable: true,
    get: function () {
      return this.textContainer_felub4$_0.getValue_n5byny$(this, WelcomeStyles$textContainer_metadata);
    }
  });
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(WelcomeStyles.prototype, 'textInput', {
    configurable: true,
    get: function () {
      return this.textInput_7s4gnt$_0.getValue_n5byny$(this, WelcomeStyles$textInput_metadata);
    }
  });
  function WelcomeStyles$textContainer$lambda($receiver) {
    padding($receiver, get_px(5));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  function WelcomeStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(5));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  WelcomeStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WelcomeStyles',
    interfaces: [StyleSheet]
  };
  var WelcomeStyles_instance = null;
  function WelcomeStyles_getInstance() {
    if (WelcomeStyles_instance === null) {
      new WelcomeStyles();
    }return WelcomeStyles_instance;
  }
  function main$lambda$lambda$lambda(closure$hexapla) {
    return function ($receiver) {
      $receiver.title = 'The Hexapla Institute: Query Portal';
      $receiver.maintianer = closure$hexapla.maintainer;
      $receiver.version = closure$hexapla.version;
      return Unit;
    };
  }
  function main$lambda$lambda(closure$hexapla) {
    return function ($receiver) {
      queryPortal($receiver, main$lambda$lambda$lambda(closure$hexapla));
      return Unit;
    };
  }
  function main$lambda(closure$hexapla) {
    return function (it) {
      render(document.getElementById('root'), void 0, main$lambda$lambda(closure$hexapla));
      return Unit;
    };
  }
  function main() {
    var hexapla = new Hexapla(1.0, 'Jonathan Whittle', '2020');
    require('bulma');
    require('@fortawesome/fontawesome-free/js/all.min.js');
    window.onload = main$lambda(hexapla);
  }
  function Hexapla(version, maintainer, year) {
    this.version = version;
    this.maintainer = maintainer;
    this.year = year;
  }
  Hexapla.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hexapla',
    interfaces: []
  };
  Hexapla.prototype.component1 = function () {
    return this.version;
  };
  Hexapla.prototype.component2 = function () {
    return this.maintainer;
  };
  Hexapla.prototype.component3 = function () {
    return this.year;
  };
  Hexapla.prototype.copy_xjy5v7$ = function (version, maintainer, year) {
    return new Hexapla(version === void 0 ? this.version : version, maintainer === void 0 ? this.maintainer : maintainer, year === void 0 ? this.year : year);
  };
  Hexapla.prototype.toString = function () {
    return 'Hexapla(version=' + Kotlin.toString(this.version) + (', maintainer=' + Kotlin.toString(this.maintainer)) + (', year=' + Kotlin.toString(this.year)) + ')';
  };
  Hexapla.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.maintainer) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    return result;
  };
  Hexapla.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.maintainer, other.maintainer) && Kotlin.equals(this.year, other.year)))));
  };
  function QueryPortalStyles() {
    QueryPortalStyles_instance = this;
    StyleSheet.call(this, 'QueryPortalStyles', true);
    this.mainView_cei6fl$_0 = this.css_wopuc9$([], QueryPortalStyles$mainView$lambda);
    this.qpFrame_alj1ah$_0 = this.css_wopuc9$([], QueryPortalStyles$qpFrame$lambda(this));
    this.textInput_otx73s$_0 = this.css_wopuc9$([], QueryPortalStyles$textInput$lambda);
    this.click_65zl8j$_0 = this.css_wopuc9$([], QueryPortalStyles$click$lambda);
    this.fontMain_91xly1$_0 = this.css_wopuc9$([], QueryPortalStyles$fontMain$lambda(this));
    this.fontSecond_g08z04$_0 = this.css_wopuc9$([], QueryPortalStyles$fontSecond$lambda(this));
    this.flexible_c7g00s$_0 = this.css_wopuc9$([], QueryPortalStyles$flexible$lambda);
    this.flexBetween_f8d4pi$_0 = this.css_wopuc9$([], QueryPortalStyles$flexBetween$lambda(this));
    this.flexColumn_616jwg$_0 = this.css_wopuc9$([], QueryPortalStyles$flexColumn$lambda(this));
    this.qpHeader_l7w4al$_0 = this.css_wopuc9$([], QueryPortalStyles$qpHeader$lambda(this));
    this.qpSideBar_3iavd4$_0 = this.css_wopuc9$([], QueryPortalStyles$qpSideBar$lambda(this));
  }
  var QueryPortalStyles$mainView_metadata = new PropertyMetadata('mainView');
  Object.defineProperty(QueryPortalStyles.prototype, 'mainView', {
    configurable: true,
    get: function () {
      return this.mainView_cei6fl$_0.getValue_n5byny$(this, QueryPortalStyles$mainView_metadata);
    }
  });
  var QueryPortalStyles$qpFrame_metadata = new PropertyMetadata('qpFrame');
  Object.defineProperty(QueryPortalStyles.prototype, 'qpFrame', {
    configurable: true,
    get: function () {
      return this.qpFrame_alj1ah$_0.getValue_n5byny$(this, QueryPortalStyles$qpFrame_metadata);
    }
  });
  var QueryPortalStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(QueryPortalStyles.prototype, 'textInput', {
    configurable: true,
    get: function () {
      return this.textInput_otx73s$_0.getValue_n5byny$(this, QueryPortalStyles$textInput_metadata);
    }
  });
  var QueryPortalStyles$click_metadata = new PropertyMetadata('click');
  Object.defineProperty(QueryPortalStyles.prototype, 'click', {
    configurable: true,
    get: function () {
      return this.click_65zl8j$_0.getValue_n5byny$(this, QueryPortalStyles$click_metadata);
    }
  });
  var QueryPortalStyles$fontMain_metadata = new PropertyMetadata('fontMain');
  Object.defineProperty(QueryPortalStyles.prototype, 'fontMain', {
    configurable: true,
    get: function () {
      return this.fontMain_91xly1$_0.getValue_n5byny$(this, QueryPortalStyles$fontMain_metadata);
    }
  });
  var QueryPortalStyles$fontSecond_metadata = new PropertyMetadata('fontSecond');
  Object.defineProperty(QueryPortalStyles.prototype, 'fontSecond', {
    configurable: true,
    get: function () {
      return this.fontSecond_g08z04$_0.getValue_n5byny$(this, QueryPortalStyles$fontSecond_metadata);
    }
  });
  var QueryPortalStyles$flexible_metadata = new PropertyMetadata('flexible');
  Object.defineProperty(QueryPortalStyles.prototype, 'flexible', {
    configurable: true,
    get: function () {
      return this.flexible_c7g00s$_0.getValue_n5byny$(this, QueryPortalStyles$flexible_metadata);
    }
  });
  var QueryPortalStyles$flexBetween_metadata = new PropertyMetadata('flexBetween');
  Object.defineProperty(QueryPortalStyles.prototype, 'flexBetween', {
    configurable: true,
    get: function () {
      return this.flexBetween_f8d4pi$_0.getValue_n5byny$(this, QueryPortalStyles$flexBetween_metadata);
    }
  });
  var QueryPortalStyles$flexColumn_metadata = new PropertyMetadata('flexColumn');
  Object.defineProperty(QueryPortalStyles.prototype, 'flexColumn', {
    configurable: true,
    get: function () {
      return this.flexColumn_616jwg$_0.getValue_n5byny$(this, QueryPortalStyles$flexColumn_metadata);
    }
  });
  var QueryPortalStyles$qpHeader_metadata = new PropertyMetadata('qpHeader');
  Object.defineProperty(QueryPortalStyles.prototype, 'qpHeader', {
    configurable: true,
    get: function () {
      return this.qpHeader_l7w4al$_0.getValue_n5byny$(this, QueryPortalStyles$qpHeader_metadata);
    }
  });
  var QueryPortalStyles$qpSideBar_metadata = new PropertyMetadata('qpSideBar');
  Object.defineProperty(QueryPortalStyles.prototype, 'qpSideBar', {
    configurable: true,
    get: function () {
      return this.qpSideBar_3iavd4$_0.getValue_n5byny$(this, QueryPortalStyles$qpSideBar_metadata);
    }
  });
  QueryPortalStyles.prototype.primaryColor_0 = function () {
    return new Color('#343b4d');
  };
  QueryPortalStyles.prototype.secondaryColor = function () {
    return new Color('#bfd2ff');
  };
  QueryPortalStyles.prototype.tertiaryColor = function () {
    return new Color('#3f6ca6');
  };
  QueryPortalStyles.prototype.lightGrey = function () {
    return new Color('#f5f5f5');
  };
  QueryPortalStyles.prototype.mainFont = function () {
    return 'acuta';
  };
  QueryPortalStyles.prototype.secondaryFont = function () {
    return 'Merriweather';
  };
  function QueryPortalStyles$mainView$lambda($receiver) {
    set_paddingLeft($receiver, new LinearDimension('3em'));
    set_paddingRight($receiver, new LinearDimension('1em'));
    set_paddingTop($receiver, new LinearDimension('5em'));
    set_backgroundColor($receiver, rgba(0, 0, 0, 0.0));
    set_width($receiver, new LinearDimension('100%'));
    set_height($receiver, new LinearDimension('100%'));
    return Unit;
  }
  function QueryPortalStyles$qpFrame$lambda$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      padding($receiver, new LinearDimension('1em'));
      set_backgroundColor($receiver, new Color('#fafafa'));
      set_minHeight($receiver, new LinearDimension('3em'));
      $receiver.unaryPlus_ocqyl0$(this$QueryPortalStyles.flexible);
      set_alignItems($receiver, Align.center);
      set_justifyContent($receiver, JustifyContent.spaceBetween);
      set_width($receiver, new LinearDimension('100%'));
      return Unit;
    };
  }
  function QueryPortalStyles$qpFrame$lambda$lambda_0(this$QueryPortalStyles) {
    return function ($receiver) {
      set_width($receiver, new LinearDimension('100%'));
      set_backgroundColor($receiver, Color.Companion.white);
      set_padding($receiver, '1em');
      set_fontFamily($receiver, this$QueryPortalStyles.mainFont());
      return Unit;
    };
  }
  function QueryPortalStyles$qpFrame$lambda$lambda_1($receiver) {
    set_minHeight($receiver, new LinearDimension('3em'));
    return Unit;
  }
  function QueryPortalStyles$qpFrame$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      boxShadowInset($receiver, new Color('#ffffff'), new LinearDimension('0'), new LinearDimension('0.5px'), new LinearDimension('0'), new LinearDimension('0'));
      boxShadow($receiver, new Color('#b3b3b3'), new LinearDimension('0'), new LinearDimension('1px'), new LinearDimension('2px'), new LinearDimension('0'));
      padding($receiver, new LinearDimension('0'));
      set_minHeight($receiver, new LinearDimension('12em'));
      $receiver.child_xk38i9$('.frame-heading', QueryPortalStyles$qpFrame$lambda$lambda(this$QueryPortalStyles));
      $receiver.child_xk38i9$('.frame-body', QueryPortalStyles$qpFrame$lambda$lambda_0(this$QueryPortalStyles));
      $receiver.child_xk38i9$('.frame-footer', QueryPortalStyles$qpFrame$lambda$lambda_1);
      return Unit;
    };
  }
  function QueryPortalStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(3), get_px(6));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  function QueryPortalStyles$click$lambda($receiver) {
    set_cursor($receiver, Cursor.pointer);
    return Unit;
  }
  function QueryPortalStyles$fontMain$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_fontFamily($receiver, this$QueryPortalStyles.mainFont());
      return Unit;
    };
  }
  function QueryPortalStyles$fontSecond$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_fontFamily($receiver, this$QueryPortalStyles.secondaryFont());
      return Unit;
    };
  }
  function QueryPortalStyles$flexible$lambda($receiver) {
    set_display($receiver, Display.flex);
    return Unit;
  }
  function QueryPortalStyles$flexBetween$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      $receiver.unaryPlus_ocqyl0$(this$QueryPortalStyles.flexible);
      set_justifyContent($receiver, JustifyContent.spaceBetween);
      set_alignItems($receiver, Align.center);
      return Unit;
    };
  }
  function QueryPortalStyles$flexColumn$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      $receiver.unaryPlus_ocqyl0$(this$QueryPortalStyles.flexBetween);
      set_flexDirection($receiver, FlexDirection.column);
      return Unit;
    };
  }
  function QueryPortalStyles$qpHeader$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_position($receiver, Position.absolute);
      set_top($receiver, new LinearDimension('0'));
      set_right($receiver, new LinearDimension('0'));
      set_left($receiver, new LinearDimension('0'));
      padding_0($receiver, new LinearDimension('0'), new LinearDimension('2em'));
      set_display($receiver, Display.flex);
      set_justifyContent($receiver, JustifyContent.spaceBetween);
      set_alignItems($receiver, Align.center);
      set_width($receiver, new LinearDimension('100%'));
      set_backgroundColor($receiver, this$QueryPortalStyles.primaryColor_0());
      set_height($receiver, new LinearDimension('3em'));
      $receiver.classes = mutableListOf(['has-text-white']);
      return Unit;
    };
  }
  function QueryPortalStyles$qpSideBar$lambda$lambda$lambda$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_color($receiver, this$QueryPortalStyles.secondaryColor());
      set_backgroundColor($receiver, this$QueryPortalStyles.tertiaryColor());
      return Unit;
    };
  }
  function QueryPortalStyles$qpSideBar$lambda$lambda$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_width($receiver, new LinearDimension('100%'));
      set_height($receiver, new LinearDimension('3em'));
      $receiver.unaryPlus_ocqyl0$(this$QueryPortalStyles.click);
      $receiver.hover_sa4rfh$(QueryPortalStyles$qpSideBar$lambda$lambda$lambda$lambda(this$QueryPortalStyles));
      return Unit;
    };
  }
  function QueryPortalStyles$qpSideBar$lambda$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_minHeight($receiver, new LinearDimension('5em'));
      $receiver.invoke_30ubnp$(css.span, QueryPortalStyles$qpSideBar$lambda$lambda$lambda(this$QueryPortalStyles));
      return Unit;
    };
  }
  function QueryPortalStyles$qpSideBar$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
      set_width($receiver, new LinearDimension('3em'));
      set_height($receiver, new LinearDimension('100vh'));
      $receiver.unaryPlus_ocqyl0$(this$QueryPortalStyles.flexible);
      set_flexDirection($receiver, FlexDirection.column);
      set_justifyContent($receiver, JustifyContent.spaceBetween);
      set_padding($receiver, '3em 0');
      set_paddingBottom($receiver, new LinearDimension('1em'));
      set_zIndex($receiver, -1);
      $receiver.invoke_30ubnp$(css.div, QueryPortalStyles$qpSideBar$lambda$lambda(this$QueryPortalStyles));
      return Unit;
    };
  }
  QueryPortalStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'QueryPortalStyles',
    interfaces: [StyleSheet]
  };
  var QueryPortalStyles_instance = null;
  function QueryPortalStyles_getInstance() {
    if (QueryPortalStyles_instance === null) {
      new QueryPortalStyles();
    }return QueryPortalStyles_instance;
  }
  function QPRouter$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function QPRouter$lambda$lambda$lambda$lambda(this$) {
    return function () {
      return index(this$, QPRouter$lambda$lambda$lambda$lambda$lambda);
    };
  }
  function QPRouter$lambda$lambda$lambda($receiver) {
    route($receiver, '/', void 0, true, QPRouter$lambda$lambda$lambda$lambda($receiver));
    return Unit;
  }
  function QPRouter$lambda$lambda($receiver) {
    switch_0($receiver, QPRouter$lambda$lambda$lambda);
    return Unit;
  }
  function QPRouter$lambda($receiver, it) {
    hashRouter($receiver, void 0, void 0, void 0, QPRouter$lambda$lambda);
    return Unit;
  }
  var QPRouter;
  function qpRouter$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function qpRouter$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(qpRouter$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function qpRouter($receiver, handler) {
    return child($receiver, QPRouter, void 0, qpRouter$lambda(handler));
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function div($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().mainView);
    $receiver.child_52psg1$($receiver_0.create());
  }
  function UserContext(userSignedIn, setUserSignedIn) {
    this.userSignedIn = userSignedIn;
    this.setUserSignedIn = setUserSignedIn;
  }
  UserContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserContext',
    interfaces: []
  };
  var QueryPortalContext;
  function QueryPortalProvider$lambda$lambda($receiver) {
    return Unit;
  }
  function QueryPortalProvider$lambda($receiver, props) {
    var tmp$ = useState(false);
    var userSignedIn = tmp$.component1()
    , setUserSignedIn = tmp$.component2();
    var userContext = new UserContext(userSignedIn, setUserSignedIn);
    $receiver.invoke_csqs6z$(QueryPortalContext.Provider, userContext, QueryPortalProvider$lambda$lambda);
    return Unit;
  }
  var QueryPortalProvider;
  function i$lambda(closure$classes) {
    return function (it) {
      return new I_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledP$lambda(it) {
    return new P_init_0(html.emptyMap, it);
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function QPHeader$lambda($receiver, props) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    $receiver_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().qpHeader);
    var $receiver_0_0 = new RDOMBuilder_init(p$lambda(null));
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledP$lambda);
    var $receiver_1 = $receiver_0_1.css;
    $receiver_1.classes = mutableListOf(['has-text-white']);
    $receiver_1.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().fontMain);
    $receiver_0_1.unaryPlus_pdl1vz$(props.title);
    $receiver_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(span$lambda('icon has-text-white'));
    var $receiver_0_3 = new RDOMBuilder_init(i$lambda('fas fa-user'));
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    $receiver_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var QPHeader;
  function qpHeader$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function qpHeader$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(qpHeader$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function qpHeader($receiver, handler) {
    return child($receiver, QPHeader, void 0, qpHeader$lambda(handler));
  }
  function i$lambda_0(closure$classes) {
    return function (it) {
      return new I_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function QPSideBar$lambda($receiver, it) {
    var tmp$ = useState(false);
    var open = tmp$.component1()
    , setOpen = tmp$.component2();
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_1 = $receiver_0.css;
    $receiver_1.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().qpSideBar);
    set_backgroundColor($receiver_1, QueryPortalStyles_getInstance().lightGrey());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_2 = $receiver_0_0.css;
    $receiver_2.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().flexColumn);
    set_color($receiver_2, QueryPortalStyles_getInstance().tertiaryColor());
    var $receiver_0_1 = new RDOMBuilder_init(span$lambda_0('icon'));
    var $receiver_0_2 = new RDOMBuilder_init(i$lambda_0('fas fa-home'));
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_3 = new RDOMBuilder_init(span$lambda_0('icon'));
    var $receiver_0_4 = new RDOMBuilder_init(i$lambda_0('fas fa-search'));
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    $receiver_0_0.child_52psg1$($receiver_0_3.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_5 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    var $receiver_3 = $receiver_0_5.css;
    $receiver_3.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().flexColumn);
    set_color($receiver_3, QueryPortalStyles_getInstance().tertiaryColor());
    var $receiver_0_6 = new RDOMBuilder_init(span$lambda_0('icon'));
    var $receiver_0_7 = new RDOMBuilder_init(i$lambda_0('fas fa-lock'));
    $receiver_0_6.child_52psg1$($receiver_0_7.create());
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    var $receiver_0_8 = new RDOMBuilder_init(span$lambda_0('icon'));
    var $receiver_0_9 = new RDOMBuilder_init(i$lambda_0('fas fa-bars'));
    $receiver_0_8.child_52psg1$($receiver_0_9.create());
    $receiver_0_5.child_52psg1$($receiver_0_8.create());
    $receiver_0.child_52psg1$($receiver_0_5.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var QPSideBar;
  function qpSideBar$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function qpSideBar$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(qpSideBar$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function qpSideBar($receiver, handler) {
    return child($receiver, QPSideBar, void 0, qpSideBar$lambda(handler));
  }
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function QueryPortalState(name) {
    this.name = name;
  }
  QueryPortalState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryPortalState',
    interfaces: []
  };
  QueryPortalState.prototype.component1 = function () {
    return this.name;
  };
  QueryPortalState.prototype.copy_61zpoe$ = function (name) {
    return new QueryPortalState(name === void 0 ? this.name : name);
  };
  QueryPortalState.prototype.toString = function () {
    return 'QueryPortalState(name=' + Kotlin.toString(this.name) + ')';
  };
  QueryPortalState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  QueryPortalState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function QueryPortal$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.title = closure$props.title;
      return Unit;
    };
  }
  function QueryPortal$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function QueryPortal$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function QueryPortal$lambda$lambda(closure$props) {
    return function ($receiver) {
      qpHeader($receiver, QueryPortal$lambda$lambda$lambda(closure$props));
      var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
      var $receiver_1 = $receiver_0.css;
      $receiver_1.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().flexible);
      set_justifyContent($receiver_1, JustifyContent.flexStart);
      var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
      set_width($receiver_0_0.css, new LinearDimension('3em'));
      qpSideBar($receiver_0_0, QueryPortal$lambda$lambda$lambda$lambda$lambda);
      $receiver_0.child_52psg1$($receiver_0_0.create());
      var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda_2);
      set_width($receiver_0_1.css, new LinearDimension('100%'));
      qpRouter($receiver_0_1, QueryPortal$lambda$lambda$lambda$lambda$lambda_0);
      $receiver_0.child_52psg1$($receiver_0_1.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function QueryPortal$lambda($receiver, props) {
    var tmp$ = useState(false);
    var userSignedIn = tmp$.component1()
    , setUserSignedIn = tmp$.component2();
    var userContext = new UserContext(userSignedIn, setUserSignedIn);
    $receiver.invoke_csqs6z$(QueryPortalContext.Provider, userContext, QueryPortal$lambda$lambda(props));
    return Unit;
  }
  var QueryPortal;
  function queryPortal$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function queryPortal$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(queryPortal$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function queryPortal($receiver, handler) {
    return child($receiver, QueryPortal, void 0, queryPortal$lambda(handler));
  }
  function styledP$lambda_0(it) {
    return new P_init_0(html.emptyMap, it);
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function IndexView$lambda($receiver, it) {
    var context = {v: useContext(QueryPortalContext)};
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    $receiver_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().mainView);
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_3);
    $receiver_0_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().qpFrame);
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda('frame-heading'));
    var $receiver_0_2 = new RDOMBuilder_init(h1$lambda(null));
    var $receiver_0_3 = new StyledDOMBuilder_init(styledP$lambda_0);
    var $receiver_1 = $receiver_0_3.css;
    $receiver_1.classes = mutableListOf(['title is-size-4']);
    $receiver_1.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().fontSecond);
    $receiver_0_3.unaryPlus_pdl1vz$('Query Portal');
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    var $receiver_0_4 = new StyledDOMBuilder_init(styledP$lambda_0);
    var $receiver_2 = $receiver_0_4.css;
    $receiver_2.classes = mutableListOf(['is-size-7', 'subtitle']);
    $receiver_2.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().fontSecond);
    $receiver_0_4.unaryPlus_pdl1vz$('Welcome to the home for The Hexapla Institute Query Portal');
    $receiver_0_2.child_52psg1$($receiver_0_4.create());
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda('frame-body'));
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda_0('content'));
    $receiver_0_6.unaryPlus_pdl1vz$('Signed In: ' + context.v.userSignedIn);
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    $receiver_0_0.child_52psg1$($receiver_0_5.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var IndexView;
  function index$lambda$lambda(closure$handler) {
    return function ($receiver) {
      closure$handler($receiver);
      return Unit;
    };
  }
  function index$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(index$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function index($receiver, handler) {
    return child($receiver, IndexView, void 0, index$lambda(handler));
  }
  Object.defineProperty(_, 'WelcomeStyles', {
    get: WelcomeStyles_getInstance
  });
  _.main = main;
  var package$org = _.org || (_.org = {});
  var package$hexapla = package$org.hexapla || (package$org.hexapla = {});
  package$hexapla.Hexapla = Hexapla;
  var package$queryportal = package$hexapla.queryportal || (package$hexapla.queryportal = {});
  Object.defineProperty(package$queryportal, 'QueryPortalStyles', {
    get: QueryPortalStyles_getInstance
  });
  Object.defineProperty(package$queryportal, 'QPRouter', {
    get: function () {
      return QPRouter;
    }
  });
  package$queryportal.qpRouter_1hs4h9$ = qpRouter;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  var package$builders = package$queryportal.builders || (package$queryportal.builders = {});
  package$builders.div_ss14n$ = div;
  var package$context = package$queryportal.context || (package$queryportal.context = {});
  package$context.UserContext = UserContext;
  Object.defineProperty(package$context, 'QueryPortalContext', {
    get: function () {
      return QueryPortalContext;
    }
  });
  Object.defineProperty(package$context, 'QueryPortalProvider', {
    get: function () {
      return QueryPortalProvider;
    }
  });
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  var package$global = package$queryportal.global || (package$queryportal.global = {});
  Object.defineProperty(package$global, 'QPHeader', {
    get: function () {
      return QPHeader;
    }
  });
  package$global.qpHeader_oazpws$ = qpHeader;
  Object.defineProperty(package$global, 'QPSideBar', {
    get: function () {
      return QPSideBar;
    }
  });
  package$global.qpSideBar_qlxoj$ = qpSideBar;
  package$queryportal.QueryPortalState = QueryPortalState;
  Object.defineProperty(package$queryportal, 'QueryPortal', {
    get: function () {
      return QueryPortal;
    }
  });
  package$queryportal.queryPortal_m7atu7$ = queryPortal;
  var package$views = package$queryportal.views || (package$queryportal.views = {});
  Object.defineProperty(package$views, 'IndexView', {
    get: function () {
      return IndexView;
    }
  });
  package$views.index_uz1dw4$ = index;
  QPRouter = functionalComponent(QPRouter$lambda);
  QueryPortalContext = createContext();
  QueryPortalProvider = functionalComponent(QueryPortalProvider$lambda);
  QPHeader = functionalComponent(QPHeader$lambda);
  QPSideBar = functionalComponent(QPSideBar$lambda);
  QueryPortal = functionalComponent(QueryPortal$lambda);
  IndexView = functionalComponent(IndexView$lambda);
  main();
  Kotlin.defineModule('queryportal', _);
  return _;
}));

//# sourceMappingURL=queryportal.js.map
