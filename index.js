module.exports = function (babel) {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
    visitor: {
      JSXText(path) {
        if (!(
          path
          && path.parent
          && path.parent.openingElement
          && path.parent.openingElement.attributes
        )) return
        path.parent.openingElement.attributes = [
          	t.JSXAttribute(t.JSXIdentifier('accessible')),
          	t.JSXAttribute(t.JSXIdentifier('name'), t.StringLiteral(path.node.value)),
          	t.JSXAttribute(t.JSXIdentifier('content-desc'), t.StringLiteral(path.node.value)),
          	t.JSXAttribute(t.JSXIdentifier('testID'), t.StringLiteral(path.node.value)),
          	t.JSXAttribute(t.JSXIdentifier('accessibilityLabel'), t.StringLiteral(path.node.value)),
          	...(path.parent.openingElement.attributes || [])
        ]
      }
    }
  };
}
