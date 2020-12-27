(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-router-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-router-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'));
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
    }root.queryportal = factory(typeof queryportal === 'undefined' ? {} : queryportal, kotlin, this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-router-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy) {
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
  var rgba = $module$kotlin_css.kotlinx.css.rgba_gb4hak$;
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_bottom = $module$kotlin_css.kotlinx.css.set_bottom_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var getKClass = Kotlin.getKClass;
  var route = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.route_v3975a$;
  var switch_0 = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.switch_jg12zk$;
  var hashRouter = $module$kotlin_wrappers_kotlin_react_router_dom_jsLegacy.react.router.dom.hashRouter_tj5j28$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_1klik0$;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var I_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var P_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var SPAN_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  QueryPortalStyles.prototype = Object.create(StyleSheet.prototype);
  QueryPortalStyles.prototype.constructor = QueryPortalStyles;
  Router.prototype = Object.create(RComponent.prototype);
  Router.prototype.constructor = Router;
  IndexView.prototype = Object.create(RComponent.prototype);
  IndexView.prototype.constructor = IndexView;
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
    this.textInput_otx73s$_0 = this.css_wopuc9$([], QueryPortalStyles$textInput$lambda);
    this.fontMain_91xly1$_0 = this.css_wopuc9$([], QueryPortalStyles$fontMain$lambda);
    this.flexible_c7g00s$_0 = this.css_wopuc9$([], QueryPortalStyles$flexible$lambda);
    this.qpHeader_l7w4al$_0 = this.css_wopuc9$([], QueryPortalStyles$qpHeader$lambda(this));
    this.qpSideBar_3iavd4$_0 = this.css_wopuc9$([], QueryPortalStyles$qpSideBar$lambda);
  }
  var QueryPortalStyles$mainView_metadata = new PropertyMetadata('mainView');
  Object.defineProperty(QueryPortalStyles.prototype, 'mainView', {
    configurable: true,
    get: function () {
      return this.mainView_cei6fl$_0.getValue_n5byny$(this, QueryPortalStyles$mainView_metadata);
    }
  });
  var QueryPortalStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(QueryPortalStyles.prototype, 'textInput', {
    configurable: true,
    get: function () {
      return this.textInput_otx73s$_0.getValue_n5byny$(this, QueryPortalStyles$textInput_metadata);
    }
  });
  var QueryPortalStyles$fontMain_metadata = new PropertyMetadata('fontMain');
  Object.defineProperty(QueryPortalStyles.prototype, 'fontMain', {
    configurable: true,
    get: function () {
      return this.fontMain_91xly1$_0.getValue_n5byny$(this, QueryPortalStyles$fontMain_metadata);
    }
  });
  var QueryPortalStyles$flexible_metadata = new PropertyMetadata('flexible');
  Object.defineProperty(QueryPortalStyles.prototype, 'flexible', {
    configurable: true,
    get: function () {
      return this.flexible_c7g00s$_0.getValue_n5byny$(this, QueryPortalStyles$flexible_metadata);
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
  function QueryPortalStyles$mainView$lambda($receiver) {
    padding($receiver, get_px(24));
    set_backgroundColor($receiver, rgba(0, 0, 0, 0.0));
    return Unit;
  }
  function QueryPortalStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(3), get_px(6));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  function QueryPortalStyles$fontMain$lambda($receiver) {
    set_fontFamily($receiver, 'acuta');
    return Unit;
  }
  function QueryPortalStyles$flexible$lambda($receiver) {
    set_display($receiver, Display.flex);
    return Unit;
  }
  function QueryPortalStyles$qpHeader$lambda(this$QueryPortalStyles) {
    return function ($receiver) {
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
  function QueryPortalStyles$qpSideBar$lambda($receiver) {
    set_position($receiver, Position.absolute);
    set_top($receiver, new LinearDimension('0'));
    set_bottom($receiver, new LinearDimension('0'));
    set_left($receiver, new LinearDimension('0'));
    set_width($receiver, new LinearDimension('3em'));
    set_display($receiver, Display.flex);
    set_flexDirection($receiver, FlexDirection.column);
    set_justifyContent($receiver, JustifyContent.spaceBetween);
    return Unit;
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
  function Router(props) {
    RComponent_init(this);
  }
  function Router$render$lambda$lambda($receiver) {
    route($receiver, '/', getKClass(IndexView), true);
    return Unit;
  }
  function Router$render$lambda($receiver) {
    switch_0($receiver, Router$render$lambda$lambda);
    return Unit;
  }
  Router.prototype.render_ss14n$ = function ($receiver) {
    hashRouter($receiver, void 0, void 0, void 0, Router$render$lambda);
  };
  Router.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Router',
    interfaces: [RComponent]
  };
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function div($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().mainView);
    $receiver.child_52psg1$($receiver_0.create());
  }
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
  function QPSideBar$lambda($receiver, it) {
    return Unit;
  }
  var QPSideBar;
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
  function QueryPortal$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.title = closure$props.title;
      return Unit;
    };
  }
  function QueryPortal$lambda($receiver, props) {
    qpHeader($receiver, QueryPortal$lambda$lambda(props));
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
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function IndexView(props) {
    RComponent_init(this);
  }
  IndexView.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
    $receiver_0.css.unaryPlus_ocqyl0$(QueryPortalStyles_getInstance().mainView);
    $receiver_0.unaryPlus_pdl1vz$('IndexView');
    $receiver.child_52psg1$($receiver_0.create());
  };
  IndexView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IndexView',
    interfaces: [RComponent]
  };
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
  package$queryportal.Router = Router;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  var package$builders = package$queryportal.builders || (package$queryportal.builders = {});
  package$builders.div_ss14n$ = div;
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
  package$queryportal.QueryPortalState = QueryPortalState;
  Object.defineProperty(package$queryportal, 'QueryPortal', {
    get: function () {
      return QueryPortal;
    }
  });
  package$queryportal.queryPortal_m7atu7$ = queryPortal;
  var package$views = package$queryportal.views || (package$queryportal.views = {});
  package$views.IndexView = IndexView;
  QPHeader = functionalComponent(QPHeader$lambda);
  QPSideBar = functionalComponent(QPSideBar$lambda);
  QueryPortal = functionalComponent(QueryPortal$lambda);
  main();
  Kotlin.defineModule('queryportal', _);
  return _;
}));

//# sourceMappingURL=queryportal.js.map
