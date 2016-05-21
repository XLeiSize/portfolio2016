module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  "globals": {
    "__DEV__": true,
    "__PROD__": true,
    "THREE": true,
    "React": true,
    "Vue": true,
    "TimelineLite": false,
    "TimelineMax": false,
    "TweenLite": false,
    "TweenMax": false,
    "Back": false,
    "Bounce": false,
    "Circ": false,
    "Cubic": false,
    "Ease": false,
    "EaseLookup": false,
    "Elastic": false,
    "Expo": false,
    "Linear": false,
    "Power0": false,
    "Power1": false,
    "Power2": false,
    "Power3": false,
    "Power3": false,
    "Power4": false,
    "Quad": false,
    "Quart": false,
    "Quint": false,
    "RoughEase": false,
    "Sine": false,
    "SlowMo": false,
    "SteppedEase": false,
    "Strong": false,
    "Draggable": false,
    "SplitText": false,
    "VelocityTracker": false,
    "CSSPlugin": false,
    "ThrowPropsPlugin": false,
    "BezierPlugin": false
  }
}
