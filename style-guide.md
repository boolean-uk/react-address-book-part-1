# Address book - Style guide

For this project I will be using the BEM convention for the CSS-styling.
The CSS classes will mainly be standalone components that can be applied
to any given element. These standalone components will also be prefixed with "ab" -
short for "Address Book".

## Examples

```css
.ab-menu {
  ...;
}
.ab-menu__item {
  ...;
}
.ab-input {
  ...;
}
.ab-label {
  ...;
}
.ab-btn {
  ...;
}
.ab-form {
  ...;
}

/* To position the .ab-btn inside the form */
.ab-form > .ab-btn {
  ...;
}

/* Same for this one... */
.ab-form > .ab-input {
  ...;
}
```
