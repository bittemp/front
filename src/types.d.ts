declare namespace SolidJS {
  export type Accessor<T> = import('solid-js').Accessor<T>
  export type Component<T> = import('solid-js').Component<T>
  export type DeepReadonly<T> = import('solid-js/store').DeepReadonly<T>
  export type ParentProps = import('solid-js').ParentProps

  export type JSXElement = import('solid-js').JSXElement
  export type JSXEventHandlerUnion<T, K> =
    import('solid-js').JSX.EventHandlerUnion<T, K>
  export type JSXCSSProperties = import('solid-js').JSX.CSSProperties
  export type JSXButtonHTMLAttributes =
    import('solid-js').JSX.ButtonHTMLAttributes<HTMLButtonElement>
  export type JSXInputHTMLAttributes =
    import('solid-js').JSX.InputHTMLAttributes<HTMLInputElement>
  export type JSXSelectHTMLAttributes =
    import('solid-js').JSX.SelectHTMLAttributes<HTMLSelectElement>
  export type JSXDetailsHTMLAttributes =
    import('solid-js').JSX.DetailsHtmlAttributes<HTMLDetailsElement>
  export type JSXDialogHTMLAttributes =
    import('solid-js').JSX.DialogHtmlAttributes<HTMLDialogElement>
}

declare namespace SolidAppRouter {
  export type LinkProps = import('solid-app-router').LinkProps
  export type RouteDefinition = import('solid-app-router').RouteDefinition
}
