module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "modules": false,
        "targets": {
          "browsers": "> 1%"
        },
        "forceAllTransforms": true
      }
    ],
    "@babel/react"
  ],
  "plugins": [
    "@babel/syntax-dynamic-import",
    "@babel/proposal-object-rest-spread",
    [
      "@babel/proposal-class-properties",
      {
        "spec": true
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/env",
        "@babel/react"
      ]
    }
  }
}