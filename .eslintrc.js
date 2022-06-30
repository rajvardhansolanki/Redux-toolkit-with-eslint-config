module.exports = {
  "extends": [
    "react-app",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "react",
    "import",
    "jsx-a11y"
  ],
  "rules": {
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
    "quotes": ["error", "double"]
  },
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src/"
        ]
      }
    }
  }
}

