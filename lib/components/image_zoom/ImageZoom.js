var _jsxFileName = 'src/lib/components/image_zoom/ImageZoom.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var ImageZoom = function (_React$Component) {
  _inherits(ImageZoom, _React$Component);

  function ImageZoom() {
    _classCallCheck(this, ImageZoom);

    var _this = _possibleConstructorReturn(this, (ImageZoom.__proto__ || Object.getPrototypeOf(ImageZoom)).call(this));

    _this.state = {
      px: 0,
      py: 0,
      Ox: 0,
      Oy: 0,
      w: 0,
      h: 0,
      dx: 0,
      dy: 0,
      cEx: 0,
      cEy: 0,
      isVisible: false,
      isStatic: false
    };
    return _this;
  }

  _createClass(ImageZoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var img = document.getElementById('img');
      var clipper = document.getElementById('clipper');
      var cEx = clipper.getBoundingClientRect().left + this.props.s / 2,
          //these are clipper position erors tht are eliminated
      cEy = clipper.getBoundingClientRect().top + this.props.s / 2;

      var w = this.props.width;

      var that = this;

      // As Image height is not provided as prop , height is calculated after image is loaded.

      img.addEventListener('load', function () {
        var h = img.clientHeight,
            Oy = img.getBoundingClientRect().top,
            Ox = img.getBoundingClientRect().left;

        that.setState({ h: h, Ox: Ox, Oy: Oy });
      });

      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.setState({ w: w, cEx: cEx, cEy: cEy });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      var img = this.refs.img.removeEventListener('load', function () {
        var h = img.clientHeight;
        this.setState({ h: h });
      });
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(_ref) {
      var pageX = _ref.pageX,
          pageY = _ref.pageY;

      // pageX and pageY are the cursor position during mousemove

      var dx = this.d(pageX, this.state.Ox, this.props.s),
          dy = this.d(pageY, this.state.Oy, this.props.s);

      var _state = this.state,
          px = _state.px,
          py = _state.py,
          Ox = _state.Ox,
          Oy = _state.Oy;


      var w = this.props.width,
          h = this.state.h,

      // isVisible is for checking the cursor is within the image or not.
      // if mouse is outside the img element , isvisible is false and vise versa
      isVisible = false,

      // isStatic is used for the square sized clipper on the image is touching the boundrary of the parent image or not.

      isStatic = false;

      if (dx < 0 || dy < 0 || dx > w - this.props.s || dy > h - this.props.s) {
        isStatic = true;
      }
      if (px > Ox && py > Oy && px < w + Ox && py < h + Oy) {
        isVisible = true;
      }
      var clipper = document.getElementById('clipper');
      console.log(clipper.getBoundingClientRect().top, 'cll', py);

      this.setState({
        px: pageX,
        py: pageY,
        dx: dx,
        dy: dy,
        isVisible: isVisible,
        isStatic: isStatic
      });
    }
  }, {
    key: 'd',
    value: function d(p, O, s) {
      return p - (O + s / 2);
    }
  }, {
    key: 'D',
    value: function D(d, m) {
      return m * d;
    }
  }, {
    key: 'render',
    value: function render() {
      var m = this.props.magnification ? this.props.magnification : 5;
      var W = this.D(this.props.width, m),
          H = this.D(this.state.h, m),
          S = this.D(this.props.s, m),
          Dx = this.D(this.state.dx, m),
          Dy = this.D(this.state.dy, m);
      var posX = -Dx,
          posY = -Dy;

      if (Dx < 0) {
        posX = 0;
      }
      if (Dy < 0) {
        posY = 0;
      }
      if (Dy > H - S) {
        posY = S - H;
      }
      if (Dx > W - S) {
        posX = S - W;
      }

      var w = this.props.width,
          h = this.state.h,
          s = this.props.s,
          src = this.props.src,
          zoomedImgTop = this.props.zoomedImgTop,
          zoomedImgLeft = this.props.zoomedImgLeft;
      var _state2 = this.state,
          dx = _state2.dx,
          dy = _state2.dy,
          Ox = _state2.Ox,
          Oy = _state2.Oy,
          py = _state2.py,
          px = _state2.px,
          cEx = _state2.cEx,
          cEy = _state2.cEy;


      var sPos = getSposition(dx, dy, w, h, s, Ox, Oy, px, py, cEx, cEy);

      var sLeft = sPos.sLeft;
      var sTop = sPos.sTop;

      return React.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        },
        React.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          },
          React.createElement('img', {
            id: 'img',
            ref: 'img',
            src: src,
            width: w + 'px',
            height: 'auto',
            style: { margin: '60px', position: 'relative' },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          })
        ),
        React.createElement('div', {
          id: 'clipper',
          style: {
            position: 'absolute',
            width: s + 'px',
            height: s + 'px',
            top: '' + (!this.state.isStatic ? py - this.state.cEy : sTop),
            left: '' + (!this.state.isStatic ? px - this.state.cEx : sLeft),
            // top:`${py-this.state.cEy}`,
            // left:`${px-this.state.cEx}`,
            visibility: '' + (this.state.isVisible ? 'visible' : 'hidden'),
            background: 'rgba(0,0,0,.3)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }),
        console.log(s, 's'),
        React.createElement(
          'div',
          {
            style: {
              width: S + 'px',
              height: S + 'px',
              background: '#ccc',
              backgroundImage: 'url(' + src + ')',
              backgroundPosition: posX + 'px ' + posY + 'px',
              backgroundSize: W + 'px ' + H + 'px',
              backgroundRepeat: 'no-repeat',

              backgroundAttachment: 'scroll',
              transition: 'opacity .3s ease-out,visibility .3s ease-out',
              position: 'absolute',
              top: '' + (zoomedImgTop + 'px'),
              left: '' + (zoomedImgLeft + 'px'),
              zIndex: '9999',
              boxShadow: '0px 4px 4px rgba(0,0,0,.4)',
              visibility: '' + (this.state.isVisible ? 'visible' : 'hidden'),
              opacity: '' + (this.state.isVisible ? '1' : '0')
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          },
          console.log(px, px - s / 2, this.state.isStatic)
        )
      );
    }
  }]);

  return ImageZoom;
}(React.Component);

//getSposition returns calculated position of Square-clipper
//if dx,dy<0 or dx<w-s , dy<h-s , the clipper is going outside the boundrary which is prevented via setting isStatic to true

export default ImageZoom;
function getSposition(dx, dy, w, h, s, Ox, Oy, px, py, cEx, cEy) {
  var sLeft = Ox,
      sTop = Oy;
  if (dx < 0) {
    sLeft = Ox;
    if (dy < 0) {
      sTop = Oy;
    }
    if (dy > 0) {
      sTop = py - s / 2;
    }
    if (dy > h - s) {
      sTop = Oy + h - s;
    }
  }
  if (dx > 0) {
    sLeft = px - s / 2;
    if (dy < 0) {
      sTop = Oy;
    }
    if (dy > 0) {
      sTop = py - s / 2;
    }
    if (dy > h - s) {
      sTop = Oy + h - s;
    }
  }
  if (dx > w - s) {
    sLeft = Ox + w - s;

    if (dy < 0) {
      sTop = Oy;
    }
    if (dy > 0) {
      sTop = py - s / 2;
    }
    if (dy > h - s) {
      sTop = Oy + h - s;
    }
  }

  //errors on clipper position are eliminated finally.
  return { sLeft: sLeft - (cEx - s / 2), sTop: sTop - (cEy - s / 2) };
}